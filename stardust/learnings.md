# Learnings — if-hub.de replica run (2026-11-21)

### Mixed-case source path delivered lowercase, coverage kept the source case
- failure class: path-safety
- evidence: source `/d/8fJLj4FUN12p`; migrate wrote `stardust/migrated/d/8fJLj4FUN12p/index.html`, inventory derived coverage path `/d/8fJLj4FUN12p`, deploy PUT `/d/8fjlj4fun12p`; done-check reported `pages_not_live:1` (aem.live 404 on the mixed-case path). Re-running inventory on a lowercased tree in archetypes-only (`--state`) mode adds a duplicate content-pending roster row because the roster match (`rosterPath(url)` vs tree path) is case-sensitive.
- proposed change: `skills/rollout/scripts/inventory.mjs` — key the roster/tree match on `safePath()` and record the delivered (safe) path in coverage; `skills/migrate` — emit the output path through `safePath` and let seed-redirects add the source-case row.
- status: pending

### Folder-index migrated file for a document delivered without trailing slash
- failure class: path-safety
- evidence: `outputPathDefault: "trailing-slash"` produced `…/index.html`; `publicUrl()` then probed `/d/8fjlj4fun12p/` (404) while the document lives at `/d/8fjlj4fun12p`; verify.mjs flipped the page `failed` until the file moved to `d/8fJLj4FUN12p.html`.
- proposed change: `skills/migrate` — default to the source URL form (no trailing slash when the source has none); `skills/rollout/scripts/lib.mjs publicUrl` — prefer the recorded `deployedUrl` path when present.
- status: pending

### Header search typeahead is host-bound on Frontify portals
- failure class: api-dependency
- evidence: header contract `state-missing` (typing "wissen" shows 6–7 suggestions on source, none on build) — the suggestions come from the Frontify search API behind SSO; build searches /query-index.json (2 pages).
- proposed change: `skills/dynamics/reference/triage.md` — name Frontify brand-portal search as a host-bound class so chrome-compare `state-missing` on it is pre-decided as interim.
- status: pending
