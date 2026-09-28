'use client'

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/lib/i18n/navigation";
import Story from "@/components/facile/story";
import { ARRIVE, TransitionOut } from "@/components/facile/pageTransition";
import type { Project } from "@/lib/content/projects";
import { projectStory } from "../lib/story";
import { useMembers } from "@/components/facile/membersProvider";
import type { Locale } from "@/lib/i18n/locales";

interface ProjectStoryProps {
    project: Project;
    index: number;
    total: number;
    locale: Locale;
    nextSlug: string | null;
}

export default function ProjectStory({ project, index, total, locale, nextSlug }: ProjectStoryProps) {
    const router = useRouter();
    const t = useTranslations("projects");
    const tStory = useTranslations("story");
    const members = useMembers();
    const sections = useMemo(
        () => projectStory(project, locale, { t: tStory, services: (s) => t(`services.${s}`) }, members),
        [project, locale, t, tStory, members],
    );

    return (
        <Story
            sections={sections}
            name={project.name}
            index={index}
            total={total}
            backLabel={t("back")}
            delay={ARRIVE}
            onClose={() => TransitionOut({ href: "/projects", router })}
            onNext={nextSlug ? () => TransitionOut({ href: `/projects/${nextSlug}`, router }) : undefined}
        />
    );
}
