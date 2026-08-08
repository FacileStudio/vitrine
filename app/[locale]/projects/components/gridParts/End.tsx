import type { Ref } from "react";
import { Block, Cell } from "./bento";

type EndProps = {
    name: string;
    link?: string;
    ref?: Ref<HTMLDivElement>;
};

export default function End({ name, link, ref }: EndProps) {
    return (
        <Block ref={ref} cols={2}>
            <Cell col="1 / -1" row="1 / -1">
                <div className="flex h-full w-full flex-col justify-end gap-3 p-[calc(var(--gap)*2)]">
                    <span data-reveal className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                        End of {name}
                    </span>
                    {link ? (
                        <a
                            data-reveal
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-4xl uppercase leading-none transition-colors hover:text-[#24E27A] 3xl:text-6xl"
                        >
                            Visit site ↗
                        </a>
                    ) : null}
                </div>
            </Cell>
        </Block>
    );
}
