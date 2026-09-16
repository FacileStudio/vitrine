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

// Iconify ids that have a shipped file in public/icons
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

export const authoredApps: AuthoredApp[] = (apps as AuthoredApp[]).map((a) => ({ ...a, icon: iconOf(a.icon) }));
