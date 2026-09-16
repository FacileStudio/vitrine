'use client'

import React from "react";
import { useTranslations } from "next-intl";
import TextReveal from "../textReveal";
import Link from "@/components/facile/transitionLink";
import LocaleSwitcher from "./localeSwitcher";

export const DesktopHeader =({ menuOpen, setMenuOpen, dark }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; dark: boolean }) => {
    const t = useTranslations("common.header");

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        // the bar spans the full width above the mobile header, so only its controls
        // take pointer events: the empty rest used to swallow taps on the phone menu button
        <header className={`pointer-events-none fixed top-0 left-0 w-full pt-4 px-12 z-20 flex justify-between items-center transition-colors duration-300 ${dark ? "text-[#1E1E1E]" : "text-white"}`}>
            <div className="flex items-center space-x-24">
                <Link href="/" className="pointer-events-auto">
                    <img src="/F.svg" alt={t("logoAlt")} className={`h-6 shrink-0 brightness-0 ${dark ? "" : "invert"}`} />
                </Link>
                <div className=" lg:flex justify-end items-center hidden   text-end gap-8">
                    <TextReveal delay={1} className="text-xl text-accent ">[<span className="italic font-goga lowercase tracking-tight mr-1">fasil</span>]</TextReveal>
                    <TextReveal as="p" delay={1.1} className={`subtext text-[clamp(0.5rem,1.2vh,0.7rem)] ${dark ? "text-[#1E1E1E]" : "text-white"} `}>{t("tagline")}</TextReveal>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <LocaleSwitcher className="hidden lg:flex" />
                <button className={`pointer-events-auto button ${dark ? "" : "button-dark"} hidden lg:block font-bb-mono font-medium tracking-tight uppercase`} onClick={toggleMenu}>
                    {menuOpen ? t("close") : t("menu")}
                </button>
            </div>
        </header>
    )
}
