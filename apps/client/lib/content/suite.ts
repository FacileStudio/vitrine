import type { StorySection } from "@/components/facile/story/types";
import type { Localized, Resolved } from "@/lib/i18n/localize";
import apps from "@/app/[locale]/suite/suite.json";

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

export const authoredApps = apps as AuthoredApp[];
