FROM oven/bun:1.3.7-alpine AS base

FROM base AS deps
WORKDIR /app

COPY package.json bun.lock ./
COPY apps/backoffice/package.json ./apps/backoffice/
COPY apps/client/package.json ./apps/client/
COPY packages/auth-shared/package.json ./packages/auth-shared/
COPY packages/env/package.json ./packages/env/
COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY packages/i18n/package.json ./packages/i18n/
COPY packages/logger/package.json ./packages/logger/
COPY packages/storage-client/package.json ./packages/storage-client/
COPY packages/trpc-client/package.json ./packages/trpc-client/
COPY packages/tsconfig/package.json ./packages/tsconfig/
COPY packages/types/package.json ./packages/types/
COPY packages/ui/package.json ./packages/ui/
COPY packages/utils/package.json ./packages/utils/

RUN bun install --frozen-lockfile

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN bun run build --filter=@repo/backoffice

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 backoffice

COPY --from=builder --chown=backoffice:nodejs /app/apps/backoffice/build ./build
COPY --from=builder --chown=backoffice:nodejs /app/scripts/serve-static.ts ./serve-static.ts

USER backoffice

EXPOSE 3002

CMD ["bun", "run", "serve-static.ts"]
