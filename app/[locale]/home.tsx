'use client'

import React from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import Menu from "@/components/facile/menu";
import Header from "@/components/facile/header";
import ShadowFilter from "@/components/facile/shadowFilter";
import Rideau from "@/components/facile/rideau";
import Hero from "./homeSections/hero";
import Manifesto from "./homeSections/manifesto";
import Suite from "./homeSections/suite";
import Avis from "./homeSections/avis";
import Shelf from "./homeSections/shelf";
import Friends from "./homeSections/friends";
import Footer from "./homeSections/footer";

export default function Home() {
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

    const [charged, setCharged] = React.useState(false);
    const lenisRef = React.useRef<LenisRef>(null);

    // lock scrolling until loaded, and while the menu is open
    React.useEffect(() => {
        const lenis = lenisRef.current?.lenis;
        if (!lenis) return;
        if (charged && !menuOpen) lenis.start();
        else lenis.stop();
    }, [charged, menuOpen]);

    // const caseStudyT = useTranslations('portfolio.caseStudy');
    // const featuredProjects = featuredSlugs.map(slug => data.find(p => p.slug === slug)).filter((p): p is NonNullable<typeof p> => p !== undefined);



    // React.useEffect(() => TransitionIn(2), []);


    return (
        <div className="relative">
            <Rideau setCharged={setCharged} />

            <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, smoothWheel: true }} />

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            {/* <ShadowFilter /> */}

            <main className="min-h-screen w-full">
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                <Hero charged={charged} />

                <Manifesto />

                <Friends />

                <Shelf />

                <Friends id="friends-2" />

                <Suite />

                <Avis />
            </main>

            <Footer />
            
            {/* <FeaturedProjects
                projects={featuredProjects}
                t={t}
                caseStudyT={caseStudyT}
                onNavigate={(href: string) => TransitionOut({ href, router })}
            />

            <Process t={t} /> */}

        </div>
    );
}
