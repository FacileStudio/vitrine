'use client'

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { past } from "@/app/utils";
import { run, slide, fade, hideReveal, hideFade } from "@/app/utils/animations";
import { useScroll } from "@/hooks/use-scroll";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

const triggerLine = 0.5;

export default function Hero() {
    const paraSentinel = useRef<HTMLDivElement>(null);
    const textExitSentinel = useRef<HTMLDivElement>(null);

    const lineRefs = useRef<(HTMLElement | null)[]>([]);
    const ctaRef = useRef<HTMLButtonElement>(null);

    const [showText, setShowText] = useState(false);
    const [leaving, setLeaving] = useState(false);

    useScroll(() => {
        const textOut = past(textExitSentinel, triggerLine);
        setShowText(past(paraSentinel, triggerLine) && !textOut);
        setLeaving(textOut);
    });

    useEffect(() => {
        hideReveal(lineRefs.current);
        hideFade([ctaRef.current]);
    }, []);

    useEffect(() => {
        run(lineRefs.current, slide(showText, leaving, { stagger: 0.1, delay: 1.2 }));
        run([ctaRef.current], fade(showText, { delay: 1.2 }));
    }, [showText, leaving]);

    return (
        <section id="hero" className="h-screen w-screen relative">
            <div className="relative w-screen h-screen">
                <DitherView
                    file="/models/fff.glb"
                    className="absolute top-0 left-0 w-full h-full -z-10 opacity-75"
                    background="#9DBAAD"
                    highlight="#24E27A"
                    grayscaleOnly={false}
                    intensity={1.8}
                    gridSize={2}
                    position={[-1, -0.5, -0.5]}
                    fov={50}
                    scale={35}
                    float={false}
                    parallax={0.55}
                    rotation={[0, 0.35, 0]}
                />
                <div className="absolute bottom-0 left-0 w-full h-1/5 bg-linear-to-t from-[#E4EEE8] to-transparent" />
            </div>

            <div className="absolute top-2/5 w-full -translate-y-1/2 text-center flex items-start px-15">
                <div className="w-full text-left">
                    <span className="block overflow-hidden"><div ref={(el) => { lineRefs.current[0] = el; }} className="italic text-lg">[fasil]</div></span>
                    <span className="block overflow-hidden mt-2"><div ref={(el) => { lineRefs.current[1] = el; }} className="opacity-50 font-medium text-xs">Qui se fait sans effort, qui ne presente aucune</div></span>
                    <span className="block overflow-hidden"><div ref={(el) => { lineRefs.current[2] = el; }} className="opacity-50 font-medium text-xs">difficulté. Simple, aise, etc...</div></span>
                </div>

                <div className="w-full text-left ">
                    <span className="block overflow-hidden"><div ref={(el) => { lineRefs.current[3] = el; }} className="text-2xl font-medium">Quand 2 bons designers rencontrent</div></span>
                    <span className="block overflow-hidden"><div ref={(el) => { lineRefs.current[4] = el; }} className="text-2xl font-medium">2 bons developpeurs</div></span>
                    <button ref={ctaRef} className="mt-6 px-6 py-4 border-2 border-black/10 text-xs font-medium rounded-full">Voir nos projets</button>
                </div>
            </div>

            <div className="absolute bottom-0 flex items-end justify-between w-full px-15 pb-12">
                <span className="block overflow-hidden w-1/2"><img ref={(el) => { lineRefs.current[5] = el; }} src="/Facile.svg" alt="Facile Logo" className="w-full aspect-auto max-h-[33vh]" /></span>
                <span className="block overflow-hidden"><span ref={(el) => { lineRefs.current[6] = el; }} className="block font-medium text-4xl">Studio</span></span>
            </div>

            <div ref={paraSentinel}     className="absolute top-[10%] w-full h-px" aria-hidden="true" />
            <div ref={textExitSentinel} className="absolute top-[90%] w-full h-px" aria-hidden="true" />
        </section>
    )
}
