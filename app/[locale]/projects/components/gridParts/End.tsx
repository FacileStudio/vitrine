import type { PartProps } from "../../lib/story";
import { Block, Cell } from "./bento";

export default function End({ block, project, ref }: PartProps) {
    return (
        <Block ref={ref} cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1">
                <div className="flex h-full w-full flex-col justify-end gap-3 p-[calc(var(--gap)*2)]">
                    <div className="overflow-hidden">
                        <span data-reveal className="block text-[10px] uppercase tracking-[0.2em] text-white/35">
                            {block.text ?? `End of ${project.name}`}
                        </span>
                    </div>

                    {project.link ? (
                        <div className="overflow-hidden">
                            <a
                                data-reveal
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="block text-4xl uppercase leading-none transition-colors hover:text-[#24E27A] 3xl:text-6xl"
                            >
                                {block.title ?? "Visit site ↗"}
                            </a>
                        </div>
                    ) : null}
                </div>
            </Cell>
        </Block>
    );
}
