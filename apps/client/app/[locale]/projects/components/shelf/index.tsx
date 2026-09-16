'use client'

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/lib/i18n/navigation";
import { useShelfMotion } from "@/hooks/use-shelf-motion";
import { TransitionOut } from "@/components/facile/pageTransition";
import Shelf from "@/components/facile/shelf/shelf";
import Stripes from "@/components/facile/stripes";
import { projectsIn, type Category } from "@/lib/content/projects";
import Heading from "./heading";
import ShelfCard from "./shelfCard";

interface ShelfProps {
    lines?: string[];
    limit?: number;
    filterable?: boolean;
    stickyBackdrop?: boolean;
}

// The projects shelf: /projects, and the projects section of the home page
export default function ProjectShelf({
    lines,
    limit,
    filterable = true,
    stickyBackdrop = false,
}: ShelfProps = {}) {
    const t = useTranslations("projects");
    const heading = lines ?? (t.raw("shelfTitle") as string[]);
    const [filter, setFilter] = useState<Category | null>(null);
    const router = useRouter();
    const { sectionRef, progressRef, refs, reset, onEnter, onLeave } = useShelfMotion({ zoom: 1.3, range: 25, key: filter });

    const pool = projectsIn(filter);
    const visible = limit ? pool.slice(0, limit) : pool;

    const applyFilter = (c: Category | null) => {
        if (c === filter)
            return;

        reset();
        setFilter(c);
    };

    const open = (slug: string) => TransitionOut({ href: `/projects/${slug}`, router });

    return (
        <Shelf
            ref={sectionRef}
            id="projects"
            tone="dark"
            stickyBackdrop={stickyBackdrop}
            columnClassName="w-full h-full pt-[10vh] lg:pt-[20vh] pb-[120vh] flex flex-col gap-1 justify-start items-center px-3 lg:px-6"
            after={
                <div className="pointer-events-none sticky bottom-0 z-30 h-0">
                    <div className="relative h-screen w-full -translate-y-full overflow-hidden">
                        <Stripes
                            orientation={180}
                            count={4}
                            className="bg-background"
                            openWhen={() => progressRef.current < 0.9}
                        />
                    </div>
                </div>
            }
        >
            <Heading
                lines={heading}
                filter={filter}
                count={visible.length}
                onFilter={filterable ? applyFilter : undefined}
            />

            {visible.map((p, i) => (
                <ShelfCard
                    key={`${filter ?? "all"}-${p.slug}`}
                    project={p}
                    index={i}
                    refs={refs}
                    onOpen={open}
                    onEnter={onEnter}
                    onLeave={onLeave}
                />
            ))}
        </Shelf>
    );
}
