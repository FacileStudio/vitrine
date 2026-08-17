import clsx from "clsx";
import Line from "@/components/facile/textReveal";
import type { BlockProps } from "../types";
import { Block, Cell } from "../bento";

const ROWS = ["ABCDEFGHIJKL", "MNOPQRSTUVW", "XYZ"].map((row) => row.split(""));

function Panel({ label, font, fontFamily, description, big }: { label: string; font?: string; fontFamily?: string; description?: string; big?: boolean }) {
    return (
        <div
            style={{ fontFamily }}
            className="flex min-h-0 min-w-0 flex-col justify-between gap-[1.5vh] p-[3vh]"
        >
            <div className="flex flex-col gap-1">
                <Line style={{ fontFamily: "var(--font-bb-mono)" }} className="uppercase text-[clamp(0.65rem,1.4vh,0.9rem)] text-white/50">{label}</Line>
                <Line className={clsx(
                        "flex gap-x-[1.2vh] leading-none text-white/75",
                        big ? "font-semibold text-[clamp(1.75rem,5.2vh,5rem)]" : "text-[clamp(1rem,3.5vh,5rem)]"
                    )}
                >
                    {font}
                </Line>
            </div>

            {description && (
                <Line style={{ fontFamily: "var(--font-goga)" }} className="max-w-[60ch] text-[clamp(1rem,1.6vh,1.2rem)] leading-relaxed text-white/50">
                    {description}
                </Line>
            )}

            <div className="flex flex-1 flex-col mt-12 justify-center gap-2">
                {ROWS.map((row) => (
                    <Line
                        key={row[0]}
                        className={clsx(
                            "flex gap-x-[1.2vh] leading-none text-white/75",
                            big ? "font-semibold text-[clamp(1.1rem,3.4vh,2.75rem)]" : "text-[clamp(0.75rem,2vh,1.5rem)]"
                        )}
                    >
                        {row.map((l) => (
                            <span key={l}>{l}{l.toLowerCase()}</span>
                        ))}
                    </Line>
                ))}
            </div>
        </div>
    );
}

export default function TypographyPair({ block }: BlockProps) {
    return (
        <Block cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1">
                <div className="flex h-full w-full flex-col justify-between">
                    <Panel label="Title" font={block.font} fontFamily={block.fontFamily} description={block.description} big />
                    <Panel label="Text" font={block.secondFont} fontFamily={block.secondFontFamily} description={block.secondDescription} />
                </div>
            </Cell>
        </Block>
    );
}
