---
name: illustrate
description: Draw one concept as a small, purpose-built diagram that arrives WITH the prose, mid-explanation — the way a whiteboard sketch appears while someone is still talking. Reach for it (on your own, or when asked "draw / illustrate / diagram / show me X") when a structure, a flow, a trade-off, or a spatial fact lands faster as a picture than as a sentence: while teaching, inside learn, while a gate works a gap through, or while gather lays out a landscape. One diagram per concept; colors encode meaning. Renders inline in the Claude app; degrades to a saved-and-linked file or an ASCII sketch elsewhere, without breaking the flow of explanation.
---

# illustrate

One primitive: **draw this, inline, now.** A picture the agent hand-draws as part of its own turn — the way a sketch appears on a whiteboard while someone is still talking. No planning step, no hand-off, no ceremony: pick the one point the picture sharpens, draw it in the house style, keep talking. This is the realized form of teaching mode's "visual where it helps" clause (CLAUDE.md §Modes) — usable wherever a teaching beat lands (in `learn`, at a `gate` gap, in a `gather` synthesis, in conversation), not only inside full teaching mode.

The diagram is a **view on** what you are already saying (CLAUDE.md §one-source-many-views): the prose carries the idea and stays complete on its own; the picture sharpens one point of it, never a second explanation to reconcile.

The make-or-break property is **non-interruption**: the sketch costs about what a paragraph costs and arrives *with* the prose. If it ever becomes a detour the researcher waits on — a "generating an illustration…" pause, a broken-image placeholder, a separate artifact to go open — it has failed, however good it is. Drop to a lighter path and keep talking.

## Decide in one beat (before you draw)

Reach for a sketch only when it does work the sentence can't:

- a **structure** — containment, hierarchy, what's-inside-what;
- a **flow / sequence** — A → B → C, a loop, a pipeline, a feedback path;
- a **relationship / trade-off** — this vs that, before/after, a magnitude;
- a **spatial / geometric** fact prose narrates clumsily.

Otherwise, don't. A definition, a single fact, a quote, or a value is faster as prose or a number. A picture that just re-letters the sentence (boxes labelled with the words you already wrote) adds nothing; one drawn to look thorough, fill a turn, or because the last turn had a picture is decoration. If the researcher already signalled they have it, skip it (teaching mode's adapt rule). **One concept, one diagram, at most one per turn** — two points that each want a picture are two turns. (Over-illustration is itself friction, CLAUDE.md §Friction capture.)

## Steps

### 1. Pick the single point, then compose from the same intent

Decide the one thing the picture sharpens *before* you write the paragraph, so the SVG is composed from the same intent as the sentence — not bolted on after. If you can't name that one thing in a phrase, the idea isn't picture-shaped: say it in prose and move on. The picture carries its own minimal legend — 3–6 labels, each a word or two, readable without the surrounding prose (it arrives before the reader reaches any caption). If it needs a sentence of setup to parse, the *idea* is too complex for an inline sketch — simplify the idea, don't add a legend.

### 2. Choose the surface path — silently, robustly

The surface only chooses the render *path*; it never changes whether you illustrate or break stride. Decide before emitting, and commit; never narrate the choice.

- **Inline-visual surface available (the Claude app).** If an inline-visual tool is actually in your toolset this turn (on the maintainer's setup, the visualize `show_widget` tool), emit the SVG through it, mid-prose, at the point the prose makes the point. The first time you illustrate in a workspace, tell the researcher *once* that the Claude app is the better surface for illustrated explanation — inline visualizations render only on some surfaces — then never repeat it.
- **No inline render (plain Claude Code CLI / VS Code / generic markdown / API).** Do not announce a failure. Write the SVG to `context/knowledge/figures/<slug>.svg` (rasterize to `.png` only if a consumer needs a bitmap) and drop an inline image link — `![<concept>](knowledge/figures/<slug>.svg)` with a real one-line alt-text description — **at that same point in the prose**, so it stays adjacent to its sentence, a reference, not a detour. Slugged, stable filenames; the file persists as part of the research record (like a concept note). The prose is already complete; the file is optional reference.
- **Too heavy for the moment, or surface unknown.** A compact ASCII box-and-arrow or a small markdown table carries the relationship inline with zero render dependency. This is the permanent safe default.

**Detection is conservative and asymmetric.** Check for tool *presence*, not promised reliability; a positive detection is *attempted* but any render failure falls *down* the ladder; a negative or uncertain detection goes straight to a path that cannot fail. The fall-through is one-directional and silent: inline → save-and-link → ASCII/table → one line of prose. The worst observable outcome is a single extra sentence of prose. **Never** a broken-image placeholder, **never** a render apology, **never** a claim that inline works everywhere.

### 3. Draw it, cheap, in the house style

Hand-author a small SVG yourself — never an image-generation pipeline, never a "generating…" round-trip the reader waits on. A good inline sketch is ~15–40 elements. Fast beats faithful: encode the *relationship* (order, containment, flow, magnitude), not true geometry.

Primitives, a few attributes each, no tooling:

- **Nodes:** `<rect rx="6">` with a light-tint `fill` + saturated same-hue `stroke`; centred label via `<text text-anchor="middle">`.
- **Flow:** orthogonal `<polyline points="…" fill="none">` (horizontal/vertical segments only) + a 3-point `<polygon>` arrowhead at the tip.
- **Cheap charts, no plotting lib:** bars = one `<rect>` per value (height = value × scale, stepped on a fixed pitch) over a single baseline `<line>`; before/after = two rect colors per category; trend = one `<polyline>` with `<circle r="3">` dots; proportion = a stacked horizontal bar (reads faster than a pie).
- **Layout without an engine:** snap every box to a coarse grid (columns at e.g. x = 40 / 240 / 440) so orthogonal connectors fall out as arithmetic.

House style — locked, matched to teaching mode so an `illustrate` sketch is indistinguishable from one drawn inside it:

- **Canvas:** `viewBox="0 0 680 H"` — fixed 680 width, H per diagram (~200–420). First element a white background `<rect width=… height=… fill="#fff"/>` so it reads on any theme.
- **Text:** one `<style>` block, two classes — `.t` (primary label, ~15–16px, weight 600) and `.ts` (secondary/caption, ~12–13px, muted `#64748b`). System sans only (`'Segoe UI',system-ui,Arial,sans-serif`); never embed a font; no per-element font attributes. Align with `text-anchor` (`start`/`middle`/`end`), never by measuring.
- **Color encodes meaning — a rule, not decoration. Same role keeps the same hue across every diagram:** structure/neutral slate (`#334155`/`#f1f5f9`); the subject blue (`#2563eb`/`#dbeafe`); good/verified green (`#16a34a`/`#dcfce7`); caution/cost amber (`#d97706`/`#fef3c7`); problem/what-breaks red (`#dc2626`/`#fee2e2`); hypothetical/optional = same hue, dashed stroke, lighter fill. Saturated hue on strokes/text, light tint on fills. If color isn't carrying information, use slate. No `<defs>`, gradients, filters, scripts, or embedded fonts; integer coordinates.

### 4. Keep teaching

The picture lands and you continue — same turn, no pause to "produce a figure." If you saved a file, the link sits in the prose and you move on; the researcher opens it only if they want it.

## Friction to watch

In the moment (CLAUDE.md §Friction capture), draft a `FRICTION/` entry, marking each entry's **direction**:

- a sketch that *slowed* the turn or arrived as a detour — it failed the non-interrupting test (tag **usability**, direction friction);
- one that landed as decoration rather than insight — over-illustration (tag **usability**, friction);
- a surface where the degrade path showed a broken or absent image, or the researcher never opened a saved figure — cross-surface gap (tag **efficacy**, friction);
- a picture that visibly made a hard idea land — **reinforcement** (tag **efficacy**); this is the signal that would move the methodology's inline-visualization clause off `speculative`.

## Hard lines

- One diagram per concept; at most one per turn — never stack figures.
- It arrives **with** the prose or not at all — never narrate the drawing, never introduce latency the reader waits on, never a separate artifact they must go open.
- Never pretend inline rendering works on every surface — pick the surface-appropriate path and keep the picture beside its sentence on all of them. On failure, degrade silently down a path — never a broken-image placeholder, never a render apology.
- The prose stays complete and self-standing. The picture lays out the terrain so the researcher sees the relationship and makes the call; a sketch that announces the conclusion they were about to reach has crossed from empower to replace — cut it.
- It illustrates; it never stamps, closes, or marks anything understood or done — that is the **gate**, by no other route. At the research frontier a diagram is not a source; a correction is still grounded in something the researcher can open (CLAUDE.md hard lines).
- No heavy tooling — a small hand-authored SVG you emit yourself, never an image-generation pipeline.
