# 0007 — Replies very short by default; the `illustrate` skill

```
date:            2026-06-28
applies_from:    any pin at or before dbc920dfb39bcb2a235876a366c57fa1b39d5b5b (2026-06-27, the 0006 release)
cut_at:          abe4b25ca3582f14fd855d01b37374c6f39be808   # the inquiry commit carrying the methodology change
starter_version: 0.7.0
lifecycle:       permanent
```

Two changes, both about how the agent *delivers* — the shape of its turns and the pictures
in them. **Item 1** makes terse-and-fast conversational replies the explicit, ambient default
(the researcher can lengthen it), after a researcher skipped an onboarding because the agent's
replies were long and slow. **Item 2** adds an **`illustrate`** skill: cheap, custom, inline
diagrams that arrive *with* the prose — the realized form of teaching mode's "visual where it
helps" clause (G27/§4), lifted out of teaching into a cross-cutting tool the agent reaches for
in `learn`, at a gate, in a `gather` landscape, or in conversation. Source: `METHODOLOGY.md`
§4 (modes, the shared talking-modes rule + the visual clause), §8 (mapping), registry **G22**
and **G27**; evidence in the [2026-06-28 log](../log/2026-06-28-update-0007.md). Both are
reasoning-led: Item 1 from a single relayed onboarding observation (Q14.1), Item 2 from a
maintainer hypothesis (Q13.2); the illustrate clause stays `speculative` and the friendly-pilot
trial is the test.

---

## Item 1 — Replies very short by default · `lifecycle: permanent`

**What changed.** The talking-modes rule was "short and fast by default." It is now **very
short by default** — terse, a few sentences, never a report — expanding only when the
researcher asks for more (a deeper dive when the *work* calls for it is unchanged). The default
is **ambient**: it holds from the first message, before onboarding sets anything. It is also an
**adjustable interaction-contract setting** — onboarding proposes it and records the
researcher's preference in `profile.md`; a researcher who wants longer replies gets them. The
elicitation of the researcher's input is *not* reduced — short agent turns, full interview.

**Why.** A researcher's first onboarding stalled because the agent's replies were long and
slow: he skipped the opening and skimmed (`METHODOLOGY.md` §4, G22; bears on Q14.1).

**What to ask your researcher.** Nothing to decide up front — default to very short, fast
replies and expand only when they ask. At onboarding, propose it as a contract default and
record their preference (some will want longer); a standing "be more/less terse" adjusts it
any time.

**How to apply.**

1. In `CLAUDE.md` §Modes, replace the shared-rule sentence:
   - from: `Talking modes are read-only, short and fast by default (a deeper dive only when the work calls for it), and on the researcher's explicit release your first act is to summarize what was concluded (the input for any edits, and the record).`
   - to: `Talking modes are read-only and **very short by default** — terse, a few sentences, never a report; expand only when the researcher asks for more (a deeper dive — read a source, check a fact — only when the work calls for it). This terse default is ambient: it holds from the first message, before onboarding sets anything, and the researcher can adjust it in the interaction contract (\`profile.md\`). On the researcher's explicit release your first act is to summarize what was concluded (the input for any edits, and the record).`

2. In `context/profile.md`, in the **## Interaction contract** parenthetical, add response
   length to the list of recorded items:
   - from: `… modes, gate cadence and feel, delegation preferences, anything overridden …`
   - to: `… modes, gate cadence and feel, response length (default: very short — terse replies, expanded only when the researcher asks for more), delegation preferences, anything overridden …`

3. In `.claude/skills/onboard/SKILL.md` Stage 4 (the interaction contract), add a bullet after
   the "Chat-first" bullet:
   `- Replies are very short by default — a few crisp sentences, not reports; the agent expands only when the researcher asks for more depth. (This is the talking-modes terse-by-default rule, METHODOLOGY §4 — surfaced here as an adjustable contract default, not a new policy.)`
   and extend the "Record their choices" sentence so the chosen setting is written into
   `profile.md`'s Interaction contract alongside the other contract choices.

---

## Item 2 — The `illustrate` skill · `lifecycle: permanent`

**What changed.** A new skill, **`illustrate`**, installs the craft of fast, custom, inline
illustration as a first-class tool. One primitive — *draw this, inline, now* — a small
hand-authored SVG that arrives *with* the prose (no "generating an illustration" detour), in a
locked house style, used wherever a teaching beat lands (`learn`, a gate gap, a `gather`
landscape, conversation). It renders inline on surfaces that support it (the Claude app) and
**degrades silently** elsewhere — saving the figure beside its sentence and linking it, or an
ASCII sketch — so the flow is never broken. This realizes G27/§4's inline-visualization clause,
which **stays `speculative`**: the skill is how that clause now reaches real use.

**Why.** Cheap custom illustration is a strong explanatory advantage the agent has, and the
methodology only used it as a teaching-mode footnote (`METHODOLOGY.md` G27/§4; a maintainer
hypothesis, bears on Q13.2). It ships at the friendly-pilot trial; first-use friction and
reinforcement are the evidence that would move the clause off `speculative`.

**What to ask your researcher.** Nothing to decide — the agent reaches for an illustration on
its own when a picture sharpens a point, and the researcher can ask for one ("draw / illustrate
X") any time. Tell them once that the Claude app is the better surface for inline illustration;
elsewhere figures are saved beside the explanation and linked.

**How to apply.**

1. Install the skill: create `.claude/skills/illustrate/SKILL.md` from the attachment
   [`0007-files/illustrate-SKILL.md`](0007-files/illustrate-SKILL.md) (exact content; do not
   reconstruct).

2. In `README.md` §Your agent's skills, add after the `learn` bullet:
   `- **illustrate** — draw a concept as a quick, purpose-built diagram so it lands faster (your agent reaches for this on its own while teaching). Inline diagrams render in the Claude app; on other surfaces it saves the picture beside the explanation and links it.`

3. In `CLAUDE.md` §Skills, add `illustrate` to the roster after `learn`:
   `… · \`learn\` (map + draft + teach one concept) · \`illustrate\` (purpose-drawn inline diagram of a concept) · \`gate\` (the interview gate) · …`

4. In `CLAUDE.md` §Modes, teaching-mode bullet, name the skill on the existing inline-illustration
   mention:
   - from: `illustrate inline where it helps (and tell them the Claude app is the better surface for it)`
   - to: `illustrate inline where it helps via the \`illustrate\` skill (and tell them the Claude app is the better surface for it)`

5. In `.claude/skills/onboard/SKILL.md` Stage 1 skills roster, name `illustrate` next to `learn`
   (introduced on relevance, no roll-call):
   - from: `\`learn\` (map and draft one concept, then teach it), \`gate\` (the interview at closure points),`
   - to: `\`learn\` (map and draft one concept, then teach it), \`illustrate\` (draw a concept as a quick diagram while teaching), \`gate\` (the interview at closure points),`

6. In `.claude/skills/learn/SKILL.md` Step 4 (Teach it), add a bullet after "Build up from what
   the profile says they know; one piece at a time.":
   `- Where a concept is clearer as a picture (a mechanism, a comparison, a flow), reach for the **illustrate** skill — one purpose-drawn inline diagram per concept; note the Claude app renders these inline where other surfaces save-and-link instead.`

7. In `.claude/skills/gate/SKILL.md` §3 Conduct, add after the source-grounding bullet ("ground
   every correction in a source the researcher can open."):
   `- When a correction or a worked-through gap is clearer as a picture, the **illustrate** skill can draw it — but at the frontier a diagram is never the source; the correction is still grounded in something the researcher can open.`

8. In `.claude/skills/gather/SKILL.md` §4 (Synthesize), append to the closing sentence ("End by
   handing the terrain back."):
   `Where the terrain is clearer drawn — a comparison table, an options-vs-costs map — the **illustrate** skill can render it inline; the picture still lays out the landscape, it never makes the selection.`

---

## Closing (template mode / maintainer)

- Bump `starter_version` to **0.7.0** (minor — two behavior changes + one new skill file).
- Move the template's `pinned_commit` to this document's carrying commit once the inquiry repo
  is committed.
- Both items are `permanent`. The `illustrate` skill realizes G27/§4's inline-visualization
  clause, which stays `speculative` — first-use `FRICTION/` signal (a picture that landed; one
  that broke flow or read as decoration) is the evidence that would move it.
