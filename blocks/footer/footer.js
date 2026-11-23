import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/*
 * IF-Hub footer - template-slotted from the gated prototype (d-8fjlj4fun12p).
 * /footer sections: 1 link list (<ul>) + copyright paragraph,
 * 2 (optional) the login shortcut link, rendered as the fixed red lock button
 * at the bottom left, as on the source hub pages.
 */

const LOCK_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">'
  + '<path fill="currentColor" fill-rule="evenodd" d="M15 7v1H9V7a3 3 0 116 0M7.5 8V7a4.5 '
  + '4.5 0 019 0v1h.5a3 3 0 013 3v7a3 3 0 01-3 3H7a3 3 0 01-3-3v-7a3 3 0 013-3zm9 1.5H7A1.5 '
  + '1.5 0 005.5 11v7A1.5 1.5 0 007 19.5h10a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0017 9.5zm-3.772 '
  + '5.851a1.5 1.5 0 10-1.424.018.8.8 0 00-.035.228v.807a.75.75 0 001.5 0v-.807a.8.8 0 '
  + '00-.041-.246" clip-rule="evenodd"/></svg>';

function el(tag, className) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  return e;
}

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);
  if (!fragment) return;
  const [mainSec, loginSec] = [...fragment.querySelectorAll(':scope > .section')];

  const root = el('div', 'hub-footer');
  const inner = el('div', 'hub-footer-inner');

  const list = mainSec?.querySelector('ul');
  if (list) {
    list.classList.add('hub-footer-links');
    list.querySelectorAll('a[href]').forEach((a) => {
      const external = new URL(a.href, window.location).origin !== window.location.origin;
      if (external) {
        a.target = '_blank';
        a.rel = 'noopener';
      }
    });
    inner.append(list);
  }
  // every paragraph outside the list is the copyright line (moved, never rebuilt)
  mainSec?.querySelectorAll('p').forEach((p) => {
    if (p.closest('ul')) return;
    p.classList.add('hub-footer-copyright');
    inner.append(p);
  });
  root.append(inner);

  const login = loginSec?.querySelector('a[href]');
  if (login) {
    const p = login.closest('p');
    login.className = 'hub-login';
    login.setAttribute('aria-label', login.textContent.trim());
    login.insertAdjacentHTML('afterbegin', LOCK_SVG);
    if (p) {
      p.classList.add('hub-login-wrapper');
      root.append(p);
    } else {
      root.append(login);
    }
  }

  block.textContent = '';
  block.append(root);
}
