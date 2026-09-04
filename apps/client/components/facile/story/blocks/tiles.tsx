import { Icon } from "@iconify/react";
import Line from "@/components/facile/textReveal";
import type { BlockProps, Tile } from "../types";
import { Block, Cell } from "../bento";

// icons are either a file we ship or an iconify name; the leading slash is the
// tell. The files we ship are drawn for paper, so they are inverted to read on
// the dark band
const Mark = ({ icon }: { icon: string }) =>
    icon.startsWith("/")
        ? <img src={icon} alt="" className="h-[4vh] w-[4vh] object-contain invert" />
        : <Icon icon={icon} className="text-[4vh] text-[#24E27A]" />;

// a media-free block for things that only have a name and a mark — the suite's
// apps, a list of services. One tile per cell, so the bento places them itself
export default function Tiles({ block }: BlockProps) {
    const tiles = (block.tiles ?? []).slice(0, block.cols * 3);

    return (
        <Block cols={block.cols}>
            {tiles.map((t: Tile) => (
                <Cell key={t.label} className="bg-[#1d1e1e]/33 backdrop-blur-2xl">
                    <div className="flex h-full w-full flex-col justify-between gap-[1.5vh] p-[3vh]">
                        {t.icon ? <Mark icon={t.icon} /> : null}

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
