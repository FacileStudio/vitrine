'use client'

import type { MouseEvent } from "react";
import { useTranslations } from "next-intl";
import SplitLines from "@/components/facile/splitLines";
import TextReveal from "@/components/facile/textReveal";
import { LightPillar } from "@/webgl/lazy";
import ArrowLink from "@/components/facile/arrowLink";
import TechStack from "@/components/facile/techStack";
import ShelfRow from "@/components/facile/shelf/shelfRow";
import { MarcelEyes, MarcelSpheres, useMarcelEyes } from "@/components/facile/marcelEyes";
import { isVideoFile } from "@/lib/utils";
import { useLocalized } from "@/lib/i18n/localize";
import type { Project } from "@/lib/content/projects";
import type { ShelfRefs } from "@/hooks/use-shelf-motion";

const mediaClass = "pointer-events-none absolute top-1/2 left-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-md object-cover will-change-[clip-path] [clip-path:inset(100%_0_0_0)]";

const coverClass = "w-full h-full object-cover brightness-100 transition-all duration-300 ease-out";

const techStackClass = {
    labelCropClassName: "relative z-10",
    labelClassName: "subtext text-white",
    rowClassName: "relative z-10 flex flex-wrap md:justify-end gap-6",
    logoClassName: "block h-5 lg:h-7",
    split: true,
};

interface ShelfCardProps {
    project: Project;
    index: number;
    refs: ShelfRefs;
    onOpen: (slug: string) => void;
    onEnter: (e: MouseEvent<HTMLElement>) => void;
    onLeave: (e: MouseEvent<HTMLElement>) => void;
}

export default function ShelfCard({ project, index, refs, onOpen, onEnter, onLeave }: ShelfCardProps) {
    const t = useTranslations("story");
    const tProjects = useTranslations("projects");
    const { frame, eyes, spheres, start, stop } = useMarcelEyes();
    const description = useLocalized(project.description);
    const marcel = project.coverEffect === "marcel";
    const projetZero = project.coverEffect === "projet-zero-pillar";

    return (
        <ShelfRow
            ref={refs.card(index)}
            label={project.name}
            onOpen={() => { stop(); onOpen(project.slug); }}
            onEnter={(e) => { onEnter(e); if (marcel) start(); }}
            onLeave={(e) => { onLeave(e); stop(); }}
            className="group/card cursor-pointer 3xl:w-[70vw] lg:w-[80vw] w-full shrink-0 lg:flex-row flex-col items-start justify-between lg:gap-[4vw]"
        >
            <div className="relative shrink-0 w-full lg:w-auto">
                {marcel && <MarcelSpheres ref={spheres} />}
                <div className="relative 3xl:w-5xl lg:w-[50vw] w-full aspect-16/10 shrink-0 overflow-hidden rounded-md">
                    <div ref={refs.media(index)} className="absolute inset-0 will-change-transform">
                        {projetZero ? (
                            <LightPillar fallback={project.image} className="object-cover brightness-100 transition-all duration-300 ease-out group-hover/card:brightness-[0.6] group-hover/card:scale-110" />
                        ) : (
                            <img
                                src={project.image}
                                alt={project.name}
                                loading="lazy"
                                decoding="async"
                                className={marcel ? coverClass : `${coverClass} group-hover/card:brightness-[0.6] group-hover/card:scale-110`}
                            />
                        )}

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
            </div>

            <div ref={refs.content(index)} className="flex flex-col items-start lg:items-end gap-6 lg:gap-12 w-full lg:w-auto lg:max-w-[26vw] px-3 lg:px-0 py-12 text-right">
                <div className="gap-y-6 lg:gap-y-8 flex flex-col w-full lg:w-auto items-start lg:items-end text-start lg:text-end">
                    <div className="flex w-full lg:w-auto items-center justify-between gap-6">
                        <TextReveal as="h2" cropClassName="z-10" className="subtitle text-white">
                            {project.name}
                        </TextReveal>
                        <TechStack stack={project.techStack} className="flex-col gap-3 hidden md:flex lg:hidden items-end text-right" {...techStackClass} />
                    </div>

                    {description && (
                        <SplitLines
                            as="p"
                            text={description}
                            justify
                            className="description relative z-10 text-white/75"
                        />
                    )}

                    {project.link && (
                        <TextReveal cropClassName="z-10 lg:mt-2">
                            <ArrowLink
                                href={project.link}
                                isolated
                                className="group flex w-fit text-xl font-goga capitalize tracking-tighter gap-2 rounded-md lg:px-[2vh] lg:py-[1vh] text-white transition-colors duration-200 hover:text-accent"
                            >
                                {t("visitSite")}
                            </ArrowLink>
                        </TextReveal>
                    )}
                </div>
                <div className="lg:gap-6 flex flex-col">
                    {project.services.length > 0 && (
                        <span className="relative lg:mt-4 z-10 flex flex-wrap items-center lg:justify-end gap-1">
                            {project.services.map((s) => (
                                <TextReveal key={s} cropClassName="shrink-0" className="chip">
                                    <p>{tProjects(`services.${s}`)}</p>
                                </TextReveal>
                            ))}
                        </span>
                    )}
                    <TechStack stack={project.techStack} className="flex-col gap-3 flex md:hidden lg:flex pt-6 lg:pt-0 lg:items-end text-start lg:text-right" {...techStackClass} />
                </div>
            </div>
        </ShelfRow>
    );
}
