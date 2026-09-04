'use client'

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Stripes from "@/components/facile/stripes";
import type { DitherViewProps } from "@/webgl/DitherView";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

export default function DitherReveal({
    model,
    highlight = "#24E27A",
    orientation = 90,
    count = 5,
    delay = 0,
    duration = 0.8,
    stagger = 0.08,
    coverClassName = "bg-foreground",
    className = "",
    stripes = true,
    dither,
    children,
}: {
    model: string;
    highlight?: string;
    orientation?: number;
    count?: number;
    delay?: number;
    duration?: number;
    stagger?: number;
    coverClassName?: string;
    className?: string;
    stripes?: boolean;
    dither?: Partial<DitherViewProps>;
    children?: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setOpen(true), delay * 1000);
        return () => clearTimeout(t);
    }, [delay]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <DitherView
                file={model}
                highlight={highlight}
                background={null}
                grayscaleOnly={false}
                intensity={1.8}
                className="absolute inset-0 h-full w-full"
                {...dither}
            />
            {stripes ? (
                <Stripes
                    orientation={orientation}
                    count={count}
                    open={open}
                    duration={duration}
                    stagger={stagger}
                    className={coverClassName}
                />
            ) : null}
            {children}
        </div>
    );
}
