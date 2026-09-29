import type { useTranslations } from "next-intl";
import { buildStory, type BlockKind, type Chapter, type GridItem, type Person, type StoryBlock, type StorySection } from "@/components/facile/story/types";
import { localize, type Resolved } from "@/lib/i18n/localize";
import type { Locale } from "@/lib/i18n/locales";
import type { Project, Service } from "@/lib/content/projects";
import { findPerson, type AuthoredMember } from "@/lib/content/studio";

export type StoryCopy = ReturnType<typeof useTranslations<"story">>;
export type ServiceCopy = (service: Service) => string;

type Copy = { t: StoryCopy; services: ServiceCopy };

function hydrate(p: Resolved<Project>, b: StoryBlock, people: Person[], { t, services }: Copy): StoryBlock {
    if (b.type === "cover")
        return { ...b, media: b.media?.length ? b.media : [p.image], effect: b.effect ?? p.coverEffect };

    if (b.type === "intro")
        return {
            eyebrow: `${p.date}  —  ${t("weeks", { count: p.weeks })}`,
            title: p.name,
            text: p.description,
            tags: p.services.map((s) => services(s)),
            logos: p.techStack,
            people,
            link: p.link,
            ...b,
        };

    if (b.type === "end")
        return { eyebrow: t("endOf", { name: p.name }), title: t("thanks"), link: p.link, ...b };

    return b;
}

// what each grid item draws, as the block the existing components already render
function itemBlock(item: GridItem): StoryBlock {
    switch (item.kind) {
        case "image":
        case "video":
            return { type: "full", media: [item.src ?? ""] };
        case "note":
        case "text":
            return { type: "note", title: item.title, text: item.text };
        case "typography":
            return {
                type: item.secondFont ? "typographyPair" : "typography",
                font: item.font,
                fontFamily: item.fontFamily,
                description: item.description,
                secondFont: item.secondFont,
                secondFontFamily: item.secondFontFamily,
                secondDescription: item.secondDescription,
            };
        case "palette":
            return { type: "palette", swatches: item.swatches };
        case "tiles":
            return { type: "tiles", tiles: item.tiles };
        default:
            return { type: item.kind as BlockKind };
    }
}

// cut after a column no item straddles, so on phones each piece stacks like one of the old blocks
function layoutBlocks(layout: NonNullable<StorySection["layout"]>, fill: (b: StoryBlock) => StoryBlock): StoryBlock[] {
    const items = layout.items.filter((item) => !((item.kind === "image" || item.kind === "video") && !item.src));
    const blocks: StoryBlock[] = [];
    let start = 1;

    for (let col = 1; col <= layout.cols; col++) {
        const straddles = items.some((item) => item.x <= col && item.x + item.w - 1 > col);

        if (straddles && col < layout.cols)
            continue;

        const cells = items
            .filter((item) => item.x >= start && item.x <= col)
            .map((item) => ({
                x: item.x - start + 1,
                y: item.y,
                w: item.w,
                h: item.h,
                block: fill({ ...itemBlock(item), cols: item.w }),
            }));

        blocks.push({ type: "grid", cols: col - start + 1, cells });
        start = col + 1;
    }

    return blocks;
}

export function projectStory(p: Project, locale: Locale, copy: Copy, members: AuthoredMember[]): Chapter[] {
    const localized = localize(p, locale);
    const story = localized.story?.length ? localized.story : autoStory(localized, copy.services);
    const person = (slug: string) => findPerson(members, slug, locale);

    const people = localized.team
        .map(person)
        .filter((m): m is Person => Boolean(m));

    const fill = (b: StoryBlock) => hydrate(localized, b, people, copy);

    return buildStory(
        story.map((section) => ({
            ...section,
            blocks: section.hasLayout && section.layout ? layoutBlocks(section.layout, fill) : section.blocks.map(fill),
        })),
        localized.gallery,
        person,
    );
}

function autoStory(p: Resolved<Project>, services: ServiceCopy): StorySection[] {
    const pool = [...new Set([p.video, ...p.gallery].filter(Boolean) as string[])];
    const take = (n: number) => pool.splice(0, n);

    const story: StorySection[] = [{ blocks: [{ type: "cover" }, { type: "intro" }] }];

    p.services.forEach((service, i) => {
        if (pool.length < 4)
            return;

        const title = services(service);

        story.push({
            title,
            blocks: [
                { type: "note", title, text: p.notes[i] ?? p.description, media: take(1) },
                { type: "col", media: take(3) },
            ],
        });
    });

    const closing: StoryBlock[] = [];

    while (pool.length) {
        if (pool.length >= 5) closing.push({ type: "mosaic", media: take(5) });
        else if (pool.length >= 3) closing.push({ type: "col", media: take(3) });
        else closing.push({ type: "full", media: take(1) });
    }

    closing.push({ type: "end" });
    story.push({ blocks: closing });

    return story;
}
