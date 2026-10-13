'use client'

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import TextReveal from "@/components/facile/textReveal";
import Emphasis from "@/components/facile/emphasis";
import { usePinProgress } from "@/hooks/use-pin-progress";
import { EASE } from "@/lib/animations";
import { isVideoFile } from "@/lib/utils";
import type { ProcessStep } from "@/lib/content/process";
import ProcessText from "./processText";
import ProcessTeam from "./processTeam";
import ProcessList from "./processList";

const SHOWN = "inset(0% 0% 0% 0%)";
const HIDDEN = "inset(100% 0% 0% 0%)";

const stateOf = (i: number, active: number) => (i < active ? "past" : i === active ? "active" : "next");

export default function ProcessScroll({ steps }: { steps: ProcessStep[] }) {
    const t = useTranslations("process");
    const sectionRef = useRef<HTMLElement>(null);
    const frames = useRef<(HTMLDivElement | null)[]>([]);
    const [active, setActive] = useState(0);

    usePinProgress(sectionRef, (progress) => {
        // steps scrolled so far: the pinned run is one screen per gap between steps
        setActive(Math.round(progress * (steps.length - 1)));
    });

    // later images stack above earlier ones, so wiping each one up or down is enough to show the active one
    useEffect(() => {
        frames.current.forEach((frame, i) => {
            gsap.to(frame, {
                clipPath: i <= active ? SHOWN : HIDDEN,
                duration: 0.9,
                ease: EASE.glide,
                overwrite: true,
            });
        });
    }, [active]);

    return (
        <section ref={sectionRef} style={{ height: `${steps.length * 100}vh` }} className="relative w-screen">
            {/* the home rows link to /process#id, so each step keeps an anchor where it sits in the scroll */}
            {steps.map((e, i) => (
                <span key={e.slug} id={e.slug} aria-hidden className="absolute left-0 h-px w-px" style={{ top: `${i * 100}vh` }} />
            ))}

            <div className="sticky top-0 flex h-screen w-full flex-col lg:flex-row">
                <div className="flex min-h-0 flex-1 flex-col justify-between gap-[3vh] px-6 pt-[6vh] pb-[2vh] lg:w-1/2 lg:flex-none lg:px-12">
                    <TextReveal as="h2" open className="max-w-[16ch]">
                        <Emphasis text={t("scroll")} />
                    </TextReveal>

                    <div className="flex flex-col gap-[3vh]">
                        <ProcessTeam team={steps[active].team} />

                        <div className="grid max-w-[72ch]">
                            {steps.map((e, i) => (
                                <ProcessText key={e.slug} step={e} state={stateOf(i, active)} />
                            ))}
                        </div>
                    </div>

                    <ProcessList steps={steps} active={active} />
                </div>

                <div className="relative order-first h-[35vh] w-full shrink-0 overflow-hidden lg:order-none lg:h-screen lg:w-1/2">
                    {steps.map((e, i) => (
                        <div
                            key={e.slug}
                            ref={(el) => { frames.current[i] = el; }}
                            className="absolute inset-0"
                            style={{ clipPath: i === 0 ? SHOWN : HIDDEN }}
                        >
                            {!e.image ? null : isVideoFile(e.image) ? (
                                <video src={e.image} autoPlay loop muted playsInline preload="metadata" className="h-full w-full object-cover" />
                            ) : (
                                <img src={e.image} alt={e.title} loading={i ? "lazy" : "eager"} decoding="async" className="h-full w-full object-cover" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
