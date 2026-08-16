import type { ReactNode } from "react";
import SplitLines from "@/components/facile/splitLines";
import BlockReveal from "@/components/facile/blockReveal";
import { ARRIVE } from "@/components/facile/pageTransition";
import type { BlockProps } from "../../../lib/story";
import { team } from "../../../lib/projects";
import { Block, Cell } from "./Bento";
import Line from "./Line";

// the chapter is the first thing behind the arriving curtain, so its panels hold
// until it has cleared; the band matches the one the track reveals its copy on
const wipe = { arrive: ARRIVE / 1000, rootMargin: "0px -18% 0px -18%" };

// the label gets its own crop; the value brings as many as it wants, so a list
// can rise a row at a time instead of as one slab
function Meta({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div className="flex flex-col gap-3">
            <Line className="text-[clamp(0.65rem,1.4vh,0.9rem)] text-white/35">{label}</Line>
            {children}
        </div>
    );
}

export default function Intro({ block, project, ref }: BlockProps) {
    const members = team(project);

    return (
        <Block ref={ref} cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1">
                <div className="flex h-full w-full flex-col justify-between gap-[3vh] p-[5vh]">
                    <div className="flex flex-col gap-6">
                        <Line className="text-[clamp(0.65rem,1.4vh,0.9rem)] uppercase text-white/70">
                            {project.date}  —  {project.weeks} weeks
                        </Line>

                        <BlockReveal {...wipe} className="w-fit text-[clamp(1.75rem,5.2vh,5rem)] font-medium leading-[1.05]">
                            {project.name}
                        </BlockReveal>

                        <SplitLines
                            text={block.text ?? project.challenge ?? project.description}
                            sweep={{ ...wipe, delay: 0.1 }}
                            className="max-w-[50ch] text-[clamp(0.8rem,1.9vh,1.35rem)] text-white/70"
                        />

                        {project.services.length ? (
                            <Line className="flex flex-wrap items-center gap-1">
                                {project.services.map((s) => (
                                    <span
                                        key={s}
                                        className="rounded-md px-[2vh] py-[1vh] text-[clamp(0.65rem,1.4vh,0.9rem)] bg-[#212121] text-white"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </Line>
                        ) : null}
                    </div>

                    <div className="flex flex-col gap-y-12">
                        {project.techStack?.length ? (
                            <Meta label="Created with">
                                <Line className="flex flex-wrap items-center gap-x-[2vh] gap-y-[1vh]">
                                    {project.techStack.map((t) => (
                                        <img key={t} src={`/images/logo/${t}.png`} alt={t} className="h-[2.6vh] max-h-8 w-auto" />
                                    ))}
                                </Line>
                            </Meta>
                        ) : null}

                        {members.length ? (
                            <Meta label="Facile. members working">
                                <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                                    {members.map((m) => (
                                        <Line key={m.slug} className="flex items-center gap-4">
                                            <img
                                                src={m.avatar}
                                                alt={m.name}
                                                style={{ borderColor: m.highlight }}
                                                className="h-[3.2vh] w-[3.2vh] max-h-9 max-w-9 shrink-0 rounded-full border-2 object-cover"
                                            />
                                            <span className="flex items-center gap-3 leading-tight">
                                                <span className="text-white text-[clamp(0.8rem,1.9vh,1.35rem)] font-medium">{m.name}</span>
                                                <span className="text-[clamp(0.65rem,1.4vh,0.9rem)] mt-0.5 text-white/40">{m.role}</span>
                                            </span>
                                        </Line>
                                    ))}
                                </div>
                            </Meta>
                        ) : null}

                        {project.link ? (
                            <Meta label="Live">
                                <BlockReveal {...wipe} className="w-fit">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex w-fit items-center gap-[1vh] text-[clamp(0.8rem,1.9vh,1.35rem)] text-white transition-colors duration-200 hover:text-[#24E27A]"
                                    >
                                        Visit site
                                        <span className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                                    </a>
                                </BlockReveal>
                            </Meta>
                        ) : null}
                    </div>
                </div>
            </Cell>
        </Block>
    );
}
