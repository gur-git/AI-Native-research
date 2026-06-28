---
type: observation
source: Nir Shlezinger (professor, SNN pilot supervisor) — first contact with the starter onboarding; relayed by the maintainer
date: 2026-06-28
confidence: weak
related_attributes: [16]
related_questions: [14]
raw_material: none (relayed verbally; the workspace itself is nirshlezinger1/Experiment1, starter v0.6.0, un-onboarded)
---

# A first onboard stalled on the agent's verbosity and latency

## What was observed / claimed

The maintainer gave the published starter workspace to his supervising professor, who opened it and began the onboarding with his agent. The professor **skipped the first part of the onboarding and only skimmed the agent's replies**. The reason relayed: the agent answered with long bodies of text and took a long time to respond, which made the conversation feel heavy — so he stopped reading closely and moved past the opening rather than engaging with it.

This is the onboarding update 0006 made deliberately *invitational* (a time check, recommend-the-exploration once, then weave the introduction in). Even in that form, the opening was skipped when the replies were long and slow.

The maintainer's framing of the lesson: the problem is the *shape of the agent's turns*, not the amount asked of the researcher. Long, high-latency replies create a bad experience; the want is **short and fast conversational replies to start**, expanding only when the conversation actually calls for a longer answer — and explicitly **without eliciting less** from the researcher. Short agent turns, full interview.

## Specific claims

- A real researcher's first onboarding was degraded by the agent's reply length and response latency: he skipped the opening and skimmed the replies.
- The friction was the agent's delivery (long, slow turns), not the quantity of questions or the invitational framing.
- The desired default is terse, fast replies at the start of the conversation, lengthening only on demand, while still gathering the full profile.

## Implications (suggested, not concluded)

- Bears on **Q14.1** (does the onboarding interface ease transfer or add friction): the first non-author onboard observed stalled at the opening, traced to the interface (agent verbosity/latency), not the domain — the kind of cold-start interface friction Q14.1 names as a falsifier.
- Indirectly bears on **A16**: the onboarding is where the second-output apparatus (modes, gates, the contract) is meant to attach; an opening the researcher skips never attaches it, so the apparatus's value is gated on the opening being light enough to engage with.
- *Might* support making a terse-and-fast reply default explicit and ambient — surfaced as an adjustable interaction-contract setting at onboarding — rather than leaving it implicit in §4's "short and fast by default." (Taken up as note 1 of update 0007.)

## Notes / caveats

- Weak: a single, second-hand observation of one researcher's first few minutes, relayed verbally with no transcript. It reports a reaction, not a measured effect, and the researcher is not a neutral cold-start user (he is the maintainer's collaborator).
- The latency component may be partly environmental (model speed, tool work mid-conversation) rather than purely a methodology choice; the length component is squarely a methodology choice.
- Confound for Q14.1: the dev-stage build carries self-documenting overhead a lean build would not, which can inflate reply length on its own.
