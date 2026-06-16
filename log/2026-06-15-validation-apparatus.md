# 2026-06-15 — The validation apparatus

What shifted today: the inquiry gained an explicit apparatus for testing whether its own methodology works, plus the researcher-facing changes that apparatus needs. Came out of a long planning conversation (working plan: `VALIDATION-PLAN.md`, transient).

- Added evidence: [product-validation frameworks and the cognitive cost of AI assistance](../evidence/reading/2026-06-15-product-validation-and-cognitive-offloading.md) — grounds the six-pillar framing and the efficacy concern (bears on Q13, Q11, Q10, Q14).
- Opened **Q14** (does the methodology transfer through the self-serve interface alone) — distinct from Q13 (efficacy of gates *once adopted*); it is the subject-matter face of the product's validation.
- Authored **[VALIDATION.md](../VALIDATION.md)** — six pillars (feasibility, value, usability, efficacy, adoptability, integrity), the dry-run suite (D1–D6), the dev-stage empirical battery, the calibration loop, the dev/deploy lifecycle, the artifact-derived + in-the-moment data-gathering, the channels, and the honest constraints. Linked from METHODOLOGY §9.
- New skill **`validation`** — the diagnose engine (delegate-don't-merge: reuses `inquiry-status`, routes edits through `update-foundation`).
- Researcher-facing changes, released via `updates/0002`: **in-the-moment friction capture** (rule in starter `CLAUDE.md`, thin per-skill cues), the **researcher-card** multi-project carry (registry G23 + new starter skill, `onboard` import branch), and **`session` narrowed off friction** (keeps cursor/records/commit).

**Dry-run pass (first use of the suite, D1–D6 in parallel).** All six returned `pass-with-fixes` — the suite caught real issues pre-ship, which is the point. Fixes applied immediately: the `researcher-card` discoverability gap (README skills list + folder note + `onboard` Stage 1 recital — flagged by D1/D2/D5, and a gap in the `0002` doc, now patched); the README portability over-claim narrowed with a loading-failed signal added (D1 blocker); three honesty fixes to VALIDATION.md (the "goodwill cannot fake" overclaim on efficacy, the evidence-asymmetry caveat, the delayed-probe calibration note — D6).

Surfaced for maintainer decision (posture- or config-level, not applied):

- **Gate has no expertise- or budget-aware relief (D3, two majors).** A senior expert is put through the full question floor on in-domain material and told "too easy" on a clean pass; the time-pressed have no non-pejorative defer path (researcher-close is framed "last resort" and logged as friction). This is the G5/Q13 busy-work risk surfacing in the product — and it hits exactly the pilot professor. *Bears on Q13/Q14.*
- **Push hard line and generous-pass hard line lack mechanical enforcement (D4, two majors).** No `.claude/settings.json` permission rule on `git push`; over-stamping has no tripwire (the "unstamped stretch" check is its opposite). 
- **Minors (D4/D5):** FRICTION has no draft-time research-content scrub; `state.md` "decided directions" rest on the agent's read of "decided in conversation"; out-of-gate closure has no defined `researcher-overridden` landing; `gather`/`ideate` verify a citation *resolves* but not that it *supports* the claim (unlike `paper`/`learn`); G7 (calibrate felt-vs-measured) is mapped in METHODOLOGY §8 but has no implementation surface in the starter.

Full reviewer output: workflow run `wf_4c01377a-8e8`.
