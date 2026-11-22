/**
 * hub-embed - IF-Hub embedded media player (gated prototype row cp-embed): an iframe
 * built from the authored link; the link text becomes the iframe title.
 *
 * Authoring: one cell with a link to the player URL.
 * @ew-exempt link label - used as the iframe title (the authored paragraph stays, hidden)
 */
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
  if (block.querySelector(':scope > .hub-embed-frame-box')) return;
  const link = block.querySelector('a[href]');
  if (!link) return;
  const box = document.createElement('div');
  box.className = 'hub-embed-frame-box';
  const frame = document.createElement('iframe');
  frame.className = 'hub-embed-frame';
  frame.src = link.href;
  frame.title = link.textContent.trim() || 'Embedded content';
  frame.setAttribute('aria-label', frame.title);
  frame.loading = 'lazy';
  frame.allowFullscreen = true;
  box.append(frame);
  const source = document.createElement('div');
  source.className = 'hub-embed-source';
  source.append(link.closest('p') || link);
  block.replaceChildren(box, source);
  reveal([box]);
}
