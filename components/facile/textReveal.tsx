import type { CSSProperties, ReactNode } from "react";

// one crop per line of copy: the inner div is tagged `[data-reveal]` and pre-hidden
// under the crop, so the nearest reveal observer (shelf, story, homeSections) slides
// it up when its section arrives. No motion of its own — the markup is the contract
export default function TextReveal({ className = "", style, children }: { className?: string; style?: CSSProperties; children: ReactNode }) {
    return (
        <div className="overflow-hidden">
            <div data-reveal style={style} className={className}>{children}</div>
        </div>
    );
}
