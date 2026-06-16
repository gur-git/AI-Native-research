---
name: validation
description: The diagnose-phase engine for the methodology's own validation (VALIDATION.md). Extracts the cheap metrics from a workspace, judges whether the dry-run tests are good predictors and whether the six pillars hold across accumulated evidence, runs the calibration loop, and proposes open-question moves — delegating edits to update-foundation and reusing inquiry-status's read. Use periodically, or when a cheap tripwire fires. Triggers on "validate", "run validation", "diagnose the pillars".
---

# validation

The diagnose phase of [`VALIDATION.md`](../../../VALIDATION.md). It does not gather evidence (that is `add-evidence`) or edit the foundation (that is `update-foundation`) — it *judges*: are the dry-run tests good predictors, do the six pillars hold, and what does the accumulated evidence say about the open questions. **Delegate, don't merge**: reuse `inquiry-status`'s read, hand every foundation edit to `update-foundation`, leave per-item evidence intake to `add-evidence`.

## When to invoke

- Periodically (the omnibus interview or a batch of FRICTION audits has come in).
- When a cheap tripwire fires (retention drop, override-rate spike, citations failing, friction spike).
- Before a release that claims to fix a pillar failure — to record which dry-test gap it closes (the calibration loop).

## 1 · Extract the cheap metrics (the artifact extractor)

Run over a shared copy of the workspace (or its `FRICTION/` export). Deterministic and reproducible — these are reads, not captures:

- **Retention / cadence** — distinct active days and session gaps, from git commit timestamps. *(adoptability)*
- **Gate-stamp ratio** — `gate-stamped` vs `agent-drafted` status lines across `context/knowledge/`. *(efficacy proxy)*
- **Override rate** — override records vs total gate records in `context/records/`. *(efficacy proxy / usability)*
- **Citation resolution** — fetch every citation in `context/knowledge/`; count what fails to resolve. *(integrity — sufficient on its own)*
- **Friction density** — count and pillar-distribution of `FRICTION/` entries; separate scaffold-tagged from methodology-tagged. *(usability / value)*
- **Feasibility events** — presence of a seeded `profile.md` + `state.md`; any logged skill-failure / "couldn't fetch source" markers. *(feasibility)*

Report each as a number plus its trend since the last run. **These are tripwires, never success metrics** (§8 Goodhart) — a high gate-stamp ratio can mean soft grading, not mastery.

## 2 · Read the landscape

Run `inquiry-status` for the current state (recent log, evidence by question, guideline statuses, open questions). Add the evidence filed since the last validation run and the metrics from step 1. Do not restate what `inquiry-status` already produces — build on it.

## 3 · Judge each pillar

For each of the six pillars (VALIDATION.md §1): **holds / fails / unknown**, citing the cheap metrics and the expensive evidence (interview, peer-review, the professor's external tracking). Apply the §5/§8 discounts honestly:

- On value / usability / adoptability, subtract scaffold-caused friction (won't exist in deploy) and friendly-user optimism.
- On efficacy, require the *delayed* probe — immediate post-gate understanding is not enough.

## 4 · Run the calibration loop

For every pillar judged **fails**: check whether a dry-run test (VALIDATION.md §3) *passed* on it.

- **Failed empirically but the dry test passed** → the dry test was blind. Open **two** items: a product-fix item, and a "dry test insufficient" item — propose a new or strengthened dry-run case (the field failure becomes a regression test) and add it to VALIDATION.md §3 with the failure that motivated it.
- **Failed and the dry test had flagged it** → product-fix item only.

A failed empirical test never closes with just a bug report; it must also leave the dry suite better.

## 5 · Confront the open questions

For each question the evidence bears on (Q13, Q11, Q10, Q14 are the apparatus's natural ones): state in one line whether the evidence *narrows, supports, contradicts, or answers* it, or surfaces a new uncertainty. Then **offer** the move — close / revise / open / relate / merge — to the maintainer. The maintainer decides; the actual edit to `foundation/03-open-questions.md` goes through `update-foundation`. Offering is mandatory; acting is not, and is never done here.

## 6 · Write the diagnosis

- A log entry: pillars judged, calibration-loop items opened, question moves offered.
- Dry-suite additions into VALIDATION.md §3 (the regression tests from step 4).
- Hand the question moves to `update-foundation` and the product fixes to `release-update` (researcher-facing) or the relevant skill.

## Hard lines

- **Never edit `foundation/03-open-questions.md` or the foundation here** — propose; `update-foundation` enacts.
- **Never report a cheap proxy as a success metric** — it is a tripwire that triggers investigation, nothing more.
- **Never close an open question or alter a guideline status autonomously** — the maintainer decides.
- A pillar judged "holds" on friendly-user evidence alone is recorded as *provisional*, not confirmed (Q14 / §8).
