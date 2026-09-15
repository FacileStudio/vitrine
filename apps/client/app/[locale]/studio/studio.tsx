'use client'

import { useEffect, useState } from "react";
import Header from "@/components/facile/header";
import Menu from "@/components/facile/menu";
import PageCurtain, { CURTAIN_MS } from "@/components/facile/pageTransition";
import MemberTiles from "./components/memberTiles";

export default function StudioPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [resolved, setResolved] = useState(false);

    // the heads arrive as a coarse grid and settle once the curtain has swept
    // off, so the page resolves rather than appearing finished — PostProcessing
    // tweens the value onto the dither uniform, nothing re-renders to animate it
    useEffect(() => {
        const t = setTimeout(() => setResolved(true), CURTAIN_MS);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-foreground">
            <PageCurtain enter="dark" leave="dark" />

            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <MemberTiles
                resolved={resolved}
                tileClassName="border-b border-r border-white/5 even:border-r-0 lg:border-b-0 lg:even:border-r lg:last:border-r-0"
            />

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    );
}
