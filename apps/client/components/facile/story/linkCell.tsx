'use client'

import type { ReactNode } from "react";
import HoverFlood from "@/components/facile/hoverFlood";
import { useHoverCard } from "@/hooks/use-hover-card";
import { cn } from "@/lib/utils";
import { Cell } from "./bento";

export default function LinkCell({ href, tint, col, row, className, children }: {
    href: string;
    tint?: string[];
    col?: string;
    row?: string;
    className?: string;
    children: ReactNode;
}) {
    const { card, flood, handlers } = useHoverCard<HTMLDivElement>();

    return (
        <Cell ref={card} {...handlers} col={col} row={row} className={cn("relative isolate", className)}>
            <HoverFlood ref={flood} tint={tint} className="bg-[#212121]/10" />

            <a href={href} target="_blank" rel="noreferrer" className="block h-full w-full">
                {children}
            </a>
        </Cell>
    );
}
