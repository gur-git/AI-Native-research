# 0003 — Calibrated gates, proficiency tracking, and the first dry-run fixes

```
date:            2026-06-16
applies_from:    any pin at or before 7eda772 (2026-06-16)
cut_at:          7eda772655b5e32489bcff88b5bd0faf2716e65f   # the inquiry commit this release was cut from
starter_version: 0.3.0
lifecycle:       permanent           # every item here is a keeper, not dev-instrumentation
```

Five changes. The headline is **calibrated gates** (Item 1) — the gate now adapts difficulty to the researcher's proficiency instead of running a fixed question floor. Items 2–5 are fixes the first dry-run pass surfaced ([VALIDATION.md](../VALIDATION.md) §2–§3); each names the pillar and dry-test it closes. Source: `METHODOLOGY.md` §3 (gates), §5/§6, registry **G20/G16/G24/G7**; reasoning in the [calibrated-gates log](../log/2026-06-16-calibrated-gates.md) and the [optimal-difficulty evidence](../evidence/reading/2026-06-16-optimal-difficulty-zpd.md).

---

## Item 1 — Calibrated, adaptive gates + proficiency tracking · `permanent` · *closes D3 (efficacy/value)*

**What changed.** Gates no longer apply a uniform question floor. The agent now reads the researcher's proficiency for the topic and **opens near their edge, adapting difficulty one question at a time** to hold the productive-struggle band (~85% success — succeed at most, be genuinely stretched on some). Proficiency is elicited at onboarding (per field, into `profile.md`), tracked per topic in a new `state.md` `## Proficiency` block, and updated by each gate. `learn` sequences and scopes by it. New registry practice **G24**.

**Why.** A uniform gate puts an expert through derivation-quizzes on material they command and tells them "too easy" when they pass — the busy-work the methodology's own Q13 names as the risk (and retired G5 over). The [85% Rule for optimal learning](https://www.nature.com/articles/s41467-019-12552-4) and the Zone of Proximal Development say learning is fastest when challenge is calibrated to the learner and adjusted in real time. The bar for "understood" does not move — only the path to it.

**What to ask your researcher.** At onboarding (or now, if already onboarded): their rough proficiency across the fields the research touches, framed as "so I pitch things right and don't quiz you on what you already own." Nothing else to decide; the calibration runs in the background.

**How to apply.**
- `state.md`: add a `## Proficiency` block (per-topic: `topic — novice|working|proficient|expert — last gauged YYYY-MM-DD`), before `## Last updated`.
- `context/profile.md`: add a `## Field proficiency` section (per-field level; the baseline the card carries) after `## Background and level`.
- `onboard`: Stage 2 elicits field proficiency; Stage 5 writes it into `profile.md` and seeds `state.md`'s per-topic proficiency.
- `gate`: §2 becomes "Calibrate, then design the questions" (read proficiency, open near the edge, target the band); §3 adds "adapt the difficulty as you go"; §5 adds "update the proficiency" on close; the "too easy → escalate" hard line becomes "a clean record is honest only if difficulty climbed to a real stretch."
- `learn`: §1 reads `## Proficiency` and scopes by it (skip what they command, build where they're weak).
- `CLAUDE.md` §Gates ("Interview, not exam") and the `state.md` workspace bullet: note calibration + proficiency.

## Item 2 — Researcher override: explain once, then honor; `researcher-overridden` status · `permanent` · *closes D4 (out-of-gate closure)*

**What changed.** When the researcher closes a gate early (or asks to skip one), the agent first explains the stake *once*, then — if they persist or give a reason — honors it without further argument. The artifact gets a `researcher-overridden` status line (not a stamp), and the override is recorded.

**Why.** The old rule ("record and move on without argument") gave the researcher no reason to engage; an out-of-gate "just mark it done" had no defined landing (couldn't be stamped, no override status). Educate, don't enforce: make the stake legible once, then respect the choice.

**What to ask your researcher.** Nothing — this is agent behavior.

**How to apply.** `gate` §4 (explain-once-then-honor) and §5 (the `researcher-overridden` outcome); the `gate` Hard line on overrides; `CLAUDE.md` §Gates override bullet. (`CLAUDE.md` §Provenance already lists `researcher-overridden`.)

## Item 3 — Push requires confirmation, enforced by the harness · `permanent` · *closes D4 (push hard line)*

**What changed.** A `.claude/settings.json` asks before any `git push`, so the hard line is enforced by the tool, not only by the agent re-reading prose.

**Why.** The "never push without confirmation" hard line had no mechanical guard — nothing actually stopped an eager push.

**What to ask your researcher.** Nothing.

**How to apply.** Install `.claude/settings.json` from this document's attachment `0003-files/settings.json` (merge the `permissions.ask` entry if the researcher already has a settings file).

## Item 4 — Citations must resolve *and* support the claim · `permanent` · *closes D4 (resolves-not-supports)*

**What changed.** `gather` and `ideate` now require that a cited source actually *supports the specific claim*, not merely that the URL resolves — matching what `paper` and `learn` already do.

**Why.** A real-but-misattributed citation passed the resolvability check and could be promoted to load-bearing.

**How to apply.** `gather` §3 (fetch-verification line) and `ideate` §1 ("Nearby work"): "resolves **and** supports the claim."

## Item 5 — `state.md` decisions need a moment; felt-vs-measured gets a surface · `permanent` · *closes D4 (state decisions) + D5 (G7)*

**What changed.** (a) `session` writes a `state.md` "decided direction" only when it can point to the moment it was decided (a gate record or a verbatim commitment) — a leaning stays an open thread. (b) The `session` periodic review adds a **felt-vs-measured** beat (how the work *felt* vs. what the records show), giving registry **G7** a real surface.

**Why.** (a) A researcher musing "I'm leaning toward X" could be recorded as a firm decision (researcher-reserved-decision-by-momentum). (b) METHODOLOGY §8 mapped G7 to `context/records/` but nothing actually captured felt-vs-measured.

**How to apply.** `session` §1 (decision-citation + carry proficiency) and §4 (felt-vs-measured in the periodic review); `context/records/README.md` (names the felt-vs-measured and `researcher-overridden` records).

---

## Closing (template mode / maintainer)

- Bump `starter_version` to **0.3.0** (minor — behavior change).
- Move the template's `pinned_commit` to this document's `cut_at` once the inquiry repo is committed (after 0002's, in order).
- All items `permanent` — nothing here is removed for the lean deploy build.
