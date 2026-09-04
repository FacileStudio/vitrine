'use client'

import dynamic from "next/dynamic";
import Link from "@/components/facile/transitionLink";
import { useEffect, useRef, useState } from "react";
import { run, fade, hideFade } from "@/app/utils/animations";
import { usePinProgress } from "@/hooks/use-pin-progress";
import TextReveal from "@/components/facile/textReveal";
import members from "../studio/studio.json";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

const DESIGNERS = members.filter((m) => m.role.includes("Designer"));
const DEVELOPERS = members.filter((m) => m.role.includes("Developer"));

export default function Hero({ charged }: { charged: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);
    const ctaRef = useRef<HTMLAnchorElement>(null);
    const [showText, setShowText] = useState(false);
    const [leaving, setLeaving] = useState(false);
    const [resolved, setResolved] = useState(false);
    const [teamHover, setTeamHover] = useState(false);

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

    // nothing rises before the dither grid has charged, and the whole headline
    // rides the same flag afterwards
    const shown = showText && charged;



    useEffect(() => {
        hideFade([ctaRef.current]);
    }, []);



    // the copy rides up out of its own crops now, so only the CTA is left to fade
    useEffect(() => {
        if (!charged)
            return;

        run([ctaRef.current], fade(shown, { delay: 1.6 }));
    }, [shown, charged]);

    return (
        <section id="hero" ref={sectionRef} className="h-screen w-full relative isolate bg-foreground text-background">
            <DitherView
                file="/models/F.glb"
                className="absolute top-0 left-0 w-full h-full -z-10 lg:opacity-60 opacity-25"
                gridSize={resolved ? 2 : 16}
                position={[-1, -0.5, -0.5]}
                rotation={[0, 0.35, 0]}
                background={null}
                highlight="#24E27A"
                parallax={0.55}
                intensity={1.8}
                float={false}
                scale={35}
                fov={45}
            />

            <div className="relative h-full  flex flex-col p-4 px-20 lg:p-6">

                {/* headline + cta, bottom-left */}
                <div
                    className=" cta flex flex-col items-end justify-center px-20 h-full gap-12"
                    onMouseEnter={() => setTeamHover(true)}
                    onMouseLeave={() => setTeamHover(false)}
                >
                    <h2 className="flex flex-col items-end max-w-full text-white/90 gap-2">
                        <TextReveal open={shown} leaving={leaving} delay={1.2} className="flex justify-between items-center gap-6">
                            Une equipe de passionees
                        </TextReveal>
                        <TextReveal open={shown} leaving={leaving} delay={1.3} className="flex justify-between items-center gap-6">
                            qui sait ce qu'elle fait.
                        </TextReveal>
                    </h2>

                    <div className=" flex flex-col justify-end  text-end gap-2">
                        <TextReveal as="p" open={shown} leaving={leaving} delay={1} className="text-xl text-[#24E27A]">
                            [<p className="mr-1">fasil</p>]
                        </TextReveal>
                        <TextReveal open={shown} leaving={leaving} delay={1.1} as="p" className="subtext max-w-[50ch] text-[clamp(0.5rem,1.2vh,0.7rem)] text-background/60">
                            Qui se fait sans effort, qui ne présente aucune difficulté. Simple, aisé, etc&hellip;
                        </TextReveal>
                    </div>

                    <span className="block mt-2 w-fit overflow-hidden">
                        <Link
                            ref={ctaRef}
                            href="/projects"
                            className="lead group flex w-fit items-center gap-[1vh] rounded-md bg-background/10 px-6 py-4 text-sm font-medium transition-colors duration-200 hover:text-[#24E27A]"
                        >
                            Voir nos projets
                            <span className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                        </Link>
                    </span>
                </div>




                <div className="flex flex-col items-end justify-end pr-12 pb-6">
                    <TextReveal open={shown} leaving={leaving} delay={1.4} cropClassName="mr-8">
                        <img
                            src="/Facile.svg"
                            alt="Facile Logo"
                            className="w-auto aspect-auto h-[15vh] invert"
                        />
                    </TextReveal>
                </div>
            </div>
        </section>
    )
}
