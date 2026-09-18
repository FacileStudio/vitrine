"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useScroll } from "@/hooks/use-scroll";
import TextReveal from "@/components/facile/textReveal";
import { ContactLinks, NavLinks } from "@/components/facile/navLinks";
import FooterHeads from "@/components/facile/footerHeads";

export default function Footer() {
    const sectionRef = useRef<HTMLElement>(null);
    const [show, setShow] = useState(false);
    const [animate, setAnimate] = useState(false);
    const t = useTranslations("common");

    useScroll(() => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.85;
        setShow(inView);

        setAnimate(rect.top <= window.innerHeight * 0.7);
    });

    return (
        <section ref={sectionRef} id="contact" className="relative w-full h-screen overflow-hidden flex flex-col bg-foreground justify-between py-12 pt-28 px-12 lg:px-20">
            <FooterHeads open={animate} active={show} />

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 relative z-10">
                <TextReveal as="h2" open={show} className="max-w-[16ch] text-white">
                    {t("footer.buildTogether")}
                </TextReveal>

                {/* NavLinks goes row and shows sublinks from md, the footer holds both back to lg */}
                <NavLinks open={show} delay={0.1} className="md:flex-col lg:flex-row md:[&_ul]:hidden lg:[&_ul]:flex" />
            </div>

            <div className="relative z-20 w-full flex items-end justify-between lg:flex-row lg:items-center gap-6">
                <ContactLinks open={show} delay={0.6} className="flex-col items-start gap-x-8 gap-y-2" />

                <TextReveal as="p" open={show} delay={0.8} className="text-white/40">
                    <span className="flex items-center gap-2">
                        {t("footer.madeBy")}
                        <img src="/Facile.svg" alt="Facile." className="h-[24px] mb-3 w-auto invert opacity-40" />
                        Studio
                    </span>
                </TextReveal>
            </div>
        </section>
    );
}
