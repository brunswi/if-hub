<!-- stardust provenance: skill=stardust:dynamics · phase=plan draft · 2026-11-21T01:20:32.673Z · input stardust/current/_dynamics.json (2 pages, 48 findings) · target probe https://main--8053f48d--aemcoder.aem.page · reconciled against stardust/migrated -->
# Dynamic features — draft inventory (curate into `stardust/dynamic-features.md`)

One row per detected finding. Merge duplicates, drop noise, keep every axis honest. Columns: disposition = what we do · target = the delivery form (widget where no authored rows remain) · reproducibility = what it needs · status = where it stands (reference/triage.md).

| # | id | class | feature | pages | disposition | target | reproducibility | status | pattern | decision needed | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | a-unknown-third-party-host-cdn-frontify-com | A | unknown third-party host cdn.frontify.com | 2/2 | static-snapshot | — | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 2 | a-unknown-third-party-host-sentryapp-appsupport-frontify-dev | A | unknown third-party host sentryapp.appsupport.frontify.dev | 2/2 | static-snapshot | — | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 3 | a-first-party-api-get-api-csrf-token | A | first-party API GET /api/csrf-token | 2/2 (reach 2/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 4 | a-first-party-api-get-api-session | A | first-party API GET /api/session | 2/2 (reach 2/2) | data-fed | — | needs-backend | pending | decided-out | none (session-bound off-origin) | **dead on target (404)** |
| 5 | a-first-party-api-post-graphql-internal | A | first-party API POST /graphql-internal | 2/2 (reach 2/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 6 | a-first-party-api-get-api-context | A | first-party API GET /api/context | 2/2 (reach 2/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 7 | a-first-party-api-get-api-dashboard-appearance | A | first-party API GET /api/dashboard/appearance | 2/2 (reach 2/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 8 | a-first-party-api-post-api-context | A | first-party API POST /api/context | 2/2 (reach 2/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 9 | a-first-party-api-get-api-account-metadata | A | first-party API GET /api/account/metadata | 1/2 (reach 1/2) | data-fed | — | needs-backend | pending | decided-out | none (session-bound off-origin) | **dead on target (404)** |
| 10 | a-unknown-third-party-host-sparkassen-mediacenter-de | A | unknown third-party host sparkassen-mediacenter.de | 1/2 | static-snapshot | — | needs-human-capture | delivered-by-capture | inspect | inspect the XHR, add a vendor row | output already carries "sparkassen-mediacenter.de" |
| 11 | a-unknown-third-party-host-cdn-sparkassen-mediacenter-de | A | unknown third-party host cdn.sparkassen-mediacenter.de | 1/2 | static-snapshot | — | needs-human-capture | pending | inspect | inspect the XHR, add a vendor row |  |
| 12 | a-first-party-api-get-api-portal | A | first-party API GET /api/portal | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 13 | a-first-party-api-get-api-document-navigation-n | A | first-party API GET /api/document/navigation/{n} | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 14 | a-first-party-api-get-api-marketplace-app-n | A | first-party API GET /api/marketplace-app/{n} | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 15 | a-first-party-api-get-api-marketplace-app-importmap | A | first-party API GET /api/marketplace-app/importmap | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 16 | a-first-party-api-get-api-portal-n-footer | A | first-party API GET /api/portal/{n}/footer | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 17 | a-first-party-api-get-api-portal-n-font-families | A | first-party API GET /api/portal/{n}/font-families | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 18 | a-first-party-api-get-api-portal-n-font-styles | A | first-party API GET /api/portal/{n}/font-styles | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 19 | a-first-party-api-get-api-ai-assistant-configuration-n | A | first-party API GET /api/ai-assistant/configuration/{n} | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 20 | a-first-party-api-get-api-portal-n-cover-page-template-asset | A | first-party API GET /api/portal/{n}/cover-page-template-asset | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 21 | a-first-party-api-get-api-portal-n-theme-asset-cover | A | first-party API GET /api/portal/{n}/theme-asset/cover | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 22 | a-first-party-api-post-api-guideline-view-tracking | A | first-party API POST /api/guideline-view-tracking | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 23 | a-first-party-api-get-api-guideline-stylesheets-portal-n | A | first-party API GET /api/guideline-stylesheets/portal/{n} | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 24 | a-first-party-api-get-api-portal-navigation-n | A | first-party API GET /api/portal-navigation/{n} | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 25 | a-first-party-api-get-api-portal-n | A | first-party API GET /api/portal/{n} | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 26 | a-first-party-api-get-api-hub-grid-n | A | first-party API GET /api/hub/grid/{n} | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | which tier for the target host; consumer on the migrated pages? | **dead on target (404)** |
| 27 | cr-client-rendered-slot-o-auth-box-js-o-auth-box | CR | client-rendered slot o-auth__box js-o-auth__box | 1/2 | static-snapshot | content | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 28 | cr-client-rendered-slot-o-auth-form-js-o-auth-form | CR | client-rendered slot o-auth__form js-o-auth__form | 1/2 | static-snapshot | content | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 29 | cr-client-rendered-slot-o-auth-form-email-js-o-auth-form-ema | CR | client-rendered slot o-auth__form-email js-o-auth__form-email tw-mb-7 | 1/2 | static-snapshot | content | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 30 | cr-client-rendered-slot-root-71r9v-4 | CR | client-rendered slot _root_71r9v_4 | 1/2 | static-snapshot | content | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 31 | cr-client-rendered-slot-js-skiptomaincontent-target | CR | client-rendered slot js-skiptomaincontent__target | 1/2 | static-snapshot | content | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 32 | cr-client-rendered-slot-mod-mod-brandportal-po-brandportal | CR | client-rendered slot mod mod-brandportal po-brandportal | 1/2 | static-snapshot | content | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 33 | cr-client-rendered-slot-po-brandportal-grid-js-po-brandporta | CR | client-rendered slot po-brandportal__grid js-po-brandportal__grid state-zero-margin | 1/2 | static-snapshot | content | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 34 | cr-client-rendered-slot-js-po-brandportal-row-po-brandportal | CR | client-rendered slot js-po-brandportal__row po-brandportal__add-row-container po-brandportal__add-row-container-initial | 1/2 | static-snapshot | content | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 35 | cr-client-rendered-slot-po-brandportal-row-container-cm-bloc | CR | client-rendered slot po-brandportal__row-container cm-blockmanager__section js-cm-blockmanager__section | 1/2 | static-snapshot | content | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 36 | cr-client-rendered-slot-p-col-p-col-6-js-po-brandportal-col | CR | client-rendered slot p-col p-col--6 js-po-brandportal__col | 1/2 | static-snapshot | content | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 37 | cr-client-rendered-slot-mod-mod-pb-text-image-pb-text-image | CR | client-rendered slot mod mod-pb-text-image pb-text-image | 1/2 | static-snapshot | content | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 38 | cr-client-rendered-slot | CR | client-rendered slot 
   | 1/2 | static-snapshot | content | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 39 | cr-client-rendered-slot-pb-text-image-text-inner-js-pb-text- | CR | client-rendered slot pb-text-image__text-inner js-pb-text-image__editor state-visible | 1/2 | static-snapshot | content | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 40 | cr-client-rendered-slot-mod-mod-pb-video-pb-video | CR | client-rendered slot mod mod-pb-video pb-video | 1/2 | static-snapshot | content | self | pending | settled-dom-snapshot | inspect the consumer |  |
| 41 | cr-main-empty-at-load-filled-after-client-rendered-page | CR | main empty at load, filled after (client-rendered page) | 1/2 | static-snapshot | content | needs-human-capture | pending | client-rendered-page | human-browser capture; never migrate blank |  |
| 42 | f-form-o-auth-form-email-origin-2-fields | F | form "o-auth__form-email" → origin / (2 fields) | 1/2 | rebuild-native | block | needs-backend | pending | forms | production endpoint; interim capture ships now |  |
| 43 | m-modal-trigger-aria-haspopup-target-outside-dom-at-capture | M | modal trigger aria-haspopup → target outside DOM at capture | 1/2 (reach 2/2) | rebuild-native | runtime | self | pending | modal-loader | none |  |
| 44 | s-first-party-api-get-api-cross-search-guideline-n | S | first-party API GET /api/cross-search-guideline/{n} | 1/2 (reach 1/2) | data-fed | block | needs-business-decision | pending | off-origin-data | datasource ownership / same-origin routing on production | **dead on target (404)** |
| 45 | t-unknown-third-party-host-media-ffycdn-net | T | unknown third-party host media.ffycdn.net | 2/2 | embed-passthrough | embed | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 46 | t-unknown-third-party-host-frontify-artifacts-com | T | unknown third-party host frontify-artifacts.com | 1/2 | embed-passthrough | embed | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 47 | chrome-search | S | header search: Search (chrome only) | 1/1 | index-backed | widget | self | pending | search-index-backed | none (results from the query index; overlay and typeahead per the contract) |  |
| 48 | chrome-drawer | M | header drawer: Open navigation (chrome only) | 1/1 | rebuild-native | runtime | self | pending | chrome-interaction | none (the header contract is the spec) |  |

## Triage

- **Ships autonomously (reproducibility `self`):** 17 row(s) — settled-dom-snapshot, modal-loader, search-index-backed, chrome-interaction.
- **One owner decision batch:** 30 row(s) — inspect the XHR, add a vendor row · which tier for the target host; consumer on the migrated pages? · none (session-bound off-origin) · human-browser capture; never migrate blank · production endpoint; interim capture ships now · datasource ownership / same-origin routing on production.
- **Already delivered by the capture pipeline:** 1 row(s) — no work.
- **Host-bound on the target:** 23 of 23 probed API paths — the off-origin data work.
- **Martech:** no CMP · 0/0 route(s) enabled by the owner — `stardust/martech-handoff.md`.

## Phases

- **off-origin data** — 21
- **capture** — 15
- **detect** — 4
- **interactive** — 3
- **register** — 2
- **tags** — 2
- **forms** — 1
