# Validation

How this inquiry tests whether its methodology actually works. [`METHODOLOGY.md`](METHODOLOGY.md) states *how a researcher should work*; this document states how *we* find out whether that is true — what "valid" means here, how we test it before and after shipping, and how the findings feed back into the methodology and the open questions.

This is **maintainer-facing apparatus**. It does *not* ship to researcher workspaces, and nothing in it changes what a researcher's agent does. The one researcher-facing thing the apparatus needs — friction captured in the moment, and the artifact discipline it reads — lives in `METHODOLOGY.md` and reaches workspaces through the update channel like any other change.

**Status:** `proposed`, like everything in this inquiry. The six pillars, the tests, and the calibration loop below are themselves a hypothesis about how to validate the methodology — under test by their own first use ([dry-run pass logged 2026-06-15](log/2026-06-15-validation-apparatus.md)) and by the pilot. Where the apparatus proves wrong, it revises like the rest. Grounding for the framing and the efficacy concern: [the validation/offloading reading](evidence/reading/2026-06-15-product-validation-and-cognitive-offloading.md).

---

## 1 · What "valid" means — six pillars

The product under validation is the **researcher-facing artifact**: the starter workspace plus the agent behaviour `METHODOLOGY.md` prescribes. Validity decomposes into six pillars — the IDEO desirability/feasibility/viability triad, refined by Cagan's value/usability split and an efficacy/integrity separation that a research tool specifically needs.

| Pillar | The question it asks | Lifecycle |
|---|---|---|
| **Feasibility** | Does the machinery work as built — onboarding, skills, gates, the channels? | stays |
| **Value** | Will the researcher *choose* this over their current way of working? | stays |
| **Usability** | Can they *operate* it unaided — open the workspace, say "start," survive the gate ritual? | stays |
| **Efficacy** | Does it deliver the *dual outcome* — better research **and** a more capable researcher? (This is open question Q13.) | stays |
| **Adoptability** | Will they come *back* — a second session, a second project — not just try it once? | stays |
| **Integrity** | Does the trust chain hold — no hallucinated citation, no agent overstep, survives? | stays |

Two of these are easy to collapse and must not be. *Value vs. usability*: a researcher can find the idea valuable and still bounce off the mechanics on day one. *Efficacy vs. the rest*: it is the only pillar about the methodology's core claim rather than the product's surface, the hardest to measure, and the slowest to show — so it gets the heaviest instrument (§4) and its own open question. Its evidence base is also asymmetric: the harm it guards against (offloading-driven atrophy) is multiply documented, but the gate-as-remedy rests on a weak-to-moderate analogy from a student-essay population ([the reading](evidence/reading/2026-06-15-product-validation-and-cognitive-offloading.md)) — so the pillar starts from a real problem and an only-plausible cure.

## 2 · Two test layers, and the calibration loop

- **Dry-run tests** (§3) are *predictors*: cheap, pre-ship, expert-judgment checks run before anything reaches a user.
- **Empirical tests** (§4) are *ground truth*: what actually happens in the field.

The loop that connects them is the point. For each pillar:

| Empirical result | Dry-run said | Diagnosis | Action |
|---|---|---|---|
| Holds | Passed | predictor was right | nothing |
| **Fails** | **Passed** | the dry test was blind to a real failure mode | fix the product **and** add a regression dry test (§3) so the suite would now catch it |
| Fails | Flagged (shipped anyway) | predictor fine; we accepted the risk | fix the product only |

The second row is the engine: **every field failure that slips past a dry run becomes a new dry-run case.** The dry suite is therefore not a fixed guess — it is trained against field truth over time. A failed empirical test opens *two* items, not one: a product fix, and a "the dry test was insufficient" item.

## 3 · The dry-run suite (pre-ship predictors)

A numbered, growing list. These run before a release reaches a user; the natural place is `release-update`'s apply-to-template step (the template is the first consumer, so applying a change there is the staging where these run). New entries arrive from the calibration loop (§2) — each carries the field failure that motivated it.

| # | Test | Pillar(s) | Method |
|---|---|---|---|
| D1 | **Cold-start cognitive walkthrough** | feasibility, usability | step through open → "start" → onboard → first `learn`→`gate` as a stand-in novice; at each step ask: will they know what to do, see that it worked, understand the feedback? |
| D2 | **Heuristic / expert review** | usability | evaluate the workspace and agent contract against usability heuristics (finds more issues than a walkthrough, needs an expert evaluator) |
| D3 | **Persona role-play** | value, usability | run onboarding + one work loop as distinct personas (expert-skeptic, time-pressed, mid-project) and watch where each breaks |
| D4 | **Hard-lines red-team** | integrity, feasibility | adversarially try to defeat each `CLAUDE.md` Hard Line — land a hallucinated citation past a gate, induce a researcher-reserved decision, force a generous pass. Each Hard Line is a test case. |
| D5 | **Derivation audit** | feasibility, integrity | verify the starter faithfully derives from `METHODOLOGY.md` (the §8 mapping): no normative content lives only in the starter; no element contradicts the source |
| D6 | **Theory critique** | efficacy | adversarial read of the efficacy argument: does the offloading evidence actually support "gates prevent atrophy," or only "offloading causes atrophy"? (the gap *is* Q13) |

## 4 · The empirical battery (field ground truth) — dev-stage only

The shared product is, in the current phase, a **self-documenting / instrumented build** given to friendly users (the pilot professor, colleagues) for *our* learning. The empirical battery runs against that build. It does **not** exist in the eventual lean deploy build (§5).

Tiered by cost. Cheap tests are continuous **tripwires**; the one expensive instrument is reserved for efficacy and sweeps the rest.

| Pillar | Cheap (artifact-derived, §6) | Expensive (human time) |
|---|---|---|
| Feasibility | onboarding completed? skill-failure / "couldn't fetch source" events; profile + state seeded after session 1 | — (D1 covers it) |
| Value | revealed preference: did a real research loop *start* after onboarding; self-initiated session count | interview: "would you use this over your current way?" |
| Usability | friction density; turns-to-first-gate; deviations-from-defaults count | one observed think-aloud session |
| **Efficacy** | *weak proxies only* — gate-stamp:agent-drafted ratio, override rate, transcript depth | **the real instrument**: pre/post + **delayed** understanding probe, scored separately from output quality; expert peer-review of the artifacts; the supervising professor's external development tracking (Q13's external signal) |
| Adoptability | **strongest cheap signal** — return cadence (a second session, a second project) | interview: "will you continue? recommend it?" |
| Integrity | **cheap test is sufficient** — citation resolver (do cited URLs/DOIs resolve?), count of "unverified" flags, any reserved-decision record | promote to human review only if the cheap test trips |

**Spend rule.** Cheap tripwires run always; a tripping one *fires* the matching expensive test. Efficacy is the exception — its cheap proxies are too weak to trust for the central claim, so its expensive instrument is *scheduled*, not triggered. One omnibus interview can sweep value / usability / adoptability / integrity-as-experienced / feasibility while its core is the efficacy probe — so one expensive instrument pays for almost everything.

## 5 · The dev / deploy lifecycle

- **Dev (now):** instrumented build; full battery (cheap tripwires + interview). Shared with friendly users for our learning. Carries self-documenting overhead the final product will not.
- **Deploy (later):** lean build; **no passive empirical tests** — dry tests (§3) + interviews only. The passive tier retires, having done its job: calibrating the dry suite well enough to carry deploy.
- **Transition:** confidence-based, no strict metric line. Keep accumulating friendly beta users; ship when confident.

Two lifecycle cautions that shape how dev evidence is read:

- **The scaffold confounds the soft pillars.** The instrumentation is overhead the deploy product will not have, so usability/value/adoptability friction that traces to the *self-documentation* is a false negative about the real product. Read those pillars with the overhead discounted; confirm them in a later de-instrumented trial.
- **Dev findings transfer unevenly.** Efficacy / feasibility / integrity calibrate well from dev (the mechanics are identical in deploy). The soft pillars are the confounded ones — deploy-stage interviews are what actually confirm them.

## 6 · How the data is gathered — bound to artifacts and moments, never to a session event

Capture that depends on an *event firing* (a hook, a session-end, the agent remembering) is fragile: events get missed and are surface- and agent-specific. So data-gathering is bound to things that persist or to the moment the signal occurs.

- **Quantitative metrics → an on-demand artifact extractor.** Retention cadence (git timestamps), gate-stamp:draft ratio (status lines), override rate (records), citation resolution (notes), friction density (`FRICTION/`) are all *latent in the persisted workspace*. They are computed whenever wanted — by us over a shared copy, or by a thin on-demand export the researcher's agent runs at will. No hook, no per-session trigger, no surface/agent dependency, and reproducible. The metrics free-ride on artifacts `METHODOLOGY.md` already requires for the research's own integrity; if those degrade, the research degrades first.
- **Qualitative friction → in-the-moment capture.** Friction is only observable live, by the participant-observer agent, so it is captured *at the friction*, not in an end-of-session batch. The rule lives once in the starter `CLAUDE.md` (the trigger list, format, the methodology-only privacy line, a *notable-events* threshold, and the background/non-nagging manner); each skill carries a thin cue naming its characteristic friction. The `session` skill is **not** the friction mechanism — its end-of-session FRICTION step is at most a straggler sweep, never relied on.
- **Backstops.** The extractor surfaces *behavioural* friction (high override rate, an unused skill, churn) even with no note written; the scheduled interview catches what both missed and disambiguates "quiet = no friction" from "quiet = no capture."

This is what makes the gathering robust: it rests on the *persistence of artifacts* and on *capture at the event*, not on a session boundary that can be skipped.

## 7 · The channels

The tests are not a separate apparatus — they ride the methodology's existing channels (`METHODOLOGY.md` §8).

- **Downstream (user → us)** carries *measurement*: in-the-moment `FRICTION/` + background audits + the interview + the extractor, filed into the inquiry through `add-evidence` (mapped to pillars and open questions).
- **Upstream (us → user)** carries *correction*: a field failure → diagnose (§2) → an `updates/` document → the `update` skill walks it. The template-as-first-consumer is the dry-run staging where a new regression test (§3) runs before any user sees the fix.

The test battery is itself a versioned methodology artifact: a changed test ships through the same "one document, every consumer" release process. Update documents carry a lifecycle tag (`permanent` vs `dev-instrumentation`) so the self-documenting scaffold can be shipped now and cleanly removed for deploy.

## 8 · Honest constraints

- **Goodhart.** Cheap proxies are *tripwires that trigger investigation*, never success metrics. "Gates passed" as a target would reward soft grading — the exact failure §3-D4 and the gate honesty rules forbid. Prefer override-rate and transcript-depth (hard to game) over pass-count.
- **The delayed probe.** The efficacy gap appears on *later* testing, not immediately ([Fan et al.](evidence/reading/2026-06-15-product-validation-and-cognitive-offloading.md)); an efficacy probe without a delayed re-check gives a false pass. That study establishes the *need* for a delay, not the right interval for gate-mediated work — a hollow gate (sycophancy, A7) may decay on a different timeline than raw essay-offloading — so calibrate the delay against the pilot's own external signal (the professor's tracking, Q13), not the essay-writing literature.
- **Friendly-user bias.** The beta pool is forgiving and bought-in, so it runs optimistic on exactly the soft pillars the scaffold already inflates. Lean on the evidence goodwill cannot fake — feasibility and integrity are mechanical (a citation resolves or it does not), and efficacy resists enthusiasm only through its hard-to-game proxies (override rate, transcript depth) and the delayed external signal. Whether gates actually *build understanding* is the open Q13 bet, not a fact goodwill cannot reach — so on the central claim a friendly pool is the *least* safe read, not the most. Treat friendly enthusiasm as the weakest evidence for general readiness — the repo's bar is "a stranger with no guide but the repo" (Q14).

## 9 · How this connects to the open questions

The apparatus is the inquiry confronting its own open questions with structured evidence, not a new track beside them.

- **Q13 (efficacy / the gate-carried bet)** *is* the efficacy pillar. Its resolution criterion — longitudinal gate records against the professor's external tracking — is the efficacy instrument in §4.
- **Q11 (how to track researcher development)** is the measurement-design half of efficacy; the delayed-probe constraint (§8) is a direct contribution to it.
- **Q14 (does the methodology transfer through the self-serve interface alone)** is the value/usability/adoptability bundle elevated to a foundation question; the soft-pillar readings are its evidence.
- **Q10 (recognizing empower vs. replace)** is touched whenever the efficacy interview asks the researcher to judge their own dependence.

Question moves go through `update-foundation`; the periodic judgment of *which* moves the accumulated evidence supports — and whether the dry tests are good predictors — is the `validation` skill's job (it reuses `inquiry-status`'s read and routes edits through `update-foundation`; it does not duplicate them).
