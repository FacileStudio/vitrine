import type { ReactNode } from "react";
import SplitLines from "@/components/facile/splitLines";
import Line from "@/components/facile/textReveal";
import { pad2 } from "@/lib/utils";
import type { Block as StoryBlockData, BlockProps, GridCell } from "../types";
import { Block, Cell, Media } from "../bento";
import Cover from "./cover";
import Intro from "./intro";
import End from "./end";
import Palette from "./palette";
import Typography from "./typography";
import TypographyPair from "./typographyPair";
import Tiles from "./tiles";

const CHAPTER = "mr-6 font-medium text-[0.6em] text-accent";

// imported one by one rather than through blocks/index, which imports this file
const PARTS: Partial<Record<string, (props: BlockProps) => ReactNode>> = {
    cover: Cover,
    intro: Intro,
    end: End,
    palette: Palette,
    typography: Typography,
    typographyPair: TypographyPair,
    tiles: Tiles,
};

function Content({ cell, parent }: { cell: GridCell; parent: StoryBlockData }) {
    const block = { ...cell.block, media: cell.block.media ?? [], cols: cell.w, index: parent.index, owners: parent.owners };

    if (block.type === "full")
        return <Media src={block.media[0] as string} />;

    if (block.type === "note")
        return (
            <div className="glass flex h-full w-full flex-col gap-[2vh] p-[5vh]">
                {block.title ? (
                    <h2 className="subtitle">
                        <Line>
                            {block.index ? (
                                <>
                                    <span className={`tabular-nums ${CHAPTER}`}>{pad2(block.index)}</span>
                                    <span className={CHAPTER}>.</span>
                                </>
                            ) : null}
                            {block.title}
                        </Line>
                    </h2>
                ) : null}

                {block.text ? (
                    <SplitLines as="p" text={block.text} className="lead max-w-[45ch] text-white/70" />
                ) : null}
            </div>
        );

    const Part = PARTS[block.type];

    return Part ? <Part block={block as StoryBlockData} /> : null;
}

const TALL = ["palette", "note"];

export default function Grid({ block }: BlockProps) {
    return (
        <Block cols={block.cols} tall={block.cells?.some((cell) => TALL.includes(cell.block.type))}>
            {(block.cells ?? []).map((cell, i) => (
                <Cell key={i} col={`${cell.x} / span ${cell.w}`} row={`${cell.y} / span ${cell.h}`}>
                    <Content cell={cell} parent={block} />
                </Cell>
            ))}
        </Block>
    );
}
