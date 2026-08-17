'use client'

import React, { useState } from "react"
import { ReactLenis, type LenisRef } from "lenis/react";
import { useTranslations } from "next-intl";
import PageCurtain from "@/components/facile/pageTransition";
import Header from "@/components/facile/header";
import Menu from "@/components/facile/menu";
import Shelf from "./components/shelf";

// the projects page, printed instead of lit: same shell, same curtain, the light
// tone on every layer that carries one
export default function SuitePage() {
    const t = useTranslations("suite");
    const [menuOpen, setMenuOpen] = useState(false);
    const lenisRef = React.useRef<LenisRef>(null);

    // same lock as the projects page: the menu owns the viewport while it is open
    React.useEffect(() => {
        const lenis = lenisRef.current?.lenis;
        if (!lenis) return;
        if (menuOpen) lenis.stop();
        else lenis.start();
    }, [menuOpen]);

    return (
        <div className="relative min-h-screen w-full bg-background text-foreground">
            <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, smoothWheel: true }} />

            <PageCurtain enter="light" leave="light" />

            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <Shelf eyebrow={t("title")} lines={[t("subtitle")]} />

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    )
}
