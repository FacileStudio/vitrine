'use client'

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "@/components/facile/transitionLink";
import Stripes from "@/components/facile/stripes";
import { run, slideY, hideRevealY } from "@/app/utils/animations";
import { usePinProgress } from "@/hooks/use-pin-progress";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

export default function Manifesto() {
    const sectionRef = useRef<HTMLElement>(null);
    const progressRef = useRef(0);

    const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const entryRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const ctaRef = useRef<HTMLAnchorElement>(null);

    const [showText, setShowText] = useState(false);
    const [showCta, setShowCta] = useState(false);
    const [leaving, setLeaving] = useState(false);

    // anchors: derive text flags from scroll position; reveal replays when the section re-pins
    usePinProgress(sectionRef, (p) => {
        progressRef.current = p;
        const textOut = p >= 0.7;
        const textIn = p > 0.20 && !textOut;
        setShowText(textIn);
        setShowCta(textIn);
        setLeaving(textOut);
    });

    // hide everything before first reveal to avoid a flash
    useEffect(() => {
        hideRevealY([...lineRefs.current, ...entryRefs.current, ctaRef.current]);
    }, []);

    // drive title lines, entries, and CTA off the scroll-derived flags
    useEffect(() => {
        run(lineRefs.current, slideY(showText, leaving));
        run(entryRefs.current, slideY(showText, leaving));
        run([ctaRef.current], slideY(showCta, leaving, { duration: 0.7, delay: 0.5 }));
    }, [showText, showCta, leaving]);



    return (
        <section ref={sectionRef} id="manifesto" className="relative w-full mt-32 min-h-[400vh]">
            <div className="absolute inset-0 bg-white -z-10" aria-hidden="true" />
            <div className="sticky top-0 z-20 h-screen w-full overflow-hidden">

                <DitherView
                    className="absolute top-0 left-0 w-full h-full z-0 opacity-75"
                    background="#ffffff"
                    highlight="#24E27A"
                    grayscaleOnly={false}
                    intensity={1.8}
                    parallax={0.7}
                    gridSize={showText ? 2 : 9}
                    file="/models/manifesto.glb"
                    models={[
                        { file: "/models/manifesto.glb", position: [-3, 0.5, 0.5] },
                        { file: "/models/manifesto.glb", position: [3, -2, 0.5] },
                    ]}
                />

                <Stripes orientation={0} count={4} className="bg-background" openWhen={() => progressRef.current > 0.02} />

                <Stripes orientation={180} count={4} className="bg-background" openWhen={() => progressRef.current < 0.90} />

                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center px-6 text-center pointer-events-none">
                    <h2 className="max-w-3xl text-4xl md:text-5xl font-medium leading-tight text-foreground/80">
                        {["We are creators building", "stunning and memorable", "experiences."].map((line, i) => (
                            <span key={i} className="block overflow-hidden">
                                <span ref={(el) => { lineRefs.current[i] = el; }} className="block">
                                    {line}
                                </span>
                            </span>
                        ))}
                    </h2>
                    <div className="overflow-hidden w-fit mt-10">
                        <Link
                            ref={ctaRef}
                            href="/projects"
                            className="inline-block px-8 py-5  text-md font-medium rounded-full bg-background/50"
                        >
                            Voir nos projets
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 flex w-full items-end justify-between px-48 pb-12 pointer-events-none text-md font-medium">
                    {["Branding", "Web - UI/UX design", "Showcase Websites", "Applications", "DevOps", "Self hosting"].map((entry, i) => (
                        <span key={i} className="block overflow-hidden">
                            <span ref={(el) => { entryRefs.current[i] = el; }} className="block">
                                {entry}
                            </span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
