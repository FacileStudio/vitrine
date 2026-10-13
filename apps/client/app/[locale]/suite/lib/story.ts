import type { useTranslations } from "next-intl";
import { buildStory, type Chapter, type StoryBlock, type StorySection, type Tile } from "@/components/facile/story/types";
import type { SuiteApp } from "@/lib/content/suite";

export type StoryCopy = ReturnType<typeof useTranslations<"suite.story">>;

const FEATURED = new Set(["vision", "opus", "glouton", "nuage", "journal", "plume"]);

const tile = (a: SuiteApp): Tile => FEATURED.has(a.slug)
    ? { label: a.name, text: a.tagline, icon: a.icon, featured: true, description: a.description, link: a.link }
    : { label: a.name, text: a.tagline, icon: a.icon };

const sixes = (apps: SuiteApp[]): StoryBlock[] =>
    apps.reduce<SuiteApp[][]>((rows, a, i) => {
        if (i % 6 === 0) rows.push([]);
        rows[rows.length - 1].push(a);
        return rows;
    }, []).map((row) => ({ type: "tiles", tiles: row.map(tile) }));

// every featured app gets its own block with the next two small apps beside it, so the last big ones may stand alone
function chunk(apps: SuiteApp[]): StoryBlock[] {
    const small = apps.filter((a) => !FEATURED.has(a.slug));
    const featured = apps.filter((a) => FEATURED.has(a.slug));

    const units = featured.map((a, i): StoryBlock => {
        const side = small.splice(0, 2).map(tile);

        return { type: "tiles", tiles: i % 2 ? [...side, tile(a)] : [tile(a), ...side] };
    });

    return [...units, ...sixes(small)];
}

export function appStory(app: SuiteApp, apps: SuiteApp[], t: StoryCopy): Chapter[] {
    const sections: StorySection[] = app.story?.length ? app.story : [
        {
            blocks: [{
                type: "intro",
                eyebrow: app.tagline,
                title: app.name,
                text: app.description,
                link: app.link,
                linkLabel: t("open"),
            }],
        },
        {
            title: t("rest"),
            blocks: chunk(apps.filter((a) => a.slug !== app.slug).slice(0, 6)),
        },
        {
            blocks: [{ type: "end", eyebrow: t("appEnd", { name: app.name }), title: t("oneLogin"), link: app.link, linkLabel: t("open") }],
        },
    ];

    return buildStory(sections);
}

export function suiteStory(apps: SuiteApp[], t: StoryCopy): Chapter[] {
    return buildStory([
        {
            blocks: [{
                type: "intro",
                icon: "/icons/Suite.svg",
                title: "Facile. Suite",
                text: t("intro", { count: apps.length }),
            }],
        },
        { title: t("section"), blocks: chunk(apps) },
        {
            // the closing image is a site built with Muse, so the last word goes to the design system
            blocks: [{
                type: "end",
                cols: 4,
                media: ["/images/suite/suite.webp"],
                icon: "/icons/Muse.svg",
                eyebrow: t("muse.eyebrow"),
                title: t("muse.title"),
                text: t("muse.text"),
                link: "/projects/muse",
                linkLabel: t("muse.link"),
            }],
        },
    ]);
}
