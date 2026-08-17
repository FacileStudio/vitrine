'use client'

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Stripes from "@/components/facile/stripes";
import type { DitherViewProps } from "@/webgl/DitherView";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

// A DitherView that reveals itself once mounted by sliding a set of Stripes covers
// away. Shared by the Studio section grid and the Process page so the
// "3D object appears from behind the stripes" effect lives in one place.
export default function DitherReveal({
    model,
    highlight = "#24E27A",
    orientation = 90,
    count = 5,
    delay = 0,
    duration = 0.8,
    stagger = 0.08,
    coverClassName = "bg-background",
    className = "",
    dither,
    children,
}: {
    model: string;
    highlight?: string;
    orientation?: number;
    count?: number;
    delay?: number;        // seconds before this instance starts revealing (per-section stagger)
    duration?: number;
    stagger?: number;
    coverClassName?: string;
    className?: string;
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
            <Stripes
                orientation={orientation}
                count={count}
                open={open}
                duration={duration}
                stagger={stagger}
                className={coverClassName}
            />
            {children}
        </div>
    );
}
