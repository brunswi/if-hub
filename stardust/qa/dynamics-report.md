# Dynamics parity check — https://main--8053f48d--aemcoder.aem.live — 2026-11-21T02:52:34.021Z

Replayed 18 checks over 15 features · pass 18 · fail 0. Flows, not presence.

| feature | class | status | check | result | detail | third-party requests |
|---|---|---|---|---|---|---|
| hub cover page content (Frontify blockmanager slots) | CR | done | dom-count | PASS | 19 × main h1, main h2, main h3 (min 3) | sparkassen-mediacenter.de:200×12 cdn.sparkassen-mediacenter.de:200×3 |
| hub cover page content (Frontify blockmanager slots) | CR | done | no-page-errors | PASS | none on 1 page(s) |  |
| login panel (headline, label, SSO link, request-access link) | CR | done | dom-count | PASS | 2 × .auth-login a[href] (min 2) |  |
| login panel (headline, label, SSO link, request-access link) | CR | done | no-page-errors | PASS | none on 1 page(s) |  |
| login form behaviour: 'Anmelden über SSO' → source OIDC endpoint; hidden e-mail form not rebuilt | F | interim | dom-count | PASS | 1 × a[href*='/api/thirdparty/oidc/auth'] (min 1) |  |
| 'Terms and conditions' dialog before hub content (Accept / Decline) | M | done | dom-count | PASS | 1 × .hub-terms[role='dialog'] [data-test-id='save-selection-button'] (min 1) | sparkassen-mediacenter.de:200×12 cdn.sparkassen-mediacenter.de:200×3 |
| header menus and mobile drawer | M | done | dom-count | PASS | 1 × header .hub-header-burger (min 1) | sparkassen-mediacenter.de:200×12 cdn.sparkassen-mediacenter.de:200×3 |
| header search overlay over /query-index.json | S | done | fetch-json | PASS | 200 · 2 rows · keys columns,data,offset,limit,total,:type |  |
| header search overlay over /query-index.json | S | done | dom-count | PASS | 2 × header .hub-header-search, .hub-search[role='dialog'] input.hub-search-input (min 2) | sparkassen-mediacenter.de:200×12 cdn.sparkassen-mediacenter.de:200×3 |
| looping hero background video (autoplay muted loop) | V | done | video-plays | PASS | iframe/video: true · video playing (Δt 0.80s) | sparkassen-mediacenter.de:200×12 cdn.sparkassen-mediacenter.de:200×3 |
| embedded Sparkassen Media-Center player (iframe, autoplay=false) — part of the hub cover content (row 1, draft row 40 mod-pb-video) | V | done | video-plays | PASS | iframe/video: true · video playing (Δt 0.80s) · playback requests 3 (ok) | sparkassen-mediacenter.de:200×12 cdn.sparkassen-mediacenter.de:200×3 |
| media.ffycdn.net images/video served from the new host | T | done | consent-gate | PASS | no request to 1 gated host pattern(s) before consent | sparkassen-mediacenter.de:200×12 cdn.sparkassen-mediacenter.de:200×3 |
| Frontify runtime + error monitoring (cdn.frontify.com, frontify-artifacts.com, sentryapp.appsupport.frontify.dev) | T | interim | consent-gate | PASS | no request to 3 gated host pattern(s) before consent | sparkassen-mediacenter.de:200×12 cdn.sparkassen-mediacenter.de:200×3 |
| Frontify runtime + error monitoring (cdn.frontify.com, frontify-artifacts.com, sentryapp.appsupport.frontify.dev) | T | interim | consent-gate | PASS | no request to 3 gated host pattern(s) before consent |  |
| sparkassen-mediacenter webfonts self-hosted | T | done | consent-gate | PASS | no request to 2 gated host pattern(s) before consent |  |
| analytics / tags / consent carried over, every contract part disabled | T | interim | martech | PASS | no tag host requested (3 gated · 0 cross-site host(s) blocked) |  |
| analytics / tags / consent carried over, every contract part disabled | T | interim | martech | PASS | no tag host requested (3 gated · 1 cross-site host(s) blocked) |  |
| martech: consent + tag routing | T | scaffolded-off | martech | PASS | no tag host requested (0 gated · 0 cross-site host(s) blocked) |  |

## Features without checks

- Frontify platform APIs (csrf-token, context, graphql-internal, portal/*, hub/grid, …) (A) — interim · owner: Confirm nothing outside the Frontify renderer consumes the Frontify platform APIs.
- session + account APIs (/api/session, /api/account/metadata) (A) — interim · owner: Decide access control / IdP protection for the new host (the source gates the hub behind SSO login).
