'use client'

import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { usePinProgress } from "@/hooks/use-pin-progress";
import Stripes from "@/components/facile/stripes";
import DitherBackdrop from "@/components/facile/ditherBackdrop";
import Track from "./track";
import type { Chapter } from "./types";

// extra scroll, in screen heights, the band stays parked on its last block before it lets go
const HOLD = 2;
// px from the screen edge over which a tile's glass fades out, about the reach of its 48px blur
const EDGE = 160;

interface BandProps {
    sections: Chapter[];
    id?: string;
    glass?: boolean;
}

export default function Band({ sections, id, glass = false }: BandProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const viewRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const [travel, setTravel] = useState(0);
    const [leaving, setLeaving] = useState(false);

    useLayoutEffect(() => {
        const measure = () => {
            const track = trackRef.current;
            const last = [...(track?.querySelectorAll<HTMLElement>("[data-block]") ?? [])].at(-1);

            if (!track || !last)
                return;

            // distance that brings the last block's centre to the middle of the screen; both rects carry the same x, so it cancels
            const centre = last.getBoundingClientRect().left - track.getBoundingClientRect().left + last.offsetWidth / 2;

            setTravel(Math.max(0, centre - window.innerWidth / 2));
        };

        measure();
        window.addEventListener("resize", measure);

        return () => window.removeEventListener("resize", measure);
    }, [sections]);

    usePinProgress(sectionRef, (progress, visible) => {
        // pixels scrolled into the pin, of which only the first `travel` move the track; the rest is the hold
        const scrolled = progress * (travel + window.innerHeight * HOLD);

        // halfway through the hold the dither fades out, so it is gone before the page lets go
        setLeaving(scrolled > travel + window.innerHeight * HOLD / 2);

        if (!visible)
            return;

        // whole pixels: the glass cells make the track its own layer, and a fractional offset resamples every glyph soft
        gsap.set(trackRef.current, { x: -Math.round(Math.min(travel, scrolled)) });

        // past the screen edge the blur has nothing drawn to sample and smears, so the glass fades out before it gets there
        trackRef.current?.querySelectorAll<HTMLElement>("[data-glass-layer]").forEach((layer) => {
            const r = layer.getBoundingClientRect();
            // distance of the tile's nearest side to its nearest screen edge, negative once it overhangs
            const edge = Math.min(r.left, window.innerWidth - r.right);

            gsap.set(layer, { opacity: gsap.utils.clamp(0, 1, edge / EDGE) });
        });
    });

    return (
        <section
            ref={sectionRef}
            id={id}
            data-glass={glass || undefined}
            style={{ height: `calc(${100 + HOLD * 100}vh + ${travel}px)` }}
            className="relative w-full text-background"
        >
            <div
                ref={viewRef}
                className="sticky top-0 h-screen w-full overflow-hidden bg-foreground"
            >
                <DitherBackdrop variant="story" leaving={leaving} />

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
