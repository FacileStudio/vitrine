import Line from "@/components/facile/textReveal";
import SplitLines from "@/components/facile/splitLines";
import AppMark from "@/components/facile/appMark";
import ChipIcon from "@/components/facile/chipIcon";
import type { Tile } from "../types";

// public/icons/blur holds each logo with its white strokes at half opacity, so they do not wash the blur out
const glow = (icon: string) => icon.replace("/icons/", "/icons/blur/");

export default function FeaturedTile({ tile }: { tile: Tile }) {
    return (
        <div className="relative flex h-full w-full flex-col justify-between gap-[3vh] p-[5vh]">
            {/* the logo blown up and blurred tints each tile with its own app's colours */}
            {tile.icon ? (
                <div aria-hidden className="pointer-events-none absolute -right-[30%] -bottom-[25%] opacity-30 blur-[100px]">
                    <AppMark icon={glow(tile.icon)} className="text-[45vh] text-accent" fileClassName="h-[60vh] w-[60vh]" />
                </div>
            ) : null}

            <div className="relative flex items-start justify-between gap-fc">
                {tile.icon ? (
                    <div className="relative">
                        <div aria-hidden className="absolute inset-0 opacity-10 ">
                            <AppMark icon={tile.icon} className="text-[10vh] text-accent" fileClassName="h-[10vh] w-[10vh] object-contain" />
                        </div>
                        <AppMark icon={tile.icon} className="relative text-[10vh] text-accent" fileClassName="relative h-[10vh] w-[10vh] object-contain" />
                    </div>
                ) : null}

                {tile.link ? (
                    <Line>
                        <a href={tile.link} target="_blank" rel="noreferrer" className="button button-dark tagText flex items-center gap-2 font-medium">
                            {new URL(tile.link).host}
                            <ChipIcon icon="iconoir:arrow-up-right" />
                        </a>
                    </Line>
                ) : null}
            </div>

            <div className="relative flex flex-col gap-[2vh]">
                <Line as="h2" className="text-current">{tile.label}</Line>

                {tile.text ? (
                    <Line as="p" className="lead text-current">{tile.text}</Line>
                ) : null}

                {tile.description ? (
                    <SplitLines as="p" text={tile.description} className="max-w-[50ch] text-current opacity-70" />
                ) : null}
            </div>
        </div>
    );
}
