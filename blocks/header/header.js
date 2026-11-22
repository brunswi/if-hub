import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/*
 * IF-Hub header - template-slotted from the gated prototype (d-8fjlj4fun12p).
 * /nav sections: 1 brand (linked logo image), 2 nav list (<ul> of links),
 * 3 tools (one paragraph: the search placeholder text).
 * Below 768px the inline nav is hidden and a burger opens a red full-screen drawer.
 * The search control opens an overlay searching /query-index.json (dynamics row 8).
 * @ew-exempt the search placeholder is read into an input attribute (chrome UI text).
 */

/* glyphs harvested verbatim from the source header (if-hub.de, 1440 + 390 captures) */
let clipSeq = 0;
function searchSvg() {
  clipSeq += 1;
  const id = `hub-search-clip-${clipSeq}`;
  return '<svg width="24" height="24" viewBox="0 0 21 21" fill="none" aria-hidden="true">'
    + `<g clip-path="url(#${id})"><path d="M14.6886 14.463L19.5114 19.2795L17.975 20.818L13.035 `
    + '15.8845C11.7622 16.7116 10.2429 17.1916 8.61216 17.1916C4.12216 17.1916 0.481445 13.5516 '
    + '0.481445 9.06089C0.481445 4.57018 4.12145 0.930176 8.61216 0.930176C13.1022 0.930176 '
    + '16.7429 4.57018 16.7429 9.06089C16.7429 11.1345 15.9664 13.0266 14.6886 14.463ZM8.61287 '
    + '15.0737C11.9336 15.0737 14.6257 12.3816 14.6257 9.06089C14.6257 5.74018 11.9336 3.04803 '
    + '8.61287 3.04803C5.29216 3.04803 2.60002 5.74018 2.60002 9.06089C2.60002 12.3816 5.29216 '
    + '15.0737 8.61287 15.0737Z" fill="currentColor"/></g>'
    + `<defs><clipPath id="${id}"><rect width="19.2857" height="20" fill="white" `
    + 'transform="translate(0.482422 0.930176)"/></clipPath></defs></svg>';
}
const LINE_ICON = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" '
  + 'stroke="currentColor" stroke-width="0.1" stroke-linecap="round" stroke-linejoin="round" '
  + 'aria-hidden="true">';
const BURGER_SVG = `${LINE_ICON}<path fill="currentColor" fill-rule="evenodd" `
  + 'd="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75M2.998 12a.75.75 '
  + '0 01.75-.75h16.5a.75.75 0 010 1.5h-16.5a.75.75 0 01-.75-.75m.752 4.5a.75.75 0 000 '
  + '1.5h16.5a.75.75 0 000-1.5z" clip-rule="evenodd"/></svg>';
const CLOSE_SVG = `${LINE_ICON}<path fill="currentColor" `
  + 'd="M17.964 4.764a.9.9 0 0 1 1.273 1.273L13.273 12l5.964 '
  + '5.964a.9.9 0 0 1-1.273 1.273L12 13.273l-5.964 5.964a.9.9 0 0 1-1.273-1.273L10.727 '
  + '12 4.763 6.037a.9.9 0 0 1 1.273-1.273L12 10.727z"/></svg>';
/* the search field's own magnifier (source spotlight dialog) */
const MAGNIFIER_SVG = `${LINE_ICON}<path fill="currentColor" fill-rule="evenodd" `
  + 'd="M18.5 11a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0m-1.688 6.872a9 9 0 111.06-1.06l2.898 '
  + '2.898a.75.75 0 11-1.06 1.06z" clip-rule="evenodd"/></svg>';
/* drawer row chevron (source accordion trigger, pointing down) */
const CHEVRON_SVG = '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">'
  + '<path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 '
  + '6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 '
  + '11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 '
  + '6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" '
  + 'fill-rule="evenodd" clip-rule="evenodd"/></svg>';

const isDesktop = window.matchMedia('(width >= 768px)');

function el(tag, className, attrs = {}) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
  return e;
}

/** EW4: presentational clones must not carry the editor's instrumentation */
function stripInstrumentation(root) {
  [root, ...root.querySelectorAll('*')].forEach((n) => {
    [...n.attributes].forEach((a) => {
      if (a.name.startsWith('data-') && a.name.endsWith('-index')) n.removeAttribute(a.name);
    });
  });
  return root;
}

function lockScroll(on) {
  document.documentElement.style.overflow = on ? 'hidden' : '';
}

/* ---------- search overlay (UI over the query index) ---------- */
let indexPromise;
function loadIndex() {
  if (!indexPromise) {
    indexPromise = fetch('/query-index.json')
      .then((r) => (r.ok ? r.json() : { data: [] }))
      .then((j) => (Array.isArray(j.data) ? j.data : []))
      .catch(() => []);
  }
  return indexPromise;
}

function focusables(root) {
  return [...root.querySelectorAll('a[href], button, input')]
    .filter((e) => !e.disabled && e.getClientRects().length);
}

/** keeps Tab inside an open modal panel (the source's spotlight dialog does the same) */
function trapTab(e, root) {
  const items = focusables(root);
  if (!items.length) return;
  e.preventDefault();
  const i = items.indexOf(document.activeElement);
  if (i === -1) {
    items[0].focus();
    return;
  }
  const next = (i + (e.shiftKey ? -1 : 1) + items.length) % items.length;
  items[next].focus();
}

function buildSearch(placeholder) {
  const overlay = el('div', 'hub-search', { role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Search' });
  overlay.hidden = true;
  const panel = el('div', 'hub-search-panel');
  const form = el('form', 'hub-search-form', { role: 'search' });
  const icon = el('span', 'hub-search-icon');
  icon.innerHTML = MAGNIFIER_SVG;
  const input = el('input', 'hub-search-input', {
    type: 'text', name: 'q', autocomplete: 'off', placeholder, 'aria-label': placeholder,
  });
  form.append(icon, input);
  const results = el('ul', 'hub-search-results', { 'aria-live': 'polite' });
  panel.append(form, results);
  overlay.append(panel);

  let opener = null;
  const isOpen = () => !overlay.hidden;
  const close = () => {
    if (!isOpen()) return;
    overlay.hidden = true;
    lockScroll(false);
    input.value = '';
    results.textContent = '';
    const back = opener;
    opener = null;
    back?.focus();
  };
  const render = async () => {
    const q = input.value.trim().toLowerCase();
    results.textContent = '';
    if (q.length < 2) return;
    const rows = await loadIndex();
    const hits = rows.filter((r) => `${r.title || ''} ${r.description || ''}`
      .toLowerCase().includes(q)).slice(0, 10);
    if (!hits.length) {
      const li = el('li', 'hub-search-empty');
      li.textContent = 'No results';
      results.append(li);
      return;
    }
    hits.forEach((r) => {
      const li = el('li');
      const a = el('a', null, { href: r.path });
      a.textContent = r.title || r.path;
      li.append(a);
      results.append(li);
    });
  };
  input.addEventListener('input', render);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    render();
  });
  // the dimmed backdrop covers the trigger: a click there (or anywhere outside) closes
  overlay.addEventListener('click', (e) => {
    if (!panel.contains(e.target)) close();
  });
  const open = (trigger) => {
    opener = trigger || null;
    overlay.hidden = false;
    lockScroll(true);
    input.focus();
  };
  const onKey = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'Tab') {
      trapTab(e, panel);
    }
  };
  return {
    overlay, open, close, isOpen, onKey,
  };
}

/** a hidden label names an icon button, as on the source (aria-labelledby) */
function labelled(button, id, text) {
  const label = el('span', null, { id });
  label.hidden = true;
  label.textContent = text;
  button.setAttribute('aria-labelledby', id);
  button.append(label);
}

/**
 * loads and decorates the header
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);
  if (!fragment) return;
  const sections = [...fragment.querySelectorAll(':scope > .section')];
  const [brandSec, navSec, toolsSec] = sections;

  const root = el('div', 'hub-header');
  const bar = el('div', 'hub-header-bar');

  // 1. brand: the authored logo link (or picture + link) moves into the brand slot
  const brand = el('div', 'hub-header-brand');
  if (brandSec) {
    const link = brandSec.querySelector('a[href]');
    const pic = brandSec.querySelector('picture') || brandSec.querySelector('img');
    if (link) {
      link.classList.add('hub-header-logo');
      if (pic && !link.contains(pic)) link.replaceChildren(pic);
      brand.append(link);
    } else if (pic) {
      brand.append(pic);
    }
    const img = brand.querySelector('img');
    if (img) {
      img.loading = 'eager';
      if (link && !img.alt) img.alt = link.textContent.trim();
    }
    // the link is named by the logo's alt alone ("Go to IF-Hub", as on the source):
    // drop the delivered markup's whitespace-only text nodes around the picture
    if (link) {
      link.removeAttribute('title'); // decorateButtons' copy of the blank link text
      const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
      const blanks = [];
      while (walker.nextNode()) {
        if (!walker.currentNode.textContent.trim()) blanks.push(walker.currentNode);
      }
      blanks.forEach((n) => n.remove());
    }
  }

  // 2. nav: the authored list moves into the nav slot (delivered <li><p><a> unwrapped);
  //    the label sits in a <span> inside the link, as on the source
  const nav = el('nav', 'hub-nav', { 'aria-label': 'Main' });
  const list = navSec?.querySelector('ul');
  const links = [];
  if (list) {
    list.classList.add('hub-nav-list');
    list.querySelectorAll(':scope > li').forEach((li) => {
      const p = li.querySelector(':scope > p');
      const a = li.querySelector(':scope > a, :scope > p > a');
      if (p && a) p.replaceWith(a);
      if (!a) return;
      if (a.title === a.textContent) a.removeAttribute('title'); // not authored (decorateButtons)
      links.push(a.cloneNode(true));
      if (!a.querySelector(':scope > span')) {
        const span = el('span');
        span.append(...a.childNodes);
        a.append(span);
      }
    });
    nav.append(list);
  }

  // 3. tools: search control (desktop + mobile) and the burger (mobile)
  const placeholder = toolsSec?.textContent.trim() || 'Search guidelines, images, and videos';
  const search = buildSearch(placeholder);
  const tools = el('div', 'hub-header-tools');
  const searchBtn = el('button', 'hub-header-search', { type: 'button' });
  searchBtn.innerHTML = searchSvg();
  labelled(searchBtn, 'hub-search-label', 'Search');
  searchBtn.addEventListener('click', () => search.open(searchBtn));

  const menu = el('div', 'hub-header-menu', { 'aria-label': 'Navigation Menu' });
  const burger = el('button', 'hub-header-burger', {
    type: 'button', 'aria-label': 'Open navigation', 'aria-expanded': 'false',
  });
  burger.innerHTML = BURGER_SVG;

  const drawer = el('div', 'hub-drawer', { role: 'dialog', 'aria-label': 'Navigation Menu' });
  const drawerBar = el('div', 'hub-drawer-bar');
  const drawerSearchWrap = el('div', 'hub-drawer-search-wrap');
  const drawerSearch = el('button', 'hub-drawer-search', { type: 'button' });
  drawerSearch.innerHTML = searchSvg();
  labelled(drawerSearch, 'hub-drawer-search-label', 'Search');
  drawerSearchWrap.append(drawerSearch);
  const drawerClose = el('button', 'hub-drawer-close', {
    type: 'button', 'aria-label': 'Close navigation',
  });
  drawerClose.innerHTML = CLOSE_SVG;
  drawerBar.append(drawerSearchWrap, drawerClose);
  const drawerBody = el('div', 'hub-drawer-body');
  const drawerNav = el('nav', 'hub-drawer-nav', { 'aria-label': 'Document' });
  const drawerList = el('ul');
  links.forEach((a) => {
    const li = el('li');
    const item = stripInstrumentation(a);
    item.className = 'hub-drawer-item';
    const label = el('p', null, { title: a.textContent.trim() });
    label.append(...item.childNodes);
    const chevron = el('span', 'hub-drawer-chevron', { 'aria-hidden': 'true' });
    chevron.innerHTML = CHEVRON_SVG;
    item.append(label, chevron);
    li.append(item);
    drawerList.append(li);
  });
  drawerNav.append(drawerList);
  drawerBody.append(drawerNav);
  drawer.append(drawerBar, drawerBody);
  menu.append(burger);

  const isDrawerOpen = () => drawer.classList.contains('is-open');
  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  };
  burger.addEventListener('click', () => {
    if (isDrawerOpen()) {
      closeDrawer();
      return;
    }
    drawer.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    drawerClose.focus();
  });
  drawerClose.addEventListener('click', () => {
    closeDrawer();
    burger.focus();
  });
  // the drawer stays open under the search dialog (source behaviour)
  drawerSearch.addEventListener('click', () => search.open(drawerSearch));
  document.addEventListener('keydown', (e) => {
    if (search.isOpen()) {
      search.onKey(e);
      return;
    }
    if (e.key === 'Escape' && isDrawerOpen()) {
      e.preventDefault();
      closeDrawer();
      burger.focus();
    }
  });
  isDesktop.addEventListener('change', closeDrawer);

  tools.append(searchBtn, menu);
  bar.append(brand, nav, tools);
  root.append(bar, drawer, search.overlay);

  block.textContent = '';
  block.append(root);
}
