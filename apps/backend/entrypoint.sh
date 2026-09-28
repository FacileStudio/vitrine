#!/bin/sh
set -e

echo "Running database migrations..."
cd packages/database
bunx prisma migrate deploy

echo "Ensuring admin user exists..."
bun run prisma/ensure-admin.ts

cd /app

echo "Starting server..."
exec bun run apps/backend/src/index.ts
