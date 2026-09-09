FROM oven/bun:1.3 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --prod

FROM oven/bun:1.3 AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
ARG NEXT_PUBLIC_JOURNAL_URL=https://journal.facile.studio/api
ARG NEXT_PUBLIC_JOURNAL_KEY=journal_pub_vitrine_AZqPViokahMRdy3f-OD7gKSu0-ADutpK165z_Cq3tYk
ENV NEXT_PUBLIC_JOURNAL_URL=$NEXT_PUBLIC_JOURNAL_URL
ENV NEXT_PUBLIC_JOURNAL_KEY=$NEXT_PUBLIC_JOURNAL_KEY
RUN bun run build

FROM node:20-alpine
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

RUN chown -R nextjs:nodejs .
USER nextjs

EXPOSE 3000

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

HEALTHCHECK --interval=30s --timeout=10s --retries=3 --start-period=30s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

CMD ["node", "server.js"]