import Line from "@/components/facile/textReveal";
import AppMark from "@/components/facile/appMark";
import type { BlockProps, Tile } from "../types";
import { Block, Cell } from "../bento";
import FeaturedTile from "./featuredTile";

// a featured tile takes two rows of the block and the small ones fill whatever row is left
function place(t: Tile, tiles: Tile[]) {
    if (t.featured)
        return { col: "1 / -1", row: tiles.length === 1 ? "1 / -1" : tiles[0] === t ? "1 / span 2" : "2 / span 2" };

    return tiles.length === 2 && tiles.some((x) => x.featured) ? { col: "1 / -1" } : {};
}

export default function Tiles({ block }: BlockProps) {
    const tiles = (block.tiles ?? []).slice(0, block.cols * 3);

    return (
        <Block cols={block.cols}>
            {tiles.map((t: Tile) => (
                <Cell key={t.label} {...place(t, tiles)} className="relative">
                    {/* its own layer so the band can fade the glass near the screen edge without fading the text */}
                    <div data-glass-layer aria-hidden className="absolute inset-0 in-data-glass:bg-[#212121]/20 in-data-glass:backdrop-blur-[48px]" />

                    {t.featured ? <FeaturedTile tile={t} /> : (
                        <div className="relative flex h-full w-full flex-col justify-between gap-[1.5vh] p-[3vh]">
                            {t.icon ? (
                                <AppMark icon={t.icon} className="text-[4vh] text-accent" fileClassName="h-[6vh] w-[6vh] object-contain" />
                            ) : null}

                            <div className="flex flex-col gap-fc">
                                <Line as="h2" className="subtitle text-current">{t.label}</Line>

                                {t.text ? (
                                    <Line as="p" className="subtext text-current">
                                        {t.text}
                                    </Line>
                                ) : null}
                            </div>
                        </div>
                    )}
                </Cell>
            ))}
        </Block>
    );
}
