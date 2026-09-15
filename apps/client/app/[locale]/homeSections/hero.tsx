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
import { useNarrow } from "@/hooks/use-narrow";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

export default function Hero({ charged }: { charged: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);
    const ctaRef = useRef<HTMLAnchorElement>(null);
    const [showText, setShowText] = useState(false);
    const [leaving, setLeaving] = useState(false);
    const [resolved, setResolved] = useState(false);
    const [teamHover, setTeamHover] = useState(false);
    const narrow = useNarrow()

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

    // the headline and the crew share one cell, so each waits for the other to
    // clear it. The long opening stagger only applies before the first hover
    const [hovered, setHovered] = useState(false);
    const swap = 0.3;
    const headlineDelay = (i: number) => teamHover ? i * 0.08 : (hovered ? swap : 0.7) + i * 0.1;



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
                className="absolute -top-32 lg:top-0 left-0 w-full h-full -z-10 lg:opacity-60 opacity-25"
                gridSize={resolved ? 2 : 16}
                position={[narrow ? 0 : -1, -0.5, -0.5]}
                rotation={[0, 0.35, 0]}
                background={null}
                highlight="#24E27A"
                parallax={0.55}
                intensity={1.8}
                float={false}
                scale={narrow ? 20 : 35}
                fov={45}
            />

            <div className="relative h-full flex flex-col p-4 lg:px-20 lg:p-6">

                {/* headline + cta, bottom-left */}
                <div className=" cta mt-110 lg:mt-0 flex flex-col items-end justify-center px-2 lg:px-20 h-full gap-6 lg:gap-12">
                    {/* the headline steps aside for the crew: both sit in the same
                        grid cell, each behind its own crop, so the swap moves
                        nothing around it. The heads stay mounted — building four
                        canvases on mouseenter would stutter exactly when it shows */}
                    <div
                        className="grid"
                        onMouseEnter={() => { setTeamHover(true); setHovered(true); }}
                        onMouseLeave={() => setTeamHover(false)}
                    >
                        <h2 className="col-start-1 row-start-1 flex flex-col text-end items-end max-w-full text-white/90 gap-2">
                            {/* each line leaves through its own crop rather than the
                                whole headline sliding as one slab; `leaving` sends it up */}
                            <TextReveal
                                open={shown && !teamHover}
                                leaving={leaving || teamHover}
                                delay={headlineDelay(0)}
                                className="flex justify-between items-center gap-6"
                            >
                                Une equipe de passionees
                            </TextReveal>
                            <TextReveal
                                open={shown && !teamHover}
                                leaving={leaving || teamHover}
                                delay={headlineDelay(1)}
                                className="flex justify-between items-center gap-6"
                            >
                                qui sait ce qu'elle fait.
                            </TextReveal>
                        </h2>

                        {/* the heads draw while the hero is on screen, hidden or not: a
                            canvas parked below its crop reads as off-screen and never paints */}
                        <span className="hidden col-start-1 row-start-1 lg:flex items-center justify-end">
                            {members.map((m, i) => (
                                <TextReveal
                                    key={m.slug}
                                    open={shown && teamHover}
                                    delay={teamHover ? swap + i * 0.08 : 0}
                                >
                                    <PersonHead person={m} active={!leaving} className="h-[12vh] w-[12vh] max-h-64 max-w-64" gridSize={0.43} scaleMultiplier={2.5} />
                                </TextReveal>
                            ))}
                        </span>
                    </div>

                    <div className="hidden lg:flex flex-col justify-end text-end gap-2">
                        <TextReveal open={shown} leaving={leaving} delay={1} className="text-xl w-full lead flex justify-end items-center text-[#24E27A]">
                            [<p className="italic opacity-100 text-[#24E27A] mr-1 lead">fasil</p>]
                        </TextReveal>
                        <TextReveal open={shown} leaving={leaving} delay={1.1} as="p" className="subtext max-w-[35ch] text-[clamp(0.5rem,1.2vh,0.7rem)] text-background/60">
                            Qui se fait sans effort, qui ne présente aucune difficulté. Simple, aisé, etc&hellip;
                        </TextReveal>
                    </div>

                    <span className="block lg:mt-2 w-fit overflow-hidden">
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




                <div className="flex flex-col items-end justify-end lg:pr-12 pb-6">
                    <TextReveal open={shown} leaving={leaving} delay={1.4} cropClassName="lg:mr-8">
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
