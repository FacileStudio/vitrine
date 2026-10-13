import type { BlockProps } from "../types";
import { Block, Cell, Media } from "../bento";
import NoteBody from "./noteBody";

export default function Note({ block }: BlockProps) {
    return (
        <Block cols={block.cols} tall>
            <Cell col="1 / -1" row="1">
                <NoteBody block={block} />
            </Cell>

            <Cell col="1 / -1" row="2 / -1">
                <Media src={block.media[0]} />
            </Cell>
        </Block>
    );
}
