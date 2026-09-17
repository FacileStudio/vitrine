import type { useTranslations } from "next-intl";
import { buildStory, type Chapter, type StoryBlock, type StorySection, type Tile } from "@/components/facile/story/types";
import type { SuiteApp } from "@/lib/content/suite";

export type StoryCopy = ReturnType<typeof useTranslations<"suite.story">>;

const tile = (a: SuiteApp): Tile => ({ label: a.name, text: a.tagline, icon: a.icon });

const chunk = (apps: SuiteApp[]): StoryBlock[] =>
    apps.reduce<SuiteApp[][]>((rows, a, i) => {
        if (i % 6 === 0) rows.push([]);
        rows[rows.length - 1].push(a);
        return rows;
    }, []).map((row) => ({ type: "tiles", tiles: row.map(tile) }));

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
                eyebrow: t("eyebrow"),
                title: t("title"),
                text: t("intro", { count: apps.length }),
            }],
        },
        { title: t("section"), blocks: chunk(apps) },
        {
            blocks: [{
                type: "end",
                eyebrow: t("count", { count: apps.length }),
                title: t("end"),
                link: "/suite",
                linkLabel: t("discover"),
            }],
        },
    ]);
}
