'use client'

import type { ReactNode, Ref } from "react";
import DitherBackdrop from "@/components/facile/ditherBackdrop";

export type ShelfTone = "dark" | "light";

const GROUND: Record<ShelfTone, string> = {
    dark: "absolute inset-0 bg-foreground -z-10",
    light: "absolute inset-0 bg-background -z-10",
};

// Shelf section: ground, dithered backdrop and the centred column of rows
export default function Shelf({
    ref,
    id,
    tone,
    stickyBackdrop = false,
    columnClassName,
    after,
    children,
}: {
    ref?: Ref<HTMLElement>;
    id: string;
    tone: ShelfTone;
    stickyBackdrop?: boolean;
    columnClassName: string;
    after?: ReactNode;
    children: ReactNode;
}) {
    return (
        <section ref={ref} id={id} className="w-full relative h-full">
            <div className={GROUND[tone]} aria-hidden="true" />

            <DitherBackdrop variant={tone} sticky={stickyBackdrop} />

            <div className={columnClassName}>
                {children}
            </div>

            {after}
        </section>
    );
}
