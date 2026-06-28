# 2026-06-28 — Update 0008: proactive update discovery

The downstream channel was pull-only — the researcher (or their agent) had to ask before `update` would check for upstream methodology changes. The `update` skill already anticipated proactive discovery (*"if you notice the pin is behind, mention it and offer this skill"*) but nothing triggered the check. This change activates it: a **cheap session-start check** compares the pin against the source `updates/` and offers the walk when the pin is behind — never updating unprompted, and never re-offering a version the researcher has declined (a one-line decline note in `context/records/` suppresses re-offers until a newer document appears).

Reasoning-led (extends the downstream channel; the near-zero-cost / researcher-independence principle). A **per-session** check, not a wall-clock scheduler — surface-robust and free, where a hook would silently not fire on some surfaces (the VS Code extension). Source: `METHODOLOGY.md` §6 (the session ritual answers A10) and §8 (sync channels + the `update` mapping). Bears on **Q14** (does the methodology transfer through the self-serve interface).

## Released

Released as [update 0008](../updates/0008-proactive-update-discovery.md) (`starter_version` 0.7.0 → 0.8.0). Applied to the starter template as the first consumer. `cut_at` cfbf095; `applies_from` 72d7e36 (the 0007 release).
