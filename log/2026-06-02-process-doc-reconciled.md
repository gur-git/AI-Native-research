# Process sketch reconciled to the 0–7 phase scheme (2026-06-02)

Closed the coherence debt flagged when the agent operating guide landed: the long descriptive
process sketch still ran on its original `0a`–`9` decomposition while the operating guide (and the
README arc) used the reconciled `0`–`7` scheme. Two phase schemes for one process is exactly the
kind of drift the repo's coherence rule (`CLAUDE.md` §Coherence and revision) exists to prevent.

## What changed

`methodology/ai-native-research-process.md` is
restructured onto the same scheme the agent operating guide uses:

- Phases re-bucketed to **0 Orient · 1 Context · 2 Survey, then focus · 3 Design · 4 Execute · 5 Verify · 6 Disseminate · 7 Respond to review**. The old on-ramp gap is now an explicit Phase 0 (Orient); old 0a/0b/2 fold into Context and Survey-then-focus; old 1+3 into Design.
- The genuinely cross-cutting material — carry state, track both outputs, steer the portfolio / protect exploration, record provenance, and the empower/replace pause — is pulled **out of the sequence** into the Cross-cutting practices section, with guideline-traces leading (G2; G6/G7/G11; G11/G12; G15; G1), matching the guide.
- The **advise-not-march** stance is woven into the process intro (the three-pronged prime directive; proposed-path-not-pipeline; entry-flexible; the researcher decides and may change the methodology).
- The top note now states the doc simply *shares* the operating guide's scheme as the longer descriptive view, dropping the "being reconciled" hedge.

## How, and the check

A reconcile → verify → finalize workflow (4 agents) did the restructure with the agents reading the
actual files (no hand-transcription). Two adversarial verifiers ran against it: a coherence critic
(confirmed the phase scheme matches the operating guide 1:1 and the advisory stance is present) and a
preservation critic (recovered the pre-restructure original from git `51c07c5`, diffed field-by-field,
and confirmed every attribute/guideline trace, epistemic tag, caveat, limitation, and open question
survived, with **no stale phase references** and no tone regressions). The finalize pass restored the
few items the preservation critic found dropped in the intermediate draft (a carry-state skill clause,
a double-booking table row, a softened caveat, two trace-enumeration gaps). Spot-checked on disk
afterward.

The descriptive process doc and the agent operating guide now share one phase scheme — one source,
many views.
