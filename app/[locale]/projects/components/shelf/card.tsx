'use client'

import type { MouseEvent } from "react";
import SplitLines from "@/components/facile/splitLines";
import { isVideoFile, type Project } from "../../lib/projects";
import { MarcelEyes, MarcelSpheres, useMarcelEyes } from "../marcelEyes";

const mediaClass = "pointer-events-none absolute top-1/2 left-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-md object-cover will-change-[clip-path] [clip-path:inset(100%_0_0_0)]";

const coverClass = "w-full h-full object-cover brightness-100 transition-all duration-300 ease-out";

// the shelf owns every ref array, so a card only receives the per-index setter
// it has to hand to each of its four moving parts
export type CardRefs = {
    card: (i: number) => (el: HTMLDivElement | null) => void;
    entry: (i: number) => (el: HTMLButtonElement | null) => void;
    img: (i: number) => (el: HTMLDivElement | null) => void;
    content: (i: number) => (el: HTMLDivElement | null) => void;
};

interface CardProps {
    project: Project;
    index: number;
    refs: CardRefs;
    onOpen: (slug: string) => void;
    onEnter: (e: MouseEvent<HTMLButtonElement>) => void;
    onLeave: (e: MouseEvent<HTMLButtonElement>) => void;
}

// one project row: parallaxed cover image on the left with the hover media wipe,
// its name/tech/description on the right. Marcel gets the extra googly-eyes markup
export default function Card({ project, index, refs, onOpen, onEnter, onLeave }: CardProps) {
    const { frame, eyes, spheres, start, stop } = useMarcelEyes();
    const marcel = project.slug === "marcel";

    return (
        <div ref={refs.card(index)} className="3xl:w-[70vw] w-[80vw] shrink-0 flex items-start justify-between">
            <div className="relative shrink-0">
                {marcel && <MarcelSpheres ref={spheres} />}
                <button
                    ref={refs.entry(index)}
                    type="button"
                    aria-label={project.name}
                    onClick={() => { stop(); onOpen(project.slug); }}
                    onMouseEnter={(e) => { onEnter(e); if (marcel) start(); }}
                    onMouseLeave={(e) => { onLeave(e); stop(); }}
                    className="group relative 3xl:w-5xl w-[50vw] aspect-16/10 shrink-0 overflow-hidden rounded-md"
                >
                    <div ref={refs.img(index)} className="absolute inset-0 will-change-transform">
                        <img
                            src={project.image}
                            alt={project.name}
                            loading="lazy"
                            decoding="async"
                            className={marcel ? coverClass : `${coverClass} group-hover:brightness-[0.6] group-hover:scale-110`}
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
                                className={mediaClass}
                            />
                        )
                    )}
                </button>
            </div>

            <div ref={refs.content(index)} className="flex flex-col items-end gap-12 max-w-sm text-right py-12">
                <div className="gap-y-6 flex flex-col">
                    <span className="relative z-10 block overflow-hidden">
                        <span data-reveal className="block text-5xl font-medium text-white">
                            {project.name}
                        </span>
                    </span>
                    <div>
                        {project.description && (
                            <SplitLines
                            text={project.description}
                            justify
                            className="relative z-10 text-md font-medium leading-relaxed text-white/50"
                            />
                        )}
                    </div>
                </div>
                <div className="gap-y-6 flex flex-col">
                    {project.services.length > 0 && (
                        <span className="relative mt-4 z-10 flex items-center justify-end gap-1">
                            {project.services.map((s) => (
                                <span key={s} className="block shrink-0 overflow-hidden">
                                    <span data-reveal className="block rounded-md px-[2vh] py-[1vh] text-[clamp(0.65rem,1.4vh,0.9rem)] bg-[#212121] text-white">
                                        {s}
                                    </span>
                                </span>
                            ))}
                        </span>
                    )}
                    {project.techStack?.length ? (
                        <div className="flex flex-col items-end gap-3">
                            <span className="relative z-10 block overflow-hidden">
                                <span data-reveal className="block text-[clamp(0.65rem,1.4vh,0.9rem)] text-white/35">
                                    Created with
                                </span>
                            </span>
                            <span className="relative z-10 flex flex-wrap justify-end gap-6">
                                {project.techStack.map((name) => (
                                    <span key={name} className="block overflow-hidden">
                                        <img data-reveal src={`/images/logo/${name}.png`} alt={name} className="block h-8" />
                                    </span>
                                ))}
                            </span>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
