# Facile. Studio Vitrine

Official showcase website for **Facile. Studio** — sovereign software, open hardware, and autonomous AI agents. Built with Svelte 5, `@facile/muse`, and `@facile/blob`.

## Features

- **Muse Design System**: Token-first UI using `@facile/muse` components and Tailwind CSS v4.
- **Pastille 3D PCB Viewer**: Interactive Three.js glTF PCB and enclosure orbit viewer with ISO, Top, and Side camera presets.
- **Bulle Dynamic Companion**: Deterministic Blob avatar with pointer gaze tracking and state switching.
- **Full Suite Showcase**: 20 integrated tools with canonical Solar bold-duotone iconography and direct links.
- **Static & Fast**: SvelteKit static prerendering served by Nginx with gzip compression and immutable asset caching.

## Tech Stack

- **Framework**: SvelteKit 2 + Svelte 5 (Runes)
- **UI & Design Tokens**: `@facile/muse` v0.10.0 + Tailwind CSS 4
- **3D Graphics**: Three.js + OrbitControls + GLTFLoader
- **Avatars**: `@facile/blob` v0.1.1
- **Animations**: GSAP
- **Deployment**: Docker + Nginx (port 3012) on Dokploy

## Development

```bash
bun install
bun run dev
```

Open [http://localhost:3012](http://localhost:3012).

## Production Build

```bash
bun run check
bun run build
```
