# Wide report — all deployed pages (a report, not a delivery criterion), 2560px

2026-11-21T02:40:27.493Z · **1 PASS / 1 FAIL / 0 error of 2**

Verdict: pixel criterion (aligned % ≤ 10 AND total offset ≤ the bound; alignment not used: unaligned % ≤ 10) AND |Δh| ≤ 5% of origin height AND clipped ≤ 0 (+ documented allowance)

Calibration — pixel-only verdict (criteria 1+2): **1 PASS**; full verdict (1–4): **1 PASS**. Failing by criterion: pixel 0, height 1, clip 0, content 0; content n/a (origin not probed) 0; pixel criterion met only thanks to alignment (unaligned % over the threshold): 0; over the threshold at this width: **0 of 2**.
| page | template | tier | origin | browser | pixel % aligned (unaligned) [text] | offsets | Δh px | clipped | content | units | verdict | reasons |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/` | index | - | stitch-live | chrome | 0.05 | - | 0 | 0 | n/a | - | PASS | - |
| `/d/8fjlj4fun12p` | d-8fjlj4fun12p | - | stitch-live | chrome | 8.4 | - | -3833 | 0 | n/a | - | FAIL | Δh -3833px > 5% of 900 |
