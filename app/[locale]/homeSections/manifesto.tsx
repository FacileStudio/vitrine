'use client'

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Stripes from "@/components/facile/stripes";
import { past } from "@/lib/utils";

const orientation = 0;
const strips = 4;
const triggerLine = 0.5;

const plus = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Cpath d='M5 2h2v3h3v2H7v3H5V7H2V5h3z' fill='%239FB0A8'/%3E%3C/svg%3E";
const cornerFade =
    "radial-gradient(60% 60% at 0% 0%, #000 0%, transparent 60%), radial-gradient(55% 55% at 100% 100%, #000 0%, transparent 60%)";

const lines = ["We are creators building", "stunning and memorable", "experiences."];

export default function Manifesto() {
    const sectionRef = useRef<HTMLElement>(null);
    const modelRef = useRef<HTMLDivElement>(null);
    const colsSentinel = useRef<HTMLDivElement>(null);
    const paraSentinel = useRef<HTMLDivElement>(null);
    const textExitSentinel = useRef<HTMLDivElement>(null);
    const exitSentinel = useRef<HTMLDivElement>(null);

    const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const entryRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const ctaRef = useRef<HTMLButtonElement>(null);

    const [showText, setShowText] = useState(false);
    const [showCta, setShowCta] = useState(false);
    const [leaving, setLeaving] = useState(false);

    // anchors: derive text flags from scroll position; reveal replays when the section re-pins
    useEffect(() => {
        const update = () => {
            const textOut = past(textExitSentinel, triggerLine);
            const textIn = past(paraSentinel, triggerLine) && !textOut;
            setShowText(textIn);
            setShowCta(textIn);
            setLeaving(textOut);
        };

        window.addEventListener("scroll", update, { passive: true });
        update();
        return () => window.removeEventListener("scroll", update);
    }, []);

    // hide everything before first reveal to avoid a flash
    useEffect(() => {
        gsap.set([...lineRefs.current, ...entryRefs.current, ctaRef.current], { yPercent: 110 });
    }, []);

    // gsap: drive title lines, entries, and CTA off the scroll-derived flags
    useEffect(() => {
        const y = (show: boolean) => (show ? 0 : leaving ? -110 : 110);

        const run = (els: (HTMLElement | null)[], show: boolean) =>
            els.forEach((el, i) => {
                if (!el) return;
                gsap.to(el, { yPercent: y(show), duration: 0.5, ease: "power2.out", delay: i * 0.2 });
            });

        run(lineRefs.current, showText);
        run(entryRefs.current, showText);
        gsap.to(ctaRef.current, { yPercent: y(showCta), duration: 0.7, ease: "power2.out" });
    }, [showText, showCta, leaving]);



    // drift: nudge the model on pointer move for a touch of depth
    useEffect(() => {
        const onMove = (e: PointerEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 24;
            const y = (e.clientY / window.innerHeight - 0.5) * 24;
            gsap.to(modelRef.current, { x, y, duration: 1.2, ease: "power2.out" });
        };

        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
    }, []);



    return (
        <section ref={sectionRef} id="manifesto" className="relative w-full mt-32 min-h-[400vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                <div className="absolute inset-0 bg-white">
                    <div
                        ref={modelRef}
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("${plus}")`,
                            backgroundSize: "12px 12px",
                            WebkitMaskImage: cornerFade,
                            maskImage: cornerFade,
                            opacity: 0.85,
                        }}
                    />
                </div>

                <Stripes orientation={orientation} count={strips} openWhen={() => past(colsSentinel)} />

                <Stripes orientation={orientation + 180} count={strips} openWhen={() => !past(exitSentinel)} />

                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center px-6 text-center pointer-events-none">
                    <h2 className="max-w-3xl text-4xl md:text-5xl font-medium leading-tight text-foreground/80">
                        {lines.map((line, i) => (
                            <span key={i} className="block overflow-hidden">
                                <span ref={(el) => { lineRefs.current[i] = el; }} className="block">
                                    {line}
                                </span>
                            </span>
                        ))}
                    </h2>

                    <span className="mt-10 block overflow-hidden">
                        <button
                            ref={ctaRef}
                            className="block text-3xl font-bold text-foreground pointer-events-auto"
                        >
                            CTA
                        </button>
                    </span>
                </div>

                <div className="absolute bottom-0 left-0 z-50 flex w-full items-end justify-between px-15 pb-12 pointer-events-none text-sm font-bold">
                    {["Branding", "Web - UI/UX design", "Showcase Websites", "Applications", "DevOps", "Self hosting"].map((entry, i) => (
                        <span key={i} className="block overflow-hidden">
                            <span ref={(el) => { entryRefs.current[i] = el; }} className="block">
                                {entry}
                            </span>
                        </span>
                    ))}
                </div>
            </div>

            <div ref={colsSentinel}     className="absolute top-[4%]  w-full h-px" aria-hidden="true" />
            <div ref={paraSentinel}     className="absolute top-[22%] w-full h-px" aria-hidden="true" />
            <div ref={textExitSentinel} className="absolute top-[55%] w-full h-px" aria-hidden="true" />
            <div ref={exitSentinel}     className="absolute top-[65%] w-full h-px" aria-hidden="true" />
        </section>
    );
}
