import Line from "@/components/facile/textReveal";
import Arrow from "@/components/facile/arrow";
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
                                className="group flex items-center gap-[1vh] text-[clamp(0.8rem,1.9vh,1.35rem)] text-current opacity-50 transition-opacity duration-200 hover:opacity-100"
                            >
                                <span className="transition-transform duration-200 font-goga tracking-tight group-hover:-translate-x-1">←</span>
                                Back
                            </button>
                        </Line>
                    ) : null}

                    <div className="flex flex-col gap-[2.5vh]">
                        {block.eyebrow ? (
                            <Line as="p" className="subtext text-current">
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
                                    className="group flex w-fit items-center font-goga gap-[1vh] text-[clamp(0.8rem,1.9vh,1.35rem)] text-current transition-colors duration-200 hover:text-accent-ink"
                                >
                                    {block.linkLabel ?? "Visit site"}
                                    <Arrow />
                                </a>
                            </Line>
                        ) : null}
                    </div>
                </div>
            </Cell>
        </Block>
    );
}
