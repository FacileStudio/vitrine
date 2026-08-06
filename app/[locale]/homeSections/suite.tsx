"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Stripes from "@/components/facile/stripes";
import Orbit from "@/components/facile/orbit";
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

    const [showText, setShowText] = useState(false);

    // the section is long enough for every orbit node to travel through the centre
    usePinProgress(sectionRef, (p) => {
        progressRef.current = p;
        setShowText(p > 0.01 && p < 0.99);
    });

    return (
        <section
            ref={sectionRef}
            id="suite"
            className="relative w-full mt-32 min-h-[700vh]"
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
                        { file: "/models/manifesto.glb", position: [-3, -2, 0.5] },
                        { file: "/models/manifesto.glb", position: [3, 0.5, 0.5] },
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

                <Orbit items={orbitItems} sectionRef={sectionRef} />
            </div>
        </section>
    );
}
