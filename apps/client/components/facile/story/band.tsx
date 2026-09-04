'use client'

import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { usePinProgress } from "@/hooks/use-pin-progress";
import Backdrop from "./backdrop";
import Track from "./track";
import type { Chapter } from "./types";

interface BandProps {
    sections: Chapter[];
    id?: string;
}

// the same story, read on the page instead of over it: the section is exactly as
// tall as the track is wide, so a pixel of vertical scroll moves the band a pixel
// sideways. No nested scroller, and nothing to re-tune when a chapter is added
export default function Band({ sections, id }: BandProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const viewRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const [travel, setTravel] = useState(0);

    useLayoutEffect(() => {
        const measure = () => setTravel(Math.max(0, (trackRef.current?.scrollWidth ?? 0) - window.innerWidth));

        measure();
        window.addEventListener("resize", measure);

        return () => window.removeEventListener("resize", measure);
    }, [sections]);

    usePinProgress(sectionRef, (progress, visible) => {
        if (visible)
            gsap.set(trackRef.current, { x: -travel * progress });
    });

    return (
        <section
            ref={sectionRef}
            id={id}
            style={{ height: `calc(100vh + ${travel}px)` }}
            className="relative w-full text-white"
        >
            <div
                data-no-shadow
                ref={viewRef}
                className="sticky top-0 h-screen w-full overflow-hidden bg-foreground"
            >
                <Backdrop />

                <div className="relative h-full">
                    <Track ref={trackRef} sections={sections} scrollerRef={viewRef} />
                </div>
            </div>
        </section>
    );
}
