# EDS conversion log — if-hub.de

## Publish decision (2026-11-21)

Decision made by the run owner before the run: **publish**. Every delivered page, the redirects sheet and the chrome documents (nav, footer and their locale variants) go live on the aem.live origin (deploy-batch.mjs without --no-publish, or POST https://admin.hlx.page/live/…).

## Archetype d-8fjlj4fun12p (template landing / hub) — C-archetype unit (2026-11-21)

- DA path `/d/8fjlj4fun12p` (content/d/8fjlj4fun12p.html), metadata `Title | Start - IF-Hub`, `Description` verbatim from the source, `Template | hub`. PUT → preview → live via deploy-batch (ledger stardust/deploy/ledger-archetype-hub.json).
- Blocks (decode tier): `hub-hero` template-slotted (bg image | h1 + lede | video link → `<video autoplay muted loop playsinline>` + the source player controls); `tiles`, `hub-cards` (stock `cards` exists → renamed), `services` (two instances, one per source row so the 768–991 wrap matches), `support` reconstructive (rows classified by content, leftovers moved); `hub-embed` (extra, small): the podcast iframe built from an authored link (DA cannot author iframes).
- Default content: intro paragraph (tiles section), the two feature rows (section styles `feature, rule-before-spaced, rule-after` / `feature, rule-after-spaced` — the source `<hr>` dividers are section pseudo-elements, never `<hr>` in DA), the "Oft gesucht" / "Weitere Services" headings (styled from their block's `-container`). The empty aria-hidden `<h2><br></h2>` spacer above "Weitere Services" is a 36.4px padding, not content.
- Headline: the source greeting is an `<h3>`; authored as the page's single `<h1>` (delivery-lint P0 without one), styled identically (54px Sparkasse Regular). Gate content-diff raised no heading-level finding.
- Dropped by brief: the hidden Frontify editor leftovers ("Welcome to your cover page", "Title / Your text here… / Call To Action", add-image icons) — the 5 content-diff 🔴 MISSING rows per width are exactly these.
- Links: Frontify pages outside the 2-page scope (`/r/…`, `/document/…`) authored absolute to https://if-hub.de/…; localize-links NOT run with `--source-host if-hub.de` (it would root-relativise them). Non-IF-Hub service CTAs open in a new tab (services block, as the source).
- Media: 5 images + the hero mp4 via da-media-upload `--scope hub` (mp4 served root-relative `/media/hub/nt4cqvwes46oaw5bkknc.mp4`, 206 on preview).
- Runtime (restoreAtDelivery/motion): video autoplay muted loop playsinline verified playing on preview (1440) and live (360); column reveal (IntersectionObserver, 22/22 revealed after scroll); button hovers per source timings; Frontify "Terms and conditions" dialog rebuilt in hub-hero.js with the captured copy (live probe 2026-11-21, white-on-white body text kept), accept `data-test-id="save-selection-button"` → localStorage `hub-terms-accepted`, gone after reload; Decline closes for the view only (source decline behaviour not captured).
- davids-model-lint 🟡 D1 ×4 (hub-hero, hub-embed, services ×2 "prose-only") justified: hub-hero is a fixed composition with video + player, hub-embed builds an iframe, services is a 3-up CTA grid with its own button look and link targets.
- Local structural asserts: block-roundtrip --ew exit 0 (0 structural 🔴); qa-gate FAIL rows are harness/false positives — header logo 401 from content.da.live on the harness, schema-order unit mapping (schema counts the dropped editor leftovers), 370px content cap (that is the auth template's cap; hub is fluid, register R-02).
- Published gate (preview): gate-all 1440 2.84 % / 360 4.37 % (prototype 2.84 / 4.36), clip 0, content MISSING 0 / HIDDEN 0; height criterion waived in gates/all-<w>/overrides.json — inner scroller on the source (live document reports 900px; footer box at the same y on both sides). Header crop 0.69 % @1440, 3.00 % @360 (foundation burger glyph, same as prototype residual); footer element crops 0.73 % / 1.48 %. Chrome parity and header contract deltas are foundation (header/footer) → stardust/rollout/foundation-requests.md.

## Header contract residuals for the owner (2026-11-21)

Compared on the preview origin (shipped code; the runner's edge copy of aem.live CSS was stale at check time): 6 errors, 0 warnings, down from 17/14.
- IF-Wissen drawer submenu (13 items) is not in the nav document — adding it is a content decision.
- Search typeahead suggestions come from the source's Frontify search API behind SSO (host-bound); the build searches /query-index.json.
- Open-state crop comparison (3): panels follow the measured source geometry; the instrument crops the input only on the build.
