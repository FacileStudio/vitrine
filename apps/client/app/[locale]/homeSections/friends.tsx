'use client'

import { useRef, useState } from "react";
import TextReveal from "@/components/facile/textReveal";
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
            <div key={i} className="shrink-0 flex w-70 h-70 bg-white/5 text-foreground flex-col justify-center rounded-2xl items-center gap-6">
                <img src={`/images/icons/${icon.src}.png`} alt={icon.name} loading="lazy" decoding="async" className="h-20 opacity-100 invert" />
                <p className="subtext text-white whitespace-nowrap">{icon.name}</p>
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
            <div className="px-60">
                <h2>
                    <TextReveal open={showIcons}>They trusted us</TextReveal>
                </h2>
                <TextReveal as="p" open={showIcons} delay={0.1} cropClassName="mt-4" className="lead max-w-[40ch] opacity-66">
                    Our clients let us the lead on projects they held close to their hearts
                </TextReveal>
            </div>

            <div className="mt-16 w-full overflow-hidden">
                <div ref={trackRef} className="flex w-max items-center gap-[2px] animate-marquee-left">
                    {cards([...icons, ...icons])}
                </div>
            </div>
        </section>
    );
}
