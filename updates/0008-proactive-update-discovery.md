# 0008 — The agent checks for updates on its own

```
date:            2026-06-28
applies_from:    any pin at or before 72d7e360ff21ddc67a226229a9301e4ecc9f7444 (2026-06-28, the 0007 release)
cut_at:          cfbf095d65fb3ed60b9aefdc3d4410e9a2229a4c   # the inquiry commit carrying the methodology change
starter_version: 0.8.0
lifecycle:       permanent
```

One change to the **downstream channel**. Until now `update` was pull-only — the researcher
had to ask before the agent would look for methodology changes. The agent now **checks on its
own**: at session start it cheaply compares the pin against the source `updates/` and, if the
pin is behind, *offers* the walk in one line. It never updates unprompted, and never re-offers
a version the researcher has declined. A **per-session** check (not a scheduler) — surface-robust
and free, where a hook would silently not fire on some surfaces. Source: `METHODOLOGY.md` §6
(session ritual) and §8 (sync channels + the `update` mapping); reasoning in the
[2026-06-28 log](../log/2026-06-28-update-0008-proactive-discovery.md). Reasoning-led; bears on
Q14 (does the methodology transfer through the self-serve interface).

---

## Item 1 — Proactive update discovery at session start · `lifecycle: permanent`

**What changed.** The `update` skill always said *"if you notice the pin is behind, offer the
skill"* — but nothing made the agent notice. Now the **session ritual's start step** runs a
cheap check: does the source repo's `updates/` hold documents past the pin? If so, the agent
mentions it in one line and offers the `update` walk. Guards: the check is fast and
non-blocking (it must not delay the session start), the agent never starts the walk unprompted,
and a researcher's "not now" is recorded (`update walk declined YYYY-MM-DD at pin <hash>` in
`context/records/`) so the same updates are not re-offered every session — only a *newer*
document re-triggers the offer.

**Why.** Pull-only discovery puts the burden on the researcher to remember to check; methodology
improvements then sit unseen. A light proactive offer fits the near-zero-cost,
researcher-independence aim of the downstream channel (`METHODOLOGY.md` §8; bears on Q14).

**What to ask your researcher.** Nothing to decide — just do the check at session start and
offer the walk when there is something new, in one line; respect a "not now" and don't re-raise
that version.

**How to apply.**

1. In `CLAUDE.md` §Session ritual, extend the **Start** bullet:
   - from: `- **Start:** load \`state.md\`; re-ground in the current question, constraints, and open threads before doing anything else.`
   - to: `- **Start:** load \`state.md\`; re-ground in the current question, constraints, and open threads before doing anything else. Then run a **cheap upstream-update check** in the background — see whether the source repo's \`updates/\` has documents past the pin; if so, mention it in one line and offer the **update** skill (never run it unprompted, never re-offer a version the researcher has already declined). Keep it fast: it must not delay the session start.`

2. In `.claude/skills/update/SKILL.md`:
   - Replace the trailing sentence of the frontmatter `description`:
     - from: `Triggers on "update" or "check for updates"; if you notice the pin is behind, mention it and offer this skill — never run it unprompted.`
     - to: `Triggers on "update" or "check for updates", and on the session-start discovery check finding the pin behind; offer the walk — never run it unprompted, and never re-offer a version the researcher has declined.`
   - Add a paragraph right after the opening paragraph (the one ending "Adoption decisions are researcher-reserved."):
     `**Discovery is proactive.** The session-start check (\`CLAUDE.md\` §Session ritual) compares the pin against the source \`updates/\` and offers this walk when the pin is behind — so the researcher need not remember to ask. The offer never nags: never start the walk unprompted, and if the researcher declines, record a one-line note in \`context/records/\` (\`update walk declined YYYY-MM-DD at pin <hash>\`) so the same updates are not re-offered every session — only a *newer* document past that point re-triggers the offer.`

---

## Closing (template mode / maintainer)

- Bump `starter_version` to **0.8.0** (minor — one behavior change, no new files).
- Move the template's `pinned_commit` to this document's carrying commit once the inquiry repo
  is committed.
- `permanent`. Whether the proactive offer helps or chafes is `FRICTION/` signal on Q14.
