import type { BlockProps } from "../../../lib/story";
import { Block, Cell } from "./Bento";
import Line from "./Line";

export default function End({ block, project, onClose, ref }: BlockProps) {
    return (
        <Block ref={ref} cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1">
                <div className="flex h-full w-full flex-col justify-between gap-[2.5vh] p-[5vh]">
                    {onClose ? (
                        <Line>
                            <button
                                type="button"
                                onClick={onClose}
                                className="group flex items-center gap-[1vh] text-[clamp(0.8rem,1.9vh,1.35rem)] text-white/50 transition-colors duration-200 hover:text-white"
                            >
                                <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                                Back to projects
                            </button>
                        </Line>
                    ) : null}

                    <div className="flex flex-col gap-[2.5vh]">
                        <Line className="text-[clamp(0.65rem,1.4vh,0.9rem)] uppercase text-white/35">
                            {block.text ?? `End of ${project.name}`}
                        </Line>

                        <Line className="text-[clamp(1.75rem,5.2vh,5rem)] font-medium leading-[0.95]">
                            {block.title ?? "Thanks for scrolling."}
                        </Line>

                        {project.link ? (
                            <Line>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex w-fit items-center gap-[1vh] text-[clamp(0.8rem,1.9vh,1.35rem)] text-white transition-colors duration-200 hover:text-[#24E27A]"
                                >
                                    Visit site
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
