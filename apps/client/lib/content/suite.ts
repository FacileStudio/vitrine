import type { StorySection } from "@/components/facile/story/types";
import type { Localized, Resolved } from "@/lib/i18n/localize";
import apps from "./suite.json";

interface AuthoredApp {
    slug: string;
    name: string;
    tagline: Localized;
    description: Localized;
    icon: string;
    link?: string;
    // the two gradient stops of the app's icon
    tint?: string[];
    story?: StorySection[];
}

export type SuiteApp = Resolved<AuthoredApp>;

export const authoredApps = apps as AuthoredApp[];
