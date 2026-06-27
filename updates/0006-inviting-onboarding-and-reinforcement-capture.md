# 0006 — Onboarding opens as an invitation; capture reinforcement, not only friction

```
date:            2026-06-27
applies_from:    any pin at or before 6010b8a59dd1424ef04854a864b030886a4cf5d2 (2026-06-22, the 0005 release)
cut_at:          e2eabd91d25e95dcbfe484a85d6e1d1549827d63   # the inquiry commit carrying the methodology change
starter_version: 0.6.0
lifecycle:       mixed   # Item 1 permanent; Item 2 dev-instrumentation
```

Two changes, both about the *interface* — the first encounter and the upstream signal it
feeds. **Item 1** (`permanent`) reshapes onboarding from a briefing into an **invitation**:
the agent checks the time, recommends a short exploratory talk about how the collaboration
works, and weaves the introduction in against a coverage checklist so the way of working is
understood rather than recited. **Item 2** (`dev-instrumentation`) makes `FRICTION/` capture
**both directions** — reinforcement (what visibly held) as well as friction (what chafed) —
so the maintainers see what works, not only what breaks. Source: `METHODOLOGY.md` §5 (process,
step 0), §6 (workspace, `FRICTION/`), §8, and registry **G22**; reasoning in the
[2026-06-27 log](../log/2026-06-27-inviting-onboarding-and-reinforcement-capture.md). Both are
reasoning-led `proposed` (Item 1 extends the evidence-grounded onboarding practices G22/G25;
Item 2 extends the in-the-moment instrumentation §6 already flags); they bear on the interface
open question Q14.1, and the first non-pilot onboarding is the test.

---

## Item 1 — Onboarding opens as an invitation, not a briefing · `lifecycle: permanent`

**What changed.** The first session is now run as the researcher's *first encounter with the
way of working*, not a setup form. `onboard` gains an opening stage (**Stage 0**): a brief
hello and a **time check** — the session runs ~10 minutes; if it is not a good time the agent
defers and re-offers next session (free, because an un-onboarded workspace re-triggers
`onboard` on its own) — then a **recommended** (not merely offered) short exploratory
conversation about how the collaboration works, what each side owns, and what the workspace
makes possible. The recommendation is made *once, with the reason, then the agent follows the
researcher's lead* — never pushed twice. **Stage 1** is reshaped from a briefing into
*introduce-by-weaving*: the posture, modes, gates, and skills are delivered woven into the
conversation as they become relevant, tracked against a **coverage checklist** so nothing is
missed even when it never comes up on its own — and a new must-cover beat, *"what's different
and what's possible,"* carries the heart of the encounter (research has two outputs; this
workspace keeps the researcher's growth in).

**Why.** The first encounter is where adoption is won or lost, and a briefing under-sells a
methodology whose premise is unfamiliar — the way of working should be *understood*, not
recited (`METHODOLOGY.md` G22, §5 step 0; bears on Q14.1).

**What to ask your researcher.** Nothing to decide — but open the first session this way:
check it is a good time (~10 min) before starting; recommend the exploratory talk once with
the reason and then follow their lead (if they would rather get straight to setup, weave the
introduction in as you go); and make sure every must-cover item is reached before onboarding
closes.

**How to apply.**

1. Replace `.claude/skills/onboard/SKILL.md` with the attachment
   [`0006-files/onboard-SKILL.md`](0006-files/onboard-SKILL.md) (it gains Stage 0, the
   reshaped Stage 1 with its coverage checklist, the updated returning-researcher path, and
   the reinforcement note in its friction-to-watch).

2. In `README.md` §Your agent's skills, replace the `onboard` bullet:
   - from: `- **onboard** — the setup interview. Runs once, at the start; with your permission it looks you up online first, so it confirms a profile with you rather than asking everything cold.`
   - to: `- **onboard** — the setup interview. Runs once, at the start; it opens by talking through how you'll work together — not just collecting answers — and, with your permission, looks you up online first so it confirms a profile with you rather than asking everything cold.`

---

## Item 2 — Capture reinforcement, not only friction · `lifecycle: dev-instrumentation`

**What changed.** `FRICTION/` capture was triggered only by *negative* signal (overrides,
deviations, confusion, skips, ceremony). It now captures **both directions**: alongside
friction, the agent captures **reinforcement** — a default that visibly held or paid off, a
mechanism the researcher explicitly endorsed, friction expected but absent. Each entry names
its direction. The `notable-only` guard is preserved and sharpened (a default *silently used*
is not notable; one endorsed or that visibly pays off is), so this does not become logging
every default that runs. The folder keeps its name.

**Why.** Capturing only what chafed biases the upstream stream the maintainers read toward
complaints — they never see what *worked*, which a methodology under test needs as much as
what failed (`METHODOLOGY.md` §6; the README already promised "helped or chafed", so the
capture rule had drifted from it).

**What to ask your researcher.** Nothing — this is background instrumentation. It does not add
to the researcher's burden; it widens what the agent notices on its own.

**How to apply.** In `CLAUDE.md`, replace the body of the **§Friction capture** section (the
intro paragraph through the last bullet, keeping the closing italic parenthetical) with:

> This workspace feeds the methodology that built it. Capture signal about *the way of working* (never the research) **in the moment it happens**, in the background — not in an end-of-session batch, which gets missed. Capture **both directions** — friction (what chafed) and reinforcement (what visibly held or paid off) — so the maintainers see what works, not only what breaks.
>
> - **Triggers.** Draft a `FRICTION/` entry when any of these occurs. *Friction:* the researcher overrides a gate; deviates from a methodology default; voices confusion, frustration, or pushback about a mechanism; skips or routes around a skill; or a step was ceremony that bought nothing. *Reinforcement:* the researcher explicitly endorses or values a default or mechanism; a default visibly pays off (a gate catches a real gap, a mode switch unblocks them); or friction you expected does not materialize. Mark each entry's direction.
> - **Notable only.** Capture what a maintainer would want to see — not every small thing. Over-capture is itself friction and skews the signal; a default *silently used* is not notable, one the researcher endorses or that visibly pays off is.
> - **Form.** Methodology only, readable out of context, `status: agent-drafted YYYY-MM-DD`. Tag each entry with its **direction** (friction / reinforcement), the **pillar** it bears on (feasibility / value / usability / efficacy / adoptability / integrity), and whether it is **scaffold** (an artifact of this self-documenting build) or **methodology** (a property of the method itself).
> - **Manner.** Draft in the background; mention it in one line; invite the researcher to add their own, in their words, marked as theirs; never nag.
> - Each skill names the signal characteristic of its moment; this is the rule they point back to. `session` does not own capture — it may sweep for stragglers, nothing more.

(The closing line — *"(This in-the-moment instrumentation is part of the current
self-documenting build; it thins for the eventual lean version.)"* — stays as is.)

---

## Closing (template mode / maintainer)

- Bump `starter_version` to **0.6.0** (minor — two behavior changes, no new files).
- Move the template's `pinned_commit` to this document's carrying commit once the inquiry repo
  is committed.
- Item 1 is `permanent`; Item 2 is `dev-instrumentation` — slated for clean removal with the
  rest of the in-the-moment friction instrumentation before the lean deploy build.
