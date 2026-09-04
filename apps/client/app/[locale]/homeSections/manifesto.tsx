'use client'

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "@/components/facile/transitionLink";
import Stripes from "@/components/facile/stripes";
import TextReveal from "@/components/facile/textReveal";
import { usePinProgress } from "@/hooks/use-pin-progress";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

export default function Manifesto() {
    const sectionRef = useRef<HTMLElement>(null);
    const progressRef = useRef(0);

    const [showText, setShowText] = useState(false);
    const [showCta, setShowCta] = useState(false);
    const [leaving, setLeaving] = useState(false);

    usePinProgress(sectionRef, (p) => {
        progressRef.current = p;
        const textOut = p >= 0.7;
        const textIn = p > 0.20 && !textOut;
        setShowText(textIn);
        setShowCta(textIn);
        setLeaving(textOut);
    });

    return (
        <section ref={sectionRef} id="manifesto" className="relative bg-background w-full mt-32 min-h-[400vh]">
            <div className="absolute inset-0 bg-background -z-10" aria-hidden="true" />
            <div className="sticky top-0 z-20 h-screen w-full overflow-hidden">

                <DitherView
                    className="absolute top-0 left-0 w-full h-full z-0 opacity-50"
                    background="#E4EEE8"
                    highlight="#24E27A"
                    grayscaleOnly={false}
                    intensity={1.8}
                    parallax={1}
                    scale={1.6}
                    gridSize={showText ? 2 : 9}
                    file="/models/manifesto.glb"
                    models={[
                        { file: "/models/manifesto.glb", position: [-1.5, 0, 2], rotation: [0, 90, 90]},
                        { file: "/models/manifesto.glb", position: [1.5, -2.5, 2] },
                    ]}
                />

                <Stripes orientation={0} count={4} className="bg-foreground" openWhen={() => progressRef.current > 0.02} />

                <Stripes orientation={180} count={4} className="bg-foreground" openWhen={() => progressRef.current < 0.90} />

                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center px-6 text-center pointer-events-none">
                    <h2 className="max-w-3xl text-foreground/80">
                        {["We are creators building", "stunning and memorable", "experiences."].map((line, i) => (
                            <TextReveal key={i} open={showText} leaving={leaving} delay={i * 0.2}>
                                {line}
                            </TextReveal>
                        ))}
                    </h2>
                    <TextReveal open={showCta} leaving={leaving} duration={0.7} delay={0.5} cropClassName="w-fit mt-10">
                        <Link
                            href="/projects"
                            className="inline-block px-8 py-5 rounded-full bg-background/50 text-foreground"
                        >
                            <p className="text-md">Voir nos projets</p>
                        </Link>
                    </TextReveal>
                </div>

                <div className="absolute bottom-0 left-0 flex w-full items-end justify-between px-48 pb-12 pointer-events-none text-foreground">
                    {["Branding", "Web - UI/UX design", "Showcase Websites", "Applications", "DevOps", "Self hosting"].map((entry, i) => (
                        <TextReveal as="p" key={i} open={showText} leaving={leaving} delay={i * 0.1} className="text-md">
                            {entry}
                        </TextReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
