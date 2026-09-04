import type { BlockProps } from "../types";
import { Block, Cell, Media } from "../bento";

export default function Collage({ block }: BlockProps) {
    const [wide, topRight, tall, large] = block.media;

    return (
        <Block cols={block.cols}>
            <Cell col="1 / 3" row="1">
                <Media src={wide} />
            </Cell>

            <Cell col="3" row="1">
                <Media src={topRight} />
            </Cell>

            <Cell col="1" row="2 / 4">
                <Media src={tall} />
            </Cell>

            <Cell col="2 / 4" row="2 / 4">
                <Media src={large} />
            </Cell>
        </Block>
    );
}
