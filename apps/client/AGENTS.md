# AGENTS.md — newPortfolio

Context for agents working on the Facile. Studio portfolio. Stack: Next.js 16 (App Router, standalone), TypeScript, next-intl, Tailwind v4, GSAP. See `README.md` for the logic skeleton that already exists.

## Homepage scroll-reveal effect (design intent)

The signature homepage interaction. Understand the *logic* before touching layout — the naive mental model is wrong and will waste time.

### Core principle

The dithered 3D model is **one fixed full-screen layer that never moves with scroll**. The white panels are **windows (masks)** that decide *where* that fixed layer is allowed to show. Nothing is ever a child "inside" a panel.

Do **not** model this as "white divs that contain the model." That approach can't produce the intended look and fights the layout. The object must read as a single continuous form revealed simultaneously through multiple separate windows (e.g. top-left and bottom-right at once) — only possible with one shared layer revealed through holes. Duplicating the model per panel would draw the same sprite twice, losing continuity and depth.

### Layer order (back → front)

1. Green page background (static).
2. Reveal text (headline + CTA) — fades in last, once panels have filled.
3. The "stage": a fixed, full-viewport layer = white backing + the dithered model canvas on top of it. This layer is masked. White backing makes the model read as gray-on-white; green shows wherever the mask hides the stage.
4. Header / nav (logo, Menu) — always on top.

### How the reveal works

- The stage stays fixed to the viewport. The **mask animates, not the stage or the model.**
- The mask is composed of N rectangular bands (4, one per team member — the "theming of 4"). Each band grows from zero to its share of the screen as the user scrolls. Stacked, the bands tile the full viewport.
- Bands rise successively (staggered), from bottom to top. When all bands have filled, the screen is fully white and the model is fully revealed; the reveal text then fades in.
- Orientation is a parameter: horizontal bands (full width, growing height) or vertical bands (full height, growing width) — "w-full or h-full depending on orientation."
- Driven by GSAP ScrollTrigger: pin the section, scrub the timeline to scroll progress, animate the mask geometry across the pinned distance.

### Critical gotcha

`position: fixed` is **not** fixed to the viewport when any ancestor has a CSS `transform`. A transformed ancestor becomes the containing block. GSAP animates via `transform` by default. Therefore the model must **never** be a descendant of any element GSAP transforms, or it will ride along with that element instead of staying put. Keep the model in its own layer and animate the **mask**, not the model.

### Model's own motion

The model "moves a bit" independently of scroll (idle drift or mouse parallax). This lives on the model's own transform, which is a child of the stage; the mask lives on the stage itself. The two are decoupled, so the drift never conflicts with the reveal.

### Dithered / pixelised look

Phased: v1 uses a pre-rendered transparent PNG with the dither/halftone baked in (zero runtime cost, lets the scroll choreography be perfected first). v2 swaps to a Three.js canvas rendered at low resolution, upscaled with nearest-neighbour filtering for chunky pixels plus an ordered-dither postprocess pass for the cross halftone. Architecture is identical either way — it's just the masked layer's content.

### Repetition & inner pages

- The effect repeats down the page: each reveal is a self-contained pinned section with its own ScrollTrigger. Prefer **one global fixed stage** mounted once in the layout, with each section feeding it scroll progress and optionally swapping the model / moving the camera, so the same object appears to follow the user down the page.
- On inner pages a "panel" can be the mask at full size (or no mask). Because the model is a single fixed `inset:0` layer at constant viewport coordinates, it does **not** reposition when the white area grows to fill the page. Corners on the homepage are just the same fixed model with the mask exposing only those regions.

### Next.js wiring notes

- GSAP / ScrollTrigger are client-only — keep the effect in a `"use client"` component, register the plugin inside an effect.
- Use `gsap.context(scope)` and revert it on cleanup. App Router client navigation remounts components; without revert, ScrollTriggers leak and stack.
- Mount the global model/stage layer once in `app/[locale]/layout.tsx` so it persists across route transitions.
- Call `ScrollTrigger.refresh()` after route changes / font loads so pin distances recompute.

### Build order

1. Static green page + fixed stage (white + placeholder image).
2. Mask of N bands; verify a band reveals correctly when set manually.
3. GSAP ScrollTrigger pin + scrub, animate the bands, then fade the text.
4. Add independent model drift.
5. Swap placeholder for the Three.js dithered canvas.
6. Promote the stage to a global layer; repeat across sections.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
