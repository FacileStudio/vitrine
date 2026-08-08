import type { Ref } from "react";
import { Block, Cell } from "./bento";
import { team, type Project } from "../../lib/story";

type IntroProps = {
    project: Project;
    cols?: number;
    ref?: Ref<HTMLDivElement>;
};

function Meta({ label, values }: { label: string; values: string[] }) {
    if (!values.length)
        return null;

    return (
        <div data-reveal className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">{label}</span>
            <span className="text-sm text-white/70">{values.join(", ")}</span>
        </div>
    );
}

export default function Intro({ project, cols = 2, ref }: IntroProps) {
    return (
        <Block ref={ref} cols={cols}>
            <Cell col="1 / -1" row="1 / -1" className="bg-white/5">
                <div className="flex h-full w-full flex-col justify-between p-[calc(var(--gap)*2)]">
                    <div className="flex flex-col gap-6">
                        <span data-reveal className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                            {project.date} — {project.weeks} weeks
                        </span>
                        <h2 data-reveal className="text-5xl leading-[0.95] uppercase 3xl:text-7xl">
                            {project.name}
                        </h2>
                        <p data-reveal className="max-w-[46ch] text-sm leading-relaxed text-white/60">
                            {project.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                        <Meta label="Services" values={project.services ?? []} />
                        <Meta label="Stack" values={project.techStack ?? []} />
                        <Meta label="Team" values={team(project).map((m) => m.name)} />
                        {project.link ? (
                            <div data-reveal className="flex flex-col gap-1">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">Live</span>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm text-white/70 underline-offset-4 transition-colors hover:text-[#24E27A] hover:underline"
                                >
                                    {project.link.replace(/^https?:\/\//, "")}
                                </a>
                            </div>
                        ) : null}
                    </div>
                </div>
            </Cell>
        </Block>
    );
}
