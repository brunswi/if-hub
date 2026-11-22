# Stardust journal — if-hub.de (replica, hands-off)

## Phase 1 — extract (stardust:replica)

- Scope fixed by site-plan: `/` and `/d/8fJLj4FUN12p`. Provenance 2/2 live (Playwright, medium wait 2500 ms, HTTP 200).
- `/` redirects anonymous visitors to `/auth/?referer=%2F` — the IF-Hub login screen. Captured as served (type `form`).
- `/d/8fJLj4FUN12p` first captured behind a Frontify "Terms and conditions" dialog; accepted once (`[data-test-id="save-selection-button"]`, cookie persisted in the shared live jar) and recaptured (type `landing`). Gate captures pass the same selector via `--consent`.
- The hub page scrolls inside an inner container: screenshots are viewport-height (1440×900).
- Hero medium: looping mp4 background video (signature). Fonts: proprietary Sparkasse faces, captured via network intercept into `current/assets/fonts/`.
- Cap probe: hub fluid, login content capped at 370 px (register candidate, archetype-divergent).
- Header contract recorded: stardust/chrome/header-contract.json (1440: search; 390: search + drawer).

## Phase 2 — preserve-direction

- Promoted current/PRODUCT.md, DESIGN.md, DESIGN.json verbatim to the root; direction.md written (preserve mode).
- Register: R-01 proprietary Sparkasse fonts self-hosted (deferred, licence check for owner); R-02 container models differ per template (deferred). No applied delta.
- Dynamics: 48 draft rows → 12 curated rows in stardust/dynamic-features.md; decision batch = access control (SSO), Frontify APIs/runtime, martech. Terms dialog, header menus/drawer, search and hero video rebuilt natively.
- Martech: spec-martech found no CMP and no tag manager; contract empty, all disabled; scripts/martech.js scaffolded.
- Publish decision recorded in stardust/eds-conversion-log.md.

## Phase 3/4 — index (form) archetype

- Gate PASS: 1440 pixel 0.00 % Δh 0 (2 rounds), 360 pixel 0.00 % Δh 0 (1 round); content-diff 0/0; cap-probe PASS (370 px cap); motion: SSO hover darken matched. Content root `.o-auth`. Hidden e-mail form text replicated hidden (content parity). Approved hands-off.

## Phase 3/4 — d-8fjlj4fun12p (landing) archetype

- Gate PASS: 1440 pixel 2.84 % Δh 0; 360 pixel 4.36 % Δh 0 (2 counted rounds each); content-diff 0/0; chrome-parity quiet; header crop 1440 0.69 %, 360 3.00 % (residual: burger icon drawn by approximation — not in the capture).
- Inner scroller: live reports document height 900 and scrolls an inner radix container; gate captures cover the first 900 px on both sides (symmetric scroll model in the prototype); below the fold verified by layout measurement (16 rows Δh 0 at both widths).
- cap-probe @2560 FAIL recorded as residual: probe sees no top-level sections on the live wrappers (reads "fluid") and flags prototype section caps; measured boxes at 2560 identical (Δ0). Revisit on the published origin.
- Motion: hero video autoplay muted loop, hover states, column fade-in, mobile burger drawer. Hidden Frontify editor leftovers kept hidden in the prototype; drop at delivery.
- gate-all prototype table: 2/2 PASS at 1440 and 360.

## recreate / source-fidelity-gate — both archetypes gated and approved (2026-11-21)

See the two archetype sections above; the per-breakpoint numbers are in stardust/replica/progress.json and the prototype tables under stardust/replica/gates/prototypes-{1440,360}/.

## A-inventory — 2 pages, 2 templates, archetypes-only roster (2026-11-21)

- `stardust/migrated/` was absent: rendered both gated archetypes through `migrate.mjs render index d-8fjlj4fun12p` (branch A, fidelityTier archetype; rendered 2, refused 0). No canon existed, so `stardust/canon/canon.css` was auto-bootstrapped as the union of the two prototypes' `:root` blocks (`--hub-*`, `--auth-*`; no collisions). Page status not advanced (still `approved`).
- Sidecar `modules[]` recorded (composite sections only): index → `auth-login`; d-8fjlj4fun12p → `hub-hero`, `tiles`, `cards`, `services`, `support`. Intro text, the centred feature rows and the "Oft gesucht" / services headings are default content.
- `inventory.mjs --site-url https://if-hub.de/ --state stardust/state.json`: 2 pages pending, 2 templates (each its own), 0 content-pending. Paths: `/` (index), `/d/8fJLj4FUN12p` (mixed case — AEM folds to `/d/8fjlj4fun12p`; C-deliver must use the folded DA path).
- rollout.json site: da.org `aemcoder`, da.site `8053f48d`, da.ref `main`, liveHost `main--8053f48d--aemcoder.aem.live` (from run.json previewUrl + git remote).
- migrate reported 16 broken internal links on the hub (Frontify `/r/…` and `/document/…` targets outside the 2-page scope) — E2 repoints them to the source.

## B-block — 6 distinct blocks, each converts once (2026-11-21)

- `blocks.mjs`: 6 module blocks, 0 chrome, 0 widget (no chrome rows because the migrated sidecars carry no canon header/footer — the hub's header + footer are C0 foundation work as `/nav` + `/footer`; the sign-in page `index` has no header or footer on the live site and must render without chrome).
- `plan.mjs` (representative-first): d-8fjlj4fun12p converts `hub-hero`, `tiles`, `cards`, `services`, `support`; index converts `auth-login`; no reuse across templates.
- Name note for C: `cards` matches the boilerplate's existing `blocks/cards/` — the hub unit either restyles that block in place or names a scoped variant; never ships two `cards` implementations.

## B2-dynamic — inventory re-verified, 12 rows unchanged (2026-11-21)

- Fresh `dynamics-detect` (24 s, 2 pages, 46 findings) matches the Phase 2 finding set key for key; `dynamics-plan --target-origin https://main--8053f48d--aemcoder.aem.page --migrated stardust/migrated --martech stardust/martech --chrome` → 48 draft rows (self 17, owner batch 30, delivered-by-capture 1), host-bound 23/23 (all first-party Frontify API paths 404 on the target, as before).
- Only delta: `sparkassen-mediacenter.de` now reads delivered-by-capture — the services-card link in the migrated hub, not a script; noted on row 12's evidence. No row added, no disposition changed; all 12 rows keep theirs. Martech contract regenerated with identical content (no CMP, no tags). Previous evidence kept under stardust/.work/rollout/b2-before/.
- Pre-import gate for C: rows 1, 2, 9, 10, 12 ship as authored content/assets; 6 (terms dialog) and 7 (header menus/drawer) are runtime rebuilds; 8 (header search) a widget over the query index; 3, 4, 5, 11 stay interim on the owner batch (access control/SSO, Frontify APIs).

## C-deliver — foundation + both archetype units done (2026-11-21)

- foundation: nav/footer live, header+footer blocks, fonts 6, frozen (20 files).
- archetype-index: / live, gate 1440 0.03 % / 360 0.00 %, Δh 0.
- archetype-d-8fjlj4fun12p: /d/8fjlj4fun12p live, gate 1440 2.84 % / 360 4.37 %; height waived (inner scroller, footer y equal); video autoplay + terms dialog verified. Header contract compare exit 2 (search typeahead/keyboard, drawer Escape, logo name) and 360 header crop 3 % → foundation-requests.md, to apply at C-final.
- Next: C-final (apply foundation-requests once, re-gate both archetypes, header contract re-compare), gate-all unit, then D-site … I-dashboard, done-check.

## C-deliver — C-final + gate-all, phase closed (2026-11-21)

- final: foundation-requests 6/6 applied once (skip link, auth font token, hub page styles → styles.css, header glyphs/position/spans, footer line box, header keyboard + open-state geometry); hub 2.84 % / 4.37 %, index 0.00 % unchanged; header contract 17/14 → 6/0 (residuals: IF-Wissen submenu absent from nav doc, host-bound typeahead, open-state crop shape). Refrozen.
- coverage path of the hub row set to the delivered lowercase `/d/8fjlj4fun12p` (EDS paths are lower case; source `/d/8fJLj4FUN12p` 404s on aem.live — redirect for it is D-site work).
- gate-all: 2/2 delivered at 1440 and 360 (hub via documented height override, inner scroller); wide 2560 hub 8.4 % Δh -3833 (report). update-coverage --gate: 0 flips.
- Next: D-site (redirects incl. mixed-case hub path), D2, E, E2, F, G, H, I-dashboard, done-check.

## D-site — sitemap 2 = 2, redirects wired (2026-11-21)

- assemble --verify-origin aem.live exit 0 (2 urls); /nav, /footer noindex + live; / 200 on page and live.
- /redirects.json published: /d/8fJLj4FUN12p → /d/8fjlj4fun12p (mixed case matches the sheet, 301 verified), /auth and /auth/ → / (source root 302s to /auth/; login delivered as root index, no / row).
- da-library exit 0 (7 block docs, 2 templates, library config tab).

## D2-dynamic — 14 parity rows, dynamics-check 18/18 (2026-11-21)

- helix-query.yaml shipped (/query-index.json 404 → 200, total 2); parity.json 9 done / 5 interim (Frontify APIs, session, SSO, runtime, martech — owner decisions named); added v-mediacenter-embed row.
- dynamics-check --origin aem.live 18/18 pass; martech carried over, all parts disabled, scripts/martech.js served.
- Residuals: search replayed as fetch-json + dom-count (terms dialog blocks a click replay); no source search count (host-bound behind SSO).

## E-full-site — 2/2 verified on aem.live (2026-11-21)

- Hub migrated file was a folder index (`d/8fJLj4FUN12p/index.html`) while the document is delivered at `/d/8fjlj4fun12p` (no trailing slash; `/…/` 404s) → moved to `d/8fJLj4FUN12p.html` (+ sidecar), coverage/state paths aligned; content hash unchanged.
- verify.mjs --base aem.live --all: 2 verified, 0 failed; gate table pass both widths; restoreAtDelivery (hero autoplay video) asserted playing by dynamics-check video-plays on aem.live (D2).

## E2-link-audit — 28 hrefs audited, 0 rewrites needed (2026-11-21)

- Internal: /, /d/8fjlj4fun12p, /nav, /footer, /query-index.json 200; /d/8fJLj4FUN12p, /auth(/) 301 → 200 via the sheet.
- 14 out-of-scope targets already absolute on if-hub.de (scope extension, fixed page plan) — decision recorded in direction.md; SSO link kept on source (dynamics row 5). localize-links --check exit 0; verify 2/2.

## F-optimize — health 100, 0 open findings (2026-11-21)

- optimize.mjs on aem.live: 2 pages, P1 0 · P2 0 · P3 0; 2 source-parity P2 (no JSON-LD on source either) informational. Gate passed; scorecard written.

## G-aem — no autofix candidates (2026-11-21)

- autofix-aem --dry-run: 0 candidates (no open findings); nothing re-deployed.

## H-report — report + 3 learnings (2026-11-21)

- stardust/rollout/report.md: 2/2 verified, 6/6 blocks deployed, health 100, parity 14 rows; residuals listed. stardust/learnings.md: 3 pending entries (mixed-case path, folder-index path, host-bound typeahead).

## I-dashboard — dashboard written (2026-11-21)

- dashboard.mjs → stardust/rollout/dashboard/index.html + data.json (2 pages, 2 templates).
- Header contract vs aem.live: an edge cache in front of this runner still served the pre-C-final CSS (origin fresh, ?v= busted copy = local; admin cache/code POSTs 200), so the live explore read 17/14; preview reads 6/0. Re-compare against aem.live once the edge copy expires (max-age 7200).

## handoff — run complete (2026-11-21)

- Runner done-check: complete, 0 gaps. header-parity.json written from the preview comparison (6/0; residuals listed for the owner in eds-conversion-log.md).
