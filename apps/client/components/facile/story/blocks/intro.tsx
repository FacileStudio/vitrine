import type { ReactNode } from "react";
import SplitLines from "@/components/facile/splitLines";
import Line from "@/components/facile/textReveal";
import type { BlockProps } from "../types";
import PersonHead from "../head";
import { Block, Cell } from "../bento";

// the label gets its own crop; the value brings as many as it wants, so a list
// can rise a row at a time instead of as one slab
function Meta({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div className="flex flex-col gap-3">
            <Line as="p" className="subtext text-current">{label}</Line>
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
                            <Line as="p" className="text-[clamp(0.65rem,1.4vh,0.9rem)] text-current opacity-70">
                                {block.eyebrow}
                            </Line>
                        ) : null}

                        <Line as="h2" className="capitalize">
                            {block.title}
                        </Line>

                        {block.text ? (
                            <SplitLines
                                as="p"
                                text={block.text}
                                className="lead max-w-[60ch] text-current opacity-70"
                            />
                        ) : null}

                        {block.tags?.length ? (
                            <Line className="flex flex-wrap items-center gap-1">
                                {block.tags.map((t) => (
                                    <p
                                        key={t}
                                        className="rounded-md px-[2vh] py-[1vh] text-[clamp(0.65rem,1.4vh,0.9rem)] bg-[#212121] text-white"
                                    >
                                        {t}
                                    </p>
                                ))}
                            </Line>
                        ) : null}
                        {block.logos?.length ? (
                            <Meta label="Created with">
                                <Line className="flex flex-wrap items-center gap-x-[2vh] gap-y-[1vh]">
                                    {block.logos.map((t) => (
                                        <img key={t} src={`/images/logo/${t}.png`} alt={t} className="h-[2.6vh] max-h-8 w-auto" />
                                    ))}
                                </Line>
                            </Meta>
                        ) : null}
                    </div>

                    <div className="flex flex-col gap-y-12">

                        {block.people?.length ? (
                            <Meta label="Involved">
                                <div className="flex">
                                    {block.people.map((m) => (
                                        <Line key={m.name} className="flex items-center gap-6">
                                            <PersonHead person={m} className="h-[12vh] w-[12vh] mt-4 max-h-64 max-w-64" gridSize={0.43} scaleMultiplier={2.5} />
                                        </Line>
                                    ))}
                                </div>
                            </Meta>
                        ) : null}
                    </div>
                </div>
            </Cell>
        </Block>
    );
}
