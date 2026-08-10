import type { PartProps } from "../../lib/story";
import { Block, Cell, Media } from "./Bento";

export default function Collage({ block, ref }: PartProps) {
    const [wide, topRight, tall, large] = block.media;

    return (
        <Block ref={ref} cols={block.cols}>
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
