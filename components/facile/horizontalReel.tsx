"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import gsap from "gsap";
import { useScroll } from "@/hooks/use-scroll";

export interface ReelItem {
    image: string;
    name: string;
    description: string;
}

interface HorizontalReelProps {
    items: ReelItem[];
    // the sticky/tall section whose scroll progress drives the horizontal travel
    scrollRef: RefObject<HTMLElement | null>;
}

// A scroll-driven horizontal image reel: the track slides sideways as the parent
// section scrolls, each frame parallaxes, and the centred frame's caption reveals.
export default function HorizontalReel({ items, scrollRef }: HorizontalReelProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
    const titleRef = useRef<HTMLSpanElement>(null);
    const descRef = useRef<HTMLSpanElement>(null);

    const [active, setActive] = useState(0);
    const [pad, setPad] = useState(0);

    // side padding so the first image sits centred at rest and the last ends centred
    useEffect(() => {
        const measure = () => {
            const frame = imgRefs.current[0]?.parentElement;
            if (frame)
                setPad(window.innerWidth / 2 - frame.offsetWidth / 2);
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    useScroll(() => {
        const track = trackRef.current;
        const sec = scrollRef.current;
        if (track && sec) {
            const rect = sec.getBoundingClientRect();
            const total = rect.height - window.innerHeight;
            const dist = track.scrollWidth - window.innerWidth;
            const progress = gsap.utils.clamp(0, 1, -rect.top / total);
            gsap.set(track, { x: -progress * dist });
        }

        // parallax + track which frame is crossing the screen centre
        const vw = window.innerWidth;
        const mid = vw / 2;
        let nearest = 0;
        let nearestDist = Infinity;
        imgRefs.current.forEach((img, i) => {
            const frame = img?.parentElement;
            if (!img || !frame)
                return;

            const r = frame.getBoundingClientRect();
            const center = r.left + r.width / 2;
            const rel = gsap.utils.clamp(0, 1, center / vw);
            gsap.set(img, { xPercent: gsap.utils.mapRange(0, 1, 0, -16, rel) });

            const dist = Math.abs(center - mid);
            if (dist < nearestDist) {
                nearestDist = dist;
                nearest = i;
            }
        });
        setActive(nearest);
    });

    // mask-reveal the caption whenever the centred project changes
    useEffect(() => {
        gsap.fromTo(
            [titleRef.current, descRef.current],
            { yPercent: 110 },
            { yPercent: 0, duration: 0.6, ease: "power3.out", stagger: 0.06, overwrite: true },
        );
    }, [active]);

    return (
        <>
            <div className="absolute inset-x-0 top-[28%] z-20 flex flex-col items-center px-6 text-center text-foreground pointer-events-none">
                <h2 className="overflow-hidden text-5xl md:text-6xl font-medium">
                    <span ref={titleRef} className="block">{items[active].name}</span>
                </h2>
                <p className="mt-4 max-w-md overflow-hidden text-lg text-foreground/60">
                    <span ref={descRef} className="block">{items[active].description}</span>
                </p>
            </div>

            <div className="absolute bottom-20 z-30 flex items-center overflow-hidden">
                <div ref={trackRef} style={{ paddingLeft: pad, paddingRight: pad }} className="flex w-max items-center gap-1 will-change-transform">
                    {items.map((p, i) => (
                        <div key={i} className="h-[40vh] aspect-5/3 shrink-0 overflow-hidden rounded-2xl">
                            <img
                                ref={(el) => { imgRefs.current[i] = el; }}
                                src={p.image}
                                alt={p.name}
                                className="w-[120%] max-w-none h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
