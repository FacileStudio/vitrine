-- CreateTable
CREATE TABLE "Project" (
    "slug" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "weeks" INTEGER NOT NULL,
    "link" TEXT,
    "image" TEXT NOT NULL,
    "video" TEXT,
    "coverEffect" TEXT,
    "description" JSONB NOT NULL,
    "metaDescription" JSONB NOT NULL,
    "challenge" JSONB,
    "services" TEXT[],
    "techStack" TEXT[],
    "date" TEXT NOT NULL,
    "gallery" TEXT[],
    "notes" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "StoryBlock" (
    "id" TEXT NOT NULL,
    "sectionId" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "media" JSONB,
    "eyebrow" JSONB,
    "title" JSONB,
    "text" JSONB,
    "tags" JSONB,
    "logos" TEXT[],
    "tiles" JSONB,
    "link" TEXT,
    "linkLabel" JSONB,
    "effect" TEXT,
    "smalls" TEXT,
    "cols" INTEGER,
    "font" TEXT,
    "fontFamily" TEXT,
    "description" JSONB,
    "secondFont" TEXT,
    "secondFontFamily" TEXT,
    "secondDescription" JSONB,
    "swatches" JSONB,

    CONSTRAINT "StoryBlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorySection" (
    "id" TEXT NOT NULL,
    "projectSlug" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "title" JSONB,
    "by" TEXT[],

    CONSTRAINT "StorySection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToStudioMember" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProjectToStudioMember_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_position_key" ON "Project"("position");

-- CreateIndex
CREATE UNIQUE INDEX "StoryBlock_sectionId_position_key" ON "StoryBlock"("sectionId", "position");

-- CreateIndex
CREATE UNIQUE INDEX "StorySection_projectSlug_position_key" ON "StorySection"("projectSlug", "position");

-- CreateIndex
CREATE INDEX "_ProjectToStudioMember_B_index" ON "_ProjectToStudioMember"("B");

-- AddForeignKey
ALTER TABLE "StoryBlock" ADD CONSTRAINT "StoryBlock_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "StorySection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorySection" ADD CONSTRAINT "StorySection_projectSlug_fkey" FOREIGN KEY ("projectSlug") REFERENCES "Project"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToStudioMember" ADD CONSTRAINT "_ProjectToStudioMember_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToStudioMember" ADD CONSTRAINT "_ProjectToStudioMember_B_fkey" FOREIGN KEY ("B") REFERENCES "StudioMember"("slug") ON DELETE CASCADE ON UPDATE CASCADE;
