-- an earlier deploy may have dropped the column, IF NOT EXISTS makes this a no-op where it did not
ALTER TABLE "StudioMember" ADD COLUMN IF NOT EXISTS "scale" DOUBLE PRECISION NOT NULL DEFAULT 4.5;
