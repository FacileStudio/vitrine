'use client'

import type { KeyboardEvent, MouseEvent } from "react";
import SplitLines from "@/components/facile/splitLines";
import TextReveal from "@/components/facile/textReveal";
import Arrow from "@/components/facile/arrow";
import type { Project } from "../../lib/projects";
import type { ShelfCardRefs } from "../../lib/types";
import { CustomCoverRender } from "../CustomCoverFactory";

const coverClass = "w-full h-full object-cover brightness-100 transition-all duration-300 ease-out";

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
    const open = () => onOpen(project.slug);
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
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="group/card cursor-pointer 3xl:w-[70vw] w-[80vw] shrink-0 flex items-start justify-between"
        >
            <CustomCoverRender
                customCoverId={project.customCover}
                coverClass={coverClass}
                project={project}
                refs={refs}
                index={index}
            />

            <div ref={refs.content(index)} className="flex flex-col items-end gap-12 max-w-sm text-right py-12">
                <div className="gap-y-8 flex flex-col items-end">
                    <TextReveal as="h2" cropClassName="z-10" className="subtitle text-white">
                        {project.name}
                    </TextReveal>

                    {project.description && (
                        <SplitLines
                            as="p"
                            text={project.description}
                            justify
                            className="relative z-10 text-white/66"
                        />
                    )}

                    {project.link && (
                        <TextReveal cropClassName="z-10 mt-2">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="group flex w-fit text-xl font-goga capitalize tracking-tighter gap-2 rounded-md px-[2vh] py-[1vh] text-white transition-colors duration-200 hover:text-[#24E27A]"
                            >
                                Visit site
                                <Arrow />
                            </a>
                        </TextReveal>
                    )}
                </div>
                <div className="gap-y-6 flex flex-col">
                    {project.services.length > 0 && (
                        <span className="relative mt-4 z-10 flex items-center justify-end gap-1">
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
                        <div className="flex flex-col items-end gap-3">
                            <TextReveal as="p" cropClassName="relative z-10" className="subtext text-white">
                                Created with
                            </TextReveal>
                            <span className="relative z-10 flex flex-wrap justify-end gap-6">
                                {project.techStack.map((name) => (
                                    <TextReveal key={name}>
                                        <img src={`/images/logo/${name}.png`} alt={name} className="block h-8" />
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
