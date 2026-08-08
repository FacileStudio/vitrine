import type { Ref } from "react";
import { Block, Cell, Media } from "./bento";

type NoteProps = {
    title: string;
    text: string;
    media: string[];
    ref?: Ref<HTMLDivElement>;
};

export default function Note({ title, text, media, ref }: NoteProps) {
    return (
        <Block ref={ref} cols={2}>
            <Cell col="1 / -1" row="1 / 3" className="bg-white/5">
                <div className="flex h-full w-full flex-col justify-between p-[var(--gap)]">
                    <h3 data-reveal className="text-2xl uppercase leading-none 3xl:text-4xl">{title}</h3>
                    <p data-reveal className="max-w-[42ch] text-sm leading-relaxed text-white/55">{text}</p>
                </div>
            </Cell>

            {media.slice(0, 2).map((m, i) => (
                <Cell key={i} row="3">
                    <Media src={m} />
                </Cell>
            ))}
        </Block>
    );
}
