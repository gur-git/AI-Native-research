# 0005 — Teaching mode: a third mode, and the gate named as its verify-mirror

```
date:            2026-06-22
applies_from:    any pin at or before 7d9d8892eed937bce6ef99e8aaea75bc4cc81e9f (2026-06-17, the 0004 release)
cut_at:          e2dcf392e101938ca069189d5e984b7655b69388   # the inquiry commit carrying the methodology change
starter_version: 0.5.0
lifecycle:       permanent
```

One change, `permanent`. A **teaching mode** joins work and conversation. Conversation mode had
been doing three jobs — gate-interviews, peer exploration, and teaching — so the teaching stance
(asymmetric teacher→student toward one target idea, a ladder climbed one rung per turn) is named
in its own right. Naming it also clarifies the other two: **conversation** becomes purely
symmetric peer exploration, and the **gate** is named explicitly as the *verify event* —
teaching's mirror. Source: `METHODOLOGY.md` §4 (modes), §3 (gates), registry **G27** and the
revised **G21**; reasoning in the [2026-06-22 design log](../log/2026-06-22-teaching-mode.md).
Reasoning-led `proposed`; grounded strands are the productive-struggle band and
active-engagement-over-offloading readings, plus the explain-back field evidence; bears on Q13/Q14;
the pilot is the test.

All edits are inline (no whole files installed). Each mode is introduced **with *when it is
useful*** — at onboarding and in the README — so the researcher can steer them.

---

## Item 1 — Teaching mode, and the gate as the verify event · `lifecycle: permanent`

**What changed.** A third mode, **teaching** — the agent takes the teacher's hat toward one
idea, breaks it into a ladder, and climbs one rung per turn, building from what the researcher
already knows. It *teaches the material in full*: its check-in questions pace and confirm the
researcher is with it; they never gatekeep the explanation — **withholding-to-verify is the
gate's job**. It is structural, not summoned: the default way understanding is built in `learn`
and the default way a gap a gate exposes is closed (calibrated to proficiency, so it fires only
on a real gap). The **gate** is now named as the verify event — teaching's mirror — and each mode
is introduced with when to reach for it.

**Why.** Conversation mode was overloaded, and the methodology named the checkpoint (the gate)
but not the construction (teaching) of understanding (`METHODOLOGY.md` G27; the
[ZPD reading](../evidence/reading/2026-06-16-optimal-difficulty-zpd.md) and the
[cognitive-offloading reading](../evidence/reading/2026-06-15-product-validation-and-cognitive-offloading.md);
explain-back from the professor interview and the pilot audit).

**What to ask your researcher.** Nothing to decide — but introduce the three modes with *when each
is useful*, and (if they want inline diagrams while you teach) mention that the Claude app renders
inline visualizations where other surfaces may not.

**How to apply.**

1. **`CLAUDE.md` §Modes** — replace the whole section body:
   - from: `Two named modes. Introduce them at onboarding; honor them by name at any time.` … through the `- **conversation mode** …` bullet ending `…becomes the record.`
   - to: the three-mode body — `Three named modes. Introduce them at onboarding **and whenever first relevant, each with *when it's useful*** …` with bullets **work mode** (`*Reach for it when* the next step is clear and simply needs doing.`), **conversation mode** (peers; reach for it when something needs thinking-through before acting; skip when simple), and **teaching mode** (teacher's hat toward one idea; ladder one rung per turn; *teach the material in full* — check-in questions pace, they never gatekeep, withholding-to-verify is the gate's job; productive-struggle band; switch angle on a struggle; illustrate inline and note the Claude app is the better surface; structural — the default build move in `learn` and to close a gate-gap; hands to a gate). *(Copy the block from the template's `CLAUDE.md` §Modes — it is the canonical text for this release.)*

2. **`CLAUDE.md` §Gates** — in the opening sentence:
   - from: `A gate is an interview-conversation at any point where something is about to be relied on:`
   - to: `A gate is the **verify event** — an interview at any point where something is about to be relied on: … . It is teaching's mirror — where teaching builds understanding, the gate checks it, withholding help while the researcher demonstrates.`

3. **`README.md` §Your agent's modes** — replace the two-mode list with three: **work mode** (*When:* the next step is clear and just needs doing), **conversation mode** (just talking, as equals; *When:* something needs thinking through before you act), **teaching mode** (walks you up to one idea a step at a time, the questions keep pace and never withhold the explanation; *When:* you need to understand something you'll build on — usually it just does this while learning the field or closing a gap a gate found). Open with `Ask for any by name, anytime — and your agent will tell you when each is useful:`.

4. **`README.md` §Your agent's skills** — `learn` bullet:
   - from: `then teach it to you in conversation.`
   - to: `then teach it to you (teaching mode).`

5. **`.claude/skills/onboard/SKILL.md`** — Stage 1:
   - the **modes bullet**: from `**The two modes, by name:** *work mode* … and *conversation mode* …` to `**The three modes, by name, with when each is useful:** *work mode* … , *conversation mode* … , and *teaching mode* (walk them up to one idea a rung at a time, checking they're with you and never withholding the explanation; when they need to understand something they'll build on — usually you just do it while learning the field or closing a gap a gate found).`
   - the **gate paragraph**: `a gate is an interview-conversation …` → `a gate is the verify event — an interview … (teaching's mirror: where teaching builds understanding, the gate checks it).`

6. **`.claude/skills/learn/SKILL.md`** — point the teach step at teaching mode:
   - description: `build the understanding with the researcher in conversation` → `… in teaching mode`.
   - intro: `The researcher's contribution is the conversation. … the understanding is built in chat` → `The researcher's contribution is the back-and-forth. … the understanding is built in **teaching mode**`.
   - heading `### 4. Teach it in conversation` → `### 4. Teach it (teaching mode)`, and its lead line: `teach from it in **teaching mode** … Convey the material in full, interactively, not a lecture; your check-in questions pace and confirm they are with you, they never gatekeep the explanation (withholding-to-verify is the gate's job, step 5):`

7. **`.claude/skills/gate/SKILL.md`** — name it the verify event:
   - description: `Run an interview-conversation that verifies …` → `Run an interview — the verify event — that checks …`.
   - §1 Open: `Enter **conversation mode** and say so. The gate is read-only talk until the outcome step.` → `The gate is the **verify event** (teaching's mirror) — read-only talk, and say so: you withhold and probe rather than explain, until the outcome step.`
   - §5 Outcome: `The gate ran in conversation mode;` → `The gate ran read-only (the verify event);`

---

## Closing (template mode / maintainer)

- Bump `starter_version` to **0.5.0** (minor — new mode + reconciled skills, no new files).
- Move the template's `pinned_commit` to this document's carrying commit once the inquiry repo is committed.
- `permanent` — no later removal scheduled.
