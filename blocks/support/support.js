/**
 * support - IF-Hub support band (gated prototype section cp-support): image | heading + CTA
 *
 * Authoring rows: one row per item, classified by content (never by position):
 *   an image cell (optional), then heading + text + CTA paragraph(s).
 *   CTA style comes from the authored mark: <strong> primary, <em> secondary.
 */
function div(className) {
  const el = document.createElement('div');
  el.className = className;
  return el;
}

function isEmpty(node) {
  if (node.nodeType === Node.TEXT_NODE) return !node.textContent.trim();
  if (node.nodeType !== Node.ELEMENT_NODE) return true;
  return !node.textContent.trim() && !node.querySelector('picture, img, iframe, video');
}

// MOVE every authored node (text, headings, CTAs, leftovers) into the target, in order (EW1).
function moveContent(from, to) {
  [...from.childNodes].forEach((n) => {
    if (!isEmpty(n)) to.append(n);
  });
}

function reveal(els) {
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-revealed'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-revealed');
        io.unobserve(e.target);
      }
    });
  });
  els.forEach((el) => {
    el.classList.add('hub-reveal');
    io.observe(el);
  });
}

export default function decorate(block) {
  if (block.querySelector(':scope > .support-grid')) return;
  const grid = div('support-grid');
  const cols = [];
  [...block.children].forEach((row) => {
    const col = div('support-col');
    const media = row.querySelector('picture, img');
    if (media) {
      const box = div('support-image');
      box.append(media.closest('picture') || media);
      col.append(box);
    }
    const text = div('support-text');
    [...row.children].forEach((cell) => moveContent(cell, text));
    if (text.childNodes.length) col.append(text);

    grid.append(col);
    cols.push(col);
  });
  block.replaceChildren(grid);
  reveal(cols);
}
