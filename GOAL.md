# GOAL

The primary document of the repo. Everything else in the repo aligns to this: the foundation substantiates it, the methodology operationalizes it, the evidence grounds it, the log chronicles the work of carrying it out. Read first.

## Purpose

This repo exists to develop a methodology for research in an AI-native world — a way of doing research that takes the specific properties of AI seriously, refuses the trade those properties tempt the researcher into, and is built from observation rather than asserted from the armchair.

The methodology is being grown in the open, with its reasoning visible, so that another researcher reading along can borrow what works, contest what doesn't, and see the inquiry as it actually moves.

## What changed about research

Every prior tool in the history of knowledge work — the calculator, the compiler, GPS, the search engine — took a skill from the user and required a new one in return. Operating the tool was itself an exercise of skill. The user kept growing because the tool insisted on it. We never had to name this property of tools; no tool had ever lacked it.

AI is the first tool that does not insist. A sentence in, a draft out. The user can produce passable output indefinitely without developing any compensating capacity at all.

A real skill set is forming around AI use — judgment about what to delegate, verification of plausible-looking output, workflow design, taste developed through repeated practice. The researcher who develops it gets two things at once: a compensating capacity of the kind prior tools always gave back, *and* materially better results from AI than the unskilled user gets. The skill is what separates AI slop from work a researcher should be willing to put their name on. The benefit is therefore double — better output now, and growing capacity that compounds.

The break is not that the skill is unavailable; it is that the skill is *optional* in a way no prior tool's compensating skill was. The calculator would not compute if you did not know what to type. AI will give you something usable from one underspecified sentence — usable enough to feel like progress, but qualitatively below what the same prompt would have produced in skilled hands. The default path is the worse one on both axes: weaker output and no growth.

A note on trajectory. As AI capabilities improve, the floor of what an unskilled user can produce will rise. The ceiling of what a skilled user can produce will rise with it, and the skill set itself will shift as AI shifts. Having the appropriate skill set — whatever its current shape — remains beneficial across that trajectory. The scenario in which the floor catches the ceiling, where even the basic skills of articulating what one wants and recognizing when the output is right stop mattering, would correspond to a regime in which AI works without human involvement at all. This repo does not address that regime.

This break hits research harder than it hits other knowledge work. Research has two outputs, not one. There is the artifact — the paper, the dataset, the proof. There is also the researcher, a person who can do harder work next time than they could last time. The second output is built almost entirely through the routine peripheral work that surrounds any research project — reading, analyzing, drafting, testing, replicating. That work is the apprenticeship. It is also exactly what AI is best at taking over.

A researcher can ship strong papers and quietly hollow out. They will not notice. By the time they need a capacity that did not develop, they will not remember when they stopped building it. The standard reassurance — *the worker is still skilled, just at different things* — fails specifically for AI, and it fails hardest for the apprentice researcher.

The substantiated form of this argument is in [`foundation/00-why-reimagine.md`](foundation/00-why-reimagine.md). The catalog of AI's specific properties that matter for research practice is in [`foundation/01-ai-attributes.md`](foundation/01-ai-attributes.md). The treatment of innovation as a categorically different operation from recombination — central to why AI's coverage is asymmetric — is in [`evidence/literature-notes/innovation-as-different-operation.md`](evidence/literature-notes/innovation-as-different-operation.md).

## The call to action

Adoption is happening with or without methodology. Researchers are using AI individually, fast, in whatever way feels efficient. Most institutional responses so far have been to adopt the tools and not to adapt around them. The default at the institutional level is *"let people figure it out."* The default at the individual level is the trap above.

Inertia is not neutral. Waiting is a vote for the default. The window in which the field's working norms are being set is open now and will not stay open; whatever practice dominates the next few years will harden into how research is done. Setting those norms well requires people working out the practice in public, on real work, with their reasoning visible.

This repo is one such effort. Its scale is deliberately small — one researcher's working artifact, with the inquiry's full chain of reasoning preserved as it goes — because a methodology for AI-native research has to be developed at the scale at which research is actually done. The system-level projects (FutureHouse, the DeepMind co-scientist line, Sakana, GPD, PSI) operate at a different layer. They ask whether AI can do research. This repo asks how a researcher should do research, given that AI exists.

## The commitment

The methodology this repo is building responds to the break with a single principle: **empower, not replace.**

The principle applies at the level of the whole job, not at the level of every micro-task. A researcher who lets AI handle a piece of routine code syntax, a citation format, or a unit conversion has lost a skill — and most of the time that loss is fine. Skills below the level at which research value is created are skills the methodology is comfortable seeing replaced; the replacement is what frees attention for the work that compounds.

What the methodology insists on preserving is the skill set required to do the research job at the level it is actually judged on: answering a deep research question responsibly, framing the question well, designing investigations that would convincingly verify, recognizing when a result is too good, knowing which threads to develop and which to drop, building the taste and the verification habits that make the work trustworthy. These are the skills the apprenticeship is for. They are what the second output of research is built from, and what AI is most fluent at producing surface imitations of.

Empower-vs-replace is therefore a question asked at the level of the whole job, not at every individual prompt:

> *Will my capacity to do the research job — at the framing at which the job is judged — be greater as a result of how I use AI here, or smaller?*

**Empower** is AI used in ways that let a researcher do more or better research than they could have otherwise, while continuing to build the capacity that lets them keep doing so — including the capacity to use AI itself well, since fluency with AI is part of what producing valuable research now requires.

**Replace** is AI used to produce, at the level the job is judged on, outputs the researcher could not have produced themselves and now will not learn to produce. The output exists; the capacity does not develop, and over time may atrophy.

The boundary between skills that may be safely replaced and skills that must be preserved is not fixed. As AI improves, it moves upward: capacities that today are central to the job may become routine enough that their replacement is fine, and the preserved skill set shifts to meet the new frontier. The principle is stable. The line it draws moves with the technology. The researcher's task is to keep that line in view and to keep building the skills above it, whatever those skills happen to be at the time.

The principle is not a slogan. It is a question to be made visible at the choices that matter — the choices where AI's output would be the substantive contribution of the moment — and the methodology's job is to make that question easy to ask and possible to answer.

## How the repo operates, and why

Five operating choices follow from the commitment. Each is a response to a specific way the inquiry could fail.

**Inquiry, not framework.** A methodology asserted upfront — neat, complete, ready to apply — would itself be the failure mode the methodology exists to prevent. The right practices for AI-native research are not yet known. They have to be grown from observation of researchers actually doing the work. The repo therefore proceeds as an inquiry: it records what was read, what was tried, what worked, what didn't, what was changed and why. The first imperfect version is more useful than the perfect-but-future one.

**Foundation-first.** The diagnosis — what about AI forces the workflow to change — is settled enough to write down and is treated as load-bearing. Practices that do not trace to the diagnosis are debt: they sit in the methodology as orphans, drift over time, and corrupt the inquiry's ability to revise itself. The foundation is the substrate the rest aligns to.

**Evidence-driven.** Every claim in the foundation and every guideline in the methodology traces to something concrete in `evidence/` — an interview, a structured trial, a logged working session, a noteworthy reading — or to the maintainer's own observation, marked as such. Untraceable claims are flagged rather than allowed to accumulate. This is not academic decoration; it is what allows the methodology to be revised honestly when evidence shifts.

**Observational tone.** The repo writes in the voice of a careful researcher's methods section, not the introduction or the discussion. Specific, neutral, source-cited, comfortable with caveats. The reader is assumed to be a working researcher who can sense overclaiming. Promotional vocabulary — *revolutionary, powerful, game-changing, transformative* — is out, because it would undermine the inquiry's main asset, which is the trust that what is written can be relied on.

**Visible revisions.** The methodology will be wrong about things. It will retire guidelines. It will revise foundation claims as evidence accumulates. The revisions are the value. A methodology that does not visibly revise has stopped being honest about a technology that is still changing.

## What advancing the inquiry looks like

Advancement is not measured by output volume. It is measured by three movements happening together:

- Claims in the foundation get more firmly traced — to specific evidence in `evidence/`, to specific working sessions, to specific sources — rather than resting on first-pass reasoning alone.
- Practices in the registry in `METHODOLOGY.md` move through their status states (`proposed` → `testing` → `adopted` → `retired`) only as evidence supports the move, never on momentum. The set of `adopted` practices is a deliberately slow-growing artifact; that is correct.
- Open questions in [`foundation/03-open-questions.md`](foundation/03-open-questions.md) get narrowed, sharpened, partially answered, or resolved and moved to the bottom of that file. New questions enter as the inquiry surfaces them.

A pilot research project acts as a sustained test of the methodology on a real research problem. The research itself stays in the researcher's own repo — separate from this one, and theirs to keep private or public as they choose (the first pilot's workspace is public); what lives here, in [`case-studies/`](case-studies/), is the *documentation* of the methodology applied to it: evidence, recorded as scaffolding, for how the inquiry's conclusions are backed. That documentation is provisional — when the repo is published it is removed, or recast into a more user-facing form that lets a reader see what the conclusions rest on without reproducing the raw record. The first pilot is the maintainer's own research; alongside it the inquiry continues to develop on working sessions and on conversations with other researchers.

## Status

GOAL v1, 2026-05-17. Foundation v1 has been in place since 2026-05-06 — five documents covering the central argument, the AI-attributes catalog, the implications gesture, and the open questions. The methodology — consolidated into `METHODOLOGY.md` on 2026-06-10 — carries a practice registry begun with 15 initial guidelines and revised on the first pilot-phase evidence: the posture moved from advise-don't-author to gate-carried (a bet tracked as open question Q13), and the registry recorded its first retirement (G5). Evidence collection beyond the initial reading list has begun — the staged literature survey under [`evidence/survey-2026-05/`](evidence/survey-2026-05/), a self-study stream, a lab survey, and the pilot's first interviews and audits. The first pilot research project is running (the maintainer's own), and the researcher-facing artifact — the starter workspace, a template repo — is published as the methodology's executable view.

Revisions to this document are made deliberately and rarely. The foundation, methodology, evidence, and log are the moving parts; the goal is the fixed point against which their motion is judged.
