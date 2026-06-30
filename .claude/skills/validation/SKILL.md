---
name: validation
description: The engine for the methodology's own validation (VALIDATION.md), in two phases. PRE-SHIP (before pushing anything) — run the mechanical gate (prepush-check), the scoped dry-run predictor suite (D1–D6, as a multi-agent workflow), and the mission-critical live-test gate, then give a push recommendation. POST-FIELD (periodically / when a tripwire fires) — extract the cheap metrics, judge whether the six pillars hold, run the calibration loop, and propose open-question moves (delegating edits to update-foundation). Triggers on "validate", "run validation", "validate before push", "diagnose the pillars".
---

# validation

The two test layers of [`VALIDATION.md`](../../../VALIDATION.md), made runnable. §2 there splits validation into **predictors** (cheap, pre-ship) and **ground truth** (field). This skill is both, as two phases:

- **Phase A — Pre-ship:** before you push *anything*. The gate that says "this change is safe to ship."
- **Phase B — Post-field:** after real use. The diagnose engine that says "the evidence is calling for a change, or reinforcing our assumptions."

It does not gather evidence (`add-evidence`) or edit the foundation (`update-foundation`); it *runs the tests and judges*. **Delegate, don't merge**: reuse `inquiry-status`, hand foundation edits to `update-foundation`, route product fixes to `release-update`.

---

# Phase A — Pre-ship (run before a push)

The order is cheap-to-expensive; stop and report at the first blocker.

## A1 · Mechanical gate

Run `prepush-check` (`bash .claude/skills/prepush-check/check.sh`). A **fail blocks the push** — fix it first (links, pin, version, attachment fidelity, headers). This is the deterministic floor; the dry-run suite below is judgment.

## A2 · Scope the change to its pillars

Read the staged diff (`git diff --stat origin/main..HEAD` in both repos). Pick the dry-run tests whose pillars the change actually touches — running all six on an evidence-only commit is waste:

| The change touches… | Run | Pillars |
|---|---|---|
| onboarding, a skill, the modes, workspace shape, the README | D1, D2, D3 | feasibility, usability, value |
| a Hard Line, a gate, a citation rule, the trust chain | D4 | integrity, feasibility |
| any METHODOLOGY ↔ starter change (a derived view) | D5 | feasibility, integrity |
| an efficacy claim, Q13, the gate-as-remedy argument | D6 | efficacy |
| evidence-only, log-only, or maintainer-internal tooling (no researcher-facing change) | none | — (mechanical gate is enough) |

When unsure whether a pillar is touched, include its test.

## A3 · Run the dry-run predictor suite

Run the **`dry-run-validation`** workflow (Workflow tool, `name: "dry-run-validation"`) with the scope from A2:

```
args: { summary, touchedFiles, dTests: ["D1","D4",…], inquiry, starter }
```

Each D-test is a dedicated agent (a real cold-start walkthrough, an adversarial red-team, a persona role-play, a theory critique — not a checklist), returning **pass / flag / fail** per pillar. Read its rollup:

- **fail** (a concrete, reproducible defect) → **blocks**; fix before pushing. If the failure is one the suite *should* have a standing case for, that is a calibration item (Phase B §4 / VALIDATION.md §3).
- **flag** (a real risk) → does **not** block; it is the maintainer's call (shipping with a flagged risk is allowed, VALIDATION.md §2). Surface it plainly for decision.
- **pass** on every run test → proceed.

## A4 · Mission-critical gate (rule-classified; maintainer confirms)

Classify the change. It is **mission-critical** if it: (a) changes researcher-facing behavior that ships **beyond the friendly-pilot pool**, or (b) touches the **trust chain or a Hard Line**, or (c) changes **workspace shape**. (Evidence/log/internal-tooling pushes are not.)

If mission-critical, **before pushing**, prompt the maintainer to **run the change live in their own workspace** first — a real loop exercising exactly what changed (an onboard, a `learn`→`gate`, the specific behavior) — to catch what dry runs predict but cannot feel, and because the friendly pool over-reads the soft pillars (VALIDATION.md §8). The maintainer confirms it behaved, or overrides with a recorded reason. This is a human step; never simulate it as done.

## A5 · Clearance

Report: the mechanical result, the dry-run rollup (per-pillar + flags needing a decision), the mission-critical classification and its live-test outcome. Then either **cleared to push** — with the order: **inquiry first, then template**, never rebase/squash after pinning — or the **blockers to fix first**. The push itself is the maintainer's (never push without explicit confirmation).

---

# Phase B — Post-field (diagnose: change or reinforce?)

The ground-truth half. Invoke periodically, when a cheap tripwire fires, or before a release that claims to fix a pillar failure.

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

- **Failed empirically but the dry test passed** → the dry test was blind. Open **two** items: a product-fix item, and a "dry test insufficient" item — propose a new or strengthened dry-run case (the field failure becomes a regression test) and add it to VALIDATION.md §3 with the failure that motivated it. (Add it to the `dry-run-validation` workflow's `DTESTS` so the pre-ship suite actually runs it.)
- **Failed and the dry test had flagged it** → product-fix item only.

A failed empirical test never closes with just a bug report; it must also leave the dry suite better.

## 5 · Confront the open questions

For each question the evidence bears on (Q13, Q11, Q10, Q14 are the apparatus's natural ones): state in one line whether the evidence *narrows, supports, contradicts, or answers* it, or surfaces a new uncertainty. Then **offer** the move — close / revise / open / relate / merge — to the maintainer. The maintainer decides; the actual edit to `foundation/03-open-questions.md` goes through `update-foundation`. Offering is mandatory; acting is not, and is never done here.

## 6 · Write the diagnosis

- A log entry: pillars judged, calibration-loop items opened, question moves offered.
- Dry-suite additions into VALIDATION.md §3 (the regression tests from step 4), and into the `dry-run-validation` workflow.
- Hand the question moves to `update-foundation` and the product fixes to `release-update` (researcher-facing) or the relevant skill.

---

## Hard lines

- **Pre-ship is advisory on flags, blocking on fails.** A flag never blocks a push — it is surfaced for the maintainer's decision; only a concrete `fail` (or a mechanical `prepush-check` failure) blocks.
- **Never simulate the mission-critical live test** — it is a human step; report it as not-done until the maintainer confirms.
- **Never edit `foundation/03-open-questions.md` or the foundation here** — propose; `update-foundation` enacts.
- **Never report a cheap proxy as a success metric** — it is a tripwire that triggers investigation, nothing more.
- **Never close an open question or alter a guideline status autonomously** — the maintainer decides.
- A pillar judged "holds" on friendly-user evidence alone is recorded as *provisional*, not confirmed (Q14 / §8).
- **Never push.** This skill clears or blocks; the maintainer pushes.
