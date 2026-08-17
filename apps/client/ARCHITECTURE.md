# Vitrine — Architecture & Working Guide

> **Read this first if you are an AI agent (Claude or otherwise) working in this repo.**
> It explains what the site is, how it is wired, the conventions to follow, and the
> known gotchas. It is meant to be extended over time — see [Open work](#open-work--todo)
> and [Notes](#notes--append-freely) at the bottom.

---

## 1. What this is

**Vitrine** is the marketing / showcase website for **Facile Studio**, a creative agency
(design, branding, web development). It is a single-page-feel, scroll-driven, heavily
animated site with a 3D dithered-render aesthetic, plus a few secondary pages
(projects, suite, studio) and a contact form.

- **Live tone:** cinematic scroll choreography — pinned sections, curtain/"stripe"
  reveals, GSAP text reveals, and a WebGL dithering backdrop.
- **Primary branch:** `main`. Active redesign work happens on `redesign`.

---

## 2. Tech stack

| Concern | Choice | Notes |
|---|---|---|
| Framework | **Next.js 16** (App Router) | `output: 'standalone'`, see `next.config.ts` |
| UI runtime | **React 19** + TypeScript | |
| Styling | **Tailwind CSS v4** | Config lives in CSS: `app/globals.css` (`@theme`), not a `tailwind.config.*` |
| i18n | **next-intl v4** | Locales `en, fr, es, de`; `localePrefix: 'always'` |
| Smooth scroll | **Lenis** (`lenis/react`) | Mounted per-page (see `home.tsx`) |
| Animation | **GSAP** (+ `@gsap/react`, `CustomEase`) and **motion** | GSAP drives scroll reveals; `motion` used by icon components |
| 3D / WebGL | **three**, **@react-three/fiber**, **@react-three/drei**, **postprocessing** | Custom dithering effect |
| Email | **nodemailer** | Contact form API route |
| Icons | local components + `@iconify/react` | `components/ui/*` |

Package manager: **bun** (`bun.lock`). Scripts in `package.json`: `dev`, `build`, `start`, `lint`.

---

## 3. Routing & i18n

All user-facing routes live under `app/[locale]/`. Locale handling:

- `lib/i18n/locales.ts` — source of truth: `locales = ['en','fr','es','de']`, `defaultLocale = 'en'`.
- `i18n.ts` (root) — next-intl request config + `routing` (`localePrefix: 'always'`, detection on).
- `next.config.ts` — wraps the app with `createNextIntlPlugin('./i18n.ts')`.
- `app/layout.tsx` — root layout; wraps everything in `NextIntlClientProvider` and injects SEO JSON-LD.
- `app/[locale]/layout.tsx` — validates the locale, `setRequestLocale`, `generateStaticParams` for all locales.
- **Translation messages:** `locales/<locale>.json` (repo root `locales/`, imported by `i18n.ts`).

> ⚠️ Because `localePrefix` is `'always'`, internal links should include the locale
> (use next-intl navigation helpers). Some hand-written `<a href="/projects/...">` links
> in components do **not** yet do this — see [Open work](#open-work--todo).

### Pages
| Route | File | Purpose |
|---|---|---|
| `/[locale]` | `app/[locale]/page.tsx` → `home.tsx` | Home (the big scroll experience) |
| `/[locale]/projects` | `projects/page.tsx` → `portfolio.tsx` | Project list |
| `/[locale]/projects/[slug]` | `projects/[slug]/page.tsx` → `case-study.tsx` | Case study |
| `/[locale]/suite` | `suite/page.tsx` → `suite.tsx` | Product suite |
| `/[locale]/studio` | `studio/page.tsx` → `studio.tsx` | Team wall — non-scrollable, 4 full-height head columns (DitherReveal), click → member page |
| `/[locale]/studio/[slug]` | `studio/[slug]/page.tsx` → `member.tsx` | Individual member page (data from `studio.json`) |
| `/[locale]/process` | `process/page.tsx` → `process.tsx` | Process page — landing-style pinned sections, one per step (data from `process.json`) |
| `/[locale]/us` | `us/page.tsx` | (see file) |
| `/[locale]/[...rest]` | catch-all | Fallback |
| `/api/contact` | `app/api/contact/route.ts` | POST → nodemailer (`transporter.ts`) |

SEO helpers live in `lib/seo/` (`metadata.ts`, `jsonld.ts`, `viewport.ts`). `app/robots.ts` and `app/sitemap.ts` exist.

### Data (content that is not translated copy) — backoffice-editable JSON
- `app/[locale]/projects/projects.json` — all projects (slug, name, image, video, link, tier…).
  `gallery: string[]` is optional and feeds the horizontal project detail view on `/projects`
  (see `projects/story.ts` — image or video is picked by file extension).
- `app/[locale]/suite/suite.json` — product suite entries.
- `app/[locale]/studio/studio.json` — team members (`slug, name, role, description, model, highlight, socials[]`). Drives the `/studio` grid and `/studio/[slug]` pages.
- `app/[locale]/process/process.json` — process steps (`id, title, text, image`). Drives the `/process` sections; the `id` of each is the anchor the menu links to.
- `app/[locale]/projects/navigation.ts` — project nav order.

> These four JSON files are intentionally flat and self-describing so a future
> backoffice can read/write them. Keep new content-editable data in this same shape.

---

## 4. The home page — the heart of the site

`app/[locale]/home.tsx` composes the experience:

```
<Rideau/>                      loader/curtain; gates scroll until 3D assets load (setCharged)
<ReactLenis root/>             smooth scroll (lerp 0.1); started/stopped based on charged & menuOpen
<Menu/>                        full-screen nav overlay (components/facile/menu.tsx)
<Header/>                      top bar with the Menu trigger
<main>
  <Hero/> <Manifesto/> <Friends/> <Projects/> <Suite/> <Avis/>
</main>
```

Each section is in `app/[locale]/homeSections/`.

### The section pattern (IMPORTANT — follow it)
Most scroll sections use a **pinned tall section**:

- The outer `<section>` is very tall: `min-h-[Nvh]` (e.g. `350vh`, `600vh`).
- Inside is a `sticky top-0 h-screen` child that stays on screen while you scroll the tall parent.
- A **scroll-progress value `0 → 1`** is derived from the section geometry and drives reveals.

Two hooks power this:

- **`hooks/use-scroll.ts`** — `useScroll(handler)`: subscribes to `window` scroll (passive),
  runs once on mount, always calls the latest handler. Base for anything scroll-driven.
- **`hooks/use-pin-progress.ts`** — `usePinProgress(ref, (progress, visible) => {})`:
  normalized progress through a pinned section based purely on its own geometry
  (`progress 0` = top hits viewport top; `progress 1` = pin end). `visible` is false when
  fully off-screen so you can skip per-frame work.

### Animation helpers — `app/utils/animations.ts`
Single home for motion. Pattern: derive boolean flags from scroll, feed them to a preset via `run`.

- `EASE` — named eases (`soft`, `in`, `out`, `inOut`, `glide`, `cover`). `cover` matches the Stripes curve.
- `run(els, animate)` — map an animator over an array of refs.
- `hideRevealY(els)` / `hideRevealX(els)` — park elements off their slot before first reveal (avoids flash).
- `slideY(show, leaving, opts)` / `slideX(show, opts)` — the reveal tweens (yPercent/xPercent).
- `revealY(show, leaving)` — the target offset logic (0 shown / ±110 hidden).
- `fade` / `hideFade` — opacity+translate variant.
- `pointerDrift(el, strength, duration)` — cursor-follow drift.

**Reveal recipe:** wrap the text in an `overflow-hidden` element, give the inner element a
ref, `hideRevealY` it on mount, then `run(refs, slideY(showFlag, leavingFlag, {...}))` in an
effect keyed on the flags. See `manifesto.tsx`, `projects.tsx`, and `menu.tsx` for live examples.

### Stripes (curtain covers) — TWO different implementations
- **`components/facile/stripes.tsx`** — the reusable component. Columns/rows that slide
  away by an `orientation` angle. Accepts a static `open` or an `openWhen={() => boolean}`
  derived from scroll; tune with `duration`, `stagger`, `ease`. Used for section
  transitions (e.g. `manifesto.tsx`, `projects.tsx`).
- **`components/facile/menu.tsx`** has its own inline `Stripes()` helper for the menu's
  open/close curtain — separate from the component above. Don't confuse the two.

---

## 5. WebGL / the dithering look — `webgl/`

- **`webgl/DitherView.tsx`** — the public component: a react-three-fiber `<Canvas>` that
  renders one or more GLTF models with a custom dithering post-process. Key props:
  `file`, `models[]`, `gridSize`, `intensity`, `highlight`, `background`, `parallax`,
  `grayscaleOnly`, `bloom`, `fov`, `position/rotation/scale`. See `DitherViewProps`.
- **`webgl/DitherModel.tsx`** — loads a GLTF (`useGLTF`) and applies pointer parallax + float.
  Props: `file`, `scale`, `position`, `rotation`, `parallax`, `float`.
- **`webgl/dithering-shader/`** — `DitheringShader.ts` + `DitheringEffect.ts` (the postprocessing effect).
- **`webgl/PostProcessing.tsx`**, `environment.tsx`, `silence-three-deprecations.ts` — support.
- **Always mount `DitherView` via `next/dynamic` with `{ ssr: false }`** (it touches WebGL/DOM).
  Models are GLTF files under `public/models/` (e.g. `manifesto.glb`, `F.glb`).

---

## 6. Shared components — `components/facile/`

- `menu.tsx` — full-screen nav overlay. `links` const holds main nav entries, each with an
  optional `secondary` sub-link group (project names, Suite apps, process/service entries,
  Studio members). Includes a bottom-right contact block (email/phone text + GitHub/Instagram/
  Dribbble logos) and a staggered reveal (big links → sub-links → contact). Config in the
  `CONTACT` const at the top of the file.
- `header/` — `desktop-header.tsx`, `mobile-header.tsx`, language dropdown, menu trigger.
- `footer.tsx`, `contactModal.tsx` (opened via a `facile:open-contact-modal` window event),
  `button.tsx`, `input.tsx`.
- `ditherReveal.tsx` — **shared** building block: a `DitherView` that reveals itself on mount
  by sliding `Stripes` covers away. Used by the Studio grid and available for any
  "3D object appears from behind stripes" moment. (The home/process sections instead tie their
  Stripes to scroll progress via `openWhen` — use that when the reveal should follow the scroll.)
- `rideau.tsx` — the loading curtain; uses drei `useProgress` to know when 3D assets are ready.
- `appShell.tsx` — wraps non-home pages with Header/Footer/Menu/ContactModal.
  **⚠️ Currently not referenced anywhere** (see [Open work](#open-work--todo)).
- `orbit.tsx`, `horizontalReel.tsx`, `ParallaxCarousel.tsx`, `reveal.tsx`, `pageTransition.tsx`,
  `shadowFilter.tsx`, `notFound.tsx` — misc effect/layout building blocks.
- `components/ui/` — animated brand icons (`github.tsx`, `instagram.tsx`, `dribbble.tsx`),
  API: `size` + `className`. Add new brand icons here following the same shape.

Utility: `app/utils/index.ts` exports `cn` (clsx + tailwind-merge).

---

## 7. Conventions & gotchas (please respect)

- **Breakpoints:** Tailwind v4 defaults apply (`sm 640 … 2xl 1536`), plus a custom
  **`3xl` = 2560px** (`--breakpoint-3xl: 160rem;` in the `@theme` block of `app/globals.css`).
  `3xl:` therefore targets really big monitors and matches the `min-[2560px]:` cutoff used
  elsewhere for big-monitor tuning — prefer `3xl:` for new big-screen styles.
- **Scroll performance:** never read layout-triggering properties (`scrollWidth`, `offsetHeight`,
  `getBoundingClientRect`) **inside a per-frame loop** (GSAP ticker / rAF) after writing
  transforms — it forces synchronous reflow and freezes on every machine. Measure once + on
  `resize` and cache. (This was a real bug in `friends.tsx`.)
- **Everything in the Menu overlay must hide when closed.** The overlay stays mounted; any new
  element needs to participate in the reveal (parked via `hideRevealY`) or it shows through.
- **Debug styling:** some WIP elements have `bg-red-500/…` debug backgrounds — remove before ship.
- **Responsive tuning done so far:** several transitions/sizes branch on `window.innerWidth >= 2560`
  (big monitors keep the "full" feel; laptops get a tighter one). Keep that split consistent.

### Commit style (repo owner preference)
- **One commit per feature — never one big bundled commit.** If several features live in one
  file, split them (per-hunk staging) when they are separable; genuinely interleaved edits may
  share a commit.
- Commit/push only when asked. Co-author line: `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`.
- The local `.npmrc` / `bun.lock` / `package.json` (bun) tweaks are environment-specific and are
  usually left out of feature commits.

---

## 8. Local development

```bash
bun install
bun run dev        # next dev
bun run build      # production build (standalone)
bun run lint
```

Contact form needs SMTP env vars for nodemailer (see `app/api/contact/transporter.ts` for the
exact keys). 3D models must exist under `public/models/`.

---

## 9. Open work / TODO

> Verified against the code at the time of writing. Update as things change.

- [ ] **Menu contact details are placeholders** — `CONTACT` in `components/facile/menu.tsx`
      (email `contact@facile.studio`, phone, Dribbble handle) and the `Email`/`Instagram`
      secondary links marked `TODO(gian)`. Replace with real channels.
- [ ] **`appShell.tsx` is still unused** — the Studio, member, and Process pages each render
      their own `Header` + `Menu` (the `home.tsx` pattern) rather than a shared shell. Decide
      whether to consolidate by wiring `AppShell` into `app/[locale]/layout.tsx`
      (watch: its `isHome` check compares `pathname === "/"`, which never matches under the
      always-on locale prefix, and it renders a `Footer` + page-transition curtain).
- [ ] **Placeholder content from this build:**
      - Studio heads all use `/models/F.glb` — add real head GLBs and update `model` in `studio.json`.
      - Member bios/roles in `studio.json` are placeholders.
      - `process.json` copy is placeholder; process step images point at `/images/process/*.png`
        which **do not exist yet** (add them, or the boxes render empty).
- [ ] **Locale-aware internal links** — the **Menu is done** (it prefixes internal hrefs with
      the active locale via a `withLocale` helper, since there is no middleware and routes live
      under `/[locale]/`). Audit other components for the same pattern (project/case-study cards,
      `pageTransition` targets, footer) — any bare `/path` link 404s without the locale prefix.
- [ ] **Remove debug backgrounds** (`bg-red-500/…`) once layouts are finalized.
- [ ] **i18n coverage** — verify all four locale files (`locales/*.json`) are complete for new copy.

---

## 10. Notes — append freely

<!-- Add anything future you/agents should know: decisions, quirks, per-section timing values,
     asset sources, deploy notes, etc. Keep entries dated and short. -->

- _(add notes here)_
