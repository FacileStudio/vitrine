import Line from "@/components/facile/textReveal";
import AppMark from "@/components/facile/appMark";
import type { BlockProps, Tile } from "../types";
import { Block, Cell } from "../bento";

export default function Tiles({ block }: BlockProps) {
    const tiles = (block.tiles ?? []).slice(0, block.cols * 3);

    return (
        <Block cols={block.cols}>
            {tiles.map((t: Tile) => (
                <Cell key={t.label} className="bg-foreground/10 backdrop-blur-2xl">
                    <div className="flex h-full w-full flex-col justify-between gap-[1.5vh] p-[3vh]">
                        {t.icon ? (
                            <AppMark icon={t.icon} className="text-[4vh] text-accent" fileClassName="h-[6vh] w-[6vh] object-contain" />
                        ) : null}

                        <div className="flex flex-col gap-1">
                            <Line as="h2" className="subtitle text-current">{t.label}</Line>

                            {t.text ? (
                                <Line as="p" className="subtext text-current">
                                    {t.text}
                                </Line>
                            ) : null}
                        </div>
                    </div>
                </Cell>
            ))}
        </Block>
    );
}
