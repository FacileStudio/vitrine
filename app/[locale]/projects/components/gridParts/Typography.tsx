import type { PartProps } from "../../lib/story";
import { Block, Cell } from "./Bento";
import Line from "./Line";

const ROWS = ["ABCDEFGHIJKL", "MNOPQRSTUVW", "XYZ"].map((row) => row.split(""));

const NUMBERS = "0123456789";

const SPECIALS = "&@#$%€£()[]{}!?.,;:\"'/\\+−=×÷<>~^_|©®°*";

export default function Typography({ block, ref }: PartProps) {
    return (
        <Block ref={ref} cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1">
                <div
                    style={{ fontFamily: block.fontFamily }}
                    className="flex h-full w-full flex-col gap-[3vh] p-[5vh]"
                >
                    <div className="flex flex-col gap-2">
                        <Line className="text-[clamp(0.65rem,1.4vh,0.9rem)] uppercase tracking-[0.2em] text-white/50">Typography</Line>
                        <Line className="text-[clamp(1.75rem,5.2vh,5rem)] leading-none">
                            {block.font}
                        </Line>
                    </div>

                    <div className="flex flex-1 flex-col gap-3">
                        {ROWS.map((row) => (
                            <Line
                                key={row[0]}
                                className="flex gap-x-[1.6vh] text-[clamp(1.1rem,3.2vh,2.5rem)] leading-none text-white/75"
                            >
                                {row.map((l) => (
                                    <span key={l}>{l}{l.toLowerCase()}</span>
                                ))}
                            </Line>
                        ))}
                    </div>

                    <Line className="text-[clamp(1.1rem,3.2vh,2.5rem)] tracking-wide leading-none text-white/50">
                        {NUMBERS}
                    </Line>

                    <Line className="text-[clamp(0.65rem,1.4vh,0.9rem)] tracking-wide text-white/40">
                        {SPECIALS}
                    </Line>
                </div>
            </Cell>
        </Block>
    );
}
