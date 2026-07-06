import gsap from "gsap";
import Stripes from "@/components/facile/stripes";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useScroll } from "@/hooks/use-scroll";
import { past } from "@/app/utils";
import dynamic from "next/dynamic";
import projects from "../projects/projects.json";
import { run, slideY, slideX, hideRevealY } from "@/app/utils/animations";

const DitherView = dynamic(
    () => import("@/webgl/DitherView").then((m) => m.DitherView),
    { ssr: false },
);

const triggerLine = 0.5;

const newest = projects.slice(0, 4);

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const colsSentinel = useRef<HTMLDivElement>(null);
    const paraSentinel = useRef<HTMLDivElement>(null);
    const textExitSentinel = useRef<HTMLDivElement>(null);
    const exitSentinel = useRef<HTMLDivElement>(null);

    const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const entryRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
    const ctaRef = useRef<HTMLButtonElement>(null);

    const [showText, setShowText] = useState(false);
    const [showCta, setShowCta] = useState(false);
    const [leaving, setLeaving] = useState(false);

    // anchors: derive text flags from scroll position; reveal replays when the section re-pins
    useScroll(() => {
        const textOut = past(textExitSentinel, triggerLine);
        const textIn = past(paraSentinel, triggerLine) && !textOut;
        setShowText(textIn);
        setShowCta(textIn);
        setLeaving(textOut);

        // manifesto-style parallax: the scaled image drifts slower than its card
        const vh = window.innerHeight;
        imgRefs.current.forEach((el) => {
            const card = el?.parentElement;
            if (!el || !card) return;
            const r = card.getBoundingClientRect();
            const progress = gsap.utils.clamp(0, 1, (vh - r.top) / (vh + r.height));
            gsap.set(el, {
                yPercent: gsap.utils.mapRange(0, 1, -25, 25, progress),
                scale: 1.30,
            });
        });
    });

    // hide everything before first reveal to avoid a flash
    useEffect(() => {
        hideRevealY([...lineRefs.current, ctaRef.current]);
    }, []);

    // drive title lines, entries, and CTA off the scroll-derived flags
    useEffect(() => {
        run(lineRefs.current, slideY(showText, leaving));
        run([ctaRef.current], slideY(showCta, leaving, { duration: 0.7 }));
    }, [showText, showCta, leaving]);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="w-screen relative min-h-[500vh]"
        >
            {/* <div className="w-screen h-screen sticky top-0 overflow-hidden flex">

                <div className="w-1/2 px-20 h-screen flex flex-col items-start justify-center">
                    <h2 className="text-[7vw] font-bold text-start">Projects</h2>
                    <p className="text-md font-medium -mt-2 text-black/50">Explore our portfolio of design, branding,<br/> and web development projects.</p>
                    <button className="px-6 mt-5 py-4 border-2 border-black/10 text-xs font-medium rounded-full">Voir nos projets</button>
                </div>

                <div className="w-1/2 h-screen relative overflow-hidden bg-white">
                    <DitherView
                        className="absolute inset-0 w-full h-full z-0 opacity-75"
                        background="#ffffff"
                        highlight="#B4E5CB"
                        grayscaleOnly={false}
                        intensity={1.8}
                        parallax={0.7}
                        gridSize={2}
                        file="/models/manifesto.glb"
                        models={[{ file: "/models/manifesto.glb", position: [1, 0.5, 1.5] }]}
                    />

                    <div className="absolute top-0 left-0 w-full h-screen flex flex-col z-50">
                        {newest.map((p, i) => (
                            <a
                                ref={(el) => { if (el) projectsRef.current[i] = el; }}
                                key={p.slug}
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-full h-full flex flex-col justify-start pt-8 gap-1 px-10 overflow-hidden"
                            >
                                {p.image && (
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    />
                                )}
                                <span className="relative z-10 text-2xl font-bold text-white">{p.name}</span>
                                <span className="relative z-10 text-xs text-white/50">{p.techStack?.join(" · ")}</span>
                            </a>
                        ))}
                    </div>

                    <Stripes orientation={90} count={4} className="bg-background" openWhen={() => past(enterSentinel)} />
                    <Stripes orientation={90} count={4} className="bg-background" openWhen={() => !past(exitSentinel)} />
                </div>
            </div>



            <div ref={enterSentinel} className="absolute top-[6%]  w-full h-px" aria-hidden="true" />
            <div ref={showProjectsSentinel} className="absolute top-[30%]  w-full h-px" aria-hidden="true" />
            <div ref={leaveProjectsSentinel} className="absolute top-[70%]  w-full h-px" aria-hidden="true" />
            <div ref={exitSentinel} className="absolute top-[80%]  w-full h-px" aria-hidden="true" /> */}

            <div
                data-no-shadow
                className="sticky top-0 h-screen w-full overflow-hidden bg-[#242424] text-white"
            >
                <DitherView
                    className="absolute inset-0 w-full h-full z-0 opacity-20"
                    background="#242424"
                    highlight="#B4E5CB"
                    grayscaleOnly={false}
                    intensity={1.8}
                    parallax={0.7}
                    gridSize={2}
                    file="/models/manifesto.glb"
                    models={[
                        { file: "/models/manifesto.glb", position: [3, -3, 0] },
                        { file: "/models/manifesto.glb", position: [-2, -0.5, 0] },
                    ]}
                />

                <Stripes
                    orientation={0}
                    count={4}
                    className="bg-background"
                    openWhen={() => past(colsSentinel)}
                />

                <Stripes
                    orientation={180}
                    count={4}
                    className="bg-background"
                    openWhen={() => !past(exitSentinel)}
                />

                <div className="absolute inset-0 z-50 flex flex-col items-center justify-start pt-24 px-6 text-center pointer-events-none">
                    <h2 className="max-w-3xl text-4xl md:text-5xl font-medium leading-tight">
                        {["Take a look at", "our latest projects."].map(
                            (line, i) => (
                                <span key={i} className="block overflow-hidden">
                                    <span
                                        ref={(el) => {
                                            lineRefs.current[i] = el;
                                        }}
                                        className="block"
                                    >
                                        {line}
                                    </span>
                                </span>
                            ),
                        )}
                    </h2>
                </div>
            </div>

            <div className="w-screen h-full flex flex-col justify-start items-center gap-3 pt-240 px-6">
                {newest.map((p, i) => (
                    <div className="w-[70vw] flex items-start justify-between">
                        <a
                            ref={(el) => {
                                if (el) entryRefs.current[i] = el;
                            }}
                            key={p.slug}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-6xl aspect-16/10 flex flex-col justify-start gap-1 overflow-hidden rounded-md"
                        >
                            {p.image && (
                                <div
                                    ref={(el) => {
                                        imgRefs.current[i] = el;
                                    }}
                                    className="absolute inset-0 will-change-transform"
                                >
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    />
                                </div>
                            )}
                        </a>
                        <div className="flex flex-col items-end gap-1">
                            <span className="relative z-10 text-5xl font-medium text-white">
                                {p.name}
                            </span>
                            <span className="relative z-10 text-xs text-white/50">
                                {p.techStack?.join(" · ")}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div
                ref={colsSentinel}
                className="absolute top-[4%]  w-full h-px"
                aria-hidden="true"
            />
            <div
                ref={paraSentinel}
                className="absolute top-[12%] w-full h-px"
                aria-hidden="true"
            />
            <div
                ref={textExitSentinel}
                className="absolute top-[33%] w-full h-px"
                aria-hidden="true"
            />
            <div
                ref={exitSentinel}
                className="absolute top-[90%] w-full h-px"
                aria-hidden="true"
            />
        </section>
    );
}
