import type { CSSProperties, ReactNode } from "react";
import { isVideoFile } from "@/lib/utils";

// --band lives in the class list, not here: an inline style would beat the
// breakpoint that gives a phone a shorter band
export const BENTO_VARS = {
    "--gap": "4px",
    "--row": "calc((var(--band) - 2 * var(--gap)) / 3)",
    "--cell": "calc(var(--row) * 5 / 4)",
} as CSSProperties;

// A phone stacks the blocks full width. Each keeps its sideways proportions:
// cols cells at 5:4 over a band three rows tall, so cols * 5 / 12
const LAYOUT = {
    band: "grid [--band:55vh] md:[--band:80vh] h-[var(--band)] w-max grid-flow-col grid-rows-3 gap-[var(--gap)] [grid-auto-columns:var(--cell)]",
    stack: "flex w-full flex-col gap-[var(--gap)] [&>[data-block]]:h-auto [&>[data-block]]:aspect-[calc(var(--cols)*5/12)]",
};

export function Bento({ children, vertical = false }: { children: ReactNode; vertical?: boolean }) {
    return (
        <div
            style={BENTO_VARS}
            className={vertical ? LAYOUT.stack : LAYOUT.band}
        >
            {children}
        </div>
    );
}

type SpanProps = {
    cols: number;
    className?: string;
    children?: ReactNode;
};

// data-block is how the track finds its blocks: no ref plumbing, and a driver
// that only wants to stagger them can query them straight off its scroller
export function Block({ cols, className = "", children }: SpanProps) {
    return (
        <div
            data-block
            style={{ gridColumn: `span ${cols}`, gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, "--cols": cols } as CSSProperties}
            className={`row-span-3 grid h-full grid-rows-3 gap-[var(--gap)] ${className}`}
        >
            {children}
        </div>
    );
}

type CellProps = {
    col?: string;
    row?: string;
    className?: string;
    children: ReactNode;
};

export function Cell({ col, row, className = "", children }: CellProps) {
    return (
        <div
            style={{ gridColumn: col, gridRow: row }}
            className={`min-h-0 min-w-0 overflow-hidden rounded-md ${className}`}
        >
            {children}
        </div>
    );
}

export function Media({ src, className = "", pop = true }: { src: string; className?: string; pop?: boolean }) {
    const cls = `h-full w-full object-cover ${className}`;

    return isVideoFile(src)
        ? <video data-pop={pop || undefined} src={src} loop muted playsInline preload="metadata" className={cls} />
        : <img data-pop={pop || undefined} src={src} alt="" loading="lazy" decoding="async" className={cls} />;
}
