'use client'

import type { MouseEvent } from "react";
import { useTranslations } from "next-intl";
import TextReveal from "@/components/facile/textReveal";
import ShelfRow from "@/components/facile/shelf/shelfRow";
import { MarcelEyes, MarcelSpheres, useMarcelEyes } from "@/components/facile/marcelEyes";
import { isVideoFile } from "@/lib/utils";
import type { Project } from "@/lib/content/projects";
import type { ShelfRefs } from "@/hooks/use-shelf-motion";

const mediaClass = "pointer-events-none absolute top-1/2 left-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-fc object-cover will-change-[clip-path] [clip-path:inset(100%_0_0_0)]";

const coverClass = "w-full h-full object-cover brightness-100 transition-all duration-300 ease-out";

interface ShelfCardProps {
    project: Project;
    index: number;
    refs: ShelfRefs;
    onOpen: (slug: string) => void;
    onEnter: (e: MouseEvent<HTMLElement>) => void;
    onLeave: (e: MouseEvent<HTMLElement>) => void;
}

export default function ShelfCard({ project, index, refs, onOpen, onEnter, onLeave }: ShelfCardProps) {
    const tProjects = useTranslations("projects");
    const { frame, eyes, spheres, start, stop } = useMarcelEyes();
    const marcel = project.coverEffect === "marcel";

    return (
        <ShelfRow
            ref={refs.card(index)}
            label={project.name}
            onOpen={() => { stop(); onOpen(project.slug); }}
            onEnter={(e) => { onEnter(e); if (marcel) start(); }}
            onLeave={(e) => { onLeave(e); stop(); }}
            className="group/card relative cursor-pointer  3xl:w-[70vw] lg:w-[80vw] w-full shrink-0"
        >
            {marcel && <MarcelSpheres ref={spheres} />}
            <div className="relative w-full aspect-16/10 lg:aspect-video overflow-hidden rounded-fc">
                <div ref={refs.media(index)} className="absolute inset-0 will-change-transform">
                    <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        decoding="async"
                        className={marcel ? coverClass : `${coverClass} group-hover/card:brightness-[0.6] group-hover/card:scale-110`}
                    />

                    {marcel && <MarcelEyes frameRef={frame} ref={eyes} />}
                </div>

                {!marcel && project.video && (
                    isVideoFile(project.video) ? (
                        <video
                            data-media
                            src={project.video}
                            loop muted playsInline preload="none"
                            className={mediaClass}
                        />
                    ) : (
                        <img
                            data-media
                            src={project.video}
                            alt={project.name}
                            loading="lazy"
                            decoding="async"
                            className={mediaClass}
                        />
                    )
                )}
            </div>

            <div ref={refs.content(index)} className="pointer-events-none absolute inset-0 z-40 flex flex-col lg:flex-row items-start lg:items-end justify-end lg:justify-between gap-1 lg:gap-12 px-6 p-4 lg:px-12 lg:p-10">
                {!marcel && <div data-shade className="absolute inset-x-0 bottom-0 -z-10 h-2/3 rounded-b-fc bg-linear-to-t from-foreground/75 to-transparent opacity-0" />}

                <TextReveal as="h2" className="title text-background">
                    {project.name}
                </TextReveal>

                {project.services.length > 0 && (
                    <span className="flex flex-wrap items-center lg:justify-end gap-fc">
                        {project.services.map((s) => (
                            <TextReveal key={s} cropClassName="shrink-0" className="chip tagText">
                                <span>{tProjects(`services.${s}`)}</span>
                            </TextReveal>
                        ))}
                    </span>
                )}
            </div>
        </ShelfRow>
    );
}
