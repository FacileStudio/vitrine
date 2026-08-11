import type { BlockProps } from "../../../lib/story";
import { Block, Cell, Media } from "./Bento";

export default function Big({ block, ref }: BlockProps) {
    const [hero, ...smalls] = block.media;
    const panel = block.smalls === "top" ? "2 / 4" : "1 / 3";
    const strip = block.smalls === "top" ? "1" : "3";

    return (
        <Block ref={ref} cols={block.cols}>
            <Cell col="1 / -1" row={panel}>
                <Media src={hero} />
            </Cell>

            {smalls.slice(0, 2).map((m, i) => (
                <Cell key={i} row={strip}>
                    <Media src={m} />
                </Cell>
            ))}
        </Block>
    );
}
