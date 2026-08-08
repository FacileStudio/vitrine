import type { Ref } from "react";
import { Block, Cell, Media } from "./bento";

type CoverProps = {
    src: string;
    cols?: number;
    imgRef?: Ref<HTMLDivElement>;
    ref?: Ref<HTMLDivElement>;
};

export default function Cover({ src, cols = 3, imgRef, ref }: CoverProps) {
    return (
        <Block ref={ref} cols={cols}>
            <Cell col="1 / -1" row="1 / -1">
                <div ref={imgRef} className="h-full w-full">
                    <Media src={src} />
                </div>
            </Cell>
        </Block>
    );
}
