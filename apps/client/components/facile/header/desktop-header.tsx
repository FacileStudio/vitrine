'use client'

import React from "react";
import TextReveal from "../textReveal";
import Link from "@/components/facile/transitionLink";

// sections still light against the dark site — the header switches to dark
// text over these, and stays light everywhere else
const LIGHT_SECTIONS = ["manifesto", "suite-shelf"];

export const DesktopHeader =({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [onLight, setOnLight] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    // pick the color from whichever section sits under the header line
    React.useEffect(() => {
        const y = 40;
        const onScroll = () => {
            const light = LIGHT_SECTIONS.some((id) => {
                const el = document.getElementById(id);
                if (!el) return false;
                const r = el.getBoundingClientRect();
                return r.top <= y && r.bottom > y;
            });
            setOnLight(light);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const dark = onLight && !menuOpen;

    return (
        <header className={`fixed top-0 left-0 w-full pt-4 px-12 z-20 flex justify-between items-center transition-colors duration-300 ${dark ? "text-[#1E1E1E]" : "text-white"}`}>
            <div className="flex items-center space-x-24">
                <Link href="/">
                    <img src="/F.svg" alt="Facile Logo" className={`h-6 shrink-0 brightness-0 ${dark ? "" : "invert"}`} />
                </Link>
                <div className=" lg:flex justify-end items-center hidden   text-end gap-8">
                    <TextReveal delay={1} className="text-xl text-[#24E27A] ">[<span className="italic font-goga lowercase tracking-tight mr-1">fasil</span>]</TextReveal>
                    <TextReveal delay={1.1} className={`font-bb-mono font-medium  tracking-tight uppercase text-[clamp(0.5rem,1.2vh,0.7rem)] ${dark ? "text-[#1E1E1E]" : "text-white"} `}>Qui se fait sans effort, qui ne présente aucune difficulté. Simple, aisé, etc&hellip;</TextReveal>
                </div>
            </div>
            <button className="hidden lg:block font-bb-mono font-medium  tracking-tight uppercase text-[clamp(0.5rem,1.8vh,1.2rem)]" onClick={toggleMenu}>
                {menuOpen ? 'Close' : 'Menu'}
            </button>
        </header>
    )
}
