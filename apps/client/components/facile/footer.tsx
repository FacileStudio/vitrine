"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useScroll } from "@/hooks/use-scroll";
import { useAfter } from "@/hooks/use-after";
import TextReveal from "@/components/facile/textReveal";
import { ContactLinks, NavLinks } from "@/components/facile/navLinks";
import MemberTiles from "@/components/facile/memberTiles";

export default function Footer() {
    const sectionRef = useRef<HTMLElement>(null);
    const [show, setShow] = useState(false);
    const [reached, setReached] = useState(false);
    const resolved = useAfter(reached, 900);
    const t = useTranslations("common");

    useScroll(() => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.85;
        setShow(inView);
        if (inView) setReached(true);
    });

    // every link rises in its own crop, the same links and timing as the menu
    return (
        <section ref={sectionRef} id="contact" className="relative w-full min-h-screen flex flex-col justify-between py-24 px-12 lg:px-20">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <TextReveal as="h2" open={show} className="max-w-[16ch] text-white">
                    {t("footer.buildTogether")}
                </TextReveal>

                <NavLinks open={show} delay={0.1} className="flex-wrap" />
            </div>

            <div className="absolute bottom-0 left-0 w-full">
                <div className="-mx-12 lg:-mx-20 pt-20 px-20 h-[70vh]">
                    {reached ? <MemberTiles resolved={resolved} dimmed={false} /> : null}
                </div>
                <div className="absolute z-20 bottom-0 w-full flex flex-col p-20 lg:flex-row lg:items-center lg:justify-between gap-6">
                    <ContactLinks open={show} delay={0.6} className="hidden md:flex flex-wrap gap-x-8 gap-y-2" />

                    <TextReveal as="p" open={show} delay={0.8} className="text-white/40">
                        {t("footer.madeBy")}
                    </TextReveal>
                </div>
            </div>
        </section>
    );
}
