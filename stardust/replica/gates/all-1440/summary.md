# Published-origin gate — all deployed pages, 1440px

2026-11-21T02:36:42.045Z · **1 PASS / 1 FAIL / 0 error of 2** (+1 documented override → 2 delivered)

Verdict: pixel criterion (aligned % ≤ 10 AND total offset ≤ the bound; alignment not used: unaligned % ≤ 10) AND |Δh| ≤ 5% of origin height AND clipped ≤ 0 (+ documented allowance) AND content MISSING + HIDDEN links/headings = 0

Calibration — pixel-only verdict (criteria 1+2): **1 PASS**; full verdict (1–4): **1 PASS**. Failing by criterion: pixel 0, height 1, clip 0, content 0; content n/a (origin not probed) 0; pixel criterion met only thanks to alignment (unaligned % over the threshold): 0.
| page | template | tier | origin | browser | pixel % aligned (unaligned) [text] | offsets | Δh px | clipped | content | units | verdict | reasons |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/` | index | - | stitch-live | chrome | 0.03 [0] | - | 0 | 0 | MISSING 0 / HIDDEN 0 | - | PASS | - |
| `/d/8fjlj4fun12p` | d-8fjlj4fun12p | - | stitch-live | chrome | 2.84 [0] | - | -3507 | 0 | MISSING 0 / HIDDEN 0 | - | FAIL → pass: inner scroller on the source: if-hub.de scrolls inside a radix scroll-area viewport (html/body 100dvh), so the live document reports 900px while the EDS page scrolls the document (foundation runtime contract: body padding-right 10px + hidden root scrollbar). Footer box sits at the same y on both sides (chrome-parity 1440: live 0,4303 1430x104 = build 0,4303 1430x104), content-diff MISSING 0 / HIDDEN 0 over the whole DOM, clip 0. stardust/replica/progress.json innerScroller; source-fidelity-gate.md Hardening rule 13. | Δh -3507px > 5% of 900 |
