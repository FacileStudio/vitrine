"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import Stripes from "@/components/facile/stripes";
import { run, slideY, hideRevealY } from "@/app/utils/animations";
import { usePinProgress } from "@/hooks/use-pin-progress";
import suite from "../suite/suite.json";

const DitherView = dynamic(
    () => import("@/webgl/DitherView").then((m) => m.DitherView),
    { ssr: false },
);

export default function Suite() {
    const sectionRef = useRef<HTMLElement>(null);
    const progressRef = useRef(0);

    const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const entryRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const ctaRef = useRef<HTMLButtonElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
    const titleRef = useRef<HTMLSpanElement>(null);
    const descRef = useRef<HTMLSpanElement>(null);

    const [showText, setShowText] = useState(false);
    const [showCta, setShowCta] = useState(false);
    const [leaving, setLeaving] = useState(false);
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

    // anchors
    usePinProgress(sectionRef, (p, visible) => {
        progressRef.current = p;
        const textOut = p >= 0.66;
        const textIn = p > 0.01 && !textOut;
        setShowText(textIn);
        setShowCta(textIn);
        setLeaving(textOut);

        // horizontal scroll
        const track = trackRef.current;
        if (track) {
            const dist = track.scrollWidth - window.innerWidth;
            gsap.set(track, { x: -p * dist });
        }

        if (!visible) return;

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


    
    // hide everything before first reveal to avoid a flash
    useEffect(() => {
        hideRevealY([
            ...lineRefs.current,
            ...entryRefs.current,
            ctaRef.current,
        ]);
    }, []);

    // drive title lines, entries, and CTA off the scroll-derived flags
    useEffect(() => {
        run(lineRefs.current, slideY(showText, leaving));
        run(entryRefs.current, slideY(showText, leaving));
        run([ctaRef.current], slideY(showCta, leaving, { duration: 0.7 }));
    }, [showText, showCta, leaving]);

    return (
        <section
            ref={sectionRef}
            id="suite"
            className="relative w-full mt-32 min-h-[260vh]"
        >
            <div
                data-no-shadow
                className="sticky top-0 h-screen w-full overflow-hidden bg-white text-white"
            >
                <DitherView
                    className="absolute inset-0 w-full h-full z-0 opacity-33"
                    file="/models/manifesto.glb"
                    gridSize={2}
                    position={[0, 2.5, 0]}
                    rotation={[0, 0.9, 0.9]}
                    scale={5}
                    grayscaleOnly={false}
                    background={null}
                    highlight="#24E27A"
                    parallax={0.7}
                    intensity={1.8}
                />

                <Stripes
                    orientation={0}
                    count={4}
                    className="bg-background"
                    openWhen={() => progressRef.current > 0.01}
                />

                <Stripes
                    orientation={180}
                    count={4}
                    className="bg-background"
                    openWhen={() => progressRef.current < 0.99}
                />

                <div className="absolute inset-x-0 top-[28%] z-20 flex flex-col items-center px-6 text-center text-foreground pointer-events-none">
                    <h2 className="overflow-hidden text-5xl md:text-6xl font-medium">
                        <span ref={titleRef} className="block">{suite[active].name}</span>
                    </h2>
                    <p className="mt-4 max-w-md overflow-hidden text-lg text-foreground/60">
                        <span ref={descRef} className="block">{suite[active].description}</span>
                    </p>
                </div>

                <div className="absolute bottom-20 z-30 flex items-center overflow-hidden">
                    <div ref={trackRef} style={{ paddingLeft: pad, paddingRight: pad }} className="flex w-max items-center gap-1 will-change-transform">
                        {suite.map((p, i) => (
                            <div key={i} className="h-[40vh] aspect-5/3 shrink-0 overflow-hidden rounded-2xl">
                                <img
                                    ref={(el) => { imgRefs.current[i] = el; }}
                                    src={p.image}
                                    alt={p.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-[120%] max-w-none h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
