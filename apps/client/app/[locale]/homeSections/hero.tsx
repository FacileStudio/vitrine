'use client'

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Link from "@/components/facile/transitionLink";
import Arrow from "@/components/facile/arrow";
import TextReveal from "@/components/facile/textReveal";
import HeroHeads from "@/components/facile/heroHeads";
import { usePinProgress } from "@/hooks/use-pin-progress";

export default function Hero({ charged }: { charged: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);
    const chevronRef = useRef<HTMLSpanElement>(null);
    const copyRef = useRef<HTMLDivElement>(null);
    const [leaving, setLeaving] = useState(false);
    const [copyGone, setCopyGone] = useState(false);
    const t = useTranslations("home");
    const tc = useTranslations("common.header");

    // everything is pinned to the viewport: the heads leave on the first scroll, the copy and cue once the next section has passed over the copy
    usePinProgress(sectionRef, (p) => {
        const next = document.getElementById("manifesto")?.getBoundingClientRect().top ?? Infinity;
        // the copy box fills the screen, so measure its highest child: stacked on mobile, side by side on desktop
        const copyTop = Math.min(window.innerHeight, ...Array.from(copyRef.current?.children ?? [], (c) => c.getBoundingClientRect().top));

        setLeaving(p > 0.08);
        setCopyGone(next < copyTop);
    });

    const shown = charged && !leaving;
    const copyShown = charged && !copyGone;
    // on exit, squeeze the intro delays (0.8s to 1.45s) into a quick stagger that keeps their order
    const at = (delay: number, gone: boolean) => (gone ? (delay - 0.8) / 4 : delay);

    useEffect(() => {
        const tween = gsap.to(chevronRef.current, {
            y: 4,
            duration: 0.8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        });

        return () => { tween.kill(); };
    }, []);

    return (
        <section id="hero" ref={sectionRef} className="h-screen w-full relative overflow-hidden bg-foreground text-background">
            <HeroHeads open={shown} />

            <div ref={copyRef} className="pointer-events-none fixed inset-0 z-[70] flex flex-col lg:flex-row items-center justify-center gap-10 lg:justify-between px-6 lg:px-[22vw]">
                <div className="flex flex-col items-center lg:items-start gap-6">
                    <TextReveal open={copyShown} leaving={copyGone} delay={at(0.8, copyGone)}>
                        <img src="/Facile.svg" alt={tc("logoAlt")} className="h-[5vh] lg:h-[6vh] w-auto invert" />
                    </TextReveal>
                </div>

                <div className="flex items-center lg:items-center gap-12 text-center lg:text-end">
                    <h1 className="lead text-background">
                        {(t.raw("hero.headline") as string[]).map((line, i) => (
                            <TextReveal key={i} open={copyShown} leaving={copyGone} delay={at(0.9 + i * 0.1, copyGone)}>
                                {line}
                            </TextReveal>
                        ))}
                    </h1>

                    <TextReveal open={copyShown} leaving={copyGone} delay={at(1.2, copyGone)} cropClassName="hidden md:block w-fit">
                        <Link href="/projects" className={`button button-dark group flex w-fit items-center gap-[1vh] ${copyGone ? "" : "pointer-events-auto"}`}>
                            <p>{t("seeProjects")}</p>
                            <Arrow />
                        </Link>
                    </TextReveal>
                </div>
            </div>

            <a href="#manifesto" className={`fixed bottom-8 left-1/2 z-[70] -translate-x-1/2 flex items-center gap-2 ${copyGone ? "pointer-events-none" : ""}`}>
                <TextReveal as="p" open={copyShown} leaving={copyGone} delay={at(1.4, copyGone)} className="tagText text-background">
                    {t("hero.scroll")}
                </TextReveal>

                <TextReveal open={copyShown} leaving={copyGone} delay={at(1.45, copyGone)} className="tagText text-background">
                    <span ref={chevronRef} className="inline-block">↓</span>
                </TextReveal>
            </a>
        </section>
    )
}
