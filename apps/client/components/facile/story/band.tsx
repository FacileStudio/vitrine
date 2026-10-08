'use client'

import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { usePinProgress } from "@/hooks/use-pin-progress";
import Stripes from "@/components/facile/stripes";
import DitherBackdrop from "@/components/facile/ditherBackdrop";
import Track from "./track";
import type { Chapter } from "./types";

interface BandProps {
    sections: Chapter[];
    id?: string;
}

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
            className="relative w-full text-background"
        >
            <div
                ref={viewRef}
                className="sticky top-0 h-screen w-full overflow-hidden bg-foreground"
            >
                <DitherBackdrop variant="story" />

                <div className="relative h-full">
                    <Track ref={trackRef} sections={sections} scrollerRef={viewRef} />
                </div>

                {/* reads the rect itself: the stripes' scroll listener fires before the band's, so a shared progress ref lags one event */}
                <Stripes
                    orientation={0}
                    count={4}
                    className="bg-background"
                    openWhen={() => (sectionRef.current?.getBoundingClientRect().top ?? 0) < -window.innerHeight * 0.05}
                />
            </div>
        </section>
    );
}
