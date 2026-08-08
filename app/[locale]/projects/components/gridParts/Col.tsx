import type { Ref } from "react";
import { Block, Cell, Media } from "./bento";

type ColProps = {
    media: string[];
    ref?: Ref<HTMLDivElement>;
};

export default function Col({ media, ref }: ColProps) {
    return (
        <Block ref={ref} cols={1}>
            {media.slice(0, 3).map((m, i) => (
                <Cell key={i} row={String(i + 1)}>
                    <Media src={m} />
                </Cell>
            ))}
        </Block>
    );
}
