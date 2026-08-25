#!/usr/bin/env bash

set -euo pipefail

cd "$(dirname "$0")/.."

data_dir=".local/minio/data"
address="127.0.0.1:9000"
console_address="127.0.0.1:9001"
root_user="minioadmin"
root_password="minioadminpassword"

mkdir -p "$data_dir"

exec env \
  MINIO_ROOT_USER="$root_user" \
  MINIO_ROOT_PASSWORD="$root_password" \
  minio server "$data_dir" --address "$address" --console-address "$console_address"
