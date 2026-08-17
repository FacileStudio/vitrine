import type { ReactNode } from "react";
import SplitLines from "@/components/facile/splitLines";
import Line from "@/components/facile/textReveal";
import type { BlockProps } from "../types";
import { Block, Cell } from "../bento";

// the label gets its own crop; the value brings as many as it wants, so a list
// can rise a row at a time instead of as one slab
function Meta({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div className="flex flex-col gap-3">
            <Line className="font-bb-mono uppercase text-[clamp(0.65rem,1.4vh,0.9rem)] text-white/35">{label}</Line>
            {children}
        </div>
    );
}

// the opening card: who made the thing, when, with what. Every part is optional,
// so an app with nothing but a name and a tagline reads as well as a project
// with a full crew behind it
export default function Intro({ block }: BlockProps) {
    return (
        <Block cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1">
                <div className="flex h-full w-full flex-col justify-between gap-[3vh] p-[5vh]">
                    <div className="flex flex-col gap-6">
                        {block.eyebrow ? (
                            <Line className="font-bb-mono text-[clamp(0.65rem,1.4vh,0.9rem)] uppercase text-white/70">
                                {block.eyebrow}
                            </Line>
                        ) : null}

                        <Line className="text-[clamp(1.75rem,5.2vh,5rem)] font-medium leading-[1.05]">
                            {block.title}
                        </Line>

                        {block.text ? (
                            <SplitLines
                                text={block.text}
                                className="max-w-[50ch] text-[clamp(0.8rem,1.9vh,1.35rem)] text-white/70"
                            />
                        ) : null}

                        {block.tags?.length ? (
                            <Line className="flex flex-wrap items-center gap-1">
                                {block.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-md px-[2vh] py-[1vh] font-bb-mono uppercase text-[clamp(0.65rem,1.4vh,0.9rem)] bg-[#212121] text-white"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </Line>
                        ) : null}
                    </div>

                    <div className="flex flex-col gap-y-12">
                        {block.logos?.length ? (
                            <Meta label="Created with">
                                <Line className="flex flex-wrap items-center gap-x-[2vh] gap-y-[1vh]">
                                    {block.logos.map((t) => (
                                        <img key={t} src={`/images/logo/${t}.png`} alt={t} className="h-[2.6vh] max-h-8 w-auto" />
                                    ))}
                                </Line>
                            </Meta>
                        ) : null}

                        {block.people?.length ? (
                            <Meta label="Facile. members working">
                                <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                                    {block.people.map((m) => (
                                        <Line key={m.name} className="flex items-center gap-4">
                                            <img
                                                src={m.avatar}
                                                alt={m.name}
                                                style={{ borderColor: m.highlight }}
                                                className="h-[3.2vh] w-[3.2vh] max-h-9 max-w-9 shrink-0 rounded-full border-2 object-cover"
                                            />
                                            <span className="flex items-center gap-3 leading-tight">
                                                <span className="text-white text-[clamp(0.8rem,1.9vh,1.35rem)] font-medium">{m.name}</span>
                                                <span className="font-bb-mono uppercase text-[clamp(0.65rem,1.4vh,0.9rem)] mt-0.5 text-white/40">{m.role}</span>
                                            </span>
                                        </Line>
                                    ))}
                                </div>
                            </Meta>
                        ) : null}

                        {block.link ? (
                            <Meta label="Live">
                                <Line>
                                    <a
                                        href={block.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex w-fit items-center gap-[1vh] text-[clamp(0.8rem,1.9vh,1.35rem)] text-white transition-colors duration-200 hover:text-[#24E27A]"
                                    >
                                        {block.linkLabel ?? "Visit site"}
                                        <span className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
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
