import SplitLines from "@/components/facile/splitLines";
import type { BlockProps } from "../../../lib/story";
import { Block, Cell, Media } from "./Bento";

const CHAPTER = "mr-6 font-medium text-[0.6em] text-[#24E27A]";

export default function Note({ block, ref }: BlockProps) {
    return (
        <Block ref={ref} cols={block.cols}>
            <Cell col="1 / -1" row="1">
                <div className="flex h-full w-full flex-col gap-[2vh] p-[5vh]">
                    <div className="overflow-hidden">
                        <h3 data-reveal className="text-[clamp(1.5rem,4.4vh,3.75rem)] font-medium">
                            {block.index ? (
                                <>
                                    <span className={`tabular-nums ${CHAPTER}`}>{String(block.index).padStart(2, "0")}</span>
                                    <span className={CHAPTER}>.</span>
                                </>
                            ) : null}
                            {block.title}
                        </h3>
                    </div>

                    {block.text ? (
                        <SplitLines text={block.text} className="max-w-[50ch] text-[clamp(0.8rem,1.9vh,1.35rem)] text-white/70" />
                    ) : null}
                </div>
            </Cell>

            <Cell col="1 / -1" row="2 / -1">
                <Media src={block.media[0]} />
            </Cell>
        </Block>
    );
}
