import apps from "../suite.json";

export interface SuiteApp {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    icon: string;
    link?: string;
}

// the suite is authored in one file and read in three places — the home orbit,
// the menu, and this shelf — so the shape lives here rather than in each of them
export const allApps = apps as SuiteApp[];

export const findApp = (slug: string) => allApps.find((a) => a.slug === slug);

export const appIndex = (slug: string) => allApps.findIndex((a) => a.slug === slug);

// icons are either a file we ship or an iconify name; the leading slash is the tell
export const isLocalIcon = (icon: string) => icon.startsWith("/");
