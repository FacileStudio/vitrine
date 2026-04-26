# Build stage
FROM oven/bun:1.3.11-alpine AS builder

WORKDIR /app

COPY .npmrc package.json bun.lock ./
RUN bun install --frozen-lockfile --linker hoisted

COPY . .
RUN bun run build

# Production stage
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

CMD ["node", "server.js"]
