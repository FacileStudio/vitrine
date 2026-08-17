import type { BlockProps } from "../types";
import { Block, Cell, Media } from "../bento";

export default function Col({ block }: BlockProps) {
    return (
        <Block cols={block.cols}>
            {block.media.slice(0, 3).map((m, i) => (
                <Cell key={i} row={String(i + 1)}>
                    <Media src={m} />
                </Cell>
            ))}
        </Block>
    );
}
