import type { PartProps } from "../../lib/story";
import { Block, Cell, Media } from "./Bento";

export default function Col({ block, ref }: PartProps) {
    return (
        <Block ref={ref} cols={block.cols}>
            {block.media.slice(0, 3).map((m, i) => (
                <Cell key={i} row={String(i + 1)}>
                    <Media src={m} />
                </Cell>
            ))}
        </Block>
    );
}
