'use client'

import dynamic from "next/dynamic";
import Link from "@/components/facile/transitionLink";
import { useEffect, useRef, useState } from "react";
import { run, slideY, fade, hideRevealY, hideFade } from "@/app/utils/animations";
import { usePinProgress } from "@/hooks/use-pin-progress";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

export default function Hero({ charged }: { charged: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRefs = useRef<(HTMLElement | null)[]>([]);
    const ctaRef = useRef<HTMLAnchorElement>(null);
    const [showText, setShowText] = useState(false);
    const [leaving, setLeaving] = useState(false);
    const [resolved, setResolved] = useState(false);

    // let the curtain start lifting before the dither grid resolves
    useEffect(() => {
        if (!charged) return;
        const t = setTimeout(() => setResolved(true), 800);
        return () => clearTimeout(t);
    }, [charged]);



    usePinProgress(sectionRef, (p) => {
        const leaving = p > 0.4;
        setLeaving(leaving);
        setShowText(!leaving);
    });



    useEffect(() => {
        hideRevealY(lineRefs.current);
        hideFade([ctaRef.current]);
    }, []);


    
    useEffect(() => {
        if (!charged)
            return;
        
        run(lineRefs.current, slideY(showText, leaving, { stagger: 0.1, delay: 1 }));
        run([ctaRef.current], fade(showText, { delay: 1 }));
    }, [showText, leaving, charged]);

    return (
        <section id="hero" ref={sectionRef} className="h-screen w-full relative">
            <div className="relative w-full h-screen">
                <DitherView
                    file="/models/F.glb"
                    className="absolute top-0 left-0 w-full h-full -z-10 lg:opacity-75 opacity-25"
                    gridSize={resolved ? 2 : 16}
                    position={[-1, -0.5, -0.5]}
                    rotation={[0, 0.35, 0]}
                    grayscaleOnly={false}
                    background="#9DBAAD"
                    highlight="#24E27A"
                    parallax={0.55}
                    intensity={1.8}
                    float={false}
                    scale={35}
                    fov={45}
                />
                <div className="absolute bottom-0 left-0 w-full h-1/5 bg-linear-to-t from-[#E4EEE8] to-transparent" />
            </div>

            <div className="absolute top-2/5 w-full -translate-y-1/2 text-center flex flex-col lg:flex-row lg:gap-0 items-start lg:px-15 px-4">
                <div className="w-full text-left mb-12 font-medium text-xs">
                    <span className="block overflow-hidden"><div ref={(el) => { lineRefs.current[0] = el; }} className="italic lg:text-lg text-lg">[fasil]</div></span>
                    <span className="block overflow-hidden mt-2"><div ref={(el) => { lineRefs.current[1] = el; }} className="opacity-50 ">Qui se fait sans effort, qui ne presente aucune</div></span>
                    <span className="block overflow-hidden"><div ref={(el) => { lineRefs.current[2] = el; }} className="opacity-50">difficulté. Simple, aise, etc...</div></span>
                </div>

                <div className="w-full flex flex-col text-left xl:text-2xl lg:text-xl text-lg">
                    <span className="block overflow-hidden"><div ref={(el) => { lineRefs.current[3] = el; }} className="font-medium">Quand 2 bons designers rencontrent</div></span>
                    <span className="block overflow-hidden"><div ref={(el) => { lineRefs.current[4] = el; }} className="font-medium">2 bons developpeurs</div></span>
                    <Link ref={ctaRef} href="/projects" className="group mt-6 w-fit flex items-center gap-2 px-6 py-4 border-2 border-black/10 text-sm font-medium rounded-full bg-background/50 transition-colors duration-200 hover:border-[#24E27A]/50 hover:text-[#24E27A]">
                        Voir nos projets
                        <span className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 flex flex-col-reverse lg:flex-row items-end justify-between w-full p-4 lg:px-15 lg:pb-12">
                <span className="block overflow-hidden">
                    <img
                        ref={(el) => {
                            lineRefs.current[5] = el;
                        }}
                        src="/Facile.svg"
                        alt="Facile Logo"
                        className="w-full aspect-auto max-h-[33vh] h-full"
                    />
                </span>

                <span className="block overflow-hidden">
                    <span
                        ref={(el) => {
                            lineRefs.current[6] = el;
                        }}
                        className="block font-medium text-3xl mt-4 lg:text-6xl"
                    >
                        Studio
                    </span>
                </span>
            </div>
        </section>
    )
}
