import type { routing } from "@/lib/i18n/routing";
import type common from "./locales/en/common.json";
import type seo from "./locales/en/seo.json";
import type home from "./locales/en/home.json";
import type projects from "./locales/en/projects.json";
import type story from "./locales/en/story.json";
import type studio from "./locales/en/studio.json";
import type suite from "./locales/en/suite.json";
import type process from "./locales/en/process.json";

declare module "next-intl" {
    interface AppConfig {
        Locale: (typeof routing.locales)[number];
        Messages: {
            common: typeof common;
            seo: typeof seo;
            home: typeof home;
            projects: typeof projects;
            story: typeof story;
            studio: typeof studio;
            suite: typeof suite;
            process: typeof process;
        };
    }
}
