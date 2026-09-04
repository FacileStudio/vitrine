import SplitLines from "@/components/facile/splitLines";
import Line from "@/components/facile/textReveal";
import type { BlockProps } from "../types";
import { Block, Cell, Media } from "../bento";

const CHAPTER = "mr-6 font-medium text-[0.6em] text-[#24E27A]";

export default function Note({ block }: BlockProps) {
    return (
        <Block cols={block.cols}>
            <Cell col="1 / -1" row="1">
                <div className="flex h-full w-full flex-col gap-[2vh] p-[5vh]">
                    <h2 className="subtitle">
                        <Line>
                            {block.index ? (
                                <>
                                    <span className={`tabular-nums ${CHAPTER}`}>{String(block.index).padStart(2, "0")}</span>
                                    <span className={CHAPTER}>.</span>
                                </>
                            ) : null}
                            {block.title}
                        </Line>
                    </h2>

                    {block.text ? (
                        <SplitLines as="p" text={block.text} className="lead max-w-[45ch] text-white/70" />
                    ) : null}
                </div>
            </Cell>

            <Cell col="1 / -1" row="2 / -1">
                <Media src={block.media[0]} />
            </Cell>
        </Block>
    );
}
