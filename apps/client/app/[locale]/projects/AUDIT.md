# Projects area — architecture + open findings

## Layout

```
app/[locale]/projects/
  page.tsx              /projects        -> Portfolio -> ProjectShelf
  [slug]/page.tsx       /projects/<slug> -> ProjectStory (metadata, JSON-LD)
  projects.json         authored source the backoffice reads; the site reads the database
  lib/story.ts          builds the story chapters for one project
  components/
    portfolio.tsx       /projects shell: Lenis, curtain, header, menu
    projectStory.tsx    the horizontal story band for one project
    shelf/
      index.tsx         shelf: scroll list, filter, parallax, hover wipe, opens a route
      heading.tsx       intro copy + category filter
      shelfCard.tsx     one project row
```

The shared story machinery lives outside this route: `components/facile/story/`
(`index.tsx` band, `track.tsx` / `verticalTrack.tsx`, `bento.tsx`, `head.tsx`, `blocks/*`),
with the block vocabulary in `story/types.ts` (`BLOCK_SPECS`, `buildStory`). Project types
and filtering are in `lib/content/projects.ts`; `components/facile/marcelEyes.tsx` is shared
by the shelf card and the story cover block.

A story is a route, not a piece of shelf state: `/projects/<slug>` can be linked to, bookmarked
and landed on cold, and the shelf is just one of its entry points. Both directions of the hop go
through `TransitionOut`, so the curtain covers the page before the push either way.

---

## Open findings

Each item below either changes what is on screen or is a call that is not mine to make.

### 1. Story has no focus management

It is a full page now rather than a `role="dialog"` overlay, so the old focus-trap complaint is
gone — but nothing is focused when it mounts, and the only keyboard affordances are Escape
(back to the shelf) and the arrow keys (pan the band). A visitor tabbing in lands on the back
button, which is at least a sane first stop; a proper roving focus through the chapters is still
missing.

### 2. Bento media loading

Every `<img>` produced by `story/bento.tsx:Media` now ships `loading="lazy"` and
`decoding="async"`, so opening a story no longer fetches all 14 gallery images at once.

### 3. `starts` in `story/index.tsx` stays a spread-reduce

```ts
const starts = useMemo(
    () => sections.reduce<number[]>((acc, s) => [...acc, acc[acc.length - 1] + s.length], [0]),
    [sections],
);
```

Quadratic, and it returns one element more than there are sections. A linear rewrite using a
running counter trips `react-hooks/immutability` ("cannot reassign variable after render
completes"). With at most five chapters the spread costs nothing, so the lint-clean version won.

### 4. `portfolio.caseStudy.*` messages — closed

`components/caseStudy.tsx` is gone and the translated `challenge` / `approach` / `result` /
`features` strings have been deleted from the catalogues, so nothing ships copy the site
never renders.

---

## Closed since the last pass

- **Bento media loading** — `Media` now sets `loading="lazy" decoding="async"` (finding 2).
- **`portfolio.caseStudy.*` messages** — deleted from the catalogues (finding 4).
- **Dead mobile pager** — `lib/navigation.ts` and `components/mobileNavigation.tsx` deleted, along
  with the two unstyled `‹ ›` glyphs and nine zero-size buttons they put on `/projects`.
- **Missing logo assets** — every `techStack` entry in `projects.json` now resolves to a file in
  `public/images/logo`, so both call sites render `alt={name}`.
- **Unreachable tier-3 branch** — `caseStudy.tsx` is deleted; `[slug]` pre-builds every project
  and 404s through `notFound()` on an unknown slug.
- **Constant written every frame** — the cover images' `scale: 1.3` moved out of the
  `usePinProgress` callback into the one-shot `gsap.set` in `shelf/index.tsx`.
