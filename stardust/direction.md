---
_provenance:
  writtenBy: stardust:replica
  writtenAt: 2026-11-21T00:22:52Z
  againstInput: https://if-hub.de/
  readArtifacts:
    - stardust/current/PRODUCT.md
    - stardust/current/DESIGN.md
    - stardust/current/DESIGN.json
---

# Direction — preserve mode (same-design migration)

Mode: PRESERVE. The target spec is the captured current state of https://if-hub.de/,
promoted verbatim (no direct invocation, no creative decisions).

Promoted: current/PRODUCT.md → PRODUCT.md · current/DESIGN.md → DESIGN.md ·
current/DESIGN.json → DESIGN.json (at 2026-11-21T00:22:52Z).

Permitted deltas: ONLY the entries of stardust/replica/inconsistency-register.md
(2 entries, both deferred — no applied design delta; pure replica in effect).

Fidelity: ia verbatim · design verbatim · content verbatim.

## E2 link audit — scope extension repointed (2026-11-21)

Decision (named): run scope is fixed at 2 pages (`/`, `/d/8fjlj4fun12p`) by
stardust/.labs/site-plan.json. Every internal source target outside these two is
SCOPE EXTENSION and stays/is repointed to its absolute https://if-hub.de URL
(no delivery, no 404). In-scope links are root-relative, lower-case,
extensionless (`/`, `/d/8fjlj4fun12p`); `/d/8fJLj4FUN12p` and `/auth(/)` are
covered by stardust/redirects.tsv (301 → 200, verified live).

Repointed to source (14 unique targets, 15 hrefs; all already absolute in content —
localize-links --check exit 0, 0 rewrites needed):
- nav: /d/8fJLj4FUN12p/if-wissen, /redaktions-guidelines, /bewegtbild-guidelines, /kontakt
- hub: /document/525, /document/528 (2 fragments), /r/2q9Re259…, /r/3VFwUuoI…,
  /r/JUKRKgOR…, /r/Ro7HHQUl… (×2), /r/V3G101Qv…, /r/d75CaHmo…, /r/ucDy5Xr2…
- login: /api/thirdparty/oidc/auth?referer=%2F — host-bound SSO, kept on source per
  dynamic-features row 5 (f-login-sso, interim; owner decision: IdP for new host).

External (recorded, not localized): apps.sparkasse.de, if-styleguide.sparkasse.de (+ 3
footer document/527 links), styleguide.sparkasse.de, sparkassen-mediacenter.de (2),
public.centerdevice.de, portal.dsv-gruppe.de, www.sparkasse.de/datenschutz.html (hub-hero JS).
