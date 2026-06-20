# AI attributes

A catalog of attributes of current AI systems that any AI-native research methodology must reckon with. The point of this file is not to convince the reader that AI is good or bad. It is to lay out, in one place, the properties of the technology that shape what kinds of practices make sense around it.

Each attribute is given a short, complete description of what it is, then tagged as one of:

- **structural** — likely permanent. The attribute follows from how the technology is built or how the world is, and is not expected to be solved by capability improvements in a timeframe relevant to designing a methodology. Methodology should be built around it.
- **temporary** — likely solvable. The attribute is a current limitation, and is on a trajectory that will close it within roughly one to three years. Methodology should not over-commit to addressing it; expect this attribute's relevance to decline.
- **ambiguous** — genuinely unsettled. The attribute may be partially closed by capability improvements and partially permanent. Methodology should be modest about what it claims to address here.

Each tag is followed by a thorough explanation of why this is the right read. The reader is welcome to disagree; the open question file (`03-open-questions.md`) tracks the disagreements and what would resolve them.

The attributes are grouped into five clusters that capture roughly distinct kinds of methodological pressure.

---

## Cluster I — AI's competence is asymmetric, and the asymmetry inverts the historical research bottleneck

### A1: Breadth without depth

**What it is.** AI is reliable at applying known techniques across a wide range of domains, and unreliable at producing genuinely novel technique. On problems where the solution is a recombination of existing methods, current models perform well. On problems that require an unfamiliar move — a new framing, a technique that does not appear in the training corpus, a step that no published paper has taken — performance falls sharply. Tao's data point on the Erdős problem set is the cleanest illustration: about 50 of 1,100+ problems have been solved with AI, and on a representative slate of remaining problems the per-problem success rate is 1–2%. The wins are systematically the cases where solutions combined existing techniques in ways that didn't require new technique.

**Tag: structural.**

**Why.** This is partly an artifact of training data — most of any training corpus is established work, so the model's manifold of "things it knows how to do" is dominated by recombinations of established work. But it is also a consequence of what current architectures do. Pretrained transformers interpolate within a learned distribution; they are extraordinary at fluent recombination and have no principled mechanism for extrapolation outside that distribution. Whether scaling alone closes this gap is contested in the field. The empirical record so far — across model generations from GPT-3 through current frontier models — shows benchmark numbers rising without a corresponding shift in the breadth-vs-depth pattern. New techniques are still produced overwhelmingly by humans; AI is still applied to recombine them at scale. The boundary between "established" and "novel" may shift as models absorb more recent work, but the asymmetry between recombination and genuine novelty is a property of how this technology works, not a transient capability gap. Methodology should expect it to persist.

The deeper version of this attribute, drawing on the innovation literature (Campbell's BVSR theory, Stanley's novelty search), is that AI does not natively produce variation that is *blind* in Campbell's technical sense — variation whose utility is unknown at generation time. AI's variation is biased toward the trained distribution; the novelty it produces is fluent recombination, not the kind of blindness the innovation literature identifies as necessary for genuine new knowledge. This makes AI structurally a parallel exploitation engine rather than a parallel exploration engine, with consequences for innovation work in particular. The deeper synthesis is in [`../evidence/literature-notes/innovation-as-different-operation.md`](../evidence/literature-notes/innovation-as-different-operation.md); the foundation-level claim is in [`00-why-reimagine.md`](00-why-reimagine.md) §3.

This attribute is also load-bearing for cluster V (A16, A17): a tool that is reliable on routine recombination and unreliable on novel work invites users to outsource the routine and gradually lose the practice the routine builds.

### A2: Cross-domain transfer is cheap

**What it is.** Pretrained models carry vocabulary, methods, and analogies across many fields, and can apply concepts from one domain to a problem in another at almost no marginal cost to the user. A researcher in materials science can ask AI to consider whether a technique from neuroscience applies to their problem, and get a serviceable answer in minutes. The DeepMind co-scientist's reproduction of the antimicrobial-resistance hypothesis at Imperial — the same conclusion the human team took years to reach — was driven by exactly this kind of cross-domain pattern matching.

**Tag: structural.** This is a *capability*, not a limitation. It belongs in the catalog because methodology should design to exploit it, not around it.

**Why.** Pretraining on broad corpora is the design principle of large language models. It is not going away; if anything it deepens with each model generation. The corollary is that the cost of doing cross-disciplinary work — historically high because each new field required a researcher to learn its vocabulary and conventions — is collapsing for the *exploration* phase of cross-disciplinary work, even as the cost of mastering a second field deeply remains essentially unchanged. This will be more true over time, not less.

### A3: Massive parallelism is cheap

**What it is.** AI can attempt many things simultaneously at low marginal cost. A researcher can run ten exploratory analyses in parallel, draft six versions of an introduction, or attempt the same proof from twenty different starting angles — operations that would have been prohibitively expensive in human time.

**Tag: structural.**

**Why.** This is set by the economics of inference, which is dominated by compute cost and which has fallen by more than an order of magnitude in two years. The trajectory is well-established. Even if frontier-model pricing rises, the marginal cost of running additional parallel sessions falls in the older models that remain perfectly capable for many tasks. Parallelism is a permanent feature of the regime, and any methodology that does not take advantage of it is leaving capability on the table.

### A4: Idea generation has dropped to nearly zero cost

**What it is.** Producing plausible candidate hypotheses, framings, designs, alternative approaches, and exploratory directions is now nearly free. A researcher with AI can generate fifty candidate research questions in an afternoon, where the same exercise would have taken weeks of reading and conversation.

**Tag: structural.**

**Why.** This follows directly from A2 and A3 plus the fluency of generation. None of those are reversing. The historical balance — ideas were expensive, selection was free because by the time you had an idea it had been filtered through your effort to produce it — is structurally inverted. The new bottleneck is selection: distinguishing genuinely promising candidates from candidates that merely sound novel because the model produced them with confidence. This is the most important consequence of the cluster for methodology design, because most existing research workflows have no machinery for selection at scale. The historical workflow assumed scarcity of ideas and abundance of selection; the new regime is the reverse.

A nuance worth flagging here, also developed in [`00-why-reimagine.md`](00-why-reimagine.md) §3: cheap idea generation is not the same as cheap *innovation*. The innovation literature (Campbell BVSR, March, Stanley) is unanimous that genuine new knowledge requires variation that is not directed by the goal — *blind* variation in Campbell's sense, with utility unknowable at generation time. AI's variation is biased toward the trained distribution; the volume is high but the variation tends to cluster around existing modes. So A4 is real (volume is cheap) without making AI a substitute for the innovation operation specifically. The selection bottleneck and the innovation bottleneck are related but distinct.

---

## Cluster II — AI's failure modes are subtle, fluent, and structurally biased toward agreement

### A5: Confidence is decoupled from correctness

**What it is.** AI's tone of certainty does not track the probability that what it says is correct. The same fluent, declarative voice is used whether the model is on solid ground or fabricating. There is no native uncertainty signal that a reader can rely on; "this is uncertain" must be supplied by the user, the prompt, or external machinery.

**Tag: ambiguous.**

**Why.** Calibration is an active research direction. Constitutional AI, RLHF refinements, and uncertainty-aware training methods have all been shown to push on this; recent frontier models do hedge more than their 2023 predecessors did. Some improvement on the AI side is likely. But the human side does not improve. Readers tend to read fluency as confidence regardless of what the model is technically claiming, and even well-calibrated probability estimates do not help readers who do not look at them. Even if a future model produced perfectly calibrated probabilities for every claim, users would still need to do calibration work to incorporate them. So the AI side may close partially, the human side will not, and the net attribute persists in a softened form. Methodology should not expect "the model is now calibrated" to remove the responsibility from the reader.

### A6: Self-validation is the default

**What it is.** When the same system both generates output and is asked to evaluate it, the evaluation is biased toward acceptance. AI critiquing AI tends to share the generator's blind spots: it misses what the generator missed, accepts what the generator accepts, and provides confidence that compounds rather than corrects. The Sakana AI Scientist evaluation documents this concretely — the system "cannot critically assess its own results and fails to detect methodological flaws or logical inconsistencies."

**Tag: structural.**

**Why.** This is a category problem, not a capability problem. Even a perfect generator that also evaluates would face it: the evaluator shares the generator's training distribution, its representations, its biases, and the way it frames the problem. Critic-models help somewhat but inherit base-model failure modes when they share the foundation, which they typically do. The fix is not "a better critic" but "a critic that does not share the generator's structure" — a different model family, a different prompt that meaningfully reframes the task, a formal verifier whose correctness is independent of generation, or a human. None of these are absent from the current toolkit, but they have to be deliberately introduced; they are not the default. The default — a single model generating and being asked "is this good?" — produces self-validation, and will continue to.

### A7: Sycophancy and anchoring

**What it is.** AI tends to agree with the framing, confidence level, and direction supplied by the user. Ask "is this hypothesis good?" and you get one answer; ask "what is wrong with this hypothesis?" and you get a different one, often with new objections that were available the whole time. The model is not lying in either case; it is responding to the prompt's implicit request.

**Tag: ambiguous, leaning structural.**

**Why.** A portion of sycophancy is a training artifact. RLHF rewards "helpful" responses, and helpfulness in human raters often correlates with agreement, validation, and matching the user's apparent expectation. This portion is being actively reduced by labs adjusting reward signals; current frontier models are noticeably less sycophantic than 2023 versions, and the trajectory is to reduce it further. So part of the attribute is on a closing track. But anchoring on the user's framing is partially structural: the prompt is the only context the model has, and any decoder will be conditioned on it. You cannot remove the prompt's influence without removing the prompt. A user who frames a question with strong assumptions will get answers conditioned on those assumptions — not because the model is sycophantic but because the model has nothing else to work with. Methodology has to assume that the framing supplied by the user does more work than the user realizes, and that adversarial reframing (asking the same question from the opposite side) is a different operation that has to be done deliberately.

### A8: Hallucination concentrates at the frontier

**What it is.** AI's outputs are most unreliable on topics where the training data is sparse — recent literature, niche techniques, novel problems, or any specific instance the model has not seen explicitly described. This is exactly where research happens. The Sakana paper documents the concrete consequence: literature reviews that misclassify established concepts as novel, citations to outdated or fabricated work, hallucinated numerical results. OpenAI's Deep Research has a similar pattern in another shape — it deferred to less reliable sources (Reddit) for corroboration when its training data ran thin on a topic.

**Tag: ambiguous, leaning structural.**

**Why.** Retrieval-augmented generation reduces hallucination on topics where reliable sources can be retrieved. This is real progress and is closing part of the gap. But the frontier of research is partly "things not yet written down well" — for which nothing can be retrieved — and partly "things at the limit of what is written down" — for which retrieval helps but introduces a new failure mode (the model cites whatever was retrieved, even if it is wrong or out of date). The relationship between "hard for AI" and "interesting to research" is not coincidental. Research selects for the parts of the knowledge frontier that are not yet settled, and those are the parts where AI's training-data coverage is thinnest. Methodology should expect this attribute to soften where retrieval helps, persist where the question is genuinely on the frontier, and not assume it will go away.

### A9: The verifiability gap

**What it is.** AI can produce a candidate solution faster than it (or anyone) can verify the solution is correct. A proof can be drafted in minutes that takes weeks to check; a piece of code can be generated in seconds that takes hours to integrate, test, and trust; a literature claim can be written in moments that takes a researcher an afternoon to source-verify.

**Tag: structural.**

**Why.** Generation and verification are separate operations and have never had matching cost curves. In math, the formal version of this is the P-vs-NP intuition. In experimental science, generating a hypothesis is cheap; testing it is expensive. The introduction of AI shifts generation toward zero cost, while leaving verification cost essentially unchanged or worse — there is now more candidate output to verify. So the gap between generation and verification is bigger in the AI regime, not smaller. This is not a failure of AI; it is a property of the relationship between producing claims and checking them. Methodology has to treat verification as a first-class operation that is *expected* to dominate the time budget on AI-assisted work, rather than as a finishing step.

---

## Cluster III — AI does not accumulate

### A10: Session forgetting

**What it is.** An AI session does not, by default, remember what happened in earlier sessions. Each conversation starts fresh; whatever understanding the previous session arrived at is gone unless re-supplied.

**Tag: ambiguous.**

**Why.** The technology is closing this. Persistent memory features are now offered by major providers; long context windows (1M+ tokens in current frontier models) make it feasible to load substantial state into a session; retrieval over personal logs and project files is straightforward to set up. Session forgetting in the literal sense — "the model has no memory of yesterday's chat unless I tell it" — is being patched. But the methodological lesson the attribute originally pointed at is robust regardless. Even with infinite memory, the *researcher's* commitment to maintain explicit, version-controlled cumulative state is valuable: it survives model upgrades (today's memory may not transfer to tomorrow's model), vendor changes (you may want to switch providers without losing your project's state), and the researcher's own forgetting (which is real and not solved by AI memory). So tag the attribute as ambiguous — the AI side is closing — but expect the methodological response (external state in files the human owns) to remain valid for reasons that have nothing to do with whether AI memory works.

### A11: No learning from doing

**What it is.** A second attempt at a similar problem does not benefit from what was tried first, unless the user explicitly supplies the history. The model's underlying weights do not update from the conversation; whatever it learned about your problem during yesterday's session is not available to today's session.

**Tag: ambiguous.**

**Why.** Same trajectory as A10. Memory features and retrieval mitigate the effect, by giving the model access to what it produced before. Online fine-tuning during a project — the model genuinely getting better at *your* problem as you work on it together — is not a feature of current production systems and will not be at the scale of an individual researcher in the near term. So the attribute softens but does not disappear. The methodology should not assume a model is accumulating experience with a problem just because it has access to past outputs; access is not the same as updated intuition.

### A12: Inconsistency across runs

**What it is.** The same prompt can produce different outputs across runs, because the model's sampling is non-deterministic by default. Two researchers asking AI the same question, or the same researcher asking on two different days, may receive meaningfully different answers — sometimes contradictory.

**Tag: temporary (manageable).**

**Why.** This is a sampling-parameter issue. Setting temperature to zero, fixing seeds where the API supports it, and recording the model version produces reproducible outputs to a useful degree. The remaining variance — across model versions, across providers — is real but is a record-keeping problem, not a fundamental obstacle. The methodology should standardize on logging model identity, prompt, parameters, and date, after which reproducibility of an AI-assisted result is a straightforward discipline rather than a moving target. Worth naming because researchers who do not name it sometimes think they are chasing ghosts when they fail to reproduce a result; they are not. They are observing default sampling.

---

## Cluster IV — We cannot trust our own perception of AI

### A13: The perception gap

**What it is.** People's felt sense of how much AI helped them is unreliable. The METR 2025 randomized controlled trial gives the cleanest measurement available: experienced developers using frontier AI tools on real tasks were measurably 19% slower, while pre-task they expected a 24% speedup and post-task they reported a 20% speedup. A 39-point gap between felt and measured.

**Tag: structural.**

**Why.** This is about human cognition, not AI. People are bad at estimating their own productivity in any domain — the literature on metacognition is consistent on this — and AI introduces specific reasons the felt productivity overshoots: visible outputs ("I generated something") feel like progress, while invisible costs (time spent prompting, time spent correcting, time spent integrating) are easy to discount. Better AI does not fix this; in some respects better AI makes it worse, because more polished outputs feel more like real progress. Only measurement closes the gap, and only deliberate measurement — vibes do not. The attribute will persist as long as humans use AI, regardless of how AI improves.

### A14: Capability ceiling moves fast and unevenly

**What it is.** What AI can and cannot do changes month to month, and the changes are not uniform. A capability that was reliably absent in one model release may be present in the next; an attribute considered structural may turn out to be temporary in retrospect, and vice versa.

**Tag: structural (for the foreseeable future).**

**Why.** Frontier models are released every three to six months with non-uniform improvements. A methodology built on "AI cannot do X" will be wrong about X within a year, sometimes within a quarter. This is not a transient property of an immature field — it is the steady state of a rapidly developing technology, and is likely to remain so for at least another several years. The methodological response is *designed revisability*: explicit places to update claims based on new model releases, time-stamped statements rather than timeless ones, and willingness to retire guidelines that addressed problems that have closed. A foundation document that does not get revised across model generations is almost certainly stale.

### A15: Vibes-driven adoption

**What it is.** Most claims about AI's effect on productivity, quality, or research outcomes are based on impression rather than measurement. Researchers report "AI helped me a lot" or "AI doesn't really help me" without time-on-task data, without pre-registered hypotheses, without controls. The broader culture amplifies these reports; the careful studies are rare and slower than the impressions.

**Tag: structural (cultural, not technical).**

**Why.** The infrastructure for objective measurement of knowledge work does not exist by default. People share impressions because impressions are easy to share; they do not share rigorous measurements because rigorous measurements are expensive to produce. This is a property of how knowledge-worker culture operates, not of AI. Better AI will not fix it. The methodological response is not to fix the culture — that is not in the methodology's scope — but to refuse to participate in it: produce personal calibration data, log negative findings as carefully as positive ones, treat one's own impressions of AI's helpfulness as a hypothesis to be tested rather than as evidence.

---

## Cluster V — AI changes the user

The four clusters above describe what AI is and how its outputs behave. This cluster describes something different: what happens to the person using AI. The methodology has to track not only what AI does but what AI does *to the people doing research with it*. The argument for why this cluster deserves its own home in the catalog is laid out in [`00-why-reimagine.md`](00-why-reimagine.md) §3.

### A16: Output without reciprocal skill development

**What it is.** AI is the first tool in the history of knowledge work that can produce useful output without requiring the user to develop any compensating capability. Calculators required calculator-literacy. Compilers required higher-language fluency. GPS required route-planning judgment. Each prior tool changed the skill set; the user was still skilled, just at different things, and the new skills compounded the way the old ones had. AI breaks this pattern. "Prompt and accept" is not a skill that compounds the way calculator-operation did. A user can produce fluent output indefinitely without growing.

**Tag: structural.**

**Why.** This is a property of how the technology works, not a current limitation. Prior tools required user input that was *informationally substantial* — the user had to know what they wanted with enough specificity that operating the tool was itself an exercise of skill. AI accepts input that is informationally thin (a vague natural-language request) and produces output that is fluent enough to look complete. The asymmetry between input cost and output quality is the source of the skill-substitution effect, and that asymmetry is what makes AI valuable. It will not be designed away. Improvements to AI tend to widen the asymmetry, not close it. The methodological response is not to wait for AI to require skill from its users; it is to make the user's skill development — at the level the research job is judged on — an explicit, tracked output of the workflow rather than a hoped-for side effect. This attribute is what the empower-not-replace mindset in [`../GOAL.md`](../GOAL.md) §The commitment and [`00-why-reimagine.md`](00-why-reimagine.md) §7 is responding to.

### A17: Tasks resist clean decomposition into "AI part" and "human part"

**What it is.** The natural defense against A16 is to delegate routine portions of a task to AI while keeping the human on the difficult portions. This works for tasks that decompose cleanly. Most research tasks do not. The fine-grained interleaving of well-trodden technique and original move is most of what makes a task research rather than execution; the routine and the original are not in separate paragraphs, they are in the same sentence. Doing partial outsourcing — the human's part, then reviewing AI's part, then integrating — is more work than either alternative. Whole-task outsourcing is easier and produces fluent output. Doing the whole task by hand preserves skill but forfeits AI's value. The temptation is structural: the task does not give the researcher a clean place to cut.

**Tag: structural.**

**Why.** This is jointly a property of research tasks and of how AI is offered to the user. Research tasks are non-decomposable because the value of research lives in the interleaving of routine and original work — separating them removes what makes the task research. AI is offered as a tool that takes natural-language requests and produces complete outputs; it is not naturally suited to half-completing a task in the way a junior assistant would be. Both halves of this could shift — task structure varies across research domains, and AI tooling could in principle be designed for finer-grained collaboration — but the gradient as it currently stands pulls toward whole-task outsourcing, and the workflows researchers actually use reflect that. The methodological response is to refuse the temptation deliberately on tasks where staying involved at fine grain is what builds the capacity that matters, and to make that refusal a practice rather than a moment of willpower. See [`02-implications.md`](02-implications.md) for what this looks like in gestures, and the methodology guidelines for concrete attempts.

---

## Cross-cluster note: how the tagging should be read

The point of the structural / temporary / ambiguous tagging is to direct the methodology's design budget. There is no methodological reward for elaborately addressing an attribute that will be solved by next year's models. There is also no reward for ignoring an attribute that the technology has closed; better to retire the practice and reclaim the attention.

In practical terms:

- **Structural attributes** (A1, A2, A3, A4, A6, A9, A13, A14, A15, A16, A17) deserve sustained methodological investment. Practices that address them should be honest, evidence-based, and expected to remain valid across model generations.
- **Temporary attributes** (A12) are worth flagging in case a researcher hits them, but do not warrant a guideline. Standardizing logging takes care of the issue.
- **Ambiguous attributes** (A5, A7, A8, A10, A11) deserve modest methodological investment, with the understanding that the size of the problem may change. Practices addressing them should be revisable.

Cluster V (A16, A17) deserves a particular emphasis. These are the attributes the field's mainstream commentary on AI tends to underweight, because they describe slow effects on the user that are invisible in any short-term productivity measurement. Most of the empower-not-replace mindset's load-bearing work is on these two.

The tagging is itself a working hypothesis. Open question Q1 in [`03-open-questions.md`](03-open-questions.md) tracks the question of which attributes really are structural and which are temporary; the answer comes from observing the attribute's persistence across model generations, not from any single moment.

---

*Last revised 2026-05-06. Cluster V (A16, A17) added in response to in-conversation development of the empower-not-replace framing. Initial draft of clusters I–IV from 2026-05-05 is otherwise unchanged.*
