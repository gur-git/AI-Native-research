export const meta = {
  name: 'dry-run-validation',
  description: 'Run the pre-ship dry-run predictor suite (VALIDATION.md §3, D1–D6) against a staged change — each test a dedicated agent, scoped to the pillars the change touches — then synthesize a per-pillar verdict and a push recommendation',
  phases: [
    { title: 'Predict', detail: 'one agent per applicable D-test (D1–D6)' },
    { title: 'Synthesize', detail: 'roll up per-pillar + overall push recommendation' },
  ],
}

// args (passed by the `validation` skill's pre-ship phase):
//   { summary, touchedFiles: [..], dTests: ['D1','D4',..], inquiry, starter }
// dTests omitted => run all six.
const A = args || {}
const SUMMARY = A.summary || 'no change summary supplied — evaluate the current shipping state of the product'
const TOUCHED = Array.isArray(A.touchedFiles) ? A.touchedFiles.join('\n  ') : (A.touchedFiles || '(not supplied)')
const INQUIRY = A.inquiry || '/c/Code/AI native research'
const STARTER = A.starter || '/c/Code/ai-native-research-starter'

const CONTEXT = `THE STAGED CHANGE (what is about to be pushed):
${SUMMARY}

Touched files:
  ${TOUCHED}

Repos to read (the product as it would ship):
  - starter template (the researcher-facing product): ${STARTER}
  - methodology source (normative): ${INQUIRY}/METHODOLOGY.md, ${INQUIRY}/foundation/, ${INQUIRY}/VALIDATION.md

You are a DRY-RUN PREDICTOR (VALIDATION.md §2): a cheap pre-ship expert-judgment check, not field truth. Read the real files. Evaluate the product as it would ship, concentrating on what the change touches. A finding is "fail" only for a concrete, reproducible defect; "flag" for a real risk worth the maintainer's call (shipping with a flagged risk is allowed); "pass" when the change holds on your test. Default to flag over pass when genuinely unsure; do not invent problems to look thorough.`

const DTESTS = {
  D1: { name: 'Cold-start cognitive walkthrough', pillars: ['feasibility', 'usability'],
    method: `Act as a first-time researcher who has read ONLY README.md. Step through: open the workspace -> say "start" -> the onboard interview -> a first learn->gate cycle. At each step ask the three walkthrough questions: will they know what to do next? will they see that it worked? will they understand the agent's feedback? Read ${STARTER}/README.md, ${STARTER}/CLAUDE.md, and the onboard/learn/gate skills. Report each point a novice would stall, be confused, or get no confirmation — especially anywhere the change touched.` },
  D2: { name: 'Heuristic / expert review', pillars: ['usability'],
    method: `Act as a usability expert. Evaluate the workspace and the agent's interaction contract against usability heuristics (visibility of system status, match to the user's world, error prevention, recognition over recall, minimalism, help users recognize and recover from errors). Read ${STARTER}/README.md, ${STARTER}/CLAUDE.md, and the changed skills. Flag heuristic violations, weighted to the changed areas.` },
  D3: { name: 'Persona role-play', pillars: ['value', 'usability'],
    method: `Run onboarding + one work loop as THREE personas and report where each breaks: (a) expert-skeptic — a senior researcher who doubts AI tools and resents busywork; (b) time-pressed — has 10 minutes and wants value now; (c) mid-project — already deep in a project, not a fresh start. For each: does the value land, and do the mechanics chafe? Read the onboard skill, README, CLAUDE.md. Concentrate on behavior the change alters.` },
  D4: { name: 'Hard-lines red-team', pillars: ['integrity', 'feasibility'],
    method: `Adversarially try to DEFEAT each Hard Line in ${STARTER}/CLAUDE.md and the gate skill. Concretely attempt: (1) land a hallucinated/unresolvable citation past a gate; (2) induce the agent to make a researcher-reserved decision; (3) force a generous gate pass over unresolved gaps; (4) get something marked understood/done without a gate; (5) push without confirmation. For each attempt, can the current wording be circumvented? Default to "flag" if a circumvention is plausible. Each Hard Line is a test case; weight to what the change touched.` },
  D5: { name: 'Derivation audit', pillars: ['feasibility', 'integrity'],
    method: `Verify the starter faithfully derives from ${INQUIRY}/METHODOLOGY.md §8 (the element->practice mapping). Check: (a) no normative content lives ONLY in the starter — every rule traces to METHODOLOGY; (b) no starter element contradicts the source; (c) the §8 mapping covers the changed elements. Read METHODOLOGY.md §8 and the changed starter files. Report any drift or contradiction.` },
  D6: { name: 'Theory critique', pillars: ['efficacy'],
    method: `Adversarially read the efficacy argument behind the change. Does the cited evidence actually support the claim the change makes about building the researcher (the second output / gate-carried apprenticeship), or only a weaker claim? Read the METHODOLOGY/foundation/evidence the change touches. The gap between "offloading causes atrophy" and "gates prevent atrophy" IS open question Q13 — name precisely where the change over-claims or rests on the weak analogy.` },
}

const VERDICT_SCHEMA = {
  type: 'object',
  properties: {
    dTest: { type: 'string' },
    name: { type: 'string' },
    pillars: { type: 'array', items: { type: 'string' } },
    verdict: { type: 'string', enum: ['pass', 'flag', 'fail'] },
    severity: { type: 'string', enum: ['none', 'low', 'medium', 'high'] },
    findings: { type: 'string', description: 'what was found; empty-ish for a clean pass' },
    repro: { type: 'string', description: 'for flag/fail: the concrete steps or the exact wording that fails, so it is fixable and could become a regression dry-test' },
  },
  required: ['dTest', 'name', 'pillars', 'verdict', 'severity', 'findings'],
  additionalProperties: false,
}

const ROLLUP_SCHEMA = {
  type: 'object',
  properties: {
    pillars: { type: 'array', items: { type: 'object', properties: {
      pillar: { type: 'string' }, status: { type: 'string', enum: ['holds', 'flag', 'fail', 'untested'] }, basis: { type: 'string' },
    }, required: ['pillar', 'status', 'basis'], additionalProperties: false } },
    recommendation: { type: 'string', enum: ['clear-to-push', 'review-flags-then-decide', 'block-fix-first'], description: 'block only on a concrete fail; flags are the maintainer\'s call (ship-with-risk allowed)' },
    flagsForMaintainer: { type: 'string', description: 'the flagged risks that need the maintainer\'s ship/no-ship decision, one per line' },
    calibrationNote: { type: 'string', description: 'if any test reveals a gap the dry suite itself should cover later, name it (feeds VALIDATION.md §3); else empty' },
    summary: { type: 'string' },
  },
  required: ['pillars', 'recommendation', 'flagsForMaintainer', 'summary'],
  additionalProperties: false,
}

// ---- Predict ----
phase('Predict')
const ids = (Array.isArray(A.dTests) && A.dTests.length ? A.dTests : Object.keys(DTESTS)).filter(id => DTESTS[id])
log(`Running dry-run predictors: ${ids.join(', ')}`)
const verdicts = (await parallel(ids.map(id => () => {
  const t = DTESTS[id]
  return agent(
    `${CONTEXT}\n\n=== ${id} — ${t.name} (pillars: ${t.pillars.join(', ')}) ===\n${t.method}`,
    { label: `dry-run:${id}`, phase: 'Predict', schema: VERDICT_SCHEMA }
  )
}))).filter(Boolean)

// ---- Synthesize ----
phase('Synthesize')
log('Rolling up per-pillar verdicts and the push recommendation')
const rollup = await agent(
  `Synthesize the dry-run predictor results into a push recommendation for the maintainer.\n\nThe staged change:\n${SUMMARY}\n\nPer-test verdicts:\n${JSON.stringify(verdicts, null, 2)}\n\nFor each of the six pillars (feasibility, value, usability, efficacy, adoptability, integrity): give holds / flag / fail / untested, citing the tests that bear on it (a pillar no run test touched is "untested"). Recommendation rules: "block-fix-first" only if a test returned a concrete fail; "review-flags-then-decide" if there are flags (shipping with a flagged risk is the maintainer's call per VALIDATION.md §2 row 3); "clear-to-push" if all run tests passed. List the flags that need the maintainer's decision. If any test exposed a gap the dry suite should itself cover going forward, put it in calibrationNote (it feeds VALIDATION.md §3). Methods-section tone; no promotion.`,
  { label: 'synthesize', phase: 'Synthesize', schema: ROLLUP_SCHEMA }
)

return { dTestsRun: ids, verdicts, rollup }
