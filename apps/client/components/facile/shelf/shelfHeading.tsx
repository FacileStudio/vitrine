'use client'

import type { ReactNode } from "react";
import TextReveal from "@/components/facile/textReveal";
import { ARRIVE } from "@/components/facile/pageTransition";
import { pad2 } from "@/lib/utils";
import type { ShelfTone } from "./shelf";

const COUNTER: Record<ShelfTone, { number: string; dot: string; label: string }> = {
    dark: { number: "text-accent", dot: "text-[#d0ebdc]", label: "text-white" },
    light: { number: "text-accent-ink", dot: "text-foreground/30", label: "text-foreground" },
};

export default function ShelfHeading({
    tone,
    className,
    title,
    count,
    countLabel,
    counterClassName,
    asideLabel,
    children,
}: {
    tone: ShelfTone;
    className: string;
    title: ReactNode;
    count?: number;
    countLabel?: string;
    counterClassName: string;
    asideLabel?: string;
    children?: ReactNode;
}) {
    const c = COUNTER[tone];
    const Aside = asideLabel ? "nav" : "div";

    return (
        <div className={className}>
            {title}

            {count !== undefined && (
                <Aside aria-label={asideLabel} className="w-fit shrink-0">
                    <TextReveal open delay={ARRIVE / 1000 + 0.35} as="p" className={counterClassName}>
                        <span className={c.number}>
                            {pad2(count)}
                        </span>
                        <span className={c.dot}>
                            .
                        </span>
                        <span className={c.label}>
                            {countLabel}
                        </span>
                    </TextReveal>

                    {children}
                </Aside>
            )}
        </div>
    );
}
