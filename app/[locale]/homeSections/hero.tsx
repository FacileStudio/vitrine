'use client'

import dynamic from "next/dynamic";
import Link from "@/components/facile/transitionLink";
import { useEffect, useRef, useState } from "react";
import { run, slideY, fade, hideRevealY, hideFade } from "@/app/utils/animations";
import { usePinProgress } from "@/hooks/use-pin-progress";
import members from "../studio/studio.json";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

const SERVICES = ["Branding", "Web design", "Développement", "3D"];

const DESIGNERS = members.filter((m) => m.role.includes("Designer"));
const DEVELOPERS = members.filter((m) => m.role === "Developer");

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
            <span className="col-start-1 row-start-1 inline-flex items-center gap-2">
                {team.map((m, i) => (
                    <span key={m.slug} className="inline-flex items-center gap-2">
                        <span className="overflow-hidden inline-flex items-center gap-2">
                            <span
                                className="inline-flex items-center gap-2 transition-transform duration-300 ease-out"
                                style={{
                                    transform: hovered ? "translateY(0%)" : "translateY(110%)",
                                    transitionDelay: hovered ? `${i * 80}ms` : "0ms",
                                }}
                            >
                                <img src={m.avatar} alt={m.name} className="h-[0.9em] w-[0.9em] shrink-0 rounded-full object-cover" />
                                <span style={{ color: m.highlight }}>{m.name}</span>
                            </span>
                        </span>
                        {i < team.length - 1 && <span>&amp;</span>}
                    </span>
                ))}
            </span>
        </span>
    );
}

export default function Hero({ charged }: { charged: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRefs = useRef<(HTMLElement | null)[]>([]);
    const pillRefs = useRef<(HTMLElement | null)[]>([]);
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



    useEffect(() => {
        hideRevealY([...lineRefs.current, ...pillRefs.current]);
        hideFade([ctaRef.current]);
    }, []);



    useEffect(() => {
        if (!charged)
            return;

        run(lineRefs.current, slideY(showText, leaving, { stagger: 0.1, delay: 1 }));
        run(pillRefs.current, slideY(showText, leaving, { stagger: 0.06, delay: 1.3 }));
        run([ctaRef.current], fade(showText, { delay: 1.6 }));
    }, [showText, leaving, charged]);

    return (
        <section id="hero" ref={sectionRef} className="h-screen w-full relative isolate bg-foreground text-background">
            <DitherView
                file="/models/F.glb"
                className="absolute top-0 left-0 w-full h-full -z-10 lg:opacity-75 opacity-25"
                gridSize={resolved ? 2 : 16}
                position={[-1, -0.5, -0.5]}
                rotation={[0, 0.35, 0]}
                grayscaleOnly={false}
                background={null}
                highlight="#24E27A"
                parallax={0.55}
                intensity={1.8}
                float={false}
                scale={35}
                fov={45}
            />

            <div className="relative h-full w-full flex flex-col justify-between gap-1 p-4 px-20 lg:p-6">

                {/* headline + cta, bottom-left */}
                <div
                    className=" cta flex flex-col items-end justify-end px-20 h-1/2 gap-6"
                    onMouseEnter={() => setTeamHover(true)}
                    onMouseLeave={() => setTeamHover(false)}
                >
                    <h1 className="flex flex-col text-left max-w-[50ch] text-[clamp(1.5rem,4.4vh,3.75rem)] leading-tight font-medium">
                        <span className="block overflow-hidden text-end"><span ref={(el) => { lineRefs.current[2] = el; }} className="block">Quand <TeamReveal hovered={teamHover} label="2 bons designers" team={DESIGNERS} /></span></span>
                        <span className="block overflow-hidden text-end"><span ref={(el) => { lineRefs.current[3] = el; }} className="block">rencontrent <TeamReveal hovered={teamHover} label="2 bons développeurs" team={DEVELOPERS} />.</span></span>
                    </h1>

                    <div className=" flex flex-col justify-end text-end gap-3">
                        <span className="block overflow-hidden">
                            <div ref={(el) => { lineRefs.current[0] = el; }} className="text-lg text-[#24E27A]">[fasil]</div>
                        </span>
                        <span className="block overflow-hidden">
                            <div ref={(el) => { lineRefs.current[1] = el; }} className="max-w-[36ch] text-[clamp(0.7rem,1.5vh,0.95rem)] font-medium text-background/60">
                                Qui se fait sans effort, qui ne présente aucune difficulté. Simple, aisé, etc&hellip;
                            </div>
                        </span>
                    </div>

                    <span className="block w-fit overflow-hidden">
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




                {/* wordmark, bottom-right */}
                <div className="flex flex-col items-start px-20 lg:items-end justify-end gap-6">
                    <span className="block overflow-hidden mr-8">
                        <img
                            ref={(el) => { lineRefs.current[4] = el; }}
                            src="/Facile.svg"
                            alt="Facile Logo"
                            className="w-auto aspect-auto h-[25vh] invert"
                        />
                    </span>
                    <span className="block overflow-hidden">
                        <span ref={(el) => { lineRefs.current[5] = el; }} className="block text-[clamp(1.5rem,4.5vh,3.75rem)] font-medium leading-none">
                            Studio
                        </span>
                    </span>
                </div>
            </div>
        </section>
    )
}
