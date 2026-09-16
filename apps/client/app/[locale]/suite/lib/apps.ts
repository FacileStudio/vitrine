import type { StorySection } from "@/components/facile/story/types";
import type { Localized, Resolved } from "@/lib/i18n/localize";
import apps from "../suite.json";

// what suite.json authors: names are brand names, the copy is written per locale
interface AuthoredApp {
    slug: string;
    name: string;
    tagline: Localized;
    description: Localized;
    icon: string;
    link?: string;
    story?: StorySection[];
}

export type SuiteApp = Resolved<AuthoredApp>;

// the suite is authored in one file and read in three places — the home band,
// the page metadata, and this shelf — so the shape lives here rather than in each of them
export const authoredApps = apps as AuthoredApp[];

// icons are either a file we ship or an iconify name; the leading slash is the tell
export const isLocalIcon = (icon: string) => icon.startsWith("/");
