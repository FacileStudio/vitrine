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

// swaps a "N bons designers/développeurs" line for the team's faces on hover: the
// label hides upward, the faces stagger in from below — both sit stacked in the
// same grid cell, each clipped by its own overflow-hidden crop, so neither shifts
// the layout
function TeamReveal({ hovered, label, team }: { hovered: boolean; label: string; team: typeof members }) {
    return (
        <span className="relative inline-grid">
            <span className="col-start-1 row-start-1 overflow-hidden">
                <span
                    className="block transition-transform duration-300 ease-out"
                    style={{ transform: hovered ? "translateY(-110%)" : "translateY(0%)" }}
                >
                    {label}
                </span>
            </span>
            <span className="col-start-1 row-start-1 inline-flex items-center gap-2 flex-nowrap">
                {team.map((m, i) => (
                    <span key={m.slug} className="overflow-hidden inline-flex items-center gap-2">
                        <span
                            className="inline-flex items-center gap-2 transition-transform duration-300 ease-out whitespace-nowrap"
                            style={{
                                transform: hovered ? "translateY(0%)" : "translateY(110%)",
                                transitionDelay: hovered ? `${i * 80}ms` : "0ms",
                            }}
                        >
                            <img src={m.avatar} alt={m.name} className="h-[0.9em] w-[0.9em] shrink-0 rounded-full object-cover" />
                            <span style={{ color: m.highlight }}>{m.name}</span>
                            {i < team.length - 1 && <span>&amp;</span>}
                        </span>
                    </span>
                ))}
            </span>
        </span>
    );
}

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
                float={true}
                scale={45}
                fov={45}
            />

            <div className="relative h-full  flex flex-col p-4 px-20 lg:p-6">

                {/* headline + cta, bottom-left */}
                <div
                    className=" cta flex flex-col items-end justify-center px-20 h-full gap-12"
                    onMouseEnter={() => setTeamHover(true)}
                    onMouseLeave={() => setTeamHover(false)}
                >
                    <h1 className="flex flex-col items-end max-w-full text-[clamp(1.5rem,4.4vh,3.75rem)] leading-[1.1] text-white/90 font-medium gap-2">
                        <TextReveal open={shown} leaving={leaving} delay={1.2} className="flex justify-between items-center gap-6">
                            Une equipe de passionees
                        </TextReveal>
                        <TextReveal open={shown} leaving={leaving} delay={1.3} className="flex justify-between items-center gap-6">
                            qui sait ce qu'elle fait.
                        </TextReveal>
                    </h1>

                    <div className=" flex flex-col justify-end  text-end gap-2">
                        <TextReveal open={shown} leaving={leaving} delay={1} className="text-xl text-[#24E27A]">
                            [<span className="italic mr-1">fasil</span>]
                        </TextReveal>
                        <TextReveal open={shown} leaving={leaving} delay={1.1} className="max-w-[50ch] font-bb-mono uppercase text-[clamp(0.5rem,1.2vh,0.7rem)] font-medium text-background/60">
                            Qui se fait sans effort, qui ne présente aucune difficulté. Simple, aisé, etc&hellip;
                        </TextReveal>
                    </div>

                    <span className="block mt-2 w-fit overflow-hidden">
                        <Link
                            ref={ctaRef}
                            href="/projects"
                            className="group flex w-fit items-center gap-[1vh] rounded-md bg-background/10 px-6 py-4 text-sm font-medium transition-colors duration-200 hover:text-[#24E27A]"
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
