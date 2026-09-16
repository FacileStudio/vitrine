'use client'

import type { MouseEvent, ReactNode } from "react";
import Arrow from "@/components/facile/arrow";
import TransitionLink from "@/components/facile/transitionLink";

const stop = (e: MouseEvent) => e.stopPropagation();

// Link followed by the outbound arrow; http hrefs open in a new tab, the rest go through the curtain
export default function ArrowLink({
    href,
    className,
    arrowClassName,
    isolated = false,
    children,
}: {
    href: string;
    className?: string;
    arrowClassName?: string;
    isolated?: boolean;
    children: ReactNode;
}) {
    const onClick = isolated ? stop : undefined;
    const arrow = arrowClassName ? <span className={arrowClassName}><Arrow /></span> : <Arrow />;

    if (href.startsWith("http"))
        return (
            <a href={href} target="_blank" rel="noreferrer" onClick={onClick} className={className}>
                {children}
                {arrow}
            </a>
        );

    return (
        <TransitionLink href={href} onClick={onClick} className={className}>
            {children}
            {arrow}
        </TransitionLink>
    );
}
