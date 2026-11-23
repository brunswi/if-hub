/**
 * Hub "Terms and conditions" dialog, shown on every page with the "hub" template.
 *
 * The copy is authored in a fragment (TERMS_PATH):
 *   - the first heading is the dialog title
 *   - everything else is the dialog body (an h3 renders as the lead line)
 * No fragment (or an empty one): no dialog.
 *
 * Accept is remembered in localStorage; Decline closes the dialog for this view only.
 * The controls keep the source ids (data-test-id="save-selection-button" / "decline-button")
 * so the fidelity gates dismiss it on both sides with the same --consent selector.
 */
// eslint-disable-next-line import/no-cycle
import { loadFragment } from '../blocks/fragment/fragment.js';

const TERMS_PATH = '/fragments/terms-and-conditions';
const STORAGE_KEY = 'hub-terms-accepted';

const INFO_ICON = '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M12 3.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-1.75a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0v-5a.75.75 0 01.75-.75M12 9a1 1 0 100-2 1 1 0 000 2" clip-rule="evenodd"/></svg>';
const CHECK_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M20.03 5.97a.75.75 0 010 1.06l-11 11a.75.75 0 01-1.06 0l-5-5a.75.75 0 111.06-1.06L8.5 16.44 18.97 5.97a.75.75 0 011.06 0" clip-rule="evenodd"/></svg>';

function accepted() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1';
  } catch (e) {
    return false;
  }
}

/**
 * Builds the dialog from the fragment content.
 * @param {HTMLElement} fragment the loaded fragment (main element)
 * @returns {HTMLElement|null} the dialog, or null when the fragment has no content
 */
function buildDialog(fragment) {
  const titleEl = fragment.querySelector('h1, h2');
  const title = titleEl ? titleEl.textContent.trim() : 'Terms and conditions';
  if (titleEl) titleEl.remove();
  const body = [...fragment.querySelectorAll('.default-content-wrapper > *, .block')]
    .filter((el) => !el.parentElement.closest('.block'));
  if (!body.length && !titleEl) return null;

  const dialog = document.createElement('div');
  dialog.className = 'hub-terms';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-labelledby', 'hub-terms-heading');
  dialog.dataset.testId = 'terms-and-conditions-content';
  dialog.tabIndex = -1;
  dialog.innerHTML = `
<div class="hub-terms-side"><div></div></div>
<div class="hub-terms-head"><div class="hub-terms-title">${INFO_ICON}<h2 id="hub-terms-heading"></h2></div></div>
<div class="hub-terms-body"><div class="hub-terms-scroll"></div></div>
<div class="hub-terms-foot"><div class="hub-terms-actions">
<button type="button" class="hub-terms-decline" data-test-id="decline-button">Decline</button>
<button type="button" class="hub-terms-accept" data-test-id="save-selection-button">${CHECK_ICON}Accept</button>
</div></div>`;
  dialog.querySelector('#hub-terms-heading').textContent = title;
  dialog.querySelector('.hub-terms-scroll').append(...body);
  return dialog;
}

/**
 * Shows the dialog once per browser until it is accepted.
 */
export default async function showTermsDialog() {
  if (accepted() || document.querySelector('.hub-terms')) return;
  let fragment;
  try {
    fragment = await loadFragment(TERMS_PATH);
  } catch (e) {
    fragment = null;
  }
  if (!fragment || accepted() || document.querySelector('.hub-terms')) return;
  const dialog = buildDialog(fragment);
  if (!dialog) return;

  const overlay = document.createElement('div');
  overlay.className = 'hub-terms-overlay';
  document.documentElement.classList.add('hub-terms-open');
  document.body.append(overlay, dialog);

  const close = () => {
    overlay.remove();
    dialog.remove();
    document.documentElement.classList.remove('hub-terms-open');
  };
  dialog.querySelector('.hub-terms-accept').addEventListener('click', () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {
      // storage unavailable: accept for this view only
    }
    close();
  });
  dialog.querySelector('.hub-terms-decline').addEventListener('click', close);
  // keep keyboard focus inside the modal
  dialog.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const items = [...dialog.querySelectorAll('a[href], button')];
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
  dialog.focus({ preventScroll: true });
}
