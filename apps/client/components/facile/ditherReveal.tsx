'use client'

import Stripes from "@/components/facile/stripes";
import type { DitherViewProps } from "@/webgl/DitherView";
import { DitherView } from "@/webgl/lazy";
import { useAfter } from "@/hooks/use-after";

export default function DitherReveal({
    model,
    highlight,
    delay = 0,
    className = "",
    stripes = true,
    dither,
}: {
    model: string;
    highlight?: string;
    delay?: number;
    className?: string;
    stripes?: boolean;
    dither?: Partial<DitherViewProps>;
}) {
    const open = useAfter(true, delay * 1000);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <DitherView
                file={model}
                highlight={highlight}
                className="absolute inset-0 h-full w-full"
                {...dither}
            />
            {stripes ? (
                <Stripes
                    orientation={90}
                    count={5}
                    open={open}
                    duration={0.8}
                    stagger={0.08}
                    className="bg-foreground"
                />
            ) : null}
        </div>
    );
}
