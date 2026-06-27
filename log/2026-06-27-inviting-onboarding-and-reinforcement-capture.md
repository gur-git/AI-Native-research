# 2026-06-27 — Onboarding opens as an invitation; capture reinforcement, not only friction

A design conversation with the maintainer, in the run-up to handing the starter to the
first non-pilot user (a supervising professor, cloning fresh), produced two researcher-facing
changes. Both are about the *interface* — the first-contact experience and the upstream
signal it generates — so both land in `METHODOLOGY.md` and ship to the starter as update
**0006** (`starter_version` 0.6.0). Two distinct conceptual moves, shipped as two items.

## Change 1 — the first encounter opens as an invitation, not a briefing

**The problem.** `onboard` Stage 1 was an accurate *briefing*: it told the researcher the
posture, modes, gates, and skills, then moved on to building the profile. Nothing in it
invited the researcher to explore *how the collaboration actually works*, and the way of
working was recited rather than understood. The first encounter is where adoption is won or
lost; a briefing under-sells a methodology whose whole premise is unfamiliar.

**The change.** Onboarding now opens as the researcher's first encounter with the way of
working, run as one:

- A brief hello and a **time check** — the session runs ~10 minutes; if it is not a good
  time the agent defers and re-offers next session. The defer-and-return is free: an
  un-onboarded workspace (skeleton `profile.md`) re-triggers `onboard` on its own.
- The agent **recommends** — once, with the reason, then follows the researcher's lead — a
  short exploratory conversation about how the collaboration works, what each side owns, and
  what the workspace makes possible. Recommend, don't just offer; never push twice (a sales
  pitch kills the thing it is trying to create).
- The introduction (workspace, the three modes with when-useful, the gates, the skills on
  relevance) is **woven into that conversation against a coverage checklist** — organic
  delivery, guaranteed coverage: before onboarding closes, the agent checks the list and
  plainly covers anything that never came up on its own.

**Registry.** G22 revised (was *"Onboard through an interview that sets the contract"* →
*"Onboard through an invitation that sets the contract"*); §5 step 0 rewritten to match.
`proposed`, reasoning-led — extends the evidence-grounded onboarding practices (G22/G25);
the honest evidence is the maintainer's design intent that the first encounter must transmit
the way of working, not just collect a profile. The professor's onboarding is the first test.

## Change 2 — capture reinforcement, not only friction

**The problem.** `FRICTION/` capture triggered only on *negative* signal — overrides,
deviations, confusion, skips, ceremony that bought nothing. So the upstream stream the
maintainer reads to make methodology decisions was biased toward complaints: it recorded
where defaults *chafed* but never where they *held*. (The starter README already promised
both — *"what about this way of working helped or chafed"* — so the capture rule had drifted
from what the README said.)

**The change.** Capture is now **bidirectional**. Alongside friction, the agent captures
**reinforcement**: a default that visibly held or paid off, a mechanism the researcher
explicitly endorsed, friction expected but absent. Each entry names its direction. The
`notable-only` guard is preserved and sharpened — a default *silently used* is not notable;
one the researcher endorses or that visibly pays off is — so this does not turn into logging
every default that simply ran. The `FRICTION/` folder keeps its name (renaming is a
workspace-shape break); only what it captures widens.

**Where.** METHODOLOGY.md §6 (the `FRICTION/` bullet) and §8 (the upstream sync-channel
line); the starter's `CLAUDE.md` §Friction capture (intro, triggers, notable-only, form).
`lifecycle: dev-instrumentation` — it extends the in-the-moment instrumentation §6 already
flags as part of the self-documenting build, to thin for the lean version. No registry
guideline (friction capture lives in §6, not the G-numbered registry).

## Open-question moves

Change 1 bears on **Q14.1** (does multi-channel, infer-then-confirm onboarding ease the
transfer, or add friction?) — the invitation framing is now part of the onboarding-interface
bet that question tracks; G22 repointed to Q14.1. Offered to the maintainer rather than
edited into Q14.1's body unprompted; the question's framing already covers the onboarding
interface as the object of study. No new question opened: both changes are *how* existing
practices are delivered, not new uncertainties.

## Release

Released 2026-06-27 as update **0006** → starter **0.6.0** (Item 1 onboarding, `permanent`;
Item 2 reinforcement capture, `dev-instrumentation`). Applies from any pin at or before the
0005 release (`6010b8a`). The maintainer reviews and pushes — inquiry first, then template —
before the professor clones.
