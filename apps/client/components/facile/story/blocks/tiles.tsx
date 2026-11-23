import Line from "@/components/facile/textReveal";
import AppMark from "@/components/facile/appMark";
import type { BlockProps, Tile } from "../types";
import { Block, Cell } from "../bento";
import FeaturedTile from "./featuredTile";
import LinkCell from "../linkCell";

// a featured tile takes two rows of the block and the small ones fill whatever row is left
function place(t: Tile, tiles: Tile[]) {
    if (t.featured)
        return { col: "1 / -1", row: tiles.length === 1 ? "1 / -1" : tiles[0] === t ? "1 / span 2" : "2 / span 2" };

    return tiles.length === 2 && tiles.some((x) => x.featured) ? { col: "1 / -1" } : {};
}

const CELL = "in-data-glass:bg-[#212121]/70 md:in-data-glass:bg-[#212121]/40 md:in-data-glass:backdrop-blur-[48px]";

export default function Tiles({ block }: BlockProps) {
    const tiles = (block.tiles ?? []).slice(0, block.cols * 3);

    return (
        <Block cols={block.cols}>
            {/* ~20 blurred cells over a live canvas exhaust iOS GPU memory and Safari reloads the tab, so phones get a flat tint */}
            {tiles.map((t: Tile) => {
                const cell = { ...place(t, tiles), className: CELL };
                const body = t.featured ? <FeaturedTile tile={t} /> : (
                    <div className="flex h-full w-full flex-col justify-between gap-[1.5vh] p-[3vh]">
                        {t.icon ? (
                            <AppMark icon={t.icon} className="text-[4vh] text-accent" fileClassName="h-[6vh] w-[6vh] object-contain" />
                        ) : null}

                        <div className="flex flex-col gap-fc">
                            <Line as="h2" className="subtitle text-current">{t.label}</Line>

                            {t.text ? (
                                <Line as="p" className="subtext text-current max-md:hidden">
                                    {t.text}
                                </Line>
                            ) : null}
                        </div>
                    </div>
                );

                // a tile with a link opens its app and answers the pointer like the method cards
                return t.link
                    ? <LinkCell key={t.label} href={t.link} tint={t.tint} {...cell}>{body}</LinkCell>
                    : <Cell key={t.label} {...cell}>{body}</Cell>;
            })}
        </Block>
    );
}
