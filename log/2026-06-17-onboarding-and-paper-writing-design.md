# 2026-06-17 — Design conversation: multi-channel onboarding, and an adapt-first paper-writing practice

A design session (maintainer + agent) converged on two related additions to the researcher-facing method. **Nothing normative changed yet** — this entry records the design and its reasoning so it can be drafted into the registry via `add-guideline` and shipped via `release-update` when the maintainer decides. Evidence status throughout: `proposed`/`speculative` (reasoning-based; the SNN pilot is the test). Bears on Q10, Q13, Q14.

## 1 · Onboarding — a richer profile, gathered cheapest-channel-first

**Motivation.** Onboarding today (G22) elicits six things by cold interview (who, goals, background/level, field proficiency, contract, skills), with the card (G23) carrying the person-level subset forward. The interview's own guardrail is "a colleague's first coffee, not a form" — so a *richer* profile would fight that guardrail **if it were all asked**. It need not be: most of the richer attributes can be inferred from materials the researcher already has (papers, repos, CV) or found online, then confirmed. That is lighter *and* richer, and it pays off most for **experienced researchers** — exactly the population with a paper trail to infer from.

**Two principles.**
- **Infer-then-confirm.** Cheap/passive channels draft the profile; the interview shrinks to confirming the draft plus the few things only the researcher can answer.
- **Every field earns its place.** An attribute is justified only by *what the agent does differently* with it (a pitch, a gate, a tool choice, a draft's voice). If nothing changes, it is surveillance, not profiling — leave it out.

**Channel cost ladder (cheapest-to-researcher first):** card (returning) → observed (passive, in-session) → online lookup (agent works; costs one permission + one approval) → shared materials (they hand over a file) → ask (their attention).

**The attribute × channel table** (the deliverable):

| What to know | What it changes (why it earns its place) | Channels — cheapest-to-user first | Confirm? |
|---|---|---|---|
| Career stage / role | default autonomy + gate strictness | online lookup → ask | Yes |
| Discipline & sub-field | vocabulary; what to assume vs. explain | online lookup → ask | Yes |
| Per-field proficiency *(+ method-vs-domain axis)* — G24 | gate-difficulty calibration | online lookup **drafts a guess** → researcher corrects → ask only if no record | Yes — the researcher's to own |
| Toolchain — academic / algorithmic / technical | artifacts in their formats; code in their stack; realistic workflows | GitHub + methods-sections lookup → one "what's your stack?" line for non-public bits (editor, compute) → observed | Yes (inferred part) |
| Voice & register | (a) explanations pitched in language they understand; (b) drafts — incl. the paper — in their voice, **owned by them at the gate** | their papers (lookup) + optional shared doc + observed | Yes |
| Verification anchors (advisor, target venues) | who the independent human is; what "done" means | online lookup → ask | Yes |
| Language / L2 | pitch of drafts + explanations | observed (first messages) | No — never ask |
| AI-trust narration | how much the agent *narrates* its checks (not *whether* — G3) | observed (first sessions) | No |
| **Research goals** (this project) | the point; cannot be inferred from past work | **ask** — project-bound, *not* carded | — |
| **Interaction contract** | modes, gate feel, delegation, what they keep | **ask** — propose defaults, they adjust | — |

Read top-to-bottom: eight of ten attributes are gotten by lookup or observation. The cold interview shrinks to the two irreducibly-personal items — **goals + contract** — plus *"correct my draft."* That is the experienced-user win, concretely: their interview is *shorter* than a novice's because there is more to look up.

**The batched permission-then-confirm protocol** (so the researcher approves once, not continuously):
1. One permission up front — Scholar / ORCID / GitHub.
2. The agent runs **all** queries in a single sweep and drafts the whole profile — no stopping to approve each find.
3. **One consolidated review** — everything found and inferred, approved or corrected in one pass (this single step does triple duty: confirmation, wrong-person disambiguation, privacy check).
4. Further rounds **only if the researcher wants them** — one-and-done is the default; refinement is their option.
5. **Optional offer alongside:** "If you'd like, send me a document or two you feel best represents you." Declinable, never a chore — best source for voice, and a backstop for what the lookup missed.
6. Then ask only the gaps: goals + contract.

**Deliberately not gathered ("nothing more"):** trajectory/ambition (thin — goals carry it), novelty appetite (G12 self-triggers), broad AI-trust posture (collides with G3 — only the *narration* of verification can vary, never whether it runs), depth/breadth as a separate field (already visible from per-field ratings). Each can earn its way back if it later proves it changes an agent action.

**Coherence.** Extends G22 (interview → multi-channel infer-then-confirm), G24 (proficiency can be lookup-drafted, not only self-rated), G23 (the richer profile is what the card compounds). Implementation would expand `context/profile.md` (new sections: voice & register, toolchain, verification anchors — marked optional/progressive) and add a returning/experienced lead-with-lookup path to `onboard`. The online lookup inherits the repo's trust-chain discipline: surface findings, never assume; confirm before relying.

## 2 · Paper-writing — an adapt-first, gate-carried practice

**Gap.** No current practice covers *writing the manuscript*. The `paper` skill is deep-*reading* a fetched source; G17 converges the five-part proposition (the seed), but the build-out to a full paper is unaddressed.

**The default we stand behind** (two phases):
- **Structure first — an argument graph, not just an outline.** The researcher and agent co-build a paragraph tree (sections → subsections → paragraphs), each node justified by what it contributes to the central thread. *"Does this paragraph serve the thread?"* is the gate question *during structuring* — a node that doesn't is a finding, cut or moved before any prose exists. This extends G17 from the proposition seed to the whole manuscript.
- **Then paragraph-by-paragraph, dialogically.** Go node by node; talk until a draft the researcher is satisfied with forms. **The researcher explaining the paragraph in their own words *is* the ownership gate** — the gate-carried posture (G20/G16) realized in the writing itself, which closes the empower/replace question by construction: prose that originates from the researcher speaking it cannot be ghostwritten-without-owning.

**Two axes, one loop — ownership *and* correctness.** Speaking fluently proves *ownership*, not *correctness*. Most correctness is handled upstream (concepts gate-stamped via G16, citations fetched via G10), but composition spawns *new* connective claims ("we show that…", "this implies…") that were never separately verified. So the paragraph loop keeps a light verification beat: a paragraph asserting something not traceable to an already-gated source is flagged and routed back to `gather`/`paper`, not into the draft. Ownership gate **+** citation check, one loop — otherwise the elegant move silently drops a load-bearing guarantee (G3).

**Freedom is paramount here — our approach is only the default.** Writing *process* is the most idiosyncratic thing an experienced researcher owns; a skill that marched them through our method would be the over-ceremony failure in pure form. So the skill is **adapt-first**: its opening move is *"how do you like to write?"*; it offers our default only if they have no method of their own, and otherwise finds its place in theirs. This is not a new mechanism — it is the existing override/deviation machinery (G20 override-after-one-explanation; the Stage-3 contract pattern: propose, adapt, record, never argue).

**What is invariant across any method** — the two *outcomes* the methodology exists to protect, not the process:
- **Ownership** (the paper ends up genuinely theirs — empower-not-replace), and
- **Citation integrity** (claims trace to fetched sources — G3/G10).

Any workflow can satisfy both; the agent threads them through the researcher's process rather than imposing a process to get them. The one method that *voids* an outcome — "just write the whole thing, I'll skim" — is handled like any override: the agent **names the stake once** ("done this way the paper ships, but the second output — your own writing development — isn't built here"), honors the call, and records it as a deviation. The methodology offers the empowering path as default and makes opting out conscious and visible; it never coerces (that would break "researcher independence first"). Such an opt-out is *evidence*, not failure — it tells the maintainer the empowering default is mis-priced.

**Granularity is the freedom knob.** Paragraph-by-paragraph is the default; for a fluent researcher it can become over-ceremony, so calibrate it the way gates calibrate (G24/G20) — paragraph-grain where capability is being built, "draft this subsection, I'll react" where they're fluent. Same productive-struggle band, applied to writing.

**Visualization — text-first, external optional.** Repo constraints (researcher writes nothing · near-zero cost · version-controlled · one-source-many-views) point to: the tree *lives* as a markdown outline the agent maintains, optionally rendered as a Mermaid mind-map (text → diagram, no tool to drive, diffs in git). Each node carries a provenance stamp (G15) — `agent-drafted` vs. `owned` (spoken-through) — so the tree doubles as the writing-phase **cursor** and a visible progress map. A true external interactive tool stays an *option* the researcher may pick, not the default (it costs them a tool to learn and breaks the agent-owns-the-artifact line).

**Coherence.** Realizes G20/G16 in the writing phase, extends G17, uses G15 provenance and G24 calibration; the writing-atrophy worry already has a home in G6 (periodic review notices when lately everything is agent-drafted prose the researcher hasn't reshaped) — so no new enforcement rule is needed. Note: `paper` is taken (reading), so the writer skill would be `write`/`manuscript`.

## 3 · Proposed landing (next step — not done)

Decided by the maintainer, drafted via the skills:
- **`add-guideline`** — two new registry practices: ≈ **G25** "Profile across channels; confirm before relying" (multi-channel infer-then-confirm, privacy-gated, every field earns its place); ≈ **G26** "Write the paper as an adapt-first, gate-carried practice" (structure-first argument graph → paragraph-by-paragraph where explain-in-own-words = ownership gate + citation check; process fully the researcher's, ownership + integrity invariant). Attributes: A16, A13 (both); A6/A8/A9 for the citation beat (G26).
- **`release-update`** — expand `context/profile.md`; add the lookup-first/returning path to `onboard`; add the new `write`/`manuscript` skill; README + skills-list discoverability. Starter as first consumer, per the channel.
- Both bear on Q10/Q13/Q14 (the interface under study); the pilot at its writing phase is the trial that would move them off `speculative`.

## Registry change

Both landed the same day (maintainer's call to land both, after this design conversation). Reasoning-led `proposed` entries — extending evidence-grounded parents, awaiting pilot evidence — in the pattern G23 set (a `proposed` entry citing "the interface evidence" + reasoning rather than a new evidence file).

**Practice:** G25 — Profile across channels; confirm before relying
**Change:** added at `proposed`
**Addresses:** A16, A13 (the interface evidence; Q14)
**Evidence:** extends G22/G23/G24 — [pilot team meeting](../evidence/interviews/2026-06-10-pilot-team-meeting.md), [pilot workspace audit](../evidence/observations/2026-06-10-pilot-workspace-audit.md); design reasoning in this entry
**Skill it protects:** the researcher's calibration of their own working contract — the agent drafts the profile from public signal but the researcher confirms/corrects it, keeping authority over how they are read; it also keeps onboarding cheap so the method doesn't tax the researcher (CLAUDE.md: near-zero cost)
**One-line motivation:** the cold interview underuses an experienced researcher's paper trail and re-asks what is public.

**Practice:** G26 — Write the paper as an adapt-first, gate-carried practice
**Change:** added at `proposed`
**Addresses:** A16, A13; A6, A8, A9 (the citation beat)
**Evidence:** extends the gate-carried posture — [professor interview](../evidence/interviews/2026-06-10-professor-classical-research-steps.md) (the classical explain-back instrument), [pilot audit](../evidence/observations/2026-06-10-pilot-workspace-audit.md); offloading risk in [cognitive-offloading reading](../evidence/reading/2026-06-15-product-validation-and-cognitive-offloading.md); design reasoning in this entry
**Skill it protects:** scholarly writing itself — by building the paper out of the researcher's own articulation (explain-in-own-words = the ownership gate), the practice develops the writing/argumentation capacity rather than ghostwriting it away; the citation beat protects verification skill (A6/A8/A9)
**One-line motivation:** fills a gap — no practice covered writing the manuscript (`paper` is deep-reading), and an ungated writing phase is exactly where empower silently becomes replace.

METHODOLOGY.md updated: §5 (Onboard step gains the cheapest-channel-first profiling; new step 6 "Write up", Share renumbered to 7), §6 (profile.md multi-channel clause; manuscript + paragraph tree in the store), §7 (rows G25, G26), §8 (profile.md, knowledge, onboard rows; new `write` skill row).

## Release

Both items are researcher-facing → shipped as [`updates/0004-multichannel-onboarding-and-paper-writing.md`](../updates/0004-multichannel-onboarding-and-paper-writing.md), `starter_version` **0.4.0**. Item 1 (G25): revised `onboard` skill + expanded `profile.md` (attachments) + inline CLAUDE.md/README edits. Item 2 (G26): new `write` skill (attachment) + inline CLAUDE.md/README edits. Applied to the starter template as first consumer (clean apply — no document fixes surfaced). Pushed: inquiry `ba46157..7d9d889`, template `16a9510..78bb7f6` (both `main`).

## Follow-on: `applies_from` guidance fix in the release-update skill

The 0004 test run surfaced a bug the draft inherited from `release-update`'s own step-3 guidance, which said to set `applies_from` to the previous release's **`cut_at`**. But a workspace's pin advances to the *fetched HEAD* when it consumes a release (`update` skill §4), not to that release's `cut_at`. So the 0002/0003 cohort is pinned at the **carrying commit** `ba46157` — a descendant of `cut_at` `7eda772` — and `applies_from: 7eda772` would have excluded them from 0004 entirely. Fixed in the shipped 0004 (`applies_from` → `ba46157`) and corrected the `release-update` SKILL.md guidance so it does not recur. Inquiry-internal (maintainer machinery) — no update document.

## Open-questions move (coherence duty)

G25 and G26 place new bets *under* questions already open, so they enter as subquestions (a new convention in [`foundation/03-open-questions.md`](../foundation/03-open-questions.md); maintainer-approved) rather than prose annotations — each can resolve independently of its parent:

- **Q13.1** (under Q13): does building the paper through per-paragraph explain-back build writing capability, or just offload it? — the G26 bet; the writing-phase instance of gate-carried apprenticeship, and the empower/replace question (Q10) applied to the deliverable.
- **Q14.1** (under Q14): does multi-channel, infer-then-confirm onboarding ease the transfer or add friction? — the G25 bet on the onboarding interface.

The G25/G26 registry rows now point at the specific subquestions (G25 → Q14.1, G26 → Q13.1) so the link runs both ways. No new entry under Q10 — each bet kept in one home and cross-linked. Neither subquestion is researcher-facing (the open-questions file is inquiry-internal) — no update document.
