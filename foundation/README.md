# foundation/

The diagnosis. This is where the inquiry lays out *why* research must be reimagined and *what* about AI forces the reimagining. The methodology that follows ([`../METHODOLOGY.md`](../METHODOLOGY.md)) is built up from this diagnosis plus accumulating evidence; nothing is in the methodology that does not trace back to something here.

The repo's compressed charter — the why and how stated for the repo as a whole — is in [`../GOAL.md`](../GOAL.md). The documents in this directory are the substantiated long-form of that charter's argument.

If you have five minutes, read `../GOAL.md`. If you have ten minutes, read `00-why-reimagine.md` — the front door of this directory, containing the full argument in compact form. The other files are detailed extensions: the catalog of AI attributes, the gestures toward methodology, and the open questions.

## Reading order

The numbering reflects suggested reading order. Each file points to the others it relies on.

| File | What it is | Job it does |
|---|---|---|
| **`00-why-reimagine.md`** | The argument | Establishes the reader's starting point, takes it one step further (AI is the first tool that substitutes for skill without reciprocal skill development), names the urgency, and proposes the central mindset shift (empower, not replace). The front door. Contains the recombination/innovation distinction in §3. |
| **`01-ai-attributes.md`** | The catalog | Seventeen attributes of AI in five clusters, each tagged `structural` (likely permanent), `temporary` (likely solvable), or `ambiguous`. The detailed substrate `00`'s argument rests on. |
| **`02-implications.md`** | The gestures | What the diagnosis pulls toward in terms of methodology — five directions, framed under the empower-not-replace meta-frame. Inputs to the methodology, not outputs of it. |
| **`03-open-questions.md`** | The honest gaps | Twelve questions the foundation does not have settled views on, with what would resolve each. |

## Where the innovation deep-dive lives now

The literature synthesis on innovation that backs `00`'s §3 — Campbell BVSR, March, Stanley, Sarasvathy, plus the synthesis of how those bear on AI-assisted research — used to live as a foundation document. It was moved to [`../evidence/literature-notes/innovation-as-different-operation.md`](../evidence/literature-notes/innovation-as-different-operation.md) on 2026-05-06, because its register (literature review and synthesis) is evidence rather than normative claim. The foundation-level claim about innovation — that it is a different operation from recombination, that AI is structurally a parallel exploitation engine, that AI cannot do retrospective selection — is in `00` §3 and `01` (A1, A4). The literature note is the substrate.

## How this directory changes

Foundation files are normative — they make claims about how things are, and what those claims imply. They change when evidence in [`../evidence/`](../evidence/) accumulates against a current claim or extends it. Use the [`update-foundation`](../.claude/skills/update-foundation/SKILL.md) skill rather than editing these files ad-hoc; the skill enforces the traceability trail that keeps the foundation auditable.

Each file ends with a *Last revised* footnote that points to the date and motivation of the most recent change. The log in [`../log/`](../log/) carries the longer history and the reasoning behind each substantial revision.

## What's in scope and what isn't

**In scope:** claims about AI's structural properties, claims about how research is structurally exposed to those properties, the central mindset shift the methodology operationalizes, gestures toward what the methodology will need to do, open questions.

**Out of scope here, lives elsewhere:**
- Specific practices → the registry in `../METHODOLOGY.md` §7
- Source material that shaped the foundation → `../evidence/reading-list.md`
- Literature syntheses that inform foundation claims → `../evidence/literature-notes/`
- Records of how the foundation has changed and why → `../log/`
- The pilot research project the methodology will be applied to → `../case-studies/`
