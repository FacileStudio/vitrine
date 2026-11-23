import type { CSSProperties, HTMLAttributes, ReactNode, Ref } from "react";
import { isVideoFile } from "@/lib/utils";

// --band and --cell stay in the class list: an inline style would beat the phone breakpoint
const BENTO_VARS = {
    "--gap": "var(--fc-gap)",
    "--row": "calc((var(--band) - 2 * var(--gap)) / 3)",
} as CSSProperties;

// on phones a cell is half the screen inside the track gutters, (screen - 3rem - gap) / 2, and the band is that width * 13/10 plus 2 gaps
const LAYOUT = {
    band: "grid [--band:calc((100vw_-_3rem_-_var(--gap))_*_13_/_10_+_2_*_var(--gap))] [--cell:calc((100vw_-_3rem_-_var(--gap))_/_2)] md:[--band:80vh] md:[--cell:calc(var(--row)_*_5_/_4)] h-[var(--band)] w-max grid-flow-col grid-rows-3 gap-[var(--gap)] [grid-auto-columns:var(--cell)]",
    stack: "flex w-full flex-col gap-[var(--gap)] [&>[data-block]]:h-auto [&>[data-block]]:aspect-[calc(var(--cols)*5/12)] [&>[data-block][data-tall]]:aspect-[calc(var(--cols)*5/16)]",
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
    tall?: boolean;
    className?: string;
    children?: ReactNode;
};

export function Block({ cols, tall = false, className = "", children }: SpanProps) {
    return (
        <div
            data-block
            data-tall={tall || undefined}
            style={{ gridColumn: `span ${cols}`, gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, "--cols": cols } as CSSProperties}
            className={`row-span-3 grid h-full grid-rows-3 gap-[var(--gap)] ${className}`}
        >
            {children}
        </div>
    );
}

type CellProps = Omit<HTMLAttributes<HTMLDivElement>, "style"> & {
    ref?: Ref<HTMLDivElement>;
    col?: string;
    row?: string;
    className?: string;
    children: ReactNode;
};

export function Cell({ col, row, className = "", children, ...rest }: CellProps) {
    return (
        <div
            {...rest}
            style={{ gridColumn: col, gridRow: row }}
            className={`min-h-0 min-w-0 overflow-hidden rounded-fc ${className}`}
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
