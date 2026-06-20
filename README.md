# AI-native research

AI changed what it costs to produce research output — and quietly changed what it costs to *become* a researcher. This repo is an open inquiry into how research should be done when you work with AI: the reasoning, the evidence, and the methodology that comes out of them, developed in public against a real pilot project.

It is a record of an inquiry, not a finished framework. The diagnosis — what about AI forces research workflows to change — is settled enough to act on. The prescription is grown from evidence over time, and every part of it is marked with how much we actually know.

**If you came here to *do* research, not to read about it:** the usable artifact is the **[starter workspace](https://github.com/gur-git/ai-native-research-starter)** — a template repo you copy ("Use this template"), open with your AI agent, and begin; your agent runs an onboarding conversation and takes it from there.

## The idea, in one minute

Every earlier tool of knowledge work took a skill and handed back a new one. The calculator would not compute until you knew what to ask; you grew because the tool insisted on it. AI is the first tool that does not insist: a sentence in, a draft out. You can produce passable work indefinitely without building any compensating capacity — though that work is quietly below what the same prompt produces in skilled hands.

So the usual reassurance — *the worker is still skilled, just at different things* — fails for AI, and it fails hardest for a researcher, whose real second output is **themselves**: a person who can do harder work next time than last. The methodology here answers with one principle: **empower, not replace** — judged at the level of the whole job, not at who does the typing.

What that means in practice, as of the current revision: the AI works like a **junior colleague** — it does the heavy lifting, including writing every document, and is never fully trusted — while the researcher contributes through conversation and **gates**: interview-style checkpoints where understanding is articulated, directions are chosen and defended, and nothing counts as known or done without passing through one. Whether gates can carry the researcher's development the way doing-the-work used to is the methodology's central open bet, and the pilot exists to test it.

The full argument is in [`GOAL.md`](GOAL.md) (the charter) and [`foundation/00-why-reimagine.md`](foundation/00-why-reimagine.md). The methodology itself — posture, process, gates, modes, and every practice with its status and evidence — is one document: [`METHODOLOGY.md`](METHODOLOGY.md).

## Why you can trust it

This is written for a working researcher, so it tries to earn trust the way you would want it earned:

- **Evidence-driven, and honest about the gaps.** Every claim traces to a source or is marked as the maintainer's own observation. Every practice in the registry is status-marked — almost all still `proposed`: hypotheses under live test, not validated results — and the registry says so.
- **No selling.** You will not find "revolutionary" or "10x" here. Where something is speculative it is tagged speculative; where the evidence is thin it says so.
- **It revises in the open.** Practices move through `proposed` → `testing` → `adopted` → `retired`, and the reasoning stays visible in [`log/`](log/). The registry already carries its first retirement. A methodology that never changes has stopped being honest about a technology that is still moving.

## What's here

- **[`GOAL.md`](GOAL.md)** — the charter. The why, the how, and the commitments everything else aligns to. Read first.
- **[`METHODOLOGY.md`](METHODOLOGY.md)** — the bridge from theory to practice: principles, the working posture, the process, gates and modes, the practice registry (each entry status-tagged and evidence-linked), and the mapping to the starter workspace.
- **[foundation/](foundation/)** — the diagnosis: the central argument, the catalog of 17 AI attributes (5 clusters, each tagged structural / temporary / ambiguous), the implications, and the open questions the inquiry is working to close.
- **[evidence/](evidence/)** — the substrate: interviews, observations, literature notes, surveys, a self-study stream, and an annotated reading list. Everything normative traces here.
- **[log/](log/)** — the chronicle: what changed in the inquiry, when, and why.
- **[case-studies/](case-studies/)** — the pilot's documented record and the channels it feeds back through (the research itself lives in the researcher's own repo).
- **[updates/](updates/)** — the downstream channel: versioned update documents, written for a researcher's *agent*, describing methodology changes and how to walk a researcher through adopting them.

## A reading path

- **Five minutes:** [`GOAL.md`](GOAL.md).
- **Fifteen:** add [`METHODOLOGY.md`](METHODOLOGY.md) — the current answer, end to end.
- **An hour:** add [`foundation/00-why-reimagine.md`](foundation/00-why-reimagine.md) and [`foundation/01-ai-attributes.md`](foundation/01-ai-attributes.md) — the full argument and the catalog everything traces to.
- **The whole picture:** `foundation/` in order, the [innovation literature note](evidence/literature-notes/innovation-as-different-operation.md), the [open questions](foundation/03-open-questions.md), then the [reading list](evidence/reading-list.md).

## What this is not

- Not a framework asserted upfront — it is grown from evidence, and practices get retired in the open.
- Not a way to do research faster while letting AI do more of it. Faster-but-hollowing is the failure mode it exists to push against.
- Not a recipe for autonomous research. The reimagining is about *your* workflow; every gate presumes a human at it.
- Not a competitor to system-level efforts (FutureHouse, DeepMind co-scientist, PSI / GPD, Sakana). It works at a different layer — an individual or small group using best-in-class tools well.
- Not finished. Expect revision.

## Status

Foundation v1 as of 2026-05-06: five documents covering the argument, the attribute catalog, implications, and open questions. On 2026-06-10 the methodology was consolidated into [`METHODOLOGY.md`](METHODOLOGY.md) and revised on the first pilot-phase evidence: the posture moved from advise-don't-author to gate-carried (registry G20–G22; first retirement G5; the bet tracked as Q13). The pilot — the maintainer's own research project — is running; the starter workspace is published as the methodology's executable form, and evolving.

## How the inquiry maintains itself

Skills under [`.claude/skills/`](.claude/skills/) keep the methodology honest as it grows: `add-evidence` (record an interview, experiment, observation, or reading — and confront the open questions), `update-foundation` (revise a foundation claim with traceability), `add-guideline` (add or move a practice in the registry), and `inquiry-status` (where things stand, including evidence accumulated against each open question). The discipline is foundation-first, evidence-driven, observational in tone, and *empower over replace*. Full operating principles are in [CLAUDE.md](CLAUDE.md).
