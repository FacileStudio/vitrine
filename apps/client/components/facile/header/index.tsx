'use client'
import React from "react";
import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";
import { useScroll } from "@/hooks/use-scroll";

// sections still light against the dark site — the header switches to dark
// text over these, and stays light everywhere else
const LIGHT_SECTIONS = ["manifesto", "suite", "suite-shelf"];

const Header =({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [onLight, setOnLight] = React.useState(false);

    useScroll(() => {
        const y = 40;
        setOnLight(LIGHT_SECTIONS.some((id) => {
            const el = document.getElementById(id);
            if (!el) return false;
            const r = el.getBoundingClientRect();
            return r.top <= y && r.bottom > y && !el.hasAttribute("data-covered");
        }));
    });

    const dark = onLight && !menuOpen;

    return (
        <div className={"z-[110] absolute w-full top-0"}>
            <DesktopHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} dark={dark} />
            <MobileHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} dark={dark} />
        </div>
    );
};

export default Header;
