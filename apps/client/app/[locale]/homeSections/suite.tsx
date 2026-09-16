"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import Band from "@/components/facile/story/band";
import { useLocalized } from "@/lib/i18n/localize";
import { authoredApps } from "@/lib/content/suite";
import { suiteStory } from "../suite/lib/story";

// the suite, told as a story: the section pins and the band travels sideways as
// the page scrolls through it
export default function Suite() {
    const t = useTranslations("suite.story");
    const apps = useLocalized(authoredApps);

    const sections = useMemo(() => suiteStory(apps, t), [apps, t]);

    return <Band id="suite" sections={sections} />;
}
