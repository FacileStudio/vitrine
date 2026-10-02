#!/bin/sh
set -e

if [ "${1:-server}" = "bootstrap" ]; then
  echo "Running database migrations..."
  cd /app/packages/database
  bunx prisma migrate deploy

  echo "Ensuring admin user exists..."
  bun run prisma/ensure-admin.ts

  exit 0
fi

echo "Starting server..."
exec bun run apps/backend/src/index.ts
