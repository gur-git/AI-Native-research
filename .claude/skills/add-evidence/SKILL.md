---
name: add-evidence
description: Add a new piece of evidence (interview, experiment, observation, or noteworthy reading) to the repo with consistent structure and a log entry. Use when new input arrives that should be recorded before it informs the foundation or methodology.
---

# add-evidence

Add a new piece of evidence to the repo. Evidence is the substrate the foundation and methodology rest on; getting it logged consistently is the difference between an inquiry that compounds and one that drifts.

## When to invoke

- The maintainer (or a collaborator) has spoken with another researcher about how they work.
- A small structured self-experiment has been run and produced data.
- A working session was observed (the maintainer's own or someone else's) and yielded something worth noting.
- A paper, talk, or post added a non-trivial fact or framing to the inquiry's understanding.

If the input is "I read a thing and it was interesting" without a clear fact or framing, it belongs in the reading list, not as evidence.

## Inputs to gather

Ask the user (or determine from context):

1. **Type** — one of: `interview`, `experiment`, `observation`, `reading`.
2. **Source** — who or what (name, role, affiliation, or paper citation).
3. **Date** — date the evidence was produced or recorded. Convert relative dates to absolute (e.g., "last Thursday" → `2026-05-01`).
4. **Claim(s)** — the specific things this evidence asserts or supports. One bullet each.
5. **Confidence** — how strongly the evidence supports each claim: `strong`, `moderate`, `weak`, `anecdotal`. Be honest. A single conversation is rarely "strong."
6. **Raw material link** — if applicable: transcript, recording, code, paper URL, working-session log.
7. **Related foundation attribute(s)** — which AI attribute(s) from `foundation/01-ai-attributes.md` does this bear on? List by number.
8. **Related open question(s)** — which open questions from `foundation/03-open-questions.md` does this bear on? List by number. This field is how the open questions stay confronted with evidence rather than going stale.
9. **Implications** — what, if anything, does this suggest about the foundation or methodology? Mark as a *suggestion*, not a conclusion. Conclusions are drawn separately by `update-foundation` or `add-guideline`.

## File to write

Create `evidence/{type}/{YYYY-MM-DD}-{slug}.md` where `{slug}` is a 2–5-word kebab-case description.

Use this template:

```markdown
---
type: interview | experiment | observation | reading
source: <name or citation>
date: YYYY-MM-DD
confidence: strong | moderate | weak | anecdotal
related_attributes: [N, N, ...]
related_questions: [N, N, ...]
raw_material: <url or path, or "none">
---

# <short title>

## What was observed / claimed

<one or two paragraphs, neutral description>

## Specific claims

- Claim 1
- Claim 2

## Implications (suggested, not concluded)

- This bears on attribute N because ...
- This *might* support a guideline along the lines of ...

## Notes / caveats

<known limitations, alternate interpretations, follow-up questions>
```

## After writing

Append a one-line entry to today's log file (`log/YYYY-MM-DD-{topic}.md` if it exists, otherwise create it):

```
- Added evidence: [<title>](../evidence/{type}/{filename}) — <one-line summary>
```

If today does not yet have a log file, create it with a brief header explaining what shifted today.

Then **confront the open questions**: for each question this evidence bears on, say so explicitly in conversation and offer the move — *"this seems to answer QN / narrow QN / contradict QN — close it, revise it, or leave it?"* and *"this surfaces an uncertainty no question tracks — open one?"* The maintainer decides; actual changes to `foundation/03-open-questions.md` go through `update-foundation`. Offering is mandatory; acting is not.

## Reminders

- Evidence is descriptive. Resist the urge to draw conclusions in the evidence file itself. Conclusions live in `foundation/` and `METHODOLOGY.md`.
- Confidence labels are not modesty; they are the calibration signal future work will lean on. An interview with one person is `weak` to `moderate` no matter how persuasive the person was.
- If the evidence contradicts something in `foundation/`, do not silently fix the foundation. Add the evidence, log the contradiction, and let `update-foundation` handle the revision in a separate, deliberate step.
