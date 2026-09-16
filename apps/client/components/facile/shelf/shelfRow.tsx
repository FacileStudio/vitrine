'use client'

import type { KeyboardEvent, MouseEvent, ReactNode, Ref } from "react";

// A shelf row that opens on click, Enter or Space
export default function ShelfRow({
    ref,
    label,
    className,
    onOpen,
    onEnter,
    onLeave,
    children,
}: {
    ref: Ref<HTMLDivElement>;
    label: string;
    className: string;
    onOpen: () => void;
    onEnter: (e: MouseEvent<HTMLElement>) => void;
    onLeave: (e: MouseEvent<HTMLElement>) => void;
    children: ReactNode;
}) {
    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen();
        }
    };

    return (
        <div
            ref={ref}
            role="button"
            tabIndex={0}
            aria-label={label}
            onClick={onOpen}
            onKeyDown={onKeyDown}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className={className}
        >
            {children}
        </div>
    );
}
