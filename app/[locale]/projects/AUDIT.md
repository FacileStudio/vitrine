# Projects area — architecture + open findings

## Layout

```
app/[locale]/projects/
  page.tsx              /projects        -> Portfolio -> Shelf
  [slug]/page.tsx       /projects/<slug> -> Story     (metadata, JSON-LD, static params)
  projects.json         authored data
  lib/
    projects.ts         Project/Member types, the list, categories + filtering, media helpers
    story.ts            block vocabulary (BLOCK_SPECS), authored story types, buildStory()
  components/
    portfolio.tsx       /projects shell: Lenis, curtain, header, menu
    marcelEyes.tsx      shared by the shelf card and the story cover block
    shelf/
      index.tsx         Shelf — scroll list, filter, parallax, hover wipe, opens a route
      heading.tsx       intro copy + category filter
      card.tsx          one project row
      backdrop.tsx      pinned dither backdrop
    story/
      index.tsx         Story — horizontal bento band for one project
      chrome.tsx        back link, counter, name, scroll bar
      blocks/           one component per BlockKind, wired up in blocks/index.ts (BLOCKS)
```

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

### 2. Bento media loads eagerly

Every `<img>` produced by `story/blocks/Bento.tsx:Media` ships without `loading` or `decoding`.
Opening Marcel fetches all 14 gallery images the moment the page mounts.

`loading="lazy"` is the obvious win, but the track scrolls horizontally and fast — the risk is
visible pop-in as blocks arrive. Wants a measurement, not a guess.

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

### 4. `portfolio.caseStudy.*` messages are now unused

`components/caseStudy.tsx` is gone — `/projects/<slug>` renders the Story instead of the prose
page. The translated `challenge` / `approach` / `result` / `features` strings are still in the
message catalogues, and the prose they carried is no longer rendered anywhere, so that copy is
out of the index. Either fold it into a story block or delete the keys.

---

## Closed since the last pass

- **Dead mobile pager** — `lib/navigation.ts` and `components/mobileNavigation.tsx` deleted, along
  with the two unstyled `‹ ›` glyphs and nine zero-size buttons they put on `/projects`.
- **Missing logo assets** — every `techStack` entry in `projects.json` now resolves to a file in
  `public/images/logo`, so both call sites render `alt={name}`.
- **Unreachable tier-3 branch** — `caseStudy.tsx` is deleted; `[slug]` pre-builds every project
  and 404s through `notFound()` on an unknown slug.
- **Constant written every frame** — the cover images' `scale: 1.3` moved out of the
  `usePinProgress` callback into the one-shot `gsap.set` in `shelf/index.tsx`.
