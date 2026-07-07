'use client'

import React from "react";

// sections with a dark background — the header goes light (white) over these,
// and stays dark over everything else (hero, manifesto, friends, …)
const DARK_SECTIONS = ["projects"];

export const DesktopHeader =({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [onDark, setOnDark] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    // pick the color from whichever section sits under the header line
    React.useEffect(() => {
        const y = 40;
        const onScroll = () => {
            const dark = DARK_SECTIONS.some((id) => {
                const el = document.getElementById(id);
                if (!el) return false;
                const r = el.getBoundingClientRect();
                return r.top <= y && r.bottom > y;
            });
            setOnDark(dark);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const light = menuOpen || onDark;

    return (
        <header className={`fixed top-0 left-0 w-full pt-4 px-12 z-20 flex justify-between items-center transition-colors duration-300 ${light ? "text-white" : "text-[#1E1E1E]"}`}>
            <div className="flex items-center space-x-24">
                <a href="/">
                    <img src="/F.svg" alt="Facile Logo" className={`h-6 aspect-auto brightness-0 ${light ? "invert" : ""}`} />
                </a>
                <div className="flex items-center">
                    <span className="italic text-lg">[fasil]</span>
                    <span className="opacity-50 font-medium text-xs ml-4">Qui ne représente aucune difficulté.</span>
                </div>
            </div>
            <button onClick={toggleMenu}>
                {menuOpen ? 'Close' : 'Menu'}
            </button>
        </header>
    )
}
