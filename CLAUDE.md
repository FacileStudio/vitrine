# vitrine

Facile. Studio showcase website -- a multilingual creative agency portfolio.

## Tech Stack

- **Framework**: Next.js 16 (App Router, standalone output)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 4 via PostCSS, tw-animate-css, shadcn/ui (New York style)
- **Animations**: GSAP 3 + Motion (Framer Motion successor)
- **i18n**: next-intl with middleware-based locale routing (en, fr, es, de)
- **UI primitives**: Radix UI (dialog, dropdown-menu, visually-hidden)
- **Email**: Nodemailer (SMTP) for the contact form API route
- **Fonts**: Goga (primary, weights 100-900), Dirtyline (display), Manrope (fallback)
- **Deployment**: Vercel (primary), Docker (standalone Node.js)
- **Package manager**: bun (preferred), npm (fallback)

## Commands

```bash
bun dev          # Start dev server (localhost:3000)
bun run build    # Production build (standalone output)
bun start        # Start production server
bun run lint     # ESLint
```

Docker:

```bash
docker build -t vitrine-facile .
docker run -p 3000:3000 --env-file .env vitrine-facile
```

## Project Structure

```
app/
  [locale]/           # i18n dynamic segment (en, fr, es, de)
    page.tsx           # Home / landing
    studio/            # About the studio
    projects/          # Projects listing
    portfolio/         # Portfolio showcase
    us/                # About us
    [...rest]/         # Catch-all for 404s within locale
  api/contact/         # POST endpoint -- sends email via SMTP
  page.tsx             # Root redirect to default locale
  globals.css          # Tailwind imports, @font-face, custom scrollbar, theme
  layout.tsx           # Root HTML layout
  robots.ts            # Dynamic robots.txt
  sitemap.ts           # Dynamic sitemap

components/
  facile/              # App-specific components (appShell, button, contactModal, footer, header, input, pageTransition)
  ui/                  # Social icon components (dribbble, github, instagram)

lib/
  animations/          # GSAP animation configs (portfolio-content, portfolio-title)
  i18n/                # Locale list, pathname helper
  seo/                 # Metadata, viewport, SEO utilities
  utils.ts             # General utility (cn/clsx merge)

hooks/                 # Custom React hooks (use-locale-switcher, use-mobile)
locales/               # Translation JSON files (en, fr, es, de)
public/                # Static assets: fonts, icons, images
```

## Environment Variables

Copy `.env.example` to `.env`. Required for the contact form:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` -- SMTP credentials
- `SMTP_FROM`, `CONTACT_TO` -- sender and recipient addresses

## Conventions

- All user-facing routes live under `app/[locale]/`. Never create routes outside the locale segment (except API routes).
- `params` must be awaited in layouts and pages (Next.js 16 async params).
- Page transitions use GSAP targeting the `.page-transition` CSS class. Always check `pathname !== href` before triggering a transition.
- SVG icons are rendered as colored divs with CSS mask-image (both `WebkitMaskImage` and `maskImage` for cross-browser).
- Import alias: `@/*` maps to the project root.
- Color palette: mint green `#CAE6D8` (accent/hover), near-black `#1E1E1E` (foreground), green `#74BE99` (autofill bg).
- Background color defined in oklch: `oklch(90.056% 0.03508 164.238)`.
- shadcn components use the New York style with neutral base color and Lucide icons.
- No inline comments in code.
