<!-- stardust provenance: skill=stardust:dynamics · phase=triage (curated) · replica Phase 2 · hands-off · from stardust/dynamics/dynamic-features.generated-plan.md (48 draft rows) -->
# Dynamic features — if-hub.de

## Listings contract

none — no listing blocks on the two scoped pages.

## Features

| # | id | feature | class | reach | disposition | target | reproducibility | status | pattern | decision / owner | evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | cr-hub-cover-content | hub cover page content (Frontify blockmanager slots, draft rows 27–41) rendered client-side from /api/portal, /api/hub/grid etc. | CR | 1/2 | static-snapshot | content | self | planned | settled-dom-snapshot | none — the settled DOM was captured in full after the terms dialog (19 headings, 7 images); content ships as authored documents. Unfreeze: owner moves editing to the new CMS. | pages/d-8fjlj4fun12p.html |
| 2 | cr-login-panel | login panel (o-auth__box / o-auth__form, draft rows 27–29) | CR | 1/2 | static-snapshot | content | self | planned | settled-dom-snapshot | none — headline, label, SSO link and request-access link ship as authored content | pages/index.html |
| 3 | a-frontify-platform-apis | Frontify platform APIs (csrf-token, context, graphql-internal, dashboard/appearance, portal/*, font-*, guideline-stylesheets, document/navigation, portal-navigation, marketplace-app, ai-assistant, theme-asset, cover-page-template-asset; draft rows 3, 5–8, 10–26) | A | 2/2 | static-snapshot | content | needs-business-decision | interim | off-origin-data | Assumption (hands-off): their only consumer is the Frontify renderer whose output is now authored content — no consumer on the migrated pages. Owner decision: confirm no other consumer. | 404 on target (host-bound, 21/21) |
| 4 | a-session | session + account APIs (/api/session, /api/account/metadata; draft rows 4, 9) | A | 2/2 | static-snapshot | content | needs-backend | interim | decided-out candidate | Owner decision: access control for the new host (the source gates the hub behind SSO login). Interim: pages are public on the new host; the login page's SSO button keeps its source target. | session-bound |
| 5 | f-login-sso | "Anmelden über SSO" → https://if-hub.de/api/thirdparty/oidc/auth?referer=%2F; hidden e-mail form o-auth__form-email (draft row 42) | F | 1/2 | rebuild-native | block | needs-backend | interim | forms | Owner decision: SSO/IdP endpoint for the new host. Interim: link kept to the source OIDC endpoint; the hidden e-mail form is not rebuilt (not visible at capture). | pages/index.html |
| 6 | m-terms-dialog | "Terms and conditions" dialog shown before hub content (Accept / Decline) | M | 1/2 | rebuild-native | runtime | self | planned | modal-loader | none — rebuilt with the captured copy, acceptance remembered client-side; same accept control id (data-test-id="save-selection-button") so gate captures dismiss it on both sides | first crawl capture |
| 7 | m-header-menus | header nav items with aria-haspopup="menu" (draft row 43) and the mobile drawer (draft row 48) | M | 1/2 | rebuild-native | runtime | self | planned | chrome-interaction | none — the header contract is the spec | stardust/chrome/header-contract.json |
| 8 | chrome-search | header search (draft rows 44, 47; source /api/cross-search-guideline) | S | 1/2 | index-backed | widget | self | planned | search-index-backed | none — results over the migrated corpus from the query index (smaller corpus = parity note) | header-contract search control |
| 9 | v-hero-video | looping hero background video NT4Cqvwes46oAW5bkkNc.mp4 | V | 1/2 | static-snapshot | content | self | planned | media | none — self-hosted mp4 file, autoplay muted loop | assets/media/NT4Cqvwes46oAW5bkkNc.mp4 |
| 10 | t-media-cdn | media.ffycdn.net image/video CDN (draft row 45) | T | 2/2 | static-snapshot | content | self | planned | assets | none — media downloaded and served from the new host | assets/media/ |
| 11 | t-frontify-runtime | cdn.frontify.com, frontify-artifacts.com, sentryapp.appsupport.frontify.dev (draft rows 1, 2, 46) | T | 2/2 | static-snapshot | content | needs-business-decision | interim | consent-gated-tags | Assumption: platform runtime + error monitoring of the Frontify app, not site tags; not carried. Owner decision: confirm. Recorded in martech-contract.json (no tags, no CMP). | network log |
| 12 | t-mediacenter-fonts | sparkassen-mediacenter.de / cdn.sparkassen-mediacenter.de webfonts (draft rows for those hosts) | T | 1/2 | static-snapshot | content | self | planned | assets | none — font files self-hosted (register R-01) | assets/fonts/ (B2 2026-11-21: font files present in stardust/migrated/assets/fonts/; the plan's `delivered-by-capture` hit on sparkassen-mediacenter.de is the services-card link, not a script — no new row) |

## Re-verification — rollout B2 (2026-11-21)

Fresh `dynamics-detect.mjs --from-state stardust/state.json --reach stardust/current` (2 pages, 46 findings — same finding set as Phase 2) and `dynamics-plan.mjs --target-origin https://main--8053f48d--aemcoder.aem.page --migrated stardust/migrated --martech stardust/martech --chrome` (48 draft rows: self 17 · owner batch 30 · delivered-by-capture 1; first-party API paths host-bound 23/23, all 404 on the target — unchanged). No new feature, no disposition changed; every row above keeps its disposition. Martech: still no CMP and no tag manager (contract regenerated, content unchanged).

## Decision batch

One message to the owner (hands-off: recorded as named assumptions, interim tier ships):

1. **Access control** (rows 4, 5): the source shows the hub only after SSO login; the new host serves both pages publicly. Decide the IdP / protection for the new host.
2. **Frontify platform APIs and runtime** (rows 3, 11): confirm nothing outside the Frontify renderer consumes them.
3. **Martech** (stardust/martech-handoff.md): no CMP and no tag manager found on the source; the contract is empty and everything stays disabled.

## Register (decided-out)

| feature | reason | production statement |
|---|---|---|
| — | none (no owner statement yet) | — |
