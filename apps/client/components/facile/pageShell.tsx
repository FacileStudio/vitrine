'use client'

import { useEffect, useRef, useState, type ReactNode, type Ref } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import PageCurtain, { type Tone } from "@/components/facile/pageTransition";
import Header from "@/components/facile/header";
import Menu from "@/components/facile/menu";
import Footer from "@/components/facile/footer";

type CurtainProps = { enter?: Tone; leave?: Tone; arrive?: boolean };

// Page frame: header, menu, optional smooth scroll, curtain and footer
export default function PageShell({
    className,
    lenis = false,
    locked = false,
    curtain,
    footer = false,
    ref,
    children,
}: {
    className?: string;
    lenis?: boolean;
    locked?: boolean;
    curtain?: CurtainProps;
    footer?: boolean;
    ref?: Ref<HTMLDivElement>;
    children: ReactNode;
}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const lenisRef = useRef<LenisRef>(null);

    useEffect(() => {
        const instance = lenisRef.current?.lenis;
        if (!instance) return;
        if (menuOpen || locked) instance.stop();
        else instance.start();
    }, [menuOpen, locked]);

    return (
        <div ref={ref} className={className}>
            {lenis ? <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, smoothWheel: true }} /> : null}

            {curtain ? <PageCurtain {...curtain} /> : null}

            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            {children}

            {footer ? <Footer /> : null}

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    );
}
