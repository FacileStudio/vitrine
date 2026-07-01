import Stripes from "@/components/facile/stripes";
import React, { useRef } from "react";

const strips = 4;
const triggerLine = 0.5;

export default function Projects() {

    const colsSentinel = useRef<HTMLDivElement>(null);
    const paraSentinel = useRef<HTMLDivElement>(null);
    const textExitSentinel = useRef<HTMLDivElement>(null);
    const exitSentinel = useRef<HTMLDivElement>(null);
    
    return (
        <section id="projects" className="w-screen min-h-screen flex overflow-hidden">
            <div className="w-1/2 px-15 h-screen flex flex-col gap-3 items-start justify-center">
                <h2 className="text-8xl font-bold text-start">Projects</h2>
                <p className="text-md font-medium text-black/50">Explore our portfolio of design, branding,<br/> and web development projects.</p>
                <button className="px-6 py-4 mt-2 border-2 border-black/10 text-xs font-medium rounded-full">Voir nos projets</button>
            </div>
            <div className="w-1/2 h-screen">
                <Stripes orientation={90} count={4} open={true} />
                <Stripes orientation={90} count={4} open={true} />
                <Stripes orientation={90} count={4} open={true} />
                <Stripes orientation={90} count={4} open={true} />
            </div>
        </section>
    );
}