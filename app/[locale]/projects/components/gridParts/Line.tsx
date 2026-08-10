import type { ReactNode } from "react";

// one crop per line of copy: the inner div is what the detail view's reveal
// observer slides up out of the overflow
export default function Line({ className = "", children }: { className?: string; children: ReactNode }) {
    return (
        <div className="overflow-hidden">
            <div data-reveal className={className}>{children}</div>
        </div>
    );
}
