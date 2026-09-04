# Performance audit — Facile vitrine

Static analysis of the `redesign` branch, 2026-09-04. No Lighthouse run, no profiler
trace: everything below is read off the code and the asset tree, so treat the ordering
as confident and any timing claim as a hypothesis to confirm. "Measure next" at the end
says what to run.

Target: usable on a laptop with integrated graphics and no discrete GPU.

## Status

Done in the first pass, all of them changes with no look to judge: finding 2 (menu canvas
released on close), finding 8 (materials cloned per instance, and disposed), the GPU
detection under "The no-GPU path", and lazy loading on the story media.

Findings 4 and 5 — shadows off, `dpr` pinned to 1 — are one-liners held back because both
change what the page looks like. See the note under each.

Findings 1, 3, 6, 7, 9 are open.

## The two problems

They are independent, and only one of them is about 3D.

**99 MB of images.** `public/images` holds 68 files and one of them is a 16.8 MB PNG.
`next.config.ts` sets no `images` config and exactly one component uses `next/image`,
against 15 raw `<img>` tags. Nothing is resized, nothing is served as AVIF or WebP,
nothing has a `srcset`. This hurts every visitor on every machine, GPU or not, and it
dwarfs the WebGL cost on a first visit.

**One WebGL context per 3D element.** Every `DitherView` builds its own `<Canvas>`, its
own `EffectComposer`, and its own drei `<Environment>` that bakes a cubemap from a scene
of 20 lights and 8 meshes. Browsers cap concurrent contexts around 16 and silently kill
the oldest when you pass it — that is what blanked the heads before commit `dec1945`.
On integrated graphics the cost is not the count, it is that each context runs a full
render loop against a shared, weak GPU.

## What mounts per route

Counts are at rest, before the menu is opened.

| Route | WebGL contexts | Notes |
|---|---|---|
| `/` | 8 | hero F 1, hero heads 4, manifesto 1, shelf backdrop 1, LightPillar 1 |
| `/projects` | 2 | backdrop, LightPillar (projet-zero card) |
| `/projects/marcel` | 11 | story backdrop, 4 intro heads, 6 chapter heads |
| `/projects/<other>` | 2–5 | no chapter owners authored yet outside Marcel |
| `/studio` | 4 | the grid heads |
| `/studio/<member>` | 1 | one full-bleed head |
| `/suite` | 2 | backdrop, band |
| `/process` | 1 | |

Add one to every row once the menu has been opened, and it stays for the life of the page:
`mountDither` in `components/facile/menu.tsx:115` latches true on first open and never goes
back, so the canvas outlives the menu it belongs to. Unmounting it a second after close
would return a context to every route, cheaply.

## Findings

Ordered by payoff over effort.

### 1. Serve the images through a pipeline — 99 MB → single-digit MB

**Where:** `public/images/projects/*`, 15 raw `<img>` tags across `app` and `components`.

The four worst offenders are 16.8, 16.7, 14.9 and 10.5 MB PNGs. A photograph in PNG is
already the wrong container; at full resolution with no `srcset` it is three mistakes at
once.

**Fix:** switch the project media to `next/image`, which gives AVIF/WebP negotiation,
`srcset`, and lazy loading in one move. Where a raw `<img>` has to stay — `story/bento.tsx`
paints into a measured grid — precompress the sources to WebP at a sane maximum edge (2560px
is generous for a full-bleed) and keep the originals out of `public`.

Expect the single biggest wall-clock improvement on the site from this alone, and it costs
no rendering fidelity.

### 2. Release the menu canvas when the menu closes

**Where:** `components/facile/menu.tsx:115-135`.

`mountDither` is set true on the first open and never set back, so from then on every route
carries a full-screen canvas rendering every frame behind a `clip-path` nobody can see
through. The IntersectionObserver cannot help: the container is `inset-0`, so it is always
"visible".

**Fix:** set `mountDither` false on a timer after close, long enough for the wipe to finish
(`exitDelay` + the clip transition, so roughly 1.5s). Cheap, and it is one context back on
every page.

### 3. Bake the environment once instead of per canvas

**Where:** `webgl/environment.tsx`, used by every `DitherView`.

`EnvironmentWrapper` renders `<Room>` — four shadow-casting spotlights, a point light and
eight meshes — into a cubemap at 1024 (256 in `lite`). Every canvas does this
independently at startup, and re-does it whenever its subtree re-renders. On `/projects/marcel`
that is twelve cubemap bakes for one identical lighting rig.

**Fix:** render the room once, offline or on first load, and hand every `DitherView` the
resulting `.hdr` through `<Environment files={...}>`. `useLoader` caches it, so twelve
canvases share one texture and the room geometry stops existing at runtime. This is the
single largest structural win for a no-GPU machine.

It also lets `PageCurtain` lift sooner: the curtain now waits on model loads, and a cubemap
bake per canvas is part of what it is waiting through.

### 4. Turn shadows off everywhere, not just in `lite`

**Where:** `webgl/DitherView.tsx`, `shadows={lite ? false : { type: THREE.PCFShadowMap }}`.

Five shadow-casting lights render five shadow maps per frame per canvas. The output is
then posterised onto a dither grid coarse enough that a soft shadow edge cannot survive
it. Non-`lite` canvases — the hero, the studio grid, the member page — still pay in full.

Try `shadows={false}` globally and compare screenshots. My expectation is that nobody can
tell, and it removes five render passes per frame per canvas.

Held back: it is one word, but it is a look change and I cannot see the screen.

### 5. Pin `dpr` to 1

**Where:** `webgl/DitherView.tsx`, `dpr={lite ? 1 : [1, 2]}`.

On a 2× display, `[1, 2]` quadruples the pixels every one of those passes touches. The
frame is dithered to a grid afterwards, so the extra resolution is thrown away by design.
This is a one-line change and on integrated graphics it is close to a 4× saving on
fill-rate-bound work.

Held back, and this one is not free: the shader takes `resolution` from
`inputBuffer.width/height` in device pixels and computes `pixelSize = gridSize *
pixelSizeRatio` in those units, so halving `dpr` doubles the visible dot size. Pin it to 1
and halve `gridSize` at the same time to land in the same place, then compare.

### 6. Cap the frame rate, or move to `frameloop="demand"`

**Where:** `webgl/DitherView.tsx` `frameloop={active ? "always" : "never"}`,
`webgl/DitherModel.tsx` `useFrame`.

Every visible canvas renders at display rate. The models only drift on two slow sines and
follow the pointer with a lerp — nothing in that needs 120 Hz, or even 60. Skipping to
~30 fps halves the GPU work for motion nobody will notice, and on a 120 Hz panel it is a
4× cut.

`frameloop="demand"` plus `invalidate()` on pointer move is the cleaner endpoint but needs
the idle drift reworked, so the frame cap is the cheap first step.

### 7. Share one canvas across the story heads

**Where:** `components/facile/story/head.tsx`, `components/facile/story/track.tsx`,
`components/facile/story/blocks/intro.tsx`.

`DitherView` already accepts `models[]` and renders several models in one canvas — that is
how `projects/components/shelf/backdrop.tsx` draws two `manifesto.glb` instances. The intro
credits row could be one canvas with four models positioned side by side instead of four
canvases.

Where the heads are far apart in the DOM, drei's `<View>` renders many viewports from a
single renderer against tracking divs. That is the proper fix for the studio grid and the
chapter heads, and it takes `/projects/marcel` from twelve contexts to two.

Bigger job than the others. Do 1–6 first and re-measure; this may not be needed.

### 8. `scene.clone(true)` shares materials between instances

**Where:** `webgl/DitherModel.tsx:52-82`.

`clone(true)` copies the graph but the clones keep references to the same material objects.
The `traverse` then writes `mat.roughness`, `mat.metalness` and `mat.color` on them. Two
components using the same GLB with different settings overwrite each other — `F.glb` is
used by both `hero.tsx` and `menu.tsx`, with different `roughness`.

This is a correctness bug that also wastes work: clone the materials explicitly, or better,
build one configured scene per `(file, roughness, metalness, hairColor)` tuple in a module
cache and reuse it. Fewer materials means fewer shader programs to compile, which is
startup time on a weak GPU.

### 9. Compress the models

**Where:** `public/models`, 5.9 MB total, `manifesto.glb` alone is 4.0 MB.

Run the meshes through Draco or meshopt and the textures through KTX2. A Mii head has no
business being 763 kB (`mazouz.glb`). `manifesto.glb` is loaded on the home page and both
shelf backdrops.

Also add `useGLTF.preload()` for the models a route is about to need, so the fetch overlaps
the curtain rather than following it — the curtain now waits on these, so their download
time is directly the time the visitor stares at stripes.

### 10. `LightPillar` is a raymarcher at up to 64 steps per pixel

**Where:** `components/LightPillar.tsx:72-84`.

It is the best-behaved 3D in the codebase — real quality tiers, WebGL feature detection,
IntersectionObserver gating, context-loss recovery — and it is still a per-pixel
raymarching loop at `pixelRatio: min(devicePixelRatio, 2)` on `high`.

Its `isLowEndDevice` check is `isMobile || hardwareConcurrency <= 4`. A desktop with
integrated graphics and 8 cores reports as high-end and gets the 64-iteration path. Core
count says nothing about the GPU.

## The no-GPU path

Nothing in the app asks whether rendering this is a good idea. `DitherView` creates a
context and starts a loop regardless; only `LightPillar` checks anything, and it checks
the wrong thing.

Three levels, cheapest first.

**Detect the renderer, not the CPU.** `WEBGL_debug_renderer_info` gives
`UNMASKED_RENDERER_WEBGL` — "SwiftShader", "llvmpipe" or "Software" means the GPU is not
involved and the answer is a static image, not a smaller canvas. Read it once and put it in
a context.

**Honour `prefers-reduced-motion`.** The marquee already does
(`globals.css`). The 3D does not. Someone who has asked their OS for less motion is served
a dozen animated canvases.

**Give every canvas a poster.** A `<canvas>` that cannot run should fall back to a still
image of what it would have drawn, not to empty space. Render one PNG per model at build
time and hand it to `DitherReveal` as a fallback. This also fixes the first paint for
everyone: the poster shows while the GLB downloads.

A budget worth adopting: **at most two live WebGL contexts per route**, everything else a
poster until interacted with.

## What is already right

Worth keeping, because it is the pattern the rest should follow.

- `DitherView`'s IntersectionObserver drops `frameloop` to `"never"` off-screen.
- `PostProcessing` disposes its `EffectComposer` on unmount, and rebuilds after a lost
  context. GPU memory leaks here are the difference between a slow page and a dead tab.
- The `lite` flag exists and is applied to the small heads.
- `DitherModel` no longer measures the canvas on every `pointermove`.
- `PersonHead` holds no state, so hovering cannot re-render a canvas.
- `LightPillar`'s quality tiers and WebGL detection — the shape to copy, once the detection
  looks at the GPU.

## Measure next

Static analysis gets the ordering right and the magnitudes wrong. Before doing 7, get:

1. Lighthouse on `/` and `/projects/marcel`, mobile preset, to size the image problem.
2. Chrome DevTools performance trace on `/projects/marcel` with 6× CPU throttle, looking at
   GPU track occupancy rather than main thread.
3. `chrome://gpu` on the target laptop to confirm hardware acceleration is actually on —
   if it is falling back to SwiftShader, the whole 3D layer needs the poster path, not tuning.
4. `about:tracing` or `renderer.info` per canvas for draw call and program counts, to confirm
   the shared-material claim in finding 8.
