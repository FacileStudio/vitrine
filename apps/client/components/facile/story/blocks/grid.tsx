import type { ReactNode } from "react";
import type { Block as StoryBlockData, BlockProps, GridCell } from "../types";
import { Block, Cell, Media } from "../bento";
import Cover from "./cover";
import Intro from "./intro";
import End from "./end";
import Palette from "./palette";
import Typography from "./typography";
import TypographyPair from "./typographyPair";
import Tiles from "./tiles";
import NoteBody from "./noteBody";

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
        return <NoteBody block={block as StoryBlockData} />;

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
