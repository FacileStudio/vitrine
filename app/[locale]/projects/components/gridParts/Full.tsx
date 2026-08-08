import type { Ref } from "react";
import { Block, Cell, Media } from "./bento";

type FullProps = {
    src: string;
    cols?: number;
    ref?: Ref<HTMLDivElement>;
};

export default function Full({ src, cols = 2, ref }: FullProps) {
    return (
        <Block ref={ref} cols={cols}>
            <Cell col="1 / -1" row="1 / -1">
                <Media src={src} />
            </Cell>
        </Block>
    );
}
