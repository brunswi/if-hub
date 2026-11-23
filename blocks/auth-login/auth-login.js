/*
 * auth-login - the IF-Hub sign-in screen (template "auth", page /), template-slotted
 * from the gated prototype index-proposed (.o-auth).
 * Rows are classified by content, never by position:
 *   - a picture-only row: the first is the logo, a later one is the background photo;
 *   - the row with a heading: the greeting;
 *   - the first row with a link: the sign-in row (plain paragraphs before the link;
 *     with two or more, the first is the visually hidden "Log in" label), its link is
 *     the SSO call to action;
 *   - a later row with a link: the disclaimer ("Zugang beantragen", opens in a new tab);
 *   - a row of plain paragraphs: the e-mail login texts, kept hidden like the source.
 * Authored nodes are moved into empty slot containers (EW1); the two empty toggle
 * buttons are presentational and carry no authored text.
 */

function el(tag, className, attrs = {}) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
  return e;
}

/** a presentational empty toggle (the source's empty e-mail / password-lost buttons) */
function emptyButton() {
  const b = el('button', 'auth-login-inline-btn', { type: 'button', tabindex: '-1', 'aria-hidden': 'true' });
  b.append('\u200b');
  return b;
}

/**
 * the top-level authored nodes of a row, across its cells; a single-paragraph cell is
 * delivered as bare inline content, so its child nodes are moved into one <p>
 */
function rowNodes(row) {
  return [...row.children].flatMap((cell) => {
    const bare = [...cell.childNodes]
      .some((n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim())
      || [...cell.children].some((c) => c.matches('a, strong, em, span, b, i'));
    if (bare) {
      const p = document.createElement('p');
      p.append(...cell.childNodes);
      cell.append(p);
    }
    return [...cell.children];
  });
}

const FIELDS = [
  { name: 'email', type: 'email' },
  { name: 'password', type: 'password' },
];

/**
 * the hidden e-mail login: a paragraph ending in ':' is a field label and the paragraph
 * after it is that field's placeholder (kept, hidden, beside the input); the rest are the
 * form's messages and its submit label, moved as they are
 */
function fillEmailForm(form, nodes) {
  let field = 0;
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];
    const next = nodes[i + 1];
    if (node.matches('p') && /:\s*$/.test(node.textContent) && next && FIELDS[field]) {
      const { name, type } = FIELDS[field];
      const id = `auth-login-${name}`;
      node.id = `${id}-label`;
      const wrap = el('div', 'auth-login-field');
      const input = el('input', 'auth-login-input', {
        id,
        name,
        type,
        autocomplete: 'off',
        placeholder: next.textContent,
        'aria-labelledby': node.id,
        'aria-required': 'true',
      });
      input.required = true;
      const placeholder = el('div', 'auth-login-placeholder');
      placeholder.hidden = true;
      placeholder.append(next);
      wrap.append(node, input, placeholder);
      form.append(wrap);
      field += 1;
      i += 1;
    } else {
      form.append(node);
    }
  }
}

function classify(row) {
  const hasText = row.textContent.replace(/\u200b/g, '').trim().length > 0;
  if (row.querySelector('h1, h2, h3, h4, h5, h6')) return 'greeting';
  if (row.querySelector('a[href]')) return 'link';
  if (row.querySelector('picture, img') && !hasText) return 'media';
  if (hasText) return 'texts';
  return 'empty';
}

export default function decorate(block) {
  // EW9: decorate() is re-entrant
  if (block.querySelector(':scope > .auth-login-box')) return;

  const bg = el('div', 'auth-login-bg');
  const box = el('div', 'auth-login-box');
  const content = el('div', 'auth-login-content');
  const logo = el('div', 'auth-login-logo');
  const greeting = el('div', 'auth-login-greeting');
  const form = el('div', 'auth-login-form');
  const label = el('div', 'auth-login-label');
  const title = el('div', 'auth-login-title');
  const sso = el('div', 'auth-login-sso');
  const alt = el('div', 'auth-login-alt');
  const toggle = el('div', 'auth-login-alt-toggle');
  const email = el('form', 'auth-login-email-form', { 'aria-label': 'Log in', action: '#' });
  email.hidden = true;
  const links = el('ul', 'auth-login-links');
  const linkItem = el('li');
  const disclaimer = el('div', 'auth-login-disclaimer');

  let seenLogo = false;
  let seenSignIn = false;
  const rows = [...block.children];
  rows.forEach((row) => {
    const nodes = rowNodes(row);
    const kind = classify(row);
    if (kind === 'media') {
      if (!seenLogo) {
        logo.append(...nodes);
        seenLogo = true;
      } else {
        bg.append(...nodes);
      }
    } else if (kind === 'greeting') {
      greeting.append(...nodes);
    } else if (kind === 'link' && !seenSignIn) {
      seenSignIn = true;
      const ctaIndex = nodes.findIndex((n) => n.matches('a[href]') || n.querySelector('a[href]'));
      const before = nodes.slice(0, ctaIndex);
      if (before.length > 1) label.append(before.shift());
      title.append(...before);
      sso.append(...nodes.slice(ctaIndex));
    } else if (kind === 'link') {
      disclaimer.append(...nodes);
    } else if (kind === 'texts') {
      fillEmailForm(email, nodes);
    }
  });

  disclaimer.querySelectorAll('a[href]').forEach((a) => {
    if (/^https?:/.test(a.getAttribute('href')) && !a.href.startsWith(window.location.origin)) {
      a.target = '_blank';
      a.rel = 'noopener';
    }
  });

  toggle.append(emptyButton());
  linkItem.append(emptyButton());
  links.append(linkItem);
  alt.append(toggle, email, links);
  [label, title, sso].forEach((slot) => {
    if (slot.children.length) form.append(slot);
  });
  form.append(alt);

  content.append(el('div', 'auth-login-filler'));
  [logo, greeting, form, disclaimer].forEach((slot) => {
    if (slot.children.length || slot === form) content.append(slot);
  });
  content.append(el('div', 'auth-login-filler'));
  box.append(content);

  rows.forEach((row) => row.remove());
  if (bg.children.length) block.append(bg);
  block.append(box);
}
