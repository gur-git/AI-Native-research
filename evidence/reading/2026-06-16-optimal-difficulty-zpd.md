---
type: reading
source: Wilson, Shenhav, Straccia & Cohen 2019 "The Eighty Five Percent Rule for optimal learning" (Nature Communications 10:4646); Vygotsky — Zone of Proximal Development; Metcalfe & Kornell / Bjork — desirable difficulties
date: 2026-06-16
confidence: moderate
related_attributes: [13, 14, 15, 16]
related_questions: [13, 11]
raw_material: see Sources below
---

# Optimal difficulty: the 85% rule and the zone of proximal development

## What was observed / claimed

Reading gathered to ground an adaptive-difficulty gate. The result: there is a difficulty sweet spot that maximizes learning rate — neither too easy nor too hard. Wilson et al. (2019) derive, for a broad class of gradient-descent learners (artificial and biologically-plausible), an optimal training error of ~15.87% — i.e., **~85% success**. Below it the task is too easy to drive learning; above it, too hard to gain traction. This formalizes Vygotsky's **Zone of Proximal Development** (the band between what the learner can do alone and what they can do only with help) and Bjork's **desirable difficulties** (effortful struggle within the band improves durable learning more than fluent success). Adaptive instructional systems hold a learner in this band by adjusting challenge in real time from their responses.

## Specific claims

- Learning rate is maximized near ~85% success / ~15% error for a broad class of learners (Wilson et al. 2019). [moderate]
- The productive band is bounded below (too easy → no learning signal) and above (too hard → no traction) — the ZPD framing. [moderate]
- Difficulty is best held in-band by adapting to the learner's responses in real time, not by a fixed level. [moderate]
- Effortful struggle within the band improves durable retention over fluent success (desirable difficulties). [moderate]

## Implications (suggested, not concluded)

- Direct design input for the gate: a gate calibrated to hold ~80–85% success — starting from the researcher's stated proficiency and adapting one question at a time — should build understanding faster than a fixed question floor, and removes the busy-work an expert hits on material they already command (the D3 dry-run finding; the G5/Q13 risk). Bears on **Q13** (the gate-carried bet) and **Q11** (per-topic proficiency becomes a tracked development signal).
- The 85% figure is from binary-classification learners, not research gates — the transferable idea is the *band*, not the exact percentage.
- Tension to hold explicitly: the band optimizes *learning*; a gate also *verifies*. The bar for "understood" stays fixed (real understanding at the level the work needs); only the *challenge path to it* adapts.

## Notes / caveats

- All external literature; not this inquiry's own evidence. The 85% number is precise for a specific model class and is used here to motivate a band, not a setpoint.
- ZPD and desirable difficulties are well-established, but their mapping to AI-mediated research gates is unstudied — that mapping is part of Q13.

## Sources

- Wilson, Shenhav, Straccia & Cohen 2019, The Eighty Five Percent Rule for optimal learning, Nature Communications 10:4646: https://www.nature.com/articles/s41467-019-12552-4
- Zone of Proximal Development (overview): https://www.simplypsychology.org/zone-of-proximal-development.html
- Metcalfe & Kornell / Bjork — desirable difficulties and the region of proximal learning: https://www.columbia.edu/cu/psychology/metcalfe/PDFs/Metcalfe-BjorkVolSubmitFeb14Final.pdf
