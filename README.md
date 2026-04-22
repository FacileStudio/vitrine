# Facile. Studio

Showcase website for **Facile. Studio** — a creative studio portfolio built with Next.js 16, featuring smooth GSAP animations, internationalization (EN, FR, ES, DE), and a contact form with SMTP email delivery.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP + Motion
- **i18n**: next-intl (EN, FR, ES, DE)
- **UI**: Radix UI primitives
- **Email**: Nodemailer (SMTP)
- **Deployment**: Docker (standalone output)

## Getting Started

```bash
cp .env.example .env
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

See [`.env.example`](.env.example) for required variables:

- `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` — SMTP config for the contact form
- `SMTP_FROM` / `CONTACT_TO` — optional sender and recipient overrides for the contact form

## Docker

```bash
docker build -t vitrine-facile .
docker run -p 3000:3000 --env-file .env vitrine-facile
```

Environment variables are read at runtime — no build args needed.

## Project Structure

```
app/
├── [locale]/          # i18n routes (en, fr, es, de)
│   ├── page.tsx       # Home / landing
│   ├── studio/        # About the studio
│   └── projects/      # Projects showcase
├── api/contact/       # Contact form API (SMTP email)
└── page.tsx           # Root redirect
```
