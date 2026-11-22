# rollout report — https://if-hub.de/ → aem-eds (2026-11-21)

```
rollout — if-hub.de → aem-eds
==================================================
Pages       2 total · 2 verified · 0 deployed · 0 pending · 0 content-pending · 0 stale
Templates   2 (index 1/1 delivered · d-8fjlj4fun12p 1/1 delivered)
Blocks      6 total · 6 deployed (auth-login, hub-cards, hub-hero, services, support, tiles) · 0 pending
Quality     health 100/100 · open P1 0 / P2 0 / P3 0 (2 source-parity P2 informational: no JSON-LD on source)
Pixel table prototypes 2/2 PASS (1440 + 360) · deployed 2/2 delivered (1 PASS + 1 documented height override; pixel-only 2/2) — gates/{prototypes,all}-{1440,360}/summary.md
To deliver  none
Content     0 pages awaiting content track
```

Published-origin gate: index 1440 0.03 % / 360 0.00 %, hub 1440 2.84 % / 360 4.37 % (height waived:
inner scroller on the source). Wide 2560 report: hub 8.4 % Δh -3833 px.

Redirects: /d/8fJLj4FUN12p → /d/8fjlj4fun12p, /auth(/) → / (live, 301). Sitemap served 2 = assembled 2.

Dynamic parity: see `stardust/qa/dynamics-report.md` — 14 rows (9 done, 5 interim owner decisions:
Frontify APIs, session, SSO login, Frontify runtime, martech all-disabled); dynamics-check 18/18 on aem.live.

Residuals (logged, not blocking): header search typeahead is host-bound (source Frontify API behind
SSO; build searches /query-index.json); the drawer's IF-Wissen submenu is not part of the nav
document; out-of-scope targets (14) link to the source site (fixed page plan).
