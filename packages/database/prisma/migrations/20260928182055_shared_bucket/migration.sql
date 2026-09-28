-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "bucket" JSONB NOT NULL DEFAULT '[]';

-- each project's bucket starts as the elements its sections had set aside
UPDATE "Project" p
SET "bucket" = COALESCE(
  (
    SELECT jsonb_agg(item)
    FROM "StorySection" s, jsonb_array_elements(s."layout"->'bucket') AS item
    WHERE s."projectSlug" = p."slug" AND s."layout" IS NOT NULL
  ),
  '[]'::jsonb
);

-- sections no longer hold a bucket of their own
UPDATE "StorySection" SET "layout" = "layout" - 'bucket' WHERE "layout" IS NOT NULL;
