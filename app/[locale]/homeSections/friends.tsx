'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Avis() {
    const icons = [
        { src: "LH", name: "Laura Hervé" },
        { src: "Lpb", name: "LEs P'tits Bonheurs" },
        { src: "Marcel", name: "Marcel" },
        { src: "Zero", name: "Projet Zero" },
        { src: "Heranova", name: "Heranova" },
        { src: "Equinox", name: "Equinox Studio" },
        { src: "Solais", name: "Solaïs" },
    ]

    const trackRef = useRef<HTMLDivElement>(null);
    const offset = useRef(0);
    const boost = useRef(0);
    const lastScroll = useRef(0);

    // seamless marquee: drift left every frame, add vertical scroll velocity on top
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        lastScroll.current = window.scrollY;

        const onScroll = () => {
            const y = window.scrollY;
            boost.current += Math.abs(y - lastScroll.current);
            lastScroll.current = y;
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        const base = 0.3;
        const tick = () => {
            const half = track.scrollWidth / 5;
            offset.current -= base + boost.current * 0.3;
            boost.current *= 0.2;
            if (half > 0) {
                while (offset.current <= -half) offset.current += half;
            }
            gsap.set(track, { x: offset.current });
        };
        gsap.ticker.add(tick);

        return () => {
            gsap.ticker.remove(tick);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <section id="projects" className="w-screen min-h-[33vh] py-24">
            <div className="px-60">
                <h2 className="text-5xl font-bold">They trusted us</h2>
                <div className="text-lg opacity-66 mt-4 max-w-[40ch]">Our clients let us the lead on projects they held close to their hearts</div>
            </div>

            <div className="mt-32 w-full overflow-hidden">
                <div ref={trackRef} className="flex w-max gap-24 will-change-transform">
                    {[...icons, ...icons].map((icon, i) => (
                        <div key={i} className="shrink-0 w-48 flex flex-col items-center justify-center bg-background/50 rounded-lg">
                            <img src={`/images/icons/${icon.src}.png`} alt={icon.name} className="h-24 font-medium" />
                            <span className="text-sm opacity-66 font-medium mt-8 text-center">{icon.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
