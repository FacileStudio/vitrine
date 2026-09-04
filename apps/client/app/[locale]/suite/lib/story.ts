import { buildStory, type Chapter, type StoryBlock, type StorySection, type Tile } from "@/components/facile/story/types";
import { allApps, type SuiteApp } from "./apps";

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
export function appStory(app: SuiteApp): Chapter[] {
    const sections: StorySection[] = app.story?.length ? app.story : [
        {
            blocks: [{
                type: "intro",
                eyebrow: app.tagline,
                title: app.name,
                text: app.description,
                link: app.link,
                linkLabel: "Ouvrir l'app",
            }],
        },
        {
            title: "Le reste de la suite",
            blocks: chunk(allApps.filter((a) => a.slug !== app.slug).slice(0, 6)),
        },
        {
            blocks: [{ type: "end", eyebrow: `Fin de ${app.name}`, title: "Un seul login. Toute la suite.", link: app.link, linkLabel: "Ouvrir l'app" }],
        },
    ];

    return buildStory(sections);
}

// the whole suite as one story — the home page reads it as a pinned band
export function suiteStory(locale: string): Chapter[] {
    return buildStory([
        {
            blocks: [{
                type: "intro",
                eyebrow: "Facile Suite — auto-hébergé, open source, intégré",
                title: "On simplifie. Vous bossez.",
                text: `${allApps.length} outils qui se parlent, sur votre serveur. Temps, projets, leads, signatures, factures, secrets, logs — un seul login, zéro dépendance cloud.`,
            }],
        },
        { title: "La suite", blocks: chunk(allApps) },
        {
            blocks: [{
                type: "end",
                eyebrow: `${allApps.length} outils, une suite`,
                title: "Et tout communique.",
                link: `/${locale}/suite`,
                linkLabel: "Découvrir la suite",
            }],
        },
    ]);
}
