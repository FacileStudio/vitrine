import clsx from "clsx";
import Line from "@/components/facile/textReveal";
import type { BlockProps } from "../types";
import { Block, Cell } from "../bento";
import AlphabetRows from "./alphabetRows";

function Panel({ label, font, fontFamily, big }: { label: string; font?: string; fontFamily?: string; big?: boolean }) {
    return (
        <div
            style={{ fontFamily }}
            className="flex min-h-0 min-w-0 flex-col justify-between gap-4 p-[3vh]"
        >
            <div className="flex flex-col gap-fc">
                <Line as="p" className="text-[clamp(0.65rem,1.4vh,0.9rem)] text-background/50">{label}</Line>
                <Line className={clsx(
                        "flex gap-x-[1.2vh] leading-none text-background/75",
                        big ? "font-semibold text-[clamp(1.75rem,5.2vh,5rem)]" : "text-[clamp(1rem,3.5vh,5rem)]"
                    )}
                >
                    {font}
                </Line>
            </div>

            <div className="flex flex-1 flex-col lg:mt-12 justify-center gap-2">
                <AlphabetRows
                    className={clsx(
                        "flex gap-x-[1.2vh] text-background/75",
                        big ? "font-semibold text-[clamp(1.1rem,3.4vh,2.75rem)]" : "text-[clamp(0.75rem,2vh,1.5rem)]"
                    )}
                />
            </div>
        </div>
    );
}

export default function TypographyPair({ block }: BlockProps) {
    return (
        <Block cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1">
                <div className="flex h-full w-full flex-col justify-between">
                    <Panel label="Title" font={block.font} fontFamily={block.fontFamily} big />
                    <Panel label="Text" font={block.secondFont} fontFamily={block.secondFontFamily} />
                </div>
            </Cell>
        </Block>
    );
}
