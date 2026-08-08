# newPortfolio
<br>
<br>
<br>
### **V2 COMING SOON**
<br>
<br>

Logic-only skeleton of the Facile. Studio portfolio. Same architecture and behaviour as the original, with all styling, animations and design assets stripped out so a new design can be layered on cleanly.

## What's kept (logic)

- **i18n** — `next-intl`, middleware routing (`proxy.ts`), 4 locales (`locales/*.json`), locale switcher hook.
- **Routing** — everything lives under `app/[locale]/*`. Each route is a server `page.tsx` (metadata + JSON-LD) plus a co-located client component (`home.tsx`, `portfolio.tsx`, `case-study.tsx`, `studio.tsx`) it renders. `localePrefix: 'always'`, so the proxy middleware redirects unprefixed paths (`/studio` → `/en/studio`) and `/` → `/en`. App-level redirects: `portfolio` → `projects`, `us` → `studio`. Catch-all 404 via `[...rest]`.
- **Backend** — contact form API route (`app/api/contact`) sending mail over SMTP via Nodemailer, optional webhook ping.
- **Frontend logic** — multi-step contact modal (validation, fetch, abort timeout), portfolio next/prev navigation state, tier-based project navigation (internal page vs external link), featured projects, project case-study data.
- **SEO** — metadata, alternates, JSON-LD (organization, website, breadcrumb, creative work), `robots.ts`, `sitemap.ts`.
- **Data** — `app/projects/projects.json`.

## What's removed (style)

- All Tailwind classes, inline style objects and decorative markup.
- GSAP / Motion animations (page transitions reduced to plain `router.push`, animated icons reduced to static SVG).
- Fonts, icons, images (`public/` is empty), custom theme/scrollbar CSS.

## Stack

Next.js 16 (App Router, standalone) · TypeScript · next-intl · Radix Dialog · Nodemailer · Tailwind v4 (wired, unstyled).

## Commands

```bash
bun install
bun dev
bun run build
```

## Environment

Copy `.env.example` to `.env` and set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_TO`. Optional: `WEBHOOK_URL`.
