import Stripes from "@/components/facile/stripes";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useScroll } from "@/hooks/use-scroll";
import { past } from "@/app/utils";
import dynamic from "next/dynamic";
import projects from "../projects/projects.json";
import { run, slideX, hideRevealX } from "@/app/utils/animations";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

const newest = projects.slice(0, 4);

export default function Projects() {
    const sectionRef            = useRef<HTMLElement>(null);
    const projectsRef           = useRef<HTMLAnchorElement[]>([]);

    const enterSentinel         = useRef<HTMLDivElement>(null);
    const showProjectsSentinel  = useRef<HTMLDivElement>(null);
    const leaveProjectsSentinel = useRef<HTMLDivElement>(null);
    const exitSentinel          = useRef<HTMLDivElement>(null);

    const [showProjects, setShowProjects]   = useState(false);
    const [leaveProjects, setLeaveProjects] = useState(false);

    useScroll(() => {
        const leave = past(leaveProjectsSentinel, 0.5);
        setShowProjects(past(showProjectsSentinel, 0.5) && !leave);
        setLeaveProjects(leave);
    });

    // park the rows offscreen before the browser paints, so they never flash
    useLayoutEffect(() => {
        hideRevealX(projectsRef.current);
    }, []);

    // in from the right when shown; out the left when leaving; back right on scroll-up
    useEffect(() => {
        run(projectsRef.current, slideX(showProjects));
    }, [showProjects, leaveProjects]);

    return (
        <section ref={sectionRef} id="projects" className="w-screen relative min-h-[400vh]">
            <div className="w-screen h-screen sticky top-0 overflow-hidden flex">

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
            <div ref={exitSentinel} className="absolute top-[80%]  w-full h-px" aria-hidden="true" />
        </section>
    );
}