'use client'

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, RefObject } from "react";
import gsap from "gsap";

const orientation = 0;
const strips = 4;
const coverTransition = "transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)";
const triggerLine = 0.5;

const plus = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Cpath d='M5 2h2v3h3v2H7v3H5V7H2V5h3z' fill='%239FB0A8'/%3E%3C/svg%3E";
const cornerFade =
    "radial-gradient(60% 60% at 0% 0%, #000 0%, transparent 60%), radial-gradient(55% 55% at 100% 100%, #000 0%, transparent 60%)";

const lines = ["We are creators building", "stunning and memorable", "experiences."];

// covers that slide off toward `orientation` (deg) when open; split into columns/rows by the dominant axis
function Stripes({ orientation, count, open }: { orientation: number; count: number; open: boolean }) {
    const rad = (orientation * Math.PI) / 180;
    const dx = -Math.sin(rad);
    const dy = -Math.cos(rad);
    const away = `translate(${(dx * 110).toFixed(2)}%, ${(dy * 110).toFixed(2)}%)`;
    const vertical = Math.abs(Math.cos(rad)) >= Math.abs(Math.sin(rad));

    const stripStyle = (i: number): CSSProperties =>
        vertical
            ? { left: `${(i * 100) / count}%`, width: `${100 / count}%`, top: 0, height: "100%" }
            : { top: `${(i * 100) / count}%`, height: `${100 / count}%`, left: 0, width: "100%" };

    return (
        <>
            {Array.from({ length: count }, (_, i) => (
                <div
                    key={i}
                    className="absolute z-40 bg-background pointer-events-none"
                    style={{
                        ...stripStyle(i),
                        transform: open ? away : "translate(0%, 0%)",
                        transition: coverTransition,
                        transitionDelay: `${i * 0.1}s`,
                    }}
                />
            ))}
        </>
    );
}

export default function Manifesto() {
    const sectionRef = useRef<HTMLElement>(null);
    const modelRef = useRef<HTMLDivElement>(null);
    const colsSentinel = useRef<HTMLDivElement>(null);
    const paraSentinel = useRef<HTMLDivElement>(null);
    const textExitSentinel = useRef<HTMLDivElement>(null);
    const exitSentinel = useRef<HTMLDivElement>(null);

    const [revealed, setRevealed] = useState(false);
    const [gone, setGone] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showCta, setShowCta] = useState(false);
    const [leaving, setLeaving] = useState(false);

    // anchors: derive every flag from scroll position; reveal replays when the section re-pins
    useEffect(() => {
        const past = (ref: RefObject<HTMLDivElement | null>) =>
            ref.current ? ref.current.getBoundingClientRect().top < window.innerHeight * triggerLine : false;

        const update = () => {
            setRevealed(past(colsSentinel));

            const textOut = past(textExitSentinel);
            const textIn = past(paraSentinel) && !textOut;
            setShowText(textIn);
            setShowCta(textIn);
            setLeaving(textOut);
            setGone(past(exitSentinel));
        };

        window.addEventListener("scroll", update, { passive: true });
        update();
        return () => window.removeEventListener("scroll", update);
    }, []);

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
        <section ref={sectionRef} id="manifesto" className="relative w-full mt-32 min-h-[250vh]">
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

                <Stripes orientation={orientation} count={strips} open={revealed} />

                <Stripes orientation={orientation + 180} count={strips} open={!gone} />

                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center px-6 text-center pointer-events-none">
                    <h2 className="max-w-3xl text-4xl md:text-5xl font-medium leading-tight text-foreground/80">
                        {lines.map((line, i) => (
                            <span key={i} className="block overflow-hidden">
                                <span
                                    className="block transition-transform duration-700 ease-out"
                                    style={{
                                        transform: showText ? "translateY(0%)" : leaving ? "translateY(-110%)" : "translateY(110%)",
                                        transitionDelay: `${i * 0.1}s`,
                                    }}
                                >
                                    {line}
                                </span>
                            </span>
                        ))}
                    </h2>

                    <span className="mt-10 block overflow-hidden">
                        <button
                            className="block text-3xl font-bold text-foreground pointer-events-auto transition-transform duration-700 ease-out"
                            style={{ transform: showCta ? "translateY(0%)" : leaving ? "translateY(-110%)" : "translateY(110%)" }}
                        >
                            CTA
                        </button>
                    </span>
                </div>
            </div>

            <div ref={colsSentinel}     className="absolute top-[5%]  w-full h-px" aria-hidden="true" />
            <div ref={paraSentinel}     className="absolute top-[20%] w-full h-px" aria-hidden="true" />
            <div ref={textExitSentinel} className="absolute top-[35%] w-full h-px" aria-hidden="true" />
            <div ref={exitSentinel}     className="absolute top-[50%] w-full h-px" aria-hidden="true" />
        </section>
    );
}
