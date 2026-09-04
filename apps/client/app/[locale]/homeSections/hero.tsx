'use client'

import dynamic from "next/dynamic";
import Link from "@/components/facile/transitionLink";
import Arrow from "@/components/facile/arrow";
import { useEffect, useRef, useState } from "react";
import { run, fade, hideFade } from "@/app/utils/animations";
import { usePinProgress } from "@/hooks/use-pin-progress";
import TextReveal from "@/components/facile/textReveal";
import PersonHead from "@/components/facile/story/head";
import members from "../studio/studio.json";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

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
                <div className=" cta flex flex-col items-end justify-center px-20 h-full gap-12">
                    {/* the headline steps aside for the crew: both sit in the same
                        grid cell, each behind its own crop, so the swap moves
                        nothing around it. The heads stay mounted — building four
                        canvases on mouseenter would stutter exactly when it shows */}
                    <div
                        className="grid"
                        onMouseEnter={() => setTeamHover(true)}
                        onMouseLeave={() => setTeamHover(false)}
                    >
                        <h2 className="col-start-1 row-start-1 flex flex-col items-end max-w-full text-white/90 gap-2">
                            {/* each line leaves through its own crop rather than the
                                whole headline sliding as one slab — `leaving` is what
                                sends it up instead of dropping it back down. The delay
                                is the opening stagger on arrival, and a much shorter
                                one on hover, where nobody waits a second and a half */}
                            <TextReveal
                                open={shown && !teamHover}
                                leaving={leaving || teamHover}
                                delay={teamHover ? 0 : 1.2}
                                className="flex justify-between items-center gap-6"
                            >
                                Une equipe de passionees
                            </TextReveal>
                            <TextReveal
                                open={shown && !teamHover}
                                leaving={leaving || teamHover}
                                delay={teamHover ? 0.08 : 1.3}
                                className="flex justify-between items-center gap-6"
                            >
                                qui sait ce qu'elle fait.
                            </TextReveal>
                        </h2>

                        <span className="col-start-1 row-start-1 flex items-center justify-end">
                            {members.map((m, i) => (
                                <span key={m.slug} className="block overflow-hidden">
                                    <span
                                        className="block transition-transform duration-500 ease-out"
                                        style={{
                                            transform: teamHover ? "translateY(0%)" : "translateY(110%)",
                                            transitionDelay: teamHover ? `${i * 80}ms` : "0ms",
                                        }}
                                    >
                                        <PersonHead person={m} className="h-[12vh] w-[12vh] max-h-64 max-w-64" gridSize={0.43} scaleMultiplier={2.5} />
                                    </span>
                                </span>
                            ))}
                        </span>
                    </div>

                    <div className=" flex flex-col justify-end text-end gap-2">
                        <TextReveal open={shown} leaving={leaving} delay={1} className="text-xl w-full lead flex justify-end items-center text-[#24E27A]">
                            [<p className="italic opacity-100 text-[#24E27A] mr-1 lead">fasil</p>]
                        </TextReveal>
                        <TextReveal open={shown} leaving={leaving} delay={1.1} as="p" className="subtext max-w-[35ch] text-[clamp(0.5rem,1.2vh,0.7rem)] text-background/60">
                            Qui se fait sans effort, qui ne présente aucune difficulté. Simple, aisé, etc&hellip;
                        </TextReveal>
                    </div>

                    <span className="block mt-2 w-fit overflow-hidden">
                        <Link
                            ref={ctaRef}
                            href="/projects"
                            className="button button-dark group flex w-fit items-center gap-[1vh] transition-colors duration-200 hover:text-[#24E27A]"
                        >
                            <p>
                                Voir nos projets
                            </p>
                            <Arrow />
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
