#!/usr/bin/env bash

set -euo pipefail

cd "$(dirname "$0")/.."

data_dir=".local/postgres/data"

if [ -d "$data_dir" ] && pg_ctl -D "$data_dir" status >/dev/null 2>&1; then
  pg_ctl -D "$data_dir" stop -m fast >/dev/null
  echo "stopped repo-local postgres"
else
  echo "repo-local postgres is not running"
fi
