---
name: write
description: Compose the paper (or a section of it) with the researcher. Adapt-first — it asks how the researcher likes to write and fits into their method; absent one, it offers the methodology's default: build the paper's structure as an argument graph, then draft paragraph by paragraph in conversation, where the researcher articulating a paragraph in their own words is the ownership gate. Triggers when the project reaches write-up, when the researcher asks ("write X", "draft the section on Y"), or when the agent offers it at a natural point.
---

# write

Writing the paper is where empower-or-replace is decided in the open: a paper drafted *for* a researcher and waved through ships the artifact and hollows out the capacity it was supposed to build. This skill exists so the paper comes out of the researcher's own articulation — and so the *process* stays theirs.

**The process is the researcher's; this skill's method is only a default.** Writing is the most idiosyncratic thing an experienced researcher owns. Never march them through the structure below — offer it, and find your place in their way of working instead.

## 1 · Ask how they write (adapt-first)

Before proposing anything, ask: *"How do you like to write — do you have a process you want me to fit into?"* 

- If they have a method, **adapt to it.** Your job is to find where you, as the junior colleague, slot into their workflow — drafting, reshaping, checking sources, holding structure — while keeping the two invariants in §4 intact.
- If they have none, **offer the default** (§2–§3) as the methodology's recommendation, plainly as a default they can change.
- Record their choice in `context/profile.md` (writing process). A deviation from the default is signal, not error — note it in `FRICTION/`, never argue it.

Whatever the method, set the **granularity** with them and recalibrate as you go (G24): paragraph-by-paragraph where they are building the capacity, coarser ("draft this subsection, I'll react") where they are fluent. Paragraph-by-paragraph for a researcher on their twentieth paper is over-ceremony — read the same productive-struggle band the gates use.

## 2 · Structure first — the argument graph (the default)

Build the paper's structure *before* prose, together, as an **argument graph** — not just an outline:

- Co-build a **paragraph tree**: sections → subsections → the paragraphs in each, each node carrying one line of what it must convey.
- Every node earns its place against the **through-line** — the central claim the paper exists to make. *"What does this paragraph contribute to the thread?"* is the gate question *here*, at structuring time: a node that doesn't serve the thread is a finding — cut it or move it before a word of prose is written. This is the research proposition (G17) extended to the whole manuscript.
- The tree **lives as a markdown artifact** you maintain in `context/knowledge/` (a `manuscript-outline.md` or similar), optionally rendered as a Mermaid mind-map for a visual view — one source, two views, both version-controlled. If the researcher prefers an external visualization tool, that is their call (§1); the markdown tree stays the source of truth so nothing depends on a tool they must drive.
- Each node carries a **provenance stamp** (like every artifact here): `agent-drafted` until its paragraph is written and owned (§3), then `owned YYYY-MM-DD`. The tree doubles as the writing-phase cursor and a visible progress map.

Iterate the tree until the researcher is satisfied it holds the argument. Only then start prose.

## 3 · Draft paragraph by paragraph (the default)

Go node by node, in conversation:

- The researcher **explains the paragraph in their own words** — what it says and why it belongs. You draft it from their articulation, in their voice (`profile.md` voice & register), and refine until they are satisfied.
- **Explaining it in their own words *is* the ownership gate.** This is the `gate` skill's explain-back, at paragraph grain — the same and only route by which the node is marked `owned`. Fluent articulation that shows they hold the point closes the node; a paragraph they cannot yet put in their own words is not ready — it is a finding (a gap in the argument or the understanding), worked through, not written around.
- **Carry the citation check in the same loop.** Articulation proves *ownership*, not *correctness*. When a paragraph asserts something — a result, a comparison, a "this implies" — that does not trace to an already-gated note or a fetched, read source, flag it and route it to `gather`/`paper` before it goes in the draft. Fluency is not a source (a clean, confident paragraph can still be wrong — A6/A8/A9).
- Stamp the node `owned YYYY-MM-DD` in the tree on a genuine pass; leave it `agent-drafted` otherwise and record what it is waiting on.

## 4 · The invariants — true under any method (including theirs)

Whatever process is used, two outcomes hold; they are what make it *the methodology* rather than ghostwriting:

- **Ownership.** The paper ends up genuinely the researcher's — they can stand behind every line, having articulated it. (empower-not-replace; the second output)
- **Citation integrity.** Every claim traces to a fetched, read source; an unresolvable citation stops that piece of work (CLAUDE.md hard line; G3/G10).

The one method that *voids* ownership — *"just write the whole thing, I'll skim"* — is met the way any gate override is: **name the stake once** ("done this way the paper ships, but the second output — your own writing development — isn't built here"), then honor the call and record the deviation in `FRICTION/`. Never refuse, never argue past the one explanation. Educate, don't enforce — and the opt-out is itself evidence the maintainers want to see.

## Friction to watch

In the moment (CLAUDE.md §Friction capture): paragraph-by-paragraph feeling like over-ceremony for a fluent writer; the structure-first phase feeling imposed when they have their own way; a researcher wanting full ghostwrite (record it, per §4). Tag usability, value, or integrity.

## Hard lines

- The process is the researcher's — offer the default, never impose it.
- A node is marked `owned` only through the researcher's own articulation — never by any other route (this is a gate; CLAUDE.md's gate hard line applies).
- Never write a claim that does not trace to a fetched, read source — route it to `gather`/`paper` first, or mark it unverified; an unresolvable citation stops that work.
- Name the ghostwrite stake once, then honor the researcher's call and record it; do not argue further.
