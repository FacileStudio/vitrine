import type { CSSProperties, ReactNode, Ref } from "react";
import { isVideoFile } from "../../lib/story";

export const BENTO_VARS = {
    "--gap": "4px",
    "--band": "80vh",
    "--row": "calc((var(--band) - 2 * var(--gap)) / 3)",
    "--cell": "calc(var(--row) * 5 / 4)",
} as CSSProperties;

export function Bento({ children }: { children: ReactNode }) {
    return (
        <div
            style={BENTO_VARS}
            className="grid h-[var(--band)] w-max grid-flow-col grid-rows-3 gap-[var(--gap)] [grid-auto-columns:var(--cell)]"
        >
            {children}
        </div>
    );
}

type BlockProps = {
    cols: number;
    className?: string;
    children?: ReactNode;
    ref?: Ref<HTMLDivElement>;
};

export function Block({ cols, className = "", children, ref }: BlockProps) {
    return (
        <div
            ref={ref}
            style={{ gridColumn: `span ${cols}`, gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
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

export function Media({ src, className = "" }: { src: string; className?: string }) {
    const cls = `h-full w-full object-cover ${className}`;

    return isVideoFile(src)
        ? <video src={src} loop muted playsInline preload="metadata" className={cls} />
        : <img src={src} alt="" className={cls} />;
}
