'use client'

import { useCallback, useRef, useState } from "react";
import BlockReveal from "@/components/facile/blockReveal";
import { useScroll } from "@/hooks/use-scroll";

const icons = [
    { src: "LH", name: "Laura Herve" },
    { src: "Lpb", name: "Les P'tits Bonheurs" },
    { src: "Marcel", name: "Marcel" },
    { src: "Zero", name: "Projet Zero" },
    { src: "Heranova", name: "Heranova" },
    { src: "Equinox", name: "Equinox Studio" },
    { src: "Solais", name: "Solaïs" },
];

export default function Friends({ id = "friends" }: { id?: string }) {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const cards = (list: typeof icons) =>
        list.map((icon, i) => (
            <div key={i} className="shrink-0 flex w-70 h-70 bg-white/33 text-foreground flex-col justify-center rounded-2xl items-center gap-12">
                <img src={`/images/icons/${icon.src}.png`} alt={icon.name} loading="lazy" decoding="async" className="h-20 opacity-80" />
                <span className="text-sm font-medium opacity-60 whitespace-nowrap">{icon.name}</span>
            </div>
        ));

    const [showIcons, setShowIcons] = useState(false);

    useScroll(() => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const gone = rect.top + rect.height * 0.8 < 0;
        setShowIcons(rect.top + rect.height * 0.3 < vh * 0.8 && !gone);
    });

    return (
        <section ref={sectionRef} id={id} className="relative w-full py-24 overflow-visible">
            <BlockReveal open={showIcons} blockColor="light" duration={0.8} className="px-60 block">
                <h2 className="text-5xl font-bold">They trusted us</h2>
                <div className="text-lg opacity-66 mt-4 max-w-[40ch]">Our clients let us the lead on projects they held close to their hearts</div>
            </BlockReveal>

            <div className="mt-16 w-full overflow-hidden">
                <div ref={trackRef} className="flex w-max items-center gap-[2px] animate-marquee-left">
                    {cards([...icons, ...icons])}
                </div>
            </div>
        </section>
    );
}
