CREATE TEMP TABLE "MissingInfo" AS
SELECT p.slug FROM "Project" p
WHERE NOT EXISTS (
    SELECT 1 FROM "StorySection" s
    WHERE s."projectSlug" = p.slug
    AND (
        s.layout->'items' @> '[{"kind": "cover"}]'
        OR s.layout->'items' @> '[{"kind": "intro"}]'
        OR EXISTS (SELECT 1 FROM "StoryBlock" b WHERE b."sectionId" = s.id AND b.type IN ('cover', 'intro'))
    )
);

UPDATE "StorySection" SET position = -position - 1 WHERE "projectSlug" IN (SELECT slug FROM "MissingInfo");
UPDATE "StorySection" SET position = -position WHERE "projectSlug" IN (SELECT slug FROM "MissingInfo");

INSERT INTO "StorySection" (id, "projectSlug", position, by, layout)
SELECT gen_random_uuid()::text, slug, 0, '{}', '{"cols": 5, "items": [{"h": 3, "w": 3, "x": 1, "y": 1, "id": "cover", "kind": "cover"}, {"h": 3, "w": 2, "x": 4, "y": 1, "id": "intro", "kind": "intro"}]}'
FROM "MissingInfo";

INSERT INTO "StoryBlock" (id, "sectionId", position, type)
SELECT gen_random_uuid()::text, s.id, v.position, v.type
FROM "StorySection" s
JOIN "MissingInfo" m ON m.slug = s."projectSlug"
CROSS JOIN (VALUES (0, 'cover'), (1, 'intro')) AS v(position, type)
WHERE s.position = 0;

DROP TABLE "MissingInfo";
