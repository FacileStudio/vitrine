FROM oven/bun:1.1 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --prod

FROM oven/bun:1.1 AS builder
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
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

CMD ["node", "server.js"]
