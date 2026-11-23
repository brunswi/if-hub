/**
 * hub-hero — IF-Hub cover hero: greeting over a background image | looping video (4:3 each).
 *
 * Authoring rows (classified by content, any order):
 *   - an image: the greeting background
 *   - the headline (h1) and the lede paragraph
 *   - a paragraph with a link to the mp4 (root-relative /media/... path)
 *
 * @ew-exempt video link — the authored link paragraph stays in the block (hidden); its href
 *   feeds the <video>, the player controls are presentational
 *
 * Hub template runtime hosted here (the block opens every hub page, loads eagerly):
 *   - column reveal for the default-content sections (opacity fade on entering the viewport)
 * The "Terms and conditions" dialog lives in /scripts/hub-terms.js (loaded for the hub template).
 */

// ---- player chrome ----
/**
 * hub-hero player chrome — the source player's own controls (play/pause, +/-5 s, time,
 * playback speed, mute/volume, fullscreen). Presentational: no authored text.
 */
const CONTROLS = `
<div class="video-shade" aria-hidden="true"></div>
<div class="video-controls">
<div class="video-progress"><div class="video-played" data-video-played></div></div>
<div class="video-actions">
<div class="video-group">
<button class="video-btn" type="button" aria-label="Play/Pause" aria-pressed="true" data-video-play><svg class="video-icon-play" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M7.5 5.6v12.8L18 12zM6 5.1a1.2 1.2 0 011.8-1l11.3 6.9a1.2 1.2 0 010 2L7.8 19.9A1.2 1.2 0 016 18.9z" clip-rule="evenodd"/></svg><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M6 4.5h3a.5.5 0 01.5.5v14a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5M4 5a2 2 0 012-2h3a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2zm11-.5h3a.5.5 0 01.5.5v14a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5M13 5a2 2 0 012-2h3a2 2 0 012 2v14a2 2 0 01-2 2h-3a2 2 0 01-2-2z" clip-rule="evenodd"/></svg></button>
<button class="video-btn" type="button" aria-label="Step back 5 seconds" data-video-skip="-5"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M14.407 4.16a.75.75 0 011.06 1.061L13.688 7h3.562A3.75 3.75 0 0121 10.75v5.5A3.75 3.75 0 0117.25 20H13a.75.75 0 110-1.5h4.250a2.25 2.25 0 002.25-2.25v-5.5a2.25 2.25 0 00-2.25-2.25h-3.562l1.78 1.779a.75.75 0 01-1.061 1.06l-3.06-3.059a.75.75 0 010-1.06zM5.553 14.487a1.42 1.42 0 001.413-1.419c.006-.857-.543-1.407-1.053-1.407a2.86 2.86 0 00-1.287.281 2 2 0 00-.348.223l-.006.005A.75.75 0 013 11.631V7.288h3.995a.75.75 0 010 1.5H4.5v1.589a4.5 4.5 0 011.413-.217c1.653 0 2.563 1.577 2.553 2.919a2.920 2.920 0 01-2.913 2.907 3.4 3.4 0 01-1.680-.46 3.6 3.6 0 01-.632-.46l-.013-.012-.005-.005-.002-.002v-.001l.529-.53-.53.53a.75.75 0 011.056-1.066l.01.01.062.052c.06.048.152.115.27.183.24.136.562.261.935.261" clip-rule="evenodd"/></svg></button>
<button class="video-btn" type="button" aria-label="Step forward 5 seconds" data-video-skip="5"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M9.593 4.16a.75.75 0 10-1.06 1.061L10.312 7H6.75A3.75 3.75 0 003 10.75v5.5A3.75 3.75 0 006.75 20H11a.75.75 0 100-1.5H6.75a2.25 2.25 0 01-2.25-2.25v-5.5A2.25 2.25 0 016.75 8.5h3.562l-1.78 1.779a.75.75 0 001.061 1.06l3.06-3.059a.75.75 0 000-1.06zm8.494 10.326a1.42 1.42 0 001.413-1.419c.006-.857-.543-1.407-1.053-1.407a2.86 2.86 0 00-1.287.281 2 2 0 00-.348.223l-.005.005a.75.75 0 01-1.273-.538V7.288h3.995a.75.75 0 010 1.5h-2.495v1.589a4.5 4.5 0 011.413-.217c1.654 0 2.563 1.577 2.553 2.919a2.92 2.92 0 01-2.913 2.907 3.4 3.4 0 01-1.680-.46 3.6 3.6 0 01-.632-.46l-.013-.012-.004-.005-.002-.002h-.001v-.001l.53-.53-.531.53a.75.75 0 011.056-1.066l.01.01.062.052c.06.048.152.115.27.183.24.136.562.261.935.261" clip-rule="evenodd"/></svg></button>
<div class="video-time"><span data-video-time>00:00 / 00:00</span></div>
<div class="video-speed">
<a class="video-speed-toggle" href="#" role="button" aria-label="Change playback speed" aria-expanded="false" data-video-speed-toggle><span data-video-speed-label>Normal</span><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M19.78 7.69a.75.75 0 010 1.06L12.53 16l-.53.53-.53-.53-7.25-7.25a.75.75 0 011.06-1.06L12 14.41l6.72-6.72a.75.75 0 011.06 0" clip-rule="evenodd"/></svg></a>
<div class="video-speed-menu" data-video-speed-menu>
<button type="button" aria-label="Slow (0.5x)" data-rate="0.5">Slow (0.5x)</button>
<button type="button" aria-label="Normal" data-rate="1" class="is-active">Normal</button>
<button type="button" aria-label="Fast (1.25x)" data-rate="1.25">Fast (1.25x)</button>
<button type="button" aria-label="Faster (1.5x)" data-rate="1.5">Faster (1.5x)</button>
<button type="button" aria-label="Ludicrous (2x)" data-rate="2">Ludicrous (2x)</button>
</div>
</div>
</div>
<div class="video-group">
<button class="video-btn" type="button" aria-label="Mute" aria-pressed="true" data-video-mute><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M7.286 9.75h.584l.43-.396 3.2-2.939v11.17l-3.2-2.94-.43-.395H5a.5.5 0 01-.5-.5v-3.5a.5.5 0 01.5-.5zM3 10.25a2 2 0 012-2h2.286l4.037-3.71c.642-.589 1.677-.134 1.677.737v13.446c0 .87-1.035 1.326-1.677.737l-4.037-3.71H5a2 2 0 01-2-2zm17.782-1.03a.75.75 0 010 1.06L19.062 12l1.72 1.721a.75.75 0 01-1.06 1.061L18 13.062l-1.72 1.72a.75.75 0 01-1.061-1.06L16.940 12l-1.72-1.72a.75.75 0 111.06-1.061L18 10.94l1.721-1.72a.75.75 0 011.061 0" clip-rule="evenodd"/></svg></button>
<input class="video-volume" type="range" aria-label="volume" min="0" max="1" step="0.05" value="0" data-video-volume>
<button class="video-btn" type="button" aria-label="Fullscreen" data-video-full><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M13 4.25a.75.75 0 000 1.5h4.19l-4.22 4.22a.75.75 0 001.06 1.06l4.22-4.220V11H19h-.75a.75.75 0 001.5 0H19h.75V4.25zm-1.97 8.72a.75.75 0 010 1.06l-4.22 4.22H11a.75.75 0 010 1.5H4.25V13h1.5v4.189l4.220-4.22a.75.75 0 011.06 0M5 13h-.75a.75.75 0 011.5 0z" clip-rule="evenodd"/></svg></button>
</div>
</div>
</div>
`;

const fmt = (t) => {
  const s = Math.max(0, Math.floor(t || 0));
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
};

/**
 * Wraps the video in the player box and wires the controls.
 * @param {HTMLVideoElement} v the hero video
 * @returns {HTMLElement} the player box
 */
function buildPlayer(v) {
  const box = document.createElement('div');
  box.className = 'video-box';
  box.append(v);
  box.insertAdjacentHTML('beforeend', CONTROLS);
  const q = (s) => box.querySelector(s);
  const time = q('[data-video-time]');
  const played = q('[data-video-played]');
  const menu = q('[data-video-speed-menu]');
  const toggle = q('[data-video-speed-toggle]');
  const tick = () => {
    if (!v.duration) return;
    time.textContent = `${fmt(v.currentTime)} / ${fmt(v.duration)}`;
    played.style.width = `${(v.currentTime / v.duration) * 100}%`;
  };
  let idle;
  const wake = () => {
    box.classList.add('is-active');
    clearTimeout(idle);
    idle = setTimeout(() => {
      if (!v.paused) box.classList.remove('is-active');
    }, 2500);
  };
  // the source player keeps its controls up while the video is paused
  v.addEventListener('pause', () => {
    clearTimeout(idle);
    box.classList.add('is-active', 'is-paused');
  });
  v.addEventListener('play', () => {
    box.classList.remove('is-paused');
    wake();
  });
  box.addEventListener('mousemove', wake);
  box.addEventListener('mouseleave', () => {
    if (!v.paused) {
      clearTimeout(idle);
      box.classList.remove('is-active');
    }
  });
  v.addEventListener('timeupdate', tick);
  v.addEventListener('loadedmetadata', tick);
  const play = q('[data-video-play]');
  play.addEventListener('click', () => {
    if (v.paused) v.play();
    else v.pause();
    play.setAttribute('aria-pressed', String(!v.paused));
  });
  box.querySelectorAll('[data-video-skip]').forEach((b) => {
    b.addEventListener('click', () => {
      v.currentTime += Number(b.dataset.videoSkip);
    });
  });
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('[data-rate]').forEach((b) => {
    b.addEventListener('click', () => {
      v.playbackRate = Number(b.dataset.rate);
      menu.querySelectorAll('[data-rate]').forEach((o) => o.classList.toggle('is-active', o === b));
      q('[data-video-speed-label]').textContent = b.textContent;
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
  const vol = q('[data-video-volume]');
  const mute = q('[data-video-mute]');
  mute.addEventListener('click', () => {
    v.muted = !v.muted;
    if (!v.muted && v.volume === 0) v.volume = 1;
    vol.value = v.muted ? 0 : v.volume;
    mute.setAttribute('aria-pressed', String(v.muted));
  });
  vol.addEventListener('input', () => {
    v.volume = Number(vol.value);
    v.muted = v.volume === 0;
    mute.setAttribute('aria-pressed', String(v.muted));
  });
  q('[data-video-full]').addEventListener('click', () => {
    if (box.requestFullscreen) box.requestFullscreen();
  });
  return box;
}

function wrapNode(node, className) {
  const w = document.createElement('div');
  w.className = className;
  w.append(node);
  return w;
}

/**
 * Fades elements in once they enter the viewport (the source cover-page columns).
 * @param {Element[]} els elements to reveal
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

export default async function decorate(block) {
  if (block.querySelector(':scope > .hub-hero-grid')) return;
  const media = block.querySelector('picture, img');
  const heading = block.querySelector('h1, h2, h3');
  const videoLink = block.querySelector('a[href*=".mp4"]');
  const videoPar = videoLink ? (videoLink.closest('p') || videoLink) : null;
  const lede = [...block.querySelectorAll('p')]
    .find((p) => p !== videoPar && !p.querySelector('picture, img'));

  const grid = document.createElement('div');
  grid.className = 'hub-hero-grid';

  const greeting = document.createElement('div');
  greeting.className = 'hub-hero-col hub-hero-greeting';
  if (media) greeting.append(wrapNode(media.closest('picture') || media, 'hub-hero-bg'));
  const text = document.createElement('div');
  text.className = 'hub-hero-text';
  if (heading) text.append(wrapNode(heading, 'hub-hero-title'));
  if (lede) text.append(wrapNode(lede, 'hub-hero-lede'));
  greeting.append(text);
  grid.append(greeting);

  const mediaCol = document.createElement('div');
  mediaCol.className = 'hub-hero-col hub-hero-media';
  if (videoLink) {
    const v = document.createElement('video');
    v.className = 'hub-hero-video';
    v.muted = true;
    v.defaultMuted = true;
    v.loop = true;
    v.autoplay = true;
    v.playsInline = true;
    ['muted', 'loop', 'autoplay', 'playsinline'].forEach((a) => v.setAttribute(a, ''));
    v.setAttribute('width', '960');
    v.setAttribute('height', '720');
    v.preload = 'auto';
    v.src = videoLink.getAttribute('href');
    mediaCol.append(buildPlayer(v));
    mediaCol.append(wrapNode(videoPar, 'hub-hero-source'));
    const start = () => {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    };
    if (v.readyState >= 2) start();
    else v.addEventListener('canplay', start, { once: true });
  }
  grid.append(mediaCol);
  block.replaceChildren(grid);

  reveal([greeting, mediaCol]);
  const main = block.closest('main');
  if (main) reveal([...main.querySelectorAll('.section > .default-content-wrapper')]);
}
