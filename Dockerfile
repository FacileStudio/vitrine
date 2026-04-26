# Build stage
FROM oven/bun:1-alpine AS builder

RUN apk add --no-cache nodejs

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --ignore-scripts

COPY . .
RUN bunx --bun next build

# Production stage
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "server.js"]
