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
        const covered = (1 - progress) * Math.max(travel, window.innerHeight) <= window.innerHeight * 0.5;
        sectionRef.current?.toggleAttribute("data-covered", covered);
        if (visible)
            gsap.set(trackRef.current, { x: -travel * progress });
    });

    return (
        <section
            ref={sectionRef}
            id={id}
            style={{ height: `calc(100vh + ${travel}px)` }}
            className="relative w-full text-foreground"
        >
            <div
                ref={viewRef}
                className="sticky top-0 h-screen w-full overflow-hidden bg-background"
            >
                <DitherBackdrop variant="story" />

                <div className="relative h-full">
                    <Track ref={trackRef} sections={sections} scrollerRef={viewRef} />
                </div>

                <Stripes
                    orientation={180}
                    count={4}
                    className="bg-foreground"
                    openWhen={() => !sectionRef.current?.hasAttribute("data-covered")}
                />
            </div>
        </section>
    );
}
