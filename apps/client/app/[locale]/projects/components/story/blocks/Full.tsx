import type { BlockProps } from "../../../lib/story";
import { Block, Cell, Media } from "./Bento";

export default function Full({ block, ref }: BlockProps) {
    return (
        <Block ref={ref} cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1">
                <Media src={block.media[0]} />
            </Cell>
        </Block>
    );
}
