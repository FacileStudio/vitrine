'use client'

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ReactLenis } from "lenis/react";
import Header from "@/components/facile/header";
import Menu from "@/components/facile/menu";
import Stripes from "@/components/facile/stripes";
import { run, slideY, hideRevealY } from "@/app/utils/animations";
import { usePinProgress } from "@/hooks/use-pin-progress";
import steps from "./process.json";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

type Step = (typeof steps)[number];

// One process step = a pinned scroll section mirroring the landing page: a dither
// backdrop revealed by scroll-driven Stripes, with text + image that slide in
// while the section is centred and out as it leaves.
function ProcessSection({ step, index }: { step: Step; index: number }) {
    const sectionRef = useRef<HTMLElement>(null);
    const progressRef = useRef(0);
    const textRefs = useRef<(HTMLElement | null)[]>([]);

    const [show, setShow] = useState(false);
    const [leaving, setLeaving] = useState(false);

    usePinProgress(sectionRef, (p) => {
        progressRef.current = p;
        const out = p >= 0.62;
        setShow(p > 0.12 && !out);
        setLeaving(out);
    });

    useEffect(() => {
        hideRevealY(textRefs.current);
    }, []);

    useEffect(() => {
        run(textRefs.current, slideY(show, leaving, { stagger: 0.08, duration: 0.6 }));
    }, [show, leaving]);

    return (
        <section ref={sectionRef} id={step.id} className="relative w-full min-h-[280vh]">
            <div className="absolute inset-0 -z-10 bg-foreground" aria-hidden="true" />
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <DitherView
                    file="/models/manifesto.glb"
                    className="absolute inset-0 h-full w-full opacity-60"
                    background={null}
                    highlight="#24E27A"
                    grayscaleOnly={false}
                    intensity={1.8}
                    parallax={0.6}
                    gridSize={show ? 2 : 9}
                    scale={4}
                />

                {/* scroll-driven covers: open as the section enters, close as it leaves */}
                <Stripes orientation={0} count={4} className="bg-foreground" openWhen={() => progressRef.current > 0.04} />
                <Stripes orientation={180} count={4} className="bg-foreground" openWhen={() => progressRef.current < 0.9} />

                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-8 px-6 text-center text-white">
                    <div className="overflow-hidden">
                        <span ref={(el) => { textRefs.current[0] = el; }} className="block text-sm uppercase tracking-widest opacity-50">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                    </div>
                    <div className="overflow-hidden">
                        <h2 ref={(el) => { textRefs.current[1] = el; }} className="block text-5xl font-medium 3xl:text-6xl">
                            {step.title}
                        </h2>
                    </div>

                    {/* image (placeholder path until real assets are added) */}
                    <div className="overflow-hidden">
                        <div ref={(el) => { textRefs.current[2] = el; }} className="block">
                            <div className="h-56 w-80 overflow-hidden rounded-xl bg-white/5 3xl:h-72 3xl:w-[28rem]">
                                <img src={step.image} alt={step.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <p ref={(el) => { textRefs.current[3] = el; }} className="block max-w-[48ch] opacity-70">
                            {step.text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function ProcessPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative">
            <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }} />
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <main className="w-full">
                {steps.map((step, i) => (
                    <ProcessSection key={step.id} step={step} index={i} />
                ))}
            </main>
        </div>
    );
}
