# Projects page — open findings

Audit of `app/[locale]/projects` (list, detail overlay, bento parts, case-study route).

The refactor pass that came with this file fixed everything that was safe to fix without
touching the rendered output. What follows is what was **deliberately left alone**: each item
either changes what is on screen, or is a call that is not mine to make. Nothing here is a
regression introduced by the refactor.

---

## 1. `lib/navigation.ts` + `components/mobileNavigation.tsx` are dead

`usePortfolioNavigation` holds a `selectedWorkId` that is written by three callers and read by
nobody. `MobileNavigationButtons` renders one unstyled zero-size `<button>` per project, plus
two unstyled `‹` / `›` buttons that **are visible** at the bottom of `/projects`.

Deleting both files and the `<MobileNavigationButtons />` call in `portfolio.tsx` removes dead
state and nine phantom entries from the accessibility tree — but it also removes those two
glyphs from the page, which is a visual change.

**Decision needed:** delete, or style them into a real mobile pager.

## 2. Missing logo assets

`public/images/logo/egui.png` and `public/images/logo/FFT.png` do not exist, but `waves`
lists `egui` and `FFT` in its `techStack`.

- the list card (`projectsSection.tsx`) renders them with `alt={name}`, so the alt text is
  already showing today
- the detail intro (`gridParts/Intro.tsx`) renders them with `alt=""`, so they are invisible

Left at `alt=""` in the intro so the overlay stays pixel-identical. The real fix is to add the
two files, then make both call sites use `alt={name}`.

## 3. `caseStudy.tsx` — unreachable tier-3 branch

`[slug]/page.tsx` sets `dynamicParams = false` and `generateStaticParams` only emits tier 1
and tier 2 slugs. So in `CaseStudyPage`:

- `project.tier === 3 → notFound()` can never fire; routing 404s first
- `findNextProject` would return `undefined` for a slug outside the navigable list, which is
  likewise unreachable today but is an unguarded `navigable[(i + 1) % navigable.length]` with
  `i === -1`

Harmless now, a trap the day tier filtering changes.

## 4. `projectDetail.tsx` — dialog without focus management

The overlay is `role="dialog" aria-modal="true"` but:

- nothing is focused when it opens
- focus is not trapped, so Tab walks straight into the list behind it
- focus is not returned to the originating card on close
- the page behind is only `overflow: hidden`; every link and button in it stays tabbable

Escape-to-close already works. Adding a focus trap changes tab order and initial focus, hence
not done as part of a no-visual-change pass.

## 5. Bento media loads eagerly

Every `<img>` produced by `gridParts/Bento.tsx:Media` ships without `loading` or `decoding`.
Opening Marcel fetches all 14 gallery images the moment the overlay mounts.

`loading="lazy"` is the obvious win, but the track scrolls horizontally and fast — the risk is
visible pop-in as blocks arrive. Wants a measurement, not a guess.

## 6. `usePinProgress` writes a constant every frame

In `projectsSection.tsx` the parallax callback sets `scale: 1.30` on every card image on every
frame, though it never changes. Only `yPercent` is dynamic. Hoisting the scale to a one-shot
`gsap.set` is safe; it was left in place because it sits inside the same call as the value that
does change.

## 7. `starts` in `projectDetail.tsx` stays a spread-reduce

```ts
const starts = useMemo(
    () => sections.reduce<number[]>((acc, s) => [...acc, acc[acc.length - 1] + s.length], [0]),
    [sections],
);
```

Quadratic, and it returns one element more than there are sections. A linear rewrite using a
running counter trips `react-hooks/immutability` ("cannot reassign variable after render
completes"). With at most five chapters the spread costs nothing, so the lint-clean version won.
