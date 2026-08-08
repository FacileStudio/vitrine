'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { run, slideY, hideRevealY } from "@/app/utils/animations";
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

    // the track duplicates the icons 2x; the CSS marquee animation slides by
    // -50% and loops, so the duplicate picks up exactly where the original left off
    const cards = (list: typeof icons) =>
        list.map((icon, i) => (
            <div key={i} className="shrink-0 flex w-70 h-70 bg-white/33 flex-col justify-center rounded-2xl items-center gap-12">
                <img src={`/images/icons/${icon.src}.png`} alt={icon.name} loading="lazy" decoding="async" className="h-20 opacity-80" />
                <span className="text-sm font-medium opacity-60 whitespace-nowrap">{icon.name}</span>
            </div>
        ));

    const allCards = useCallback(() => [
        ...(trackRef.current?.children ?? []),
    ] as HTMLElement[], []);

    // split the full card set into on-screen / off-screen in one pass, so the
    // reveal effect only measures the DOM once rather than per helper call
    const partitionCards = useCallback(() => {
        const vw = window.innerWidth;
        const onScreen: HTMLElement[] = [];
        const offScreen: HTMLElement[] = [];
        for (const el of allCards()) {
            const r = el.getBoundingClientRect();
            (r.right > 0 && r.left < vw ? onScreen : offScreen).push(el);
        }
        return { onScreen, offScreen };
    }, [allCards]);

    const [showIcons, setShowIcons] = useState(false);
    const [leaving, setLeaving] = useState(false);

    // reveal as the section scrolls into view (entry-based, not pin progress):
    // icons stagger in once the section is ~20% into view, and leave once it has mostly scrolled past
    useScroll(() => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const gone = rect.top + rect.height * 0.8 < 0;
        setLeaving(gone);
        setShowIcons(rect.top + rect.height * 0.3 < vh * 0.8 && !gone);
    });

    // park every card below its slot before the first reveal (a single static set —
    // no tweens, no layer promotion, and the section is off-screen so nothing flashes)
    useEffect(() => {
        hideRevealY(allCards());
    }, [allCards]);

    // reveal: only stagger the on-screen cards; snap the off-screen duplicates to
    // their resting spot so they never scroll in still parked (blank)
    useEffect(() => {
        const { onScreen, offScreen } = partitionCards();
        if (showIcons && !leaving) gsap.set(offScreen, { yPercent: 0 });
        run(onScreen, slideY(showIcons, leaving, { stagger: 0.02, duration: 0.35 }));
    }, [showIcons, leaving, partitionCards]);

    return (
        <section ref={sectionRef} id={id} className="relative w-full py-24 overflow-visible">
            <div className="px-60">
                <h2 className="text-5xl font-bold">They trusted us</h2>
                <div className="text-lg opacity-66 mt-4 max-w-[40ch]">Our clients let us the lead on projects they held close to their hearts</div>
            </div>

            {/* <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-100 h-100 blur-[400px] opacity-20 bg-[#24E27A] -z-10 pointer-events-none" aria-hidden="true" /> */}

            <div className="mt-16 w-full overflow-hidden">
                <div ref={trackRef} className="flex w-max items-center gap-[2px] animate-marquee-left">
                    {cards([...icons, ...icons])}
                </div>
            </div>
        </section>
    );
}
