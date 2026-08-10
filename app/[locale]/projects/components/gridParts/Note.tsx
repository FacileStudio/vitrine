import type { PartProps } from "../../lib/story";
import { Block, Cell, Media } from "./bento";

export default function Note({ block, ref }: PartProps) {
    return (
        <Block ref={ref} cols={block.cols}>
            <Cell col="1 / -1" row="1" className="">
                <div className="flex h-full w-full flex-col gap-6 p-20">
                    <h3 data-reveal className="text-5xl font-medium 3xl:text-6xl">
                        {block.index ? (
                            <span className="tabular-nums font-medium text-3xl text-[#5dd995] mr-4">{String(block.index).padStart(2, "0")}. </span>
                        ) : null}
                        {block.title}
                    </h3>
                    <p data-reveal className="max-w-[50ch] text-xl text-white/50">{block.text}</p>
                </div>
            </Cell>

            <Cell col="1 / -1" row="2 / -1">
                <Media src={block.media[0]} />
            </Cell>
        </Block>
    );
}
