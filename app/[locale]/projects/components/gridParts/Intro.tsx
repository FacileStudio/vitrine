import type { ReactNode } from "react";
import SplitLines from "@/components/facile/splitLines";
import type { PartProps } from "../../lib/story";
import { team } from "../../lib/story";
import { Block, Cell } from "./bento";

function Line({ className = "", children }: { className?: string; children: ReactNode }) {
    return (
        <div className="overflow-hidden">
            <div data-reveal className={className}>{children}</div>
        </div>
    );
}

// the label gets its own crop; the value brings as many as it wants, so a list
// can rise a row at a time instead of as one slab
function Meta({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div className="flex flex-col gap-3">
            <Line className="text-sm text-white/35">{label}</Line>
            {children}
        </div>
    );
}

export default function Intro({ block, project, ref }: PartProps) {
    const members = team(project);

    return (
        <Block ref={ref} cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1" className="">
                <div className="flex h-full w-full flex-col justify-between p-20">
                    <div className="flex flex-col gap-6">
                        <Line className="text-sm uppercase text-white/70">
                            {project.date}  —  {project.weeks} weeks
                        </Line>

                        <Line className="text-6xl font-medium 3xl:text-8xl">
                            {project.name}
                        </Line>

                        <SplitLines
                            text={block.text ?? project.challenge ?? project.description}
                            className="max-w-[50ch] text-xl text-white/70"
                        />

                        {project.services?.length ? (
                            <Line className="flex flex-wrap items-center gap-1">
                                {project.services.map((s) => (
                                    <span
                                        key={s}
                                        className="rounded-md px-4 py-2 text-sm bg-white/5 text-white"
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
                                <Line className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/70">
                                    {project.techStack.map((t) => (
                                        <span key={t} className="flex items-center gap-3">
                                            <img src={`/images/logo/${t}.png`} alt="" className="h-8 w-auto" />
                                            <span className="text-white/70">{t}</span>
                                        </span>
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
                                                className="h-9 w-9 shrink-0 rounded-full border-2 object-cover"
                                            />
                                            <span className="flex items-center gap-3 leading-tight">
                                                <span className="text-white text-lg font-medium">{m.name}</span>
                                                <span className="text-sm mt-0.5 text-white/40">{m.role}</span>
                                            </span>
                                        </Line>
                                    ))}
                                </div>
                            </Meta>
                        ) : null}

                        {project.link ? (
                            <Meta label="Live">
                                <Line className="text-white/70">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="underline-offset-4 transition-colors hover:text-[#24E27A] hover:underline"
                                    >
                                        {project.link.replace(/^https?:\/\//, "")}
                                    </a>
                                </Line>
                            </Meta>
                        ) : null}
                    </div>
                </div>
            </Cell>
        </Block>
    );
}
