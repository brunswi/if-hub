# Font licensing — REQUIRED BEFORE GOING LIVE (register R-01)

These faces were captured from if-hub.de and are self-hosted as-is for design fidelity.
All are proprietary; the owner must confirm that the web/embedding licence covers this host.

| File | Family | Foundry / owner | Used by | Status |
|---|---|---|---|---|
| sparkasse-light-300.woff2 | Sparkasse Light | DSGV (Sparkasse corporate type) | hub body text | licence unconfirmed |
| sparkasse-regular-400.woff2 | Sparkasse Regular | DSGV | hub nav, headings | licence unconfirmed |
| sparkasse-medium-500.woff2 | Sparkasse Medium | DSGV | hub headings | licence unconfirmed |
| sparkasse-rg-400.woff2 | Sparkasse_Rg | DSGV | sign-in page | licence unconfirmed |
| abc-diatype-variable.woff2 | Diatype | ABC Dinamo | hub video controls | licence unconfirmed |
| mier-b-book.woff2 | Mier B | Atipo | hub footer | licence unconfirmed |

Conversion: the captured `.woff` / `.ttf` files were re-wrapped to WOFF2 with fontTools
(no subsetting, glyphs unchanged).

## Remove path

If a licence cannot be confirmed, delete the file and its `@font-face` rule in
`styles/fonts.css`. Every stack in `styles/styles.css` names a metric-matched local
fallback (`sparkasse-fallback`, `mier-fallback`) followed by system faces, so text keeps
rendering — in a generic sans-serif instead of the brand face.
