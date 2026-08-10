import type { PartProps } from "../../lib/story";
import { Block, Cell } from "./bento";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const NUMBERS = "0123456789";

const SPECIALS = "&@#$%€£()[]{}!?.,;:\"'/\\+−=×÷<>~^_|©®°*";

export default function Typography({ block, ref }: PartProps) {
    return (
        <Block ref={ref} cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1">
                <div
                    style={{ fontFamily: block.fontFamily }}
                    className="flex h-full w-full flex-col gap-16 p-20"
                >
                    <div className="flex flex-col gap-2">
                        <span className="text-md text-white/50">Typography</span>
                        <span className="text-7xl leading-none 3xl:text-8xl">
                            {block.font}
                        </span>
                    </div>


                    <div className="flex flex-1 flex-wrap content-start gap-x-6 gap-y-3 text-4xl leading-none text-white/75 3xl:text-5xl">
                        {LETTERS.map((l) => (
                            <span key={l}>{l}{l.toLowerCase()}</span>
                        ))}
                    </div>
                        <span className="text-4xl 3xl:text-5xl tracking-wide leading-none text-white/50 ">
                            {NUMBERS}
                        </span>

                    <div className="flex flex-col gap-4">

                        <span className="text-lg tracking-wide text-white/40 3xl:text-lg">
                            {SPECIALS}
                        </span>
                    </div>
                </div>
            </Cell>
        </Block>
    );
}
