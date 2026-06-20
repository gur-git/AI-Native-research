# evidence/

The substrate. Every claim in `foundation/` and every guideline in `METHODOLOGY.md` should trace to something in here.

## Structure (provisional)

- **`reading-list.md`** — annotated list of papers, talks, posts, and interviews that shaped the foundation. The first entries are the sources used to draft `foundation/00-why-reimagine.md` and `foundation/01-ai-attributes.md`.
- **`literature-notes/`** — deeper synthesis of bodies of literature that inform foundation claims. The first entry is `innovation-as-different-operation.md`, which synthesizes the BVSR / exploration-exploitation / novelty-search / effectuation lines into a working position on innovation that the foundation's §3 (`00-why-reimagine.md`) draws on. Future literature notes (e.g., on the Engelbart augmentation lineage, on creativity research more broadly) will live here.
- **`interviews/`** — conversations with researchers about how they actually work with AI.
- **`lab-surveys/`** — surveys administered to a group of researchers (e.g., a lab) about their AI use. Distinct from `interviews/` (1:1) in being multi-respondent and, typically, ongoing — the entries are living documents that get regenerated as responses accumulate. First entry: `lab-surveys/ai-tool-use-2026/`.
- **`experiments/`** — small structured self-experiments. Time-on-task with and without AI. Replication trials. Calibration tracking.
- **`observations/`** — logs of real working sessions. The maintainer's own, primarily, but contributable.
- **`self-study/`** — the maintainer's own AI-native practice observed as evidence: retrospective audits of existing working artifacts against the guidelines, and prospective instrumentation of selected guidelines. The first evidence stream opened to move guidelines off `proposed`. Explicitly n=1 and paired with the external streams (`lab-surveys/`, interviews) that carry the generalization questions.

This structure is provisional. As evidence accumulates, the right shape will emerge — different categories, different file conventions, possibly per-project subdirectories. Expect this README to be revised.

## How to add evidence

Use the `add-evidence` skill. It enforces the schema and writes the log entry. Hand-rolling evidence files invites silent inconsistency that compounds painfully over months.

## What counts

- **Interview** — a substantive conversation with a working researcher, with their consent that it can be summarized publicly. If consent is partial (e.g., anonymous, no quotes), say so in the file.
- **Experiment** — a structured trial with a stated question and recorded outcome. n=1 self-experiments count, but they must be honest about being n=1.
- **Observation** — a working session, recorded with enough fidelity that another reader could understand what happened. Could be a transcript, an annotated diff, a session recording, or detailed notes.
- **Reading** — a paper, post, or talk that added a non-trivial fact or framing. Annotate what specifically it added; "interesting" is not annotation.

## What doesn't

- Vibes. "AI is so much better at X now" without measurement is not evidence; it's a hypothesis worth testing.
- Marketing material from AI labs about what their models can do. Their benchmarks live in the reading list as data points; their press releases do not.
- Personal opinion divorced from a working session. If you think AI fails at Y, log a session where it failed at Y.
