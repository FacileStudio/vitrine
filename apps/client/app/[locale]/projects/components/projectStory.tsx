'use client'

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Story from "@/components/facile/story";
import { ARRIVE, TransitionOut } from "@/components/facile/pageTransition";
import type { Project } from "../lib/projects";
import { projectStory } from "../lib/story";

interface ProjectStoryProps {
    project: Project;
    index: number;
    total: number;
}

// the /projects/[slug] route, so it can be linked to from anywhere — the shelf is
// one entry point among several, not its owner. Leaving is a route change like
// any other: the curtain covers the band, the shelf is pushed underneath it and
// lifts it on arrival
export default function ProjectStory({ project, index, total }: ProjectStoryProps) {
    const router = useRouter();
    const locale = useLocale();

    const sections = useMemo(() => projectStory(project), [project]);

    return (
        <Story
            sections={sections}
            name={project.name}
            index={index}
            total={total}
            backLabel="Back to projects"
            delay={ARRIVE}
            onClose={() => TransitionOut({ href: `/${locale}/projects`, router })}
        />
    );
}
