#!/usr/bin/env bash

set -euo pipefail

cd "$(dirname "$0")/.."

endpoint="http://127.0.0.1:9000"
root_user="${MINIO_ROOT_USER:-minioadmin}"
root_password="${MINIO_ROOT_PASSWORD:-minioadminpassword}"
bucket="${MINIO_BUCKET_NAME:-vitrine-bucket}"

mc alias set local "$endpoint" "$root_user" "$root_password" >/dev/null

echo "waiting for minio to accept connections..."
until mc ls local >/dev/null 2>&1; do
  sleep 1
done

mc mb --ignore-existing "local/$bucket" >/dev/null
mc anonymous set download "local/$bucket" >/dev/null

echo "minio is ready: ${endpoint} (bucket: ${bucket})"
