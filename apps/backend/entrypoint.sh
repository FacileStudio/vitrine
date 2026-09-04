#!/bin/sh
set -euo pipefail

if [ "${1:-server}" = "bootstrap" ]; then
  echo "Running database bootstrap..."
  cd /app/packages/database
  bunx prisma migrate deploy

  echo "Ensuring admin user exists..."
  bun run prisma/ensure-admin.ts

  # IS_RECETTE is the only thing separating a recette database from the client's
  # production one. docker-compose.yml hardcodes NODE_ENV=production for db-init
  # in both environments, so NODE_ENV cannot tell them apart and a guard on it
  # would silently stop recette from ever seeding.
  #
  # On 2026-08-23 this container ran with IS_RECETTE=true while the Dokploy panel
  # reported false, and the seed wiped the client's production database. The
  # decision is now printed either way, so the deploy log answers "did it seed"
  # without anyone having to guess. IS_RECETTE is read raw here, not through
  # packages/env, so only the exact string "true" may arm it.
  is_recette_display="${IS_RECETTE:-<unset>}"
  if [ "${IS_RECETTE:-}" = "true" ]; then
    echo "SEED: IS_RECETTE=${is_recette_display}, running the DESTRUCTIVE database seed."
    echo "SEED: every seed module starts with deleteMany. If this is production, stop the deploy."
    bun run prisma/seed/index.ts
  else
    echo "SEED: IS_RECETTE=${is_recette_display}, skipping the seed. Only the exact string \"true\" seeds."
  fi

  exit 0
fi

echo "Starting server..."
exec bun run apps/backend/src/index.ts
