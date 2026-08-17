import type { BlockProps } from "../types";
import { Block, Cell, Media } from "../bento";

export default function Full({ block }: BlockProps) {
    return (
        <Block cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1">
                <Media src={block.media[0]} />
            </Cell>
        </Block>
    );
}
