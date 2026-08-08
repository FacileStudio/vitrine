import type { Ref } from "react";
import { Block, Cell } from "./bento";

type LabelProps = {
    text: string;
    index: number;
    ref?: Ref<HTMLDivElement>;
};

export default function Label({ text, index, ref }: LabelProps) {
    return (
        <Block ref={ref} cols={1}>
            <Cell col="1 / -1" row="1 / -1">
                <div className="flex h-full w-full items-end justify-center p-[var(--gap)]">
                    <span data-reveal className="flex items-center gap-4 whitespace-nowrap text-sm uppercase tracking-[0.3em] text-white/50 [writing-mode:vertical-rl] rotate-180">
                        <span className="tabular-nums text-[#24E27A]">{String(index).padStart(2, "0")}</span>
                        {text}
                    </span>
                </div>
            </Cell>
        </Block>
    );
}
