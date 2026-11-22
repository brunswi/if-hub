# Inconsistency register — if-hub.de replica

Everything not listed here is frozen; any design delta found by the gate is a defect, not an improvement.

## R-01 — Proprietary Sparkasse typefaces self-hosted as captured

- **Evidence:** stardust/current/assets/fonts/_fonts.json — Sparkasse Light/Regular/Medium (if-hub.de/api/font-file/885xx, project 319) and Sparkasse_Rg (font-file/5782) loaded by the live pages; _brand-extraction.json § type.files license "proprietary".
- **Finding:** the delivered site needs the same corporate faces; they are proprietary DSGV fonts whose web licence must cover the new host.
- **Minimal change:** none visual — the captured files are self-hosted as-is under /fonts/; the licence check is handed to the owner (deploy licensing alert).
- **Status:** deferred
- **Where:** all page types

## R-02 — Content container differs between templates (fluid hub vs 370px login)

- **Evidence:** cap-probe capRegister — contentMaxWidth fluid on https://if-hub.de/d/8fJLj4FUN12p, 370px module cap (div.o-auth__box-content) on https://if-hub.de/.
- **Finding:** the two templates use different container models; not an error, recorded so it is not "harmonised" during recreation.
- **Minimal change:** none — each template keeps its own measured container.
- **Status:** deferred
- **Where:** form (login) and landing (hub) templates
