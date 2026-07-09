"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Stripes from "@/components/facile/stripes";
import Orbit from "@/components/facile/orbit";
import { run, slideY, hideRevealY } from "@/app/utils/animations";
import { usePinProgress } from "@/hooks/use-pin-progress";
import suite from "../suite/suite.json";

const DitherView = dynamic(
    () => import("@/webgl/DitherView").then((m) => m.DitherView),
    { ssr: false },
);

const orbitItems = suite.map((s) => ({ subtitle: s.name, description: s.description, icon: s.icon }));

export default function Suite() {
    const sectionRef = useRef<HTMLElement>(null);
    const progressRef = useRef(0);

    const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const entryRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const ctaRef = useRef<HTMLButtonElement>(null);

    const [showText, setShowText] = useState(false);
    const [showCta, setShowCta] = useState(false);
    const [leaving, setLeaving] = useState(false);

    // anchors
    usePinProgress(sectionRef, (p) => {
        progressRef.current = p;
        const textOut = p >= 0.66;
        const textIn = p > 0.01 && !textOut;
        setShowText(textIn);
        setShowCta(textIn);
        setLeaving(textOut);
    });

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

                <Orbit items={orbitItems} />
            </div>
        </section>
    );
}
