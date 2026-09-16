'use client'

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/lib/i18n/navigation";
import Story from "@/components/facile/story";
import { ARRIVE, TransitionOut } from "@/components/facile/pageTransition";
import type { Project } from "../lib/projects";
import { projectStory } from "../lib/story";
import type { Locale } from "@/lib/i18n/locales";

interface ProjectStoryProps {
    project: Project;
    index: number;
    total: number;
    locale: Locale;
}

// the /projects/[slug] route, so it can be linked to from anywhere — the shelf is
// one entry point among several, not its owner. Leaving is a route change like
// any other: the curtain covers the band, the shelf is pushed underneath it and
// lifts it on arrival
export default function ProjectStory({ project, index, total, locale }: ProjectStoryProps) {
    const router = useRouter();
    const t = useTranslations("projects");

    const sections = useMemo(() => projectStory(project, locale), [project, locale]);

    return (
        <Story
            sections={sections}
            name={project.name}
            index={index}
            total={total}
            backLabel={t("back")}
            delay={ARRIVE}
            onClose={() => TransitionOut({ href: "/projects", router })}
        />
    );
}
