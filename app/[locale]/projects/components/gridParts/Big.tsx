import type { Ref } from "react";
import { Block, Cell, Media } from "./bento";

type BigProps = {
    src: string;
    media: string[];
    smalls?: "top" | "bottom";
    ref?: Ref<HTMLDivElement>;
};

export default function Big({ src, media, smalls = "bottom", ref }: BigProps) {
    const panel = smalls === "bottom" ? "1 / 3" : "2 / 4";
    const strip = smalls === "bottom" ? "3" : "1";

    return (
        <Block ref={ref} cols={2}>
            <Cell col="1 / -1" row={panel}>
                <Media src={src} />
            </Cell>

            {media.slice(0, 2).map((m, i) => (
                <Cell key={i} row={strip}>
                    <Media src={m} />
                </Cell>
            ))}
        </Block>
    );
}
