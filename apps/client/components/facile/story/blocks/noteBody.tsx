import SplitLines from "@/components/facile/splitLines";
import Line from "@/components/facile/textReveal";
import { pad2 } from "@/lib/utils";
import type { Block } from "../types";

const CHAPTER = "mr-6 font-medium text-[0.6em] text-accent";

export default function NoteBody({ block }: { block: Block }) {
    return (
        <div className="flex h-full w-full flex-col gap-[2vh] p-[5vh]">
            {block.title ? (
                <h2 className="subtitle">
                    <Line>
                        {block.index ? (
                            <>
                                <span className={`tabular-nums ${CHAPTER}`}>{pad2(block.index)}</span>
                                <span className={CHAPTER}>.</span>
                            </>
                        ) : null}
                        {block.title}
                    </Line>
                </h2>
            ) : null}

            {block.text ? (
                <SplitLines as="p" text={block.text} className="lead max-w-[45ch] text-background/70" />
            ) : null}
        </div>
    );
}
