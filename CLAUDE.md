# CLAUDE.md

Operating principles for any AI assistant (or person) working in this repo. Read this before doing anything else here.

## What this repo is

A public, evolving inquiry into AI-native research methodology. The diagnosis (what about AI forces research workflows to change) is settled enough to write down. The prescription (the methodology itself) is deliberately under construction, and is meant to be built up from evidence over time — interviews, structured self-experiments, observations of real working sessions, and the maintainer's own pilot research project.

The repo is not a framework. It is a record of an inquiry, in the open.

It is also, increasingly, meant to be *used*, not only read. The aim is that a working researcher could pick the repo up — and share it with peers — to run their own research in an AI-native way, eventually with no guidance but the repo itself. That gives everything here two first-class readers: the researcher, and the researcher's AI agent. Readability for the first and clean, loadable structure for the second are design priorities, not afterthoughts. This does not make the repo the kind of framework the inquiry rejects — the tools it ships encode current, revisable understanding, not a finished method — and *how* the methodology reaches a researcher and changes their practice (the interface itself) is treated as one of the inquiry's open research questions, not a settled mechanism.

The repo's charter — the compressed why and how, the commitments everything else aligns to — is in [`GOAL.md`](GOAL.md). The operating guidance in this file serves the charter. When they appear to conflict, the charter is authoritative and this file should be reconciled to it.

## Discipline

Four commitments shape how work in this repo should be done.

**Foundation-first.** Don't add to the methodology before the foundation supports it. If a guideline doesn't trace to an attribute and a piece of evidence, it doesn't go in.

**Evidence-driven.** Every claim in `foundation/` and `METHODOLOGY.md` should be traceable to something in `evidence/` or to a cited source. Untraceable claims are debt; flag them rather than letting them accumulate.

**Honest tone.** Observational, not promotional. The reader is a working researcher who can sense when something is overclaimed. Note things matter-of-factly. Distinguish what is known from what is suspected from what is speculation.

**Empower over replace.** The methodology's central principle (`GOAL.md` §The commitment, substantiated in `foundation/00-why-reimagine.md` §7). Tools and practices proposed in this repo should grow the researcher's capacity to do the research job at the level it is actually judged on, not substitute for that capacity. Every guideline must articulate the skill it develops, preserves, or risks substituting; guidelines that cannot are not added. Lower-level skills the researcher is comfortable letting AI handle (routine syntax, formatting, mechanical operations) are a different category — the principle is judged at the whole-job level. When AI is used to do work in this repo, the same standard applies at the same frame: the work should leave the maintainer more capable at the research job, not less.

## Building for researchers

The repo's deliverable for a researcher is **tools and guides, not research**. Work done here builds the methodology and the general, user-facing means by which a researcher (and their AI agent) can do their own research — it does not do any specific researcher's domain research for them. That is empower-not-replace applied to the user. When the inquiry has a pilot, the research itself lives in the researcher's own, separate, possibly private repo and stays theirs; this repo contributes the scaffolding, the operating guidance their agent runs on, and the channel to feed their experience back.

Three constraints follow:

- **General and shareable by default.** Build for a stranger online with no guide but the repo, not for one researcher or one domain. Specific adaptations come later, and only when a general version genuinely cannot serve.
- **Near-zero cost, researcher independence first.** The cooperation should cost the researcher as close to nothing as possible. Push the methodology to them, then let them work freely; it should empower the work, never hold it back.
- **The interface is under study.** What form of contact actually helps — what a researcher reads, what their agent runs on, what feeds back — is itself a research question the pilot is meant to answer. Prototype the lightest version and learn from it; do not fix it by fiat.

## Coherence and revision

Every addition is judged against the whole, not only on its own merits. New material — and new evidence when it arrives — must leave the repo's story coherent: a tool, guideline, or claim that contradicts another is a defect to reconcile, not a parallel truth to file beside it. Two practices keep that affordable:

- **One source, many views.** Don't restate a claim in several places. A tool or guide should be a *view on* the foundation and methodology, deriving from them, so that when understanding shifts the source changes once and the views follow — instead of copies drifting apart.
- **Mark the evidence level; stay revisable.** Much of what is written now rests on reading rather than the repo's own evidence. That is acceptable for now, provided it is marked as such (status tags on every practice in `METHODOLOGY.md`'s registry; `grounded`/`inferred`/`speculative` tagging on reasoning). When the pilot returns experience, the repo adapts to it; revision is expected, not a failure.
- **Keep the open questions alive.** Whenever work in this repo touches the territory of an open question (`foundation/03-open-questions.md`) — new evidence bears on one, a finding seems to answer one, a new uncertainty surfaces — the agent proactively offers to open or close a question. The maintainer decides; resolved questions move to the Resolved section with what resolved them. This is a standing duty, not a request-driven one.

## Structure

```
METHODOLOGY.md — the prescription, in one document: principles, posture, process, gates,
                 modes, and the practice registry (status-tagged, evidence-linked), plus
                 the mapping to the starter workspace.
foundation/    — the diagnosis. why research must be reimagined; what about AI forces this.
evidence/      — the substrate. interviews, experiments, observations, reading.
log/           — the chronicle. what happened in the inquiry, when, and why.
case-studies/  — the pilot(s). records of real research the methodology is applied to,
                 and the channels they feed back through.
updates/       — the downstream channel: versioned update documents, addressed to
                 researchers' agents, describing methodology changes and how to walk
                 a researcher through adopting them.
```

`METHODOLOGY.md` and `foundation/` are normative (claims about what is and what to do).
`evidence/` and `log/` are descriptive (records of what was observed and what happened).

The researcher-facing artifact is the **starter workspace** — a separate template repo that is the executable view of `METHODOLOGY.md` (its §8 maps every starter element to the practice it implements). When the methodology changes in ways researchers should hear about, the change ships as an update document in `updates/`. Nothing normative is stated only in the starter; the starter derives.

The repo's intellectual honesty depends on the descriptive side feeding the normative side, in that direction, with a paper trail.

## Skills

Four skills under `.claude/skills/` cover the core maintenance workflow. Use them rather than doing these operations ad-hoc.

- `add-evidence` — when a new interview, experiment, observation, or noteworthy paper has come in. Includes confronting the open questions: every evidence file names the questions it bears on, and the skill prompts an open/close offer when one is touched.
- `update-foundation` — when new evidence refines, contradicts, or extends a foundation claim (including opening and closing questions in `03-open-questions.md`).
- `add-guideline` — when an attribute plus accumulated evidence suggests a practice worth trying, or an existing practice's status should move. Targets the registry in `METHODOLOGY.md` §7.
- `inquiry-status` — quick read of where the inquiry stands, including evidence accumulated against each open question.
- `release-update` — release a researcher-facing methodology change as an update document in `updates/` (+ attachments for whole files), applied to the starter template as its **first consumer** (the document's test run) with versions and pins moved. One artifact, every copy: the template and users' workspaces consume the same document through the same process. The maintainer reviews and pushes; documents are immutable once published.

Each skill, when invoked, also writes to `log/` so the chronicle stays current.

## Things not to do

- Don't add a practice to the registry that isn't supported by at least one attribute and one piece of evidence, and can't name the skill it develops or protects.
- Don't add foundation claims without a citation or a clearly-marked "speculative" tag.
- Don't promote — describe. Avoid words like "revolutionary," "powerful," "game-changing."
- Don't claim AI capabilities the repo hasn't verified. Cite the source. If the source is the maintainer's own observation, log it as such.
- Don't push to git remotes unless explicitly asked.
- Don't bundle unrelated changes into a single commit. Commits should track conceptual moves.
- Don't do a specific researcher's domain research from this repo. Build the general tool or guide that lets them — and their agent — do it themselves.
- Don't restate a claim across files. Derive tools and guides from the foundation and methodology so the story keeps one source of truth.
- Don't build researcher- or domain-specific tooling where a general, shareable version would serve.

## Tone reference

When in doubt about tone, the standard is: **the kind of writing a careful researcher uses in a methods section.** Not the introduction. Not the discussion. The methods section. Specific, neutral, source-cited, comfortable with caveats.

## Status

Foundation v1 as of 2026-05-06: five documents (`00`–`04`) covering diagnosis, attributes catalog, innovation deep-dive, implications, and open questions. On 2026-06-10, on the first pilot-phase evidence (a professor interview, a pilot workspace audit, and a pilot-team meeting), the methodology was consolidated into [`METHODOLOGY.md`](METHODOLOGY.md) and revised: the posture moved from advise-don't-author to **gate-carried** (AI as junior colleague; interview-gates carry verification and the second output; registry entries G20–G22), G5 became the registry's first retirement, and the bet behind the revision is tracked as open question Q13. The `methodology/` folder and `HANDOFF.md` retired into it (texts in git history).

The repo is in its first user-facing phase. Its first pilot — and first user — is a real research project (the maintainer's own; documented in [`case-studies/snn-research/`](case-studies/snn-research/)), feeding back through standing channels: background audits of the pilot's workspace, conversations with the pilot team, and conversations with their supervising professor about how research is classically conducted. The researcher-facing artifact under assembly is the starter workspace (the executable view of `METHODOLOGY.md`); the `updates/` channel carries methodology changes to existing workspaces.
