'use client'

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { past } from "@/app/utils";
import { run, slideY, hideRevealY } from "@/app/utils/animations";
import { useScroll } from "@/hooks/use-scroll";

const triggerLine = 0.8;

export default function Friends() {
    const icons = [
        { src: "LH", name: "Laura Herve" },
        { src: "Lpb", name: "Les P'tits Bonheurs" },
        { src: "Marcel", name: "Marcel" },
        { src: "Zero", name: "Projet Zero" },
        { src: "Heranova", name: "Heranova" },
        { src: "Equinox", name: "Equinox Studio" },
        { src: "Solais", name: "Solaïs" },
    ]

    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const trackRef2 = useRef<HTMLDivElement>(null);
    const revealSentinel = useRef<HTMLDivElement>(null);
    const disappearSentinel = useRef<HTMLDivElement>(null);
    const offset = useRef(0);
    const offset2 = useRef(0);
    const boost = useRef(0);
    const lastScroll = useRef(0);
    const base = 0.6;

    const bothTracks = () => [
        ...(trackRef.current?.children ?? []),
        ...(trackRef2.current?.children ?? []),
    ] as HTMLElement[];

    const [showIcons, setShowIcons] = useState(false);
    const [leaving, setLeaving] = useState(false);

    // anchor: reveal when reveal sentinel crosses the line; leave when disappear sentinel crosses the top
    useScroll(() => {
        const gone = past(disappearSentinel, 0);
        setLeaving(gone);
        setShowIcons(past(revealSentinel, triggerLine) && !gone);
    });

    // hide every icon (revealY: parked below its slot) before the first reveal
    useEffect(() => {
        hideRevealY(bothTracks());
    }, []);

    // stagger the icons in when the sentinel is reached
    useEffect(() => {
        run(bothTracks(), slideY(showIcons, leaving, { stagger: 0.03, duration: 0.35 }));
    }, [showIcons, leaving]);

    // two seamless marquees drifting opposite ways; vertical scroll velocity boosts both
    useEffect(() => {
        const track = trackRef.current;
        const track2 = trackRef2.current;
        if (!track)
            return;
        lastScroll.current = window.scrollY;


        const onScroll = () => {
            const y = window.scrollY;
            boost.current += Math.abs(y - lastScroll.current);
            lastScroll.current = y;
        };
        window.addEventListener("scroll", onScroll, { passive: true });


        const tick = () => {
            const speed = base + boost.current * 0.2;
            boost.current *= 0.4;

            const half = track.scrollWidth / 2;
            offset.current -= speed;
            if (half > 0) while (offset.current <= -half) offset.current += half;
            gsap.set(track, { x: offset.current });

            if (track2) {
                const half2 = track2.scrollWidth / 2;
                offset2.current += speed;
                if (half2 > 0) while (offset2.current >= 0) offset2.current -= half2;
                gsap.set(track2, { x: offset2.current });
            }
        };
        gsap.ticker.add(tick);


        return () => {
            gsap.ticker.remove(tick);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <section ref={sectionRef} id="friends" className="relative w-screen py-24 overflow-visible">
            <div className="px-60">
                <h2 className="text-5xl font-bold">They trusted us</h2>
                <div className="text-lg opacity-66 mt-4 max-w-[40ch]">Our clients let us the lead on projects they held close to their hearts</div>
            </div>

            {/* <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-100 h-100 blur-[400px] opacity-20 bg-[#24E27A] -z-10 pointer-events-none" aria-hidden="true" /> */}

            <div className="mt-16 w-full overflow-hidden">
                <div ref={trackRef} className="flex w-max items-center gap-[2px] will-change-transform">
                    {[...icons, ...icons].map((icon, i) => (
                        <div key={i} className="shrink-0 flex w-70 h-70 bg-white/33 flex-col justify-center rounded-2xl items-center gap-12">
                            <img src={`/images/icons/${icon.src}.png`} alt={icon.name} className="h-20 opacity-80" />
                            <span className="text-sm font-medium opacity-60 whitespace-nowrap">{icon.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-[2px] w-full overflow-hidden">
                <div ref={trackRef2} className="flex w-max items-center gap-[2px] will-change-transform">
                    {[...icons, ...icons].reverse().map((icon, i) => (
                        <div key={i} className="shrink-0 flex w-70 h-70 bg-white/33 flex-col justify-center rounded-2xl items-center gap-12">
                            <img src={`/images/icons/${icon.src}.png`} alt={icon.name} className="h-20 opacity-80" />
                            <span className="text-sm font-medium opacity-60 whitespace-nowrap">{icon.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div ref={revealSentinel} className="absolute top-[30%] w-full h-px" aria-hidden="true" />
            <div ref={disappearSentinel} className="absolute top-[80%] w-full h-px" aria-hidden="true" />
        </section>
    );
}
