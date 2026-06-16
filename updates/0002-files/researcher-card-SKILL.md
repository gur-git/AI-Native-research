---
name: researcher-card
description: Create a portable researcher card — the person-level subset of the profile (who they are, background, level, interaction contract, skill preferences) — to carry into a new project's workspace in place of a cold onboarding interview. Prompts for transfer scope (default: profile only). Triggers on "make a researcher card", "carry my context to a new project", or when the researcher is starting a separate research project.
---

# researcher-card

One workspace holds one project; the *researcher* is what carries across them. This skill distils the person-level context into a portable card the researcher takes to a new starter workspace, where `onboard` imports it instead of running the cold interview (G23).

## What travels, and what does not

- **Travels (default):** the person-level profile — who the researcher is, background and level, the interaction contract (defaults and recorded deviations), skills in play and their parameters.
- **Never travels:** project content — `state.md`, `context/knowledge/`, `context/records/`, `FRICTION/`. A new project starts those fresh.

## Steps

### 1. Read the profile

Read `context/profile.md`. Skim `context/records/` for recent overrides — the contract as *practiced* may have drifted from what onboarding recorded; if so, surface that to the researcher rather than copying a stale contract.

### 2. Ask the transfer scope

In conversation, propose the **default — profile only** — and ask whether they want to carry more:

- **profile only** *(default)* — who they are, level, contract, skill preferences.
- **+ carried preferences** — things learned in this project: how gates should feel, working cadence, what they chose to keep doing themselves.
- **+ anything they name** — their call, but keep it person-level; never project content.

Confirm the scope before writing. The scope choice is itself an interface decision under study — note any deviation from the default in `FRICTION/`.

### 3. Write the card

Write `researcher-card.md` at the workspace root (easy to find and copy out), with a status line and the confirmed scope:

```
# Researcher card
status: agent-drafted (carried from <project/workspace>, YYYY-MM-DD) · scope: <profile-only | profile + …>

## Who
## Background and level
## Interaction contract        — defaults + recorded deviations
## Skills in play              — and their parameters
## Carried preferences         — only if scope includes them; person-level, never project
```

Transcribe from the profile and the conversation; never invent. Then tell the researcher exactly what to do with it: copy `researcher-card.md` into a fresh copy of the starter workspace and say "start" — the new agent's `onboard` will import and confirm it instead of the cold interview.

## Hard lines

- **Person-level only.** Never write project content (research substance, decisions, state, knowledge) into the card — that stays with its project.
- The default is profile-only; carry more only on the researcher's explicit, recorded choice.
- Never mark anything done here; the card is `agent-drafted` until the new workspace's `onboard` confirms it with the researcher.

## Friction to watch

In the moment (CLAUDE.md §Friction capture): confusion about what the card carries, or a researcher wanting to transfer project content the card refuses. Tag usability or value.
