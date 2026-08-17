"use client";

import { useMemo } from "react";
import { useLocale } from "next-intl";
import Band from "@/components/facile/story/band";
import { suiteStory } from "../suite/lib/story";

// the suite, told as a story: the section pins and the band travels sideways as
// the page scrolls through it
export default function Suite() {
    const locale = useLocale();

    const sections = useMemo(() => suiteStory(locale), [locale]);

    return <Band id="suite" sections={sections} />;
}
