'use client'

import React, { useState } from "react"
import { ReactLenis, type LenisRef } from "lenis/react";
import { TransitionIn } from "@/components/facile/pageTransition";
import { usePortfolioNavigation } from "../lib/navigation";
import { MobileNavigationButtons } from "./mobileNavigation";
import Header from "@/components/facile/header";
import Menu from "@/components/facile/menu";
import ProjectsSection from "./projectsSection";

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { setSelectedWorkId, selectedWorkId, handleNext, handlePrevious } = usePortfolioNavigation();
    const lenisRef = React.useRef<LenisRef>(null);

    React.useEffect(() => TransitionIn(0), []);

    // same lock as the home page: the menu owns the viewport while it is open
    React.useEffect(() => {
        const lenis = lenisRef.current?.lenis;
        if (!lenis) return;
        if (menuOpen) lenis.stop();
        else lenis.start();
    }, [menuOpen]);

    return (
        <div className="relative min-h-screen w-full bg-[#111] text-white">
            <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, smoothWheel: true }} />

            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <ProjectsSection />

            <MobileNavigationButtons
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                selectedWorkId={selectedWorkId}
                setSelectedWorkId={setSelectedWorkId}
            />

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    )
}
