---
name: prepush-check
description: The gate before pushing the inquiry repo or its starter template. Runs the consistency and integrity checks a methodology-and-markdown release can actually break — link/citation integrity on changed files, clean working trees, update-document headers, and the release invariants (the template pin resolves in the inquiry repo, starter_version is coherent, every attachment is byte-identical to its installed skill, every METHODOLOGY §8 mapped skill exists, changed skills have valid frontmatter). These repos have no CI; this is the equivalent. Push only if every check passes. Triggers on "prepush", "run the prepush checks/tests", or before pushing a release.
---

# prepush-check

The gate before a push. These repos ship no CI, so this skill is the substitute: the mechanical defects a release can introduce — a broken citation link, a pin that doesn't resolve, an attachment that drifted from its installed skill, a version mismatch — that would otherwise get published. Update documents are **immutable once pushed**, so a defect caught here is cheap and one caught after is a whole new document.

It does **not** judge whether the change is *right* — only that the release is internally consistent and its links resolve. The maintainer's review is the substantive gate; this is the seatbelt.

## When to run

Before pushing either repo — especially after `release-update` (a new update document, a pin/version move, a newly installed skill). Run it, read the result, push only if it is green.

## How to run

From Git Bash, at the inquiry repo root:

```
bash .claude/skills/prepush-check/check.sh
```

It defaults to `c:/Code/AI native research` and `c:/Code/ai-native-research-starter`; pass two paths to override. Exit code 0 means all pass; 1 means something failed, and the `FAIL —` lines say what.

## What it checks

1. **Working trees clean** — you push committed state; uncommitted changes won't be carried.
2. **Link / citation integrity** — every relative markdown link in the changed files resolves. The trust chain is the point of this repo; a broken citation is a real defect. External URLs and placeholders (`<slug>`, backticked, starred) are skipped.
3. **Update-document headers** — every `updates/NNNN-*.md` carries `applies_from`, `cut_at`, `starter_version`.
4. **Pin resolves** — the template's `pinned_commit` is a real commit in the inquiry repo, so a consumer can fetch the document it carries. (If this fails right before a push, you usually just need to push the inquiry repo first.)
5. **Version coherence** — the template's `starter_version` matches the highest-numbered update document.
6. **Attachment fidelity** — for the release being pushed (the new/changed update docs vs `origin/main`), each `NNNN-files/<skill>-SKILL.md` attachment is byte-identical to the installed `.claude/skills/<skill>/SKILL.md`. Consumers install from the attachment; drift means they get a different file than the template's own test run used. (Historical attachments are immutable snapshots and may legitimately differ once a later update edits that skill inline — so only the current release's attachments are checked.)
7. **§8 mapped skills exist** — every skill `METHODOLOGY.md` §8 maps is present in the starter.
8. **Skill frontmatter** — changed `SKILL.md` files open with `name` + `description`.

## The gate

If any check fails, **do not push** — fix the defect first (published update documents are immutable; the fix belongs *before* the push, not in a follow-up document). Re-run until green, then push **inquiry first, then template** — the template's pin points at an inquiry commit, which must exist on the inquiry remote first; never rebase or squash after pinning, or the pin breaks (refresh it if you must rewrite history).

## Limits

- Mechanical only — internal consistency and resolvable links, not whether the methodology is sound.
- Assumes the standard release layout: `updates/NNNN-*.md`, `updates/NNNN-files/<skill>-SKILL.md` attachments, and the source-pin block in the template `CLAUDE.md`.
- Bash (Git Bash on Windows); it shells out to `git`, `grep`, `diff`, `sed`.
