# Changelog

All notable changes to Facile Studio Vitrine will be documented in this file.

## [Unreleased]

## [1.8.0] - 2026-11-12

### Added
- The suite section leads with muse's `SignInWithFacile` button, pointing at the free signup (`sso.facile.studio/spaces`), with a "Gratuit pour vous aussi" eyebrow.
- The navbar call to action follows the section in view: "Démarrer un projet" on the studio sections, `SignInWithFacile` on Suite, Écosystème and Bulle.
- A second door under the final contact card: "Pas de projet pour l'instant ?" with the Facile sign-in button.

### Changed
- The suite section now comes before the ecosystem graph, in the page and in the navbar.
- Bulle is labelled as part of the Suite.
- GitHub moved from the suite header to the community section, next to Discord. The footer "Compte Facile" link points at the signup page.

## [1.7.2] - 2026-11-12

### Fixed
- Smooth scroll for in-page anchor links such as the "Voir nos réalisations" hero button.

## [1.7.1] - 2026-11-11

### Fixed
- `twitter:site` and `twitter:creator` (`@facilestudio`) are back in the head. v1.7.0 dropped them with the old head block.
- Assets regenerated with muse v0.19.2's brand generator (no change to the files).

## [1.7.0] - 2026-11-11

### Added
- Place in the ecosystem graph, so the graph shows all 25 suite tools.

### Changed
- New catalog icons for Prisme, Feuilles, Docs, Toile and Place.
- The tool counts in the hero stats and the suite section come from the suite list instead of a hard-coded number.
- Favicons, touch icons, manifest and link preview come from muse v0.19.0's brand generator. The link preview title and description are the English catalog values; the page copy stays French.

### Removed
- `icon.png`, `images/og.webp` and the unused inline icon bodies.

## [1.6.0] - 2026-11-11

### Added
- Feuilles, Docs and Toile in the suite list and the ecosystem graph. The site now counts 24 tools.

### Changed
- The ecosystem graph is a true circle on every screen size, capped in width on desktop.

## [1.5.5] - 2026-11-09

### Changed
- Curate Place community section topics: manually feature selected Tandem and Pastille discussions.

## [1.5.4] - 2026-11-08

### Fixed
- Community section topics: displays native Place and Facile Discord forum discussions while excluding external feeds.

## [1.5.3] - 2026-11-07

### Changed
- `@facile/muse` v0.14.4 to v0.16.1. Nothing on the site changes: it uses no deprecated button variant.

## [1.5.2] - 2026-11-07

### Changed
- `@facile/muse` v0.14.2 to v0.14.4: a locale re-render fix and the DonutChart full-ring fix. Nothing on the site changes.

## [1.5.1] - 2026-11-07

### Changed
- The top bar and the footer are muse's `LandingHeader` and `LandingFooter` (muse v0.14.2): concentric spacing, a smooth shrink into a floating pill on scroll, and a native drawer under 1024 px. The tab shape, corner curves, screen frame and ambient blobs stay.
- The footer groups its links in Studio, Produits and Contact columns. The phone, email and locations sit under Contact.
- On a phone the "Démarrer un projet" button lives in the drawer.

### Removed
- The hand-rolled header, drawer, GSAP open and close, and footer.

## [1.5.0] - 2026-11-06

### Added
- "Une communauté qui échange" section on the home page: the latest Place announcements and discussions, loaded live from `place.facile.studio`, with buttons to join Place and the Discord.
- The section hides itself when Place is unreachable, or when there is no announcement and no discussion from the last 30 days.
- "Rejoindre le Discord" button in the hero.
- Place card in the suite grid and a footer link to Place.

## [1.4.6] - 2026-11-05

### Changed
- Pastille 3D viewer is non-interactive under 640px: the camera auto-rotates and drag, pinch and zoom are disabled.
- Preset controls (ISO, TOP, SIDE, Auto) and the drag hint are hidden on mobile; the ERC/DRC caption stays visible.

## [1.4.5] - 2026-11-05

### Fixed
- Old `/<lang>/studio` URLs from the previous website (`/fr/studio`, `/en/studio`) return a 301 to the home page, so search results and bookmarks no longer land on a 404.
- Pastille 3D viewer caption reads "Pastille · ERC/DRC validés" instead of linking out to Fusible.

## [1.4.4] - 2026-11-04

### Fixed
- Footer uses the same concentric spacing as the top bar. On wide screens it is a 56px pill with the logo and the last link 10px from every edge.
- Footer logo sits in a 36px round link to the home page; footer links are 36px pills with a hover fill.
- Below 1280px the footer stays a stacked rounded card instead of a pill that wraps.

## [1.4.3] - 2026-11-04

### Changed
- Suite "Voir les N autres outils" and "Voir moins" animate the grid height. New cards fade in on expand; extra cards fade out before they are removed on collapse.
- Collapsing from below the grid scrolls back to it.

## [1.4.2] - 2026-11-04

### Fixed
- Top bar inner spacing is concentric: logo and right-hand buttons sit 10px from every edge, in both the flush and pill states, so their rounded ends nest inside the bar's curve.
- Top bar logo sits in a 36px round hit area matching the buttons, with a hover state.

## [1.4.1] - 2026-11-04

### Fixed
- Pastille buttons (Site officiel Pastille, Schémas KiCad) stay side by side instead of stacking under the longer title.
- Suite buttons (Créer un compte Facile, GitHub) get the same fix.

## [1.4.0] - 2026-11-04

### Added
- Page transition between pages, using the View Transitions API through SvelteKit `onNavigate`: the old page fades and shrinks slightly, the new one fades up. Browsers without the API and reduced-motion users navigate instantly.

### Changed
- `/contact` progress bar moved to the bottom, between Précédent and Continuer on desktop and above them on mobile.
- `/contact` has more room under the header row and around the step content, and the progress labels are larger.
- "Retour à l'accueil" no longer wraps on mobile.

### Removed
- "Étape N sur 4" label above each `/contact` step title.

## [1.3.0] - 2026-11-04

### Changed
- Ecosystem graph lays its 21 tools on an ellipse that fills the card, with bigger app icons and a smaller center logo.
- Ecosystem graph switches to a portrait layout under 640px, so icons stay readable on phones.
- Portfolio horizontal scroll holds briefly at entry and exit and uses a tighter scrub, so the cards settle before the page scrolls on.

### Fixed
- Jump when entering or leaving the pinned portfolio section. The outer frame padding no longer shifts the page on first scroll, so ScrollTrigger's pin positions stay correct.

## [1.2.2] - 2026-11-04

### Fixed
- Top bar corner fillets no longer float as a separate block while the bar morphs back from its pill shape. They hide during the morph and fade in once the bar and frame have landed.
- Top bar morph now runs for 500ms, in step with the screen frame.
- Portfolio cards no longer show light slits at their rounded edges while scrolling. They clip with `clip-path` on a black base, and the unused blur layer is gone.

## [1.2.1] - 2026-11-04

### Fixed
- Echo uses the `solar:videocamera-record-bold-duotone` icon in the suite grid and the ecosystem graph.

## [1.2.0] - 2026-11-04

### Changed
- `/contact` is fullscreen, without the top bar, screen frame or footer, and keeps the back button top left.
- `/contact` shows step dots in place of the "Étape 01 / 04" counter.
- `/contact` progress bar has a stop per step, with "1 Projet" style labels centered under each stop.
- Hero text is centered between the top bar and the FACILE wordmark at every screen height.
- Pastille section title is now "Pastille, l'assistant vocal qui tient dans la paume".

### Removed
- "Réalisations récentes" label above the portfolio title.

## [1.1.1] - 2026-11-04

### Fixed
- Screen frame no longer fades out on scroll, which let the black page show through it. It now only shrinks to the screen edge.

## [1.1.0] - 2026-11-04

### Added
- Icons on every top nav and mobile drawer link.
- Suite grid shows the first 9 tools, with a button to show the rest.
- Per-page canonical URL and `og:url`, plus `theme-color` and `color-scheme` meta tags.
- 180x180 apple-touch-icon and a 16/32/48 px favicon.ico with a white mark on a dark tile.

### Changed
- Facile logo is white (dark theme) or black (light theme) in the nav, drawer, footer and curtain, instead of green.
- Screen frame now wraps all four edges at the top of the page and folds away as the nav becomes a pill.
- Portfolio section pins at full viewport height on desktop, and the cards fill it.
- Ambient background uses dithered radial gradients instead of blurred divs, which removes banding and tile artifacts.
- Rewrote the short descriptions across the site, the suite and the contact form in plainer French.
- Muse locale set to French; PcbViewer labels translated.
- Contact form selections use fills instead of borders and rings, and quick tags no longer edit the message text.
- Prerender entries and sitemap read project slugs from `data.ts`.

### Fixed
- Hero text disappearing after its entrance animation.
- Hero text staying hidden when JavaScript fails to load.
- All pages declaring the home page as their canonical URL.
- Duplicate meta description on every page.
- JSON-LD `founders` renamed to the schema.org `founder` property.

### Removed
- Every border on the site.
- Unused `ContactModal` component.

## [1.0.4] - 2026-11-04

### Added
- Full-page multi-step inquiry form for `/contact` with interactive project type, budget, timeline, and vision steps.
- Staggered entrance animation for hero text triggered on curtain reveal completion.
- White monochrome technology logo icons on all stack badges (SvelteKit, Tailwind CSS, TypeScript, Go, etc.).
- Widescreen horizontal portfolio cards preserving natural screenshot aspect ratio.
- Subtle ambient background gradient animation with `#CAE6D8` green behind a blurred backdrop.

### Changed
- Portfolio section expanded to full width with seamless GSAP horizontal scrolling without clipping.
- Top navigation updated to morph smoothly between screen-border docked state and floating pill without artifacts.
- Screen frame borders smoothly transition and disappear when scrolling.
- Brand green `#CAE6D8` applied to `[fasil]` wordmark, top nav logo, curtain logo, and footer logo.
- Pastille section updated to detail Facile's R&D atelier and custom hardware engineering.
- Interactive 3D viewer adjusted to edge-to-edge card layout without extra padding.
- Ecosystem graph center simplified to a single seamless node disc.
- Footer styled as a rounded pill with completely rounded full ends.
- Bulle button icon updated to authentic smile duotone logo.

### Removed
- "05/06" numeric counters in portfolio cards.
- "Architecture studio" text over the ecosystem section.
- "Boîte à outils studio" text over the Suite section.
- "Intelligence connectée" text over the Bulle section.
- "Atelier R&D & Hardware" text over the Pastille section.

## [1.0.3] - 2026-11-04

### Added
- Dedicated fullscreen `/contact` page with interactive inquiry form, budget selection, and direct contact shortcuts.
- Desktop pinned horizontal scroll for client projects via GSAP ScrollTrigger.
- Bulle project case study with landing screenshot in client projects replacing Solaïs.
- Boîte package and artifact manager in Facile Suite tools.
- Official Facile responsive light/dark `F.` logo favicon (SVG and multi-resolution ICO).
- Icons on all buttons across the entire website.

### Changed
- Hero slogan updated to "On simplifie, vous créez."
- Hero wordmark viewBox and aspect ratio adjusted to prevent bottom clipping.
- Studio interconnectivity graph enlarged with 50% larger node icons, white Facile center logo, and single seamless card container.
- Facile Suite tool icons aligned to authentic app icons (Opus, Plume, Casier, Capsule, Glouton, Registre, Prisme).
- Facile Suite cards reordered to prioritize daily communication and productivity tools (Prisme, Courrier, Agenda, Echo, Nuage, Opus).
- Bulle section expanded with complete tool interconnectivity details.

### Removed
- "Lançons votre projet" badge from bottom contact section.
- "Lyon · Strasbourg · Remote · Devis sous 48h" line from bottom contact section.
- Outer container around ecosystem graph to eliminate double border.

## [1.0.2] - 2026-11-04

### Changed
- Hero layout updated to full viewport height with edge-to-edge FACILE wordmark anchored at bottom.
- Top navigation updated to hanging tab with concave Exclude corners at page top, smoothly morphing into floating pill on scroll.
- Hero action buttons and phone link normalized to uniform h-11 height.
- Entrance loader simplified to single curtain reveal with centered Facile logo mark.
- Studio interconnectivity graph updated with animated hub Facile logo and SVG icon discs for all 20 Suite apps.

### Removed
- All border outlines across hero, cards, containers, sections, and navigation.
- Top badge tag in hero section.
- Counter and percentage text from entrance loader.

## [1.0.1] - 2026-11-04

### Added
- Entrance curtain loader with themed progress animation and GSAP power4 retraction.
- High-resolution WebP screenshot galleries and project previews across all client cases.
- Complete 20-app orbital ring in StudioGraph including Courrier, Scribe, and all Suite tools.
- "Qualité française" accreditation and updated studio locations (Lyon, Strasbourg, Remote).

### Changed
- Hero framed full-height layout with edge-to-edge FACILE wordmark and responsive nav morphing.
- Simplified brand logo mark across top navigation and footer without background enclosing.
- Extended rounded containers with `--radius-fc-xl`, `--radius-fc-2xl`, and `--radius-fc-3xl` tokens.

### Removed
- Redundant studio metrics cards in hero section.
- Placeholder image artifacts in static project galleries.

## [1.0.0] - 2026-11-04

### Added
- Complete studio vitrine redesign powered by Svelte 5 and `@facile/muse` theme.
- Agency-first commercial structure prioritizing custom showcase websites, web applications, and digital craft services.
- Instant contact inquiry modal, direct phone call action, and email link.
- Dedicated portfolio showcase (`/projects`) and individual project case studies with high-resolution screenshot galleries (`/projects/[slug]`).
- Studio interconnectivity animated SVG graph featuring orbiting nodes and live data particles.
- Integrated showcase of all 20 sovereign tools with Solar bold-duotone logos.
- Interactive Bulle companion avatar with pointer gaze tracking (`@facile/blob`).
- Interactive Pastille 3D PCB and enclosure turntable viewer powered by Three.js.
- Preserved SEO architecture: JSON-LD schemas, OpenGraph assets, sitemap.xml, and robots.txt.
