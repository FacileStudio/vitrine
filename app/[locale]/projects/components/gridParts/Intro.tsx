import type { ReactNode } from "react";
import type { PartProps } from "../../lib/story";
import { team } from "../../lib/story";
import { Block, Cell } from "./bento";

function Meta({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div data-reveal className="flex flex-col gap-3">
            <span className="text-sm text-white/35">{label}</span>
            <span className="text-white/70">{children}</span>
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
                        <span data-reveal className="text-sm uppercase text-white/70">
                            {project.date}  —  {project.weeks} weeks
                        </span>
                        <h2 data-reveal className="text-6xl font-semibold 3xl:text-8xl">
                            {project.name}
                        </h2>
                        <p data-reveal className="max-w-[50ch] text-xl text-white/70">
                            {block.text ?? project.challenge ?? project.description}
                        </p>
                        {project.services?.length ? (
                                <span className="flex flex-wrap items-center gap-1">
                                    {project.services.map((s) => (
                                        <span
                                            key={s}
                                            className="rounded-md px-4 py-2 text-sm bg-white/5 text-white"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </span>
                        ) : null}
                    </div>

                    <div className="flex flex-col gap-y-12">

                        {project.techStack?.length ? (
                            <Meta label="Created with">
                                <span className="flex flex-wrap items-center gap-x-6 gap-y-3">
                                    {project.techStack.map((t) => (
                                        <span key={t} className="flex items-center gap-3">
                                            <img src={`/images/logo/${t}.png`} alt="" className="h-8 w-auto" />
                                            <span className="text-white/70">{t}</span>
                                        </span>
                                    ))}
                                </span>
                            </Meta>
                        ) : null}

                        {members.length ? (
                            <Meta label="Facile. members working">
                                <span className="flex flex-col gap-3">
                                    {members.map((m) => (
                                        <span key={m.slug} className="flex items-center gap-4">
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
                                        </span>
                                    ))}
                                </span>
                            </Meta>
                        ) : null}

                        {project.link ? (
                            <Meta label="Live">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline-offset-4 transition-colors hover:text-[#24E27A] hover:underline"
                                >
                                    {project.link.replace(/^https?:\/\//, "")}
                                </a>
                            </Meta>
                        ) : null}
                    </div>
                </div>
            </Cell>
        </Block>
    );
}
