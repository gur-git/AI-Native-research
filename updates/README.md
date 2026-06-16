# updates/

The downstream channel: how changes to the methodology reach researchers already working in scaffolded workspaces.

**Audience: the researcher's agent, not the researcher.** Each document here describes a batch of methodology changes in a form an agent can mediate — what changed, why (with the evidence), and what to ask its researcher. The researcher never reads a diff; their agent reads the document and runs a conversation: adopt, skip, or adapt, item by item. The `update` skill in the starter knows to look in this directory.

## How a release works — one file, every consumer

The update document is the **only carrier of change**, and the starter template is just its **first consumer**:

1. **The maintainer decides the change** (it lands in `METHODOLOGY.md` via the normal skills, evidence-first).
2. **The update document is written here** — with an attachments folder (`NNNN-files/`) beside it when the change installs whole files.
3. **The maintainer's agent applies the document to the starter template** — the same `update` skill a user's agent runs, in template mode. This is the document's test run: if the apply instructions fail or chafe, the document gets fixed *now*, before anyone else sees it. Closing steps bump the template's `starter_version` and move its pin to the inquiry commit carrying the document.
4. **The maintainer reviews and pushes** — inquiry repo first, then the template. That push is the moment the release exists; nothing publishes itself.
5. **Users' agents consume the same document** at their own pace, in conversation, item by item.

Alignment invariant: normative content originates only in `METHODOLOGY.md`; the template and every workspace receive changes through the same documents, so nothing can drift alone. New users are born current (the template was updated in step 3); existing users catch up through the documents their pin postdates.

## Conventions

- Documents are numbered and dated: `NNNN-short-slug.md`, ascending, each carrying `applies_from` (the pin range it applies to), `cut_at` (the inquiry commit it was cut from), and the `starter_version` it produces.
- **Immutable once published.** A document and its attachments are release artifacts — never edited after they are pushed. A correction is a new document.
- **Attachments carry whole files.** Small edits are written inline in the document ("add this line to…"); any whole file the update installs rides as exact content in `NNNN-files/`, and consumers install from there — never reconstructed from prose.
- Each item carries: **what changed**, **why** (one line, linking evidence), **what to ask your researcher**, and **how to apply** (the concrete edit or attachment to install).
- Adoption is per-item and always the researcher's call (template mode excepted — the maintainer authored the change). Skips and adaptations are recorded in the workspace so future updates know the history. After a full walk, the agent moves the pin forward — deliberately, never silently.
- Updates describe **methodology machinery only** — posture, gates, skills, defaults. They never instruct an agent to touch a researcher's own content (state, knowledge, records).
- **Lifecycle tag.** Each document (and, where they differ, each item) carries `lifecycle: permanent | dev-instrumentation`. `dev-instrumentation` items are self-documenting scaffold for the current pilot phase — shipped now to gather validation evidence, and slated for clean removal by a later document before the lean deploy build. The tag lets a consumer know a change is temporary by design.
- **Calibration linkage.** When a document fixes a failure a field test surfaced (see [`VALIDATION.md`](../VALIDATION.md) §2), it names the **pillar** and the **dry-test gap** it closes — so the release record doubles as the trail that a new regression dry test was added.
