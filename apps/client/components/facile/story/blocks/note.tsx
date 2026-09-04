import SplitLines from "@/components/facile/splitLines";
import Line from "@/components/facile/textReveal";
import type { BlockProps } from "../types";
import PersonHead from "../head";
import { Block, Cell, Media } from "../bento";

const CHAPTER = "mr-6 font-medium text-[0.6em] text-[#24E27A]";

export default function Note({ block }: BlockProps) {
    return (
        <Block cols={block.cols}>
            <Cell col="1 / -1" row="1">
                <div className="flex h-full w-full flex-col gap-[2vh] p-[5vh]">
                    <h3 className="text-[clamp(1.5rem,4.4vh,3.75rem)] tracking-tight font-medium">
                        <Line>
                            {block.index ? (
                                <>
                                    <span className={`tabular-nums ${CHAPTER}`}>{String(block.index).padStart(2, "0")}</span>
                                    <span className={CHAPTER}>.</span>
                                </>
                            ) : null}

                            {/* who owned the chapter, sized to the heading — the
                                credit reads as part of the title rather than as a
                                line of copy saying who did the rebrand */}
                            {block.owners.map((p) => (
                                <PersonHead
                                    key={p.name}
                                    person={p}
                                    gridSize={1.2}
                                    className="mr-4 inline-block h-[1.4em] w-[1.4em] align-middle"
                                />
                            ))}

                            {block.title}
                        </Line>
                    </h3>

                    {block.text ? (
                        <SplitLines text={block.text} className="max-w-[45ch] font-goga tracking-tight text-[clamp(0.8rem,1.9vh,1.5rem)] text-white/70" />
                    ) : null}
                </div>
            </Cell>

            <Cell col="1 / -1" row="2 / -1">
                <Media src={block.media[0]} />
            </Cell>
        </Block>
    );
}
