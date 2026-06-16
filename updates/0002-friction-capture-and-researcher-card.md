# 0002 — In-the-moment friction capture, and carrying the researcher across projects

```
date:            2026-06-15
applies_from:    any pin at or before 5e05cfc (2026-06-10)
cut_at:          7eda772655b5e32489bcff88b5bd0faf2716e65f   # the inquiry commit this release was cut from
starter_version: 0.2.0
lifecycle:       mixed               # items tagged individually
```

Two changes. **Item 1** changes how the workspace reports friction (dev-instrumentation — it will be removed before the lean deploy build). **Item 2** adds a permanent way to carry a researcher's profile between projects. Source: `METHODOLOGY.md` §6 (friction), §5/§8 + registry **G23** (researcher card); reasoning in the [validation-apparatus log](../log/2026-06-15-validation-apparatus.md) and [`VALIDATION.md`](../VALIDATION.md) §6.

---

## Item 1 — Friction captured in the moment, not at session end · `lifecycle: dev-instrumentation`

**What changed.** Friction about the *way of working* is now captured as it happens — at an override, a deviation from a default, confusion or pushback, a mechanism skipped or routed around, ceremony that bought nothing — instead of being drafted in a batch at session end. `session` no longer owns friction; it only sweeps for stragglers. Entries are tagged by **pillar** and by **scaffold vs. methodology**.

**Why.** End-of-session capture is a single moment that gets missed, which made the friction signal — the methodology's primary upstream evidence — unreliable. Binding capture to the friction event makes it robust and records it fresh ([`VALIDATION.md`](../VALIDATION.md) §6). This is dev-stage self-documentation and thins for the lean build.

**What to ask your researcher.** Nothing to decide — it is how the agent works, in the background. Tell them friction notes now appear when something about the method chafes (never about their research), and that they can add their own anytime.

**How to apply.**

1. In `CLAUDE.md`, add this section immediately after **## Proactive explanation duty**:

   ```markdown
   ## Friction capture

   This workspace feeds the methodology that built it. Capture friction about *the way of working* (never the research) **in the moment it happens**, in the background — not in an end-of-session batch, which gets missed.

   - **Triggers.** Draft a `FRICTION/` entry when any of these occurs: the researcher overrides a gate; deviates from a methodology default; voices confusion, frustration, or pushback about a mechanism; skips or routes around a skill; or a step was ceremony that bought nothing.
   - **Notable only.** Capture what a maintainer would want to see — not every small thing. Over-capture is itself friction and skews the signal.
   - **Form.** Methodology only, readable out of context, `status: agent-drafted YYYY-MM-DD`. Tag each entry with the **pillar** it bears on (feasibility / value / usability / efficacy / adoptability / integrity) and whether it is **scaffold** (an artifact of this self-documenting build) or **methodology** (a property of the method itself).
   - **Manner.** Draft in the background; mention it in one line; invite the researcher to add their own, in their words, marked as theirs; never nag.
   - Each skill names the friction characteristic of its moment; this is the rule they point back to. `session` does not own capture — it may sweep for stragglers, nothing more.

   *(This in-the-moment instrumentation is part of the current self-documenting build; it thins for the eventual lean version.)*
   ```

2. In `CLAUDE.md` **## Session ritual**, replace the **End** bullet (`run the session skill — update state.md, propose context/records/ entries, draft FRICTION/ entries.`) with: `run the session skill — update state.md, propose context/records/ entries, sweep for any uncaptured friction (capture happens in the moment, above — not here).`

3. In `CLAUDE.md`, in the workspace `FRICTION/` bullet, note that entries are *captured in the moment (see Friction capture) and pillar/scaffold-tagged.*

4. In the `session` skill: update the frontmatter description (replace "draft FRICTION/ entries" with "sweep for any uncaptured friction (friction is captured in the moment, not here)") and replace step 3 ("Draft `FRICTION/` entries — in the background") with a straggler-sweep step — friction is captured live; this step only catches what was missed, and notes that quantitative session metrics are derived later from the persisted workspace, not computed here.

5. In each of `learn`, `gate`, `paper`, `gather`, `ideate`, `update`, `onboard`, add a short **## Friction to watch** note that points back to `CLAUDE.md` §Friction capture and names that skill's characteristic friction (a mis-pitched note; a test-like gate; an unresolvable citation; noisy confidence tags; a generic divergence; a confusing update; the interview feeling like a form). One or two lines each.

---

## Item 2 — Carry the researcher across projects via a card · `lifecycle: permanent`

**What changed.** A new `researcher-card` skill creates a portable, **person-level** card (default: profile only; opt-in to carry more). `onboard` gains a *returning-researcher* branch that imports a card and confirms it in place of the cold interview. Registry **G23**; one workspace stays one project.

**Why.** The profile is person-level and shouldn't be re-elicited each project, but a new project should stay a clean workspace (no context bleed). The card carries the researcher forward; the import-and-confirm is also the moment to re-pitch level. (`METHODOLOGY.md` G23; bears on Q14.)

**What to ask your researcher.** If they are starting a *new, separate* project, offer to make a card from this workspace to seed the next one. If they arrived *with* a card, `onboard` imports it — confirm what changed since it was written.

**How to apply.**

1. Install `.claude/skills/researcher-card/SKILL.md` from this document's attachment `0002-files/researcher-card-SKILL.md`.

2. In the `onboard` skill, add a **## Returning researcher — import a card instead** section after the intro paragraph ("This is a colleague's first coffee, not a form."): if the researcher arrives with a `researcher-card.md`, read it, run a short confirmation conversation (what changed; the new project's goals) instead of the cold interview, still do Stage 1 and Stage 4, then write `profile.md` from the card and seed `state.md` from the new project per Stage 5. Only with no card, run the full interview.

3. In `CLAUDE.md`, append to the **## Skills** line: `· researcher-card (carry your profile to a new project's workspace)`.

4. In `README.md` (the discoverability contract, METHODOLOGY §8): add a `researcher-card` bullet to **## Your agent's skills**, add a `researcher-card.md` line to **## What's in the folder**, and add `researcher-card` to the skills list the `onboard` skill recites in its Stage 1. A new skill must appear on the README, or it is unreachable by recognition.

---

## Closing (template mode / maintainer)

- Bump `starter_version` to **0.2.0** (minor — behavior change).
- Move the template's `pinned_commit` to this document's `cut_at` once the inquiry repo is committed.
- This document's Item 1 is `dev-instrumentation`: a later document will remove it for the lean deploy build.
