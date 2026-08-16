import SplitLines from "@/components/facile/splitLines";
import type { PartProps } from "../../lib/story";
import { Block, Cell, Media } from "./bento";

export default function Note({ block, ref }: PartProps) {
    return (
        <Block ref={ref} cols={block.cols}>
            <Cell col="1 / -1" row="1" className="">
                <div className="flex h-full w-full flex-col gap-[2vh] p-[5vh]">
                    <div className="overflow-hidden">
                        <h3 data-reveal className="text-[clamp(1.5rem,4.4vh,3.75rem)] font-medium leading-[1.05]">
                            {block.index ? (
                                <>
                                    <span className="tabular-nums font-medium text-[0.6em] text-[#24E27A] mr-6">{String(block.index).padStart(2, "0")}</span>
                                    <span className="mr-6 font-medium text-[0.6em] text-[#a4e5c1]">.</span>
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
