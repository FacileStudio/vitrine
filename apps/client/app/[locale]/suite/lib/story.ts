import type { useTranslations } from "next-intl";
import { buildStory, type Chapter, type StoryBlock, type StorySection, type Tile } from "@/components/facile/story/types";
import type { SuiteApp } from "./apps";

/** The `suite.story` translator, handed in by the component that builds the story. */
export type StoryCopy = ReturnType<typeof useTranslations<"suite.story">>;

// the suite's own marks live in public/icons, each named after the iconify id it
// stands in for. An app whose file hasn't landed yet keeps the iconify one
const LOCAL = new Set([
    "solar:bill-list-bold-duotone",
    "solar:calendar-add-bold-duotone",
    "solar:cloud-bold-duotone",
    "solar:leaf-bold-duotone",
    "solar:letter-opened-bold-duotone",
    "solar:microphone-2-bold-duotone",
    "solar:monitor-camera-bold-duotone",
    "solar:panorama-bold-duotone",
    "solar:pills-bold-duotone",
    "solar:ruler-cross-pen-bold-duotone",
]);

const iconOf = (icon: string) => (LOCAL.has(icon) ? `/icons/${icon.replace(":", "_")}.svg` : icon);

const tile = (a: SuiteApp): Tile => ({ label: a.name, text: a.tagline, icon: iconOf(a.icon) });

// six tiles fill a two-column block, so the suite is cut into blocks rather than
// scaled down to fit one
const chunk = (apps: SuiteApp[]): StoryBlock[] =>
    apps.reduce<SuiteApp[][]>((rows, a, i) => {
        if (i % 6 === 0) rows.push([]);
        rows[rows.length - 1].push(a);
        return rows;
    }, []).map((row) => ({ type: "tiles", tiles: row.map(tile) }));

// one app's story: what it is, then the company it keeps. An app can author a
// full story in suite.json the same way a project does — this is the fallback
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

// the whole suite as one story — the home page reads it as a pinned band
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
