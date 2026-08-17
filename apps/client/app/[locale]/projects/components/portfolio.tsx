'use client'

import React, { useState } from "react"
import { ReactLenis, type LenisRef } from "lenis/react";
import PageCurtain from "@/components/facile/pageTransition";
import Header from "@/components/facile/header";
import Menu from "@/components/facile/menu";
import Shelf from "./shelf";

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);
    const lenisRef = React.useRef<LenisRef>(null);

    // same lock as the home page: the menu owns the viewport while it is open
    React.useEffect(() => {
        const lenis = lenisRef.current?.lenis;
        if (!lenis) return;
        if (menuOpen) lenis.stop();
        else lenis.start();
    }, [menuOpen]);

    return (
        <div className="relative min-h-screen w-full bg-foreground text-white">
            <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, smoothWheel: true }} />

            <PageCurtain enter="dark" leave="dark" />

            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <Shelf />

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    )
}
