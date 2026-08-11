import type { CSSProperties, ReactNode } from "react";

// one crop per line of copy: the inner div is what the detail view's reveal
// observer slides up out of the overflow
export default function Line({ className = "", style, children }: { className?: string; style?: CSSProperties; children: ReactNode }) {
    return (
        <div className="overflow-hidden">
            <div data-reveal style={style} className={className}>{children}</div>
        </div>
    );
}
