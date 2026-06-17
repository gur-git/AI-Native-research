# 0004 — A multi-channel onboarding profile, and an adapt-first way to write the paper

```
date:            2026-06-17
applies_from:    any pin at or before ba46157 (2026-06-16, the 0002+0003 release)
cut_at:          381be8f77530ddde9cf1b2a5222f40a1dfa81ff2   # the inquiry commit this release was cut from
starter_version: 0.4.0
lifecycle:       permanent
```

Two changes, both `permanent`. **Item 1** makes onboarding gather a fuller researcher profile while *asking less* — by looking up what is public before asking. **Item 2** adds a `write` skill so the paper is composed with the researcher, structure-first, in a way that keeps the writing theirs. Source: `METHODOLOGY.md` §5 (process), §6 (workspace), §8, registry **G25** and **G26**; reasoning in the [2026-06-17 design log](../log/2026-06-17-onboarding-and-paper-writing-design.md). Both are reasoning-led `proposed` practices (extending evidence-grounded parents); they bear on the interface open questions (Q10/Q13/Q14) and the pilot is the test.

---

## Item 1 — Profile across channels; confirm before relying · `lifecycle: permanent`

**What changed.** Onboarding no longer elicits the whole profile by cold interview. With the researcher's permission, the agent first looks them up online (Scholar, ORCID, lab page, GitHub) in **one batched sweep**, drafts the profile from public sources, and brings it back for confirmation in **a single pass** — so the interview spends the researcher's attention only on what is irreducibly theirs (goals, the interaction contract) and on correcting the draft. The profile gains three sections — **voice & register**, **toolchain**, **verification anchors** — and an optional invitation for the researcher to share a representative document. Every profile field still earns its place by what the agent does differently with it.

**Why.** The cold interview underuses an experienced researcher's paper trail and re-asks what is already public; cheapest-channel-first is lighter *and* richer, and it pays off most for experienced researchers (`METHODOLOGY.md` G25; bears on Q14, Q10).

**What to ask your researcher.** Ask permission, once, to look them up online before the interview — *"so I don't make you re-supply what's public; I'll show you everything I find and infer, and you correct it."* Show the findings in one consolidated pass for approval (this is also the wrong-person and privacy check). Optionally invite a paper or two that best represents them. If they decline the lookup, or have little online presence, fall to the fuller interview. Returning researchers still import a card (G23).

**How to apply.**

1. Replace `.claude/skills/onboard/SKILL.md` with the attachment [`0004-files/onboard-SKILL.md`](0004-files/onboard-SKILL.md) (it gains the permission → batched-lookup → one-pass-confirm flow, the optional-document offer, and the three new profile sections in its write step).

2. Update `context/profile.md`:
   - **If the workspace is not yet onboarded** (`profile.md` still the skeleton): replace it with the attachment [`0004-files/profile.md`](0004-files/profile.md).
   - **If the researcher is already onboarded** (a real profile exists): do **not** overwrite it — that is their content. Add the three new sections from the attachment — **## Voice & register**, **## Toolchain**, **## Verification anchors** — to their existing `profile.md`, leaving everything else intact, and offer to fill them (a quick permissioned lookup, or a few questions).

3. In `CLAUDE.md` §The workspace, replace the `context/profile.md` bullet:
   - from: `- **`context/profile.md`** — who the researcher is, their goals, the interaction contract from onboarding. Update it when the contract changes (the researcher's call).`
   - to: `- **`context/profile.md`** — who the researcher is, their goals, the interaction contract, and the multi-channel profile (field proficiency, voice & register, toolchain, verification anchors) — drafted cheapest-channel-first and confirmed at onboarding (G25). Update it when the contract or situation changes (the researcher's call).`

4. In `README.md` §Your agent's skills, replace the `onboard` bullet:
   - from: `- **onboard** — the setup interview. Runs once, at the start.`
   - to: `- **onboard** — the setup interview. Runs once, at the start; with your permission it looks you up online first, so it confirms a profile with you rather than asking everything cold.`

---

## Item 2 — Write the paper as an adapt-first, gate-carried practice · `lifecycle: permanent`

**What changed.** A new `write` skill composes the paper. It is **adapt-first**: it asks how the researcher likes to write and fits into their method. Absent a method of their own, it offers the methodology's default — co-build the paper's structure as an **argument graph** (a paragraph tree, each node earning its place against the through-line), then draft **paragraph by paragraph** in conversation, where the researcher articulating a paragraph in their own words *is* the ownership gate, carried with a parallel citation check (fluency proves ownership, not correctness). Two outcomes hold under any method: the researcher owns the paper, and every claim traces to a fetched source. The one method that voids ownership (whole-paper ghostwrite) is met by naming the stake once and recording it — never refused.

**Why.** No skill covered writing the manuscript (`paper` is deep-*reading*), and an ungated writing phase is exactly where empower silently becomes replace (`METHODOLOGY.md` G26; the [cognitive-offloading reading](../evidence/reading/2026-06-15-product-validation-and-cognitive-offloading.md)).

**What to ask your researcher.** When they reach write-up, ask *how they like to write* before proposing anything, and fit into it. Offer the structure-first default only if they have no method of their own. Set the granularity with them — paragraph-by-paragraph where they are building the skill, coarser where they are fluent.

**How to apply.**

1. Install `.claude/skills/write/SKILL.md` from the attachment [`0004-files/write-SKILL.md`](0004-files/write-SKILL.md) (new skill).

2. In `CLAUDE.md` §Skills, insert `write` into the list after `ideate`:
   - from: `` `ideate` (diverge, researcher ranks first, converge) · `session` (end-of-session ritual) ``
   - to: `` `ideate` (diverge, researcher ranks first, converge) · `write` (compose the paper — structure first, then paragraph by paragraph) · `session` (end-of-session ritual) ``

3. In `CLAUDE.md` §The workspace, append to the `context/knowledge/` bullet (after "An unstamped note is visibly just AI output."): ` Once the project reaches writing, the manuscript and its paragraph tree (the argument graph, provenance-stamped per node — `write` skill, G26) live here too.`

4. In `README.md`:
   - §Your agent's skills — add a bullet after `ideate`: `- **write** — compose the paper with you: structure first, then paragraph by paragraph, where explaining a paragraph in your own words is how it becomes yours.`
   - §What's in the folder — in the `context/` bullet, add "the paper as you draft it" to the list: `...the knowledge built (notes are marked with the gates they passed), the paper as you draft it, and the records of decisions and gate conversations.`

---

## Closing (template mode / maintainer)

- Bump `starter_version` to **0.4.0** (minor — new skill + behavior change).
- Move the template's `pinned_commit` to this document's `cut_at` once the inquiry repo is committed.
- Both items are `permanent` — no later removal is scheduled.
