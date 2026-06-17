---
name: release-update
description: Release a methodology change as an update document that every downstream copy - the starter template first, then users' workspaces - consumes through the same process. Drafts the document (+ attachments for whole files), applies it to the template as its first consumer (the test run), moves versions and pins, and prepares the commits for the maintainer to review and push. Use after a deliberate change to METHODOLOGY.md (or researcher-facing foundation content) has been decided; triggers on "release", "release the update", or as the closing step of add-guideline when a change is researcher-facing.
---

# release-update

One artifact carries every change: the **update document**. The starter template is its first consumer — applying the document to the template *is* how the template stays aligned, and is also the document's test run before any user sees it. The maintainer's place: they decide the change, they review the bundle this skill prepares, and they push. Nothing publishes itself.

## Preconditions

- The methodology change itself is already made and decided (registry edited via `add-guideline`, METHODOLOGY.md sections updated, log entry written). This skill *releases* changes; it does not make them.
- The starter template working copy is at `c:\Code\ai-native-research-starter` (adjust if it moves).

## Procedure

### 1 · Determine scope

Find the last release point: the `cut_at` commit in the highest-numbered document in `updates/`. Diff from there to the current state over `METHODOLOGY.md` and `foundation/` (ignore `updates/`, `log/`, `evidence/`, `case-studies/`). Summarize every substantive change.

### 2 · Classify

For each change: **researcher-facing** (changes what a workspace agent should do — posture, gates, modes, skills, workspace shape, defaults) or **inquiry-internal**. If nothing is researcher-facing: report that and stop — no document, no release.

### 3 · Draft the update document (+ attachments)

`updates/NNNN-<slug>.md`, next number, per the conventions in [`updates/README.md`](../../../updates/README.md):

- Header: `date`, `applies_from` (anything pinned at or before the previous release's **carrying commit** — the inquiry HEAD consumers pinned to *after* that release, **not** its `cut_at`: a workspace's pin advances to the fetched HEAD when it consumes a release (`update` skill §4), so an `applies_from` set to the previous `cut_at` skips everyone who already took the previous release), `cut_at` (filled in step 5), `starter_version` (the version this release produces).
- One item per researcher-facing change: **what changed**, **why** (one line, evidence links — relayed honestly), **what to ask your researcher**, **how to apply**.
- **Whole files ride as attachments**: exact content in `updates/NNNN-files/<name>`, with the item pointing at the attachment. Small edits are written inline. A consumer must be able to apply every item from the document and its attachments alone — never from prose reconstruction.
- Never instruct touching researcher content (state substance, knowledge, records, friction).

### 4 · Apply to the template — the first consumer and the test run

Run the starter's own `update` skill in **template mode** against the template working copy, walking the just-drafted document item by item. The maintainer authored the change, so there is no adoption interview — but every apply instruction gets executed exactly as written. **If an instruction fails, is ambiguous, or needs adapting on contact: fix the document (and attachments), not just the template** — it is not yet published, so it is still editable; that is the point of consuming it here first. Closing steps per the skill's template mode: bump `starter_version` in the template's CLAUDE.md; the pin moves in step 5. Template mode writes no `context/records/` entries — the session is recorded in the commit message.

After applying, verify against METHODOLOGY.md §8 (the element mapping): every element the changed practices map to should now be consistent, and no normative content should exist only in the template. Mismatches mean the document missed an item — fix and re-apply.

### 5 · Commit and pin (this order keeps the pins valid)

1. Commit the inquiry repo: the update document + attachments (+ any document fixes from step 4). Read the new HEAD hash and write it into the document's `cut_at` — the shipped document carries its own cut point.
2. Set the template's `pinned_commit` to that inquiry HEAD.
3. Commit the template: the applied changes + version bump + pin, with the update session summarized in the commit message.
4. Append a log entry here (what was released, document number, starter version).

### 6 · Hand to the maintainer

Report the bundle: changes classified, the document and attachments, what the template application surfaced (document fixes are signal about update-doc quality — note them), both commit hashes, and the push order — **inquiry first, then template**. State the standing caveat: pushing must preserve local hashes (no rebase/squash after pinning), or the pins must be refreshed first. After the push, the document and attachments are **immutable** — corrections are a new document.

## Reminders

- One release can bundle several changes; number documents by release, not by practice.
- `applies_from`/`cut_at` are commit-based — a workspace born from an old template catches up through the same documents.
- If the maintainer wants a GitHub release on the template for visibility, the update document is the changelog — don't write a second one.
