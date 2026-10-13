import { BLOCKS } from "./blocks";
import type { Block } from "./types";

export default function ChapterBlocks({ blocks, onClose }: { blocks: Block[]; onClose?: () => void }) {
    return (
        <>
            {blocks.map((b, i) => {
                const Part = BLOCKS[b.type];

                return <Part key={i} block={b} onClose={onClose} />;
            })}
        </>
    );
}
