'use client'

import type { KeyboardEvent, MouseEvent } from "react";
import SplitLines from "@/components/facile/splitLines";
import TextReveal from "@/components/facile/textReveal";
import LightPillar from "@/components/LightPillar";
import Arrow from "@/components/facile/arrow";
import { MarcelEyes, MarcelSpheres, useMarcelEyes } from "@/components/facile/marcelEyes";
import { isVideoFile } from "@/app/utils";
import { useLocalized } from "@/lib/i18n/localize";
import type { Project } from "../../lib/projects";

const mediaClass = "pointer-events-none absolute top-1/2 left-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-md object-cover will-change-[clip-path] [clip-path:inset(100%_0_0_0)]";

const coverClass = "w-full h-full object-cover brightness-100 transition-all duration-300 ease-out";

export type ShelfCardRefs = {
    card: (i: number) => (el: HTMLDivElement | null) => void;
    entry: (i: number) => (el: HTMLDivElement | null) => void;
    img: (i: number) => (el: HTMLDivElement | null) => void;
    content: (i: number) => (el: HTMLDivElement | null) => void;
};

interface ShelfCardProps {
    project: Project;
    index: number;
    refs: ShelfCardRefs;
    onOpen: (slug: string) => void;
    onEnter: (e: MouseEvent<HTMLElement>) => void;
    onLeave: (e: MouseEvent<HTMLElement>) => void;
}

// one project row: parallaxed cover image on the left with the hover media wipe,
// its name/tech/description on the right. Marcel gets the extra googly-eyes markup.
// Every piece of copy is a plain crop — the shelf's centre-band observer owns the
// whole column. The whole row opens the story; only the live-site link inside it
// stops the click from bubbling, so it can go its own way to the external site
export default function ShelfCard({ project, index, refs, onOpen, onEnter, onLeave }: ShelfCardProps) {
    const { frame, eyes, spheres, start, stop } = useMarcelEyes();
    const description = useLocalized(project.description);
    const marcel = project.coverEffect === "marcel";
    const projetZero = project.coverEffect === "projet-zero-pillar";

    const open = () => { stop(); onOpen(project.slug); };
    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
        }
    };

    return (
        <div
            ref={refs.card(index)}
            role="button"
            tabIndex={0}
            aria-label={project.name}
            onClick={open}
            onKeyDown={onKeyDown}
            onMouseEnter={(e) => { onEnter(e); if (marcel) start(); }}
            onMouseLeave={(e) => { onLeave(e); stop(); }}
            className="group/card cursor-pointer 3xl:w-[70vw] lg:w-[80vw] w-full shrink-0 flex lg:flex-row flex-col items-start justify-between"
        >
            <div className="relative shrink-0 w-full lg:w-auto">
                {marcel && <MarcelSpheres ref={spheres} />}
                <div
                    ref={refs.entry(index)}
                    className="relative 3xl:w-5xl lg:w-[50vw] w-full aspect-16/10 shrink-0 overflow-hidden rounded-md"
                >
                    <div ref={refs.img(index)} className="absolute inset-0 will-change-transform">
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
                                className={mediaClass}
                            />
                        )
                    )}
                </div>
            </div>

            <div ref={refs.content(index)} className="flex flex-col items-start lg:items-end gap-6 lg:gap-12 w-full lg:w-auto lg:max-w-sm px-3 lg:px-0 py-12 text-right">
                <div className="gap-y-6 lg:gap-y-8 flex flex-col items-start lg:items-end text-start lg:text-end">
                    <TextReveal as="h2" cropClassName="z-10" className="subtitle text-white">
                        {project.name}
                    </TextReveal>

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
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="group flex w-fit text-xl font-goga capitalize tracking-tighter gap-2 rounded-md lg:px-[2vh] lg:py-[1vh] text-white transition-colors duration-200 hover:text-[#24E27A]"
                            >
                                Visit site
                                <Arrow />
                            </a>
                        </TextReveal>
                    )}
                </div>
                <div className="lg:gap-6 flex flex-col">
                    {project.services.length > 0 && (
                        <span className="relative lg:mt-4 z-10 flex flex-wrap items-center lg:justify-end gap-1">
                            {project.services.map((s) => (
                                <TextReveal
                                    key={s}
                                    cropClassName="shrink-0"
                                    className="rounded-md px-[2vh] py-[1vh] text-[clamp(0.65rem,1.4vh,0.9rem)] backdrop-blur-xl bg-[#212121]/20 text-white"
                                >
                                    <p>{s}</p>
                                </TextReveal>
                            ))}
                        </span>
                    )}
                    {project.techStack?.length ? (
                        <div className="flex flex-col pt-6 lg:pt-0 lg:items-end text-start lg:text-right gap-3">
                            <TextReveal as="p" cropClassName="relative z-10" className="subtext text-white">
                                Created with
                            </TextReveal>
                            <span className="relative z-10 flex flex-wrap lg:justify-end gap-6">
                                {project.techStack.map((name) => (
                                    <TextReveal key={name}>
                                        <img src={`/images/logo/${name}.png`} alt={name} className="block h-5 lg:h-7" />
                                    </TextReveal>
                                ))}
                            </span>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
