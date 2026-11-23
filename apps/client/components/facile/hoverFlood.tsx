import type { CSSProperties, Ref } from "react";
import { HIDDEN } from "@/hooks/use-hover-card";
import { cn } from "@/lib/utils";

// how much of each tint colour reaches the glow
const TINT_STRENGTH = "35%";

// one tint glows in from the top-left corner and the other from the bottom-right, over the soft white glow every card has
const GLOW = "shadow-[inset_3rem_3rem_6rem_-3rem_var(--glow-a,transparent),inset_-3rem_-3rem_6rem_-3rem_var(--glow-b,transparent),inset_0_0_5rem_rgb(255_255_255/0.15)]";

const tinted = ([a, b = a]: string[]) => ({
    "--glow-a": `color-mix(in srgb, ${a} ${TINT_STRENGTH}, transparent)`,
    "--glow-b": `color-mix(in srgb, ${b} ${TINT_STRENGTH}, transparent)`,
}) as CSSProperties;

// the glow lives on the flood: a card's own inset shadow paints under its children, so the colour would cover it
export default function HoverFlood({ ref, tint, className }: { ref: Ref<HTMLDivElement>; tint?: string[]; className: string }) {
    return (
        <div
            ref={ref}
            style={{ clipPath: HIDDEN, ...(tint ? tinted(tint) : undefined) }}
            className={cn("pointer-events-none absolute inset-0 -z-10 rounded-[inherit]", GLOW, className)}
            aria-hidden="true"
        />
    );
}
