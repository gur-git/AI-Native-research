# 2026-06-22 — Teaching mode: a third mode, split out of conversation

A design conversation with the maintainer added a **teaching mode** to the methodology,
alongside work and conversation. The move started as "add a third mode" and ended as a
cleaner recarving: conversation mode had been doing three jobs at once — gate-interviews,
peer exploration, *and* teaching — and the teaching job has a distinct behavioral contract
(asymmetric teacher→student stance toward one target idea, a ladder of sub-ideas climbed
one rung per turn). Naming it clarifies conversation mode too.

## The model

- **Three modes.** Work (produce; repo changes), Conversation (symmetric peers; no single
  target idea; teaching/verifying flow *both ways*; goal = reach a shared understanding),
  Teaching (asymmetric; build understanding of one idea).
- **Gates are not a mode — the verify event.** A gate is Teaching's mirror: same asymmetric
  posture pointed the other way. Teaching builds understanding (conveys the material in full;
  its questions pace and check, they never gatekeep); the gate *verifies* it (notes shut,
  reproduce unaided, withholding lives here). Teach → gate → re-teach is the build/verify loop.
- **Each mode is introduced with *when it is useful*** — at onboarding and in the README — so
  the researcher can steer them (the point of naming them, G21).
- **Teaching is structural, not summoned:** the default move to build understanding in `learn`
  and to close any gap a gate exposes, firing only when proficiency-calibration shows a real
  gap (G24). The teaching *craft* is shared with conversation's teaching moments; only the
  dedicated stance is new.

## A correction caught in review

An early draft imported the gate's withholding into teaching ("withholds the load-bearing
mechanism even if asked to draft it"). The maintainer flagged it: teaching must actually
*teach* the material; withholding-to-verify is the gate's job. Corrected — teaching only ever
adds information (paced by check-in questions), and every withhold-and-test behavior sits on
the gate side. Grounded in the `learn` skill's own "Teach it in conversation → hand off to
the gate" sequence.

## Registry change

**Practice:** G27 — Teach in a dedicated mode; build understanding before a gate verifies it.
**Change:** added at `proposed`. G21 revised (now three modes, introduced with when-useful).
**Addresses:** A16 (development as tracked output), A13 (felt vs actual), A7 (don't just validate).
**Evidence (mixed tiers, marked in §4):** `grounded` — productive-struggle band
([ZPD reading](../evidence/reading/2026-06-16-optimal-difficulty-zpd.md)),
active-engagement-over-offloading
([cognitive-offloading reading](../evidence/reading/2026-06-15-product-validation-and-cognitive-offloading.md)),
explain-back (professor interview, pilot audit); `inferred` — the three-mode carving, the
discriminator, the pacing rule; `speculative` — the inline-visualization / Claude-app clause.
**One-line motivation:** conversation mode was overloaded, and the methodology named the
checkpoint (gate) but not the construction (teaching) of understanding.

## Repo-wide reconciliation

METHODOLOGY.md §4 rewritten; §3 gate redefined as the verify event (teaching's mirror); §0
onboard and §1 learn repointed to teaching mode; §8 mapping and G20/G21 wording aligned (no
"interview-conversation" / "teach it in conversation" legacy left). Ships to the starter as
update **0005** (`starter_version` 0.5.0): CLAUDE.md §Modes, README, and the `onboard`, `learn`,
and `gate` skills.

## Open-question moves

Opened **Q13.2** (under Q13): *does a dedicated teaching mode build understanding better than
teaching folded into conversation?* — the split is the bet; the pilot is the test (gate first-pass
and re-teach rates vs the pre-split baseline; the mode boundary watched in `FRICTION/`). G27
repointed to Q13.2.

**Q13 itself was realigned.** It had credited *gates* with carrying the second output, but the
teaching-mode split makes the mechanism the **teach→gate loop** — teaching builds understanding,
gates verify it — so Q13's framing now says so. Both inquiry-internal; no update document (open
questions track the inquiry's uncertainty; they do not change what a workspace agent does).
