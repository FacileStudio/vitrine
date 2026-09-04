import Line from "@/components/facile/textReveal";
import type { BlockProps } from "../types";
import { Block, Cell } from "../bento";

export default function End({ block, onClose }: BlockProps) {
    return (
        <Block cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1">
                <div className="flex h-full w-full flex-col justify-between gap-[2.5vh] p-[5vh]">
                    {onClose ? (
                        <Line>
                            <button
                                type="button"
                                onClick={onClose}
                                className="group flex items-center gap-[1vh] text-[clamp(0.8rem,1.9vh,1.35rem)] text-white/50 transition-colors duration-200 hover:text-white"
                            >
                                <span className="transition-transform duration-200 font-goga tracking-tight group-hover:-translate-x-1">←</span>
                                Back
                            </button>
                        </Line>
                    ) : null}

                    <div className="flex flex-col gap-[2.5vh]">
                        {block.eyebrow ? (
                            <Line as="p" className="subtext text-white">
                                {block.eyebrow}
                            </Line>
                        ) : null}

                        <Line as="h2">
                            {block.title ?? "Thanks for scrolling."}
                        </Line>

                        {block.link ? (
                            <Line>
                                <a
                                    href={block.link}
                                    target={block.link.startsWith("http") ? "_blank" : undefined}
                                    rel="noreferrer"
                                    className="group flex w-fit items-center font-goga gap-[1vh] text-[clamp(0.8rem,1.9vh,1.35rem)] text-white transition-colors duration-200 hover:text-[#24E27A]"
                                >
                                    {block.linkLabel ?? "Visit site"}
                                    <span className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                                </a>
                            </Line>
                        ) : null}
                    </div>
                </div>
            </Cell>
        </Block>
    );
}
