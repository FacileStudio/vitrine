import type { useTranslations } from "next-intl";
import { buildStory, type Chapter, type Person, type StoryBlock, type StorySection } from "@/components/facile/story/types";
import { localize, type Resolved } from "@/lib/i18n/localize";
import type { Locale } from "@/lib/i18n/locales";
import type { Project, Service } from "@/lib/content/projects";
import { findPerson } from "@/lib/content/studio";

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
            text: p.challenge ?? p.description,
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

export function projectStory(p: Project, locale: Locale, copy: Copy): Chapter[] {
    const localized = localize(p, locale);
    const story = localized.story?.length ? localized.story : autoStory(localized, copy.services);
    const person = (slug: string) => findPerson(slug, locale);

    const people = localized.team
        .map(person)
        .filter((m): m is Person => Boolean(m));

    return buildStory(
        story.map((section) => ({ ...section, blocks: section.blocks.map((b) => hydrate(localized, b, people, copy)) })),
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
