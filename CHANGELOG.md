# Changelog

All notable changes to Facile Studio Vitrine will be documented in this file.

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
