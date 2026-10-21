'use client'

import { useEffect, useRef, useState } from "react";
import HeroHeads from "@/components/facile/heroHeads";
import { ARRIVE } from "@/components/facile/pageTransition";
import { useAfter } from "@/hooks/use-after";
import { usePinProgress } from "@/hooks/use-pin-progress";
import MethodIndex from "./methodIndex";
import MethodText from "./methodText";
import Reel from "./reel";

// no team means the whole crew
export type Slide = { key: string; anchor?: string; title: string; text: string; team?: string[] };

// about the time the leaving heads take to fly out before the next slide calls its own in
const SWAP_MS = 600;

// scroll each slide owns, in vh
const SLIDE_VH = 200;
// share of a slide before its end at which the heads missing from the next slide already leave
const EARLY = 0.25;

// a head stays while it belongs to both the slide on screen and the one the scroll is heading to
const crew = (a?: string[], b?: string[]) => (!a ? b : !b ? a : a.filter((slug) => b.includes(slug)));

export default function MethodScroll({ slides }: { slides: Slide[] }) {
    const sectionRef = useRef<HTMLElement>(null);
    const [target, setTarget] = useState(0);
    const [step, setStep] = useState(0);
    const [ahead, setAhead] = useState(0);
    const arrived = useAfter(true, ARRIVE);
    const n = slides.length;
    // the reels wait below until the curtain lifts, and roll everything up past the last slide
    const position = arrived ? target : -1;

    usePinProgress(sectionRef, (p) => {
        // slides scrolled so far, n past the last; the epsilon keeps an anchor's exact top on its own slide
        const at = p * n + 1e-3;

        setTarget(Math.floor(at));
        setAhead(Math.floor(at + EARLY));
    });

    // the text follows the scroll at once, the heads wait for it to settle so a fast pass brings them back once
    useEffect(() => {
        if (target === step || target >= n)
            return;

        const timer = setTimeout(() => setStep(target), SWAP_MS);

        return () => clearTimeout(timer);
    }, [target, step, n]);

    return (
        <section ref={sectionRef} className="relative w-full bg-foreground text-background" style={{ height: `${n * SLIDE_VH + 100}vh` }}>
            {/* the home rows link to /method#id, so each step keeps an anchor where its scroll starts */}
            {slides.map((s, i) => s.anchor ? (
                <span key={s.key} id={s.anchor} aria-hidden className="absolute left-0 h-px w-px" style={{ top: `${i * SLIDE_VH}vh` }} />
            ) : null)}

            {/* a head stays only while the slide on screen, the one scrolled to and the one coming up all have it; past the last slide nobody does */}
            <HeroHeads
                swift
                open={arrived && ahead < n}
                team={crew(crew(slides[step].team, slides[target]?.team), slides[ahead]?.team)}
            />

            <div className="pointer-events-none fixed inset-0 z-[70] grid content-center justify-items-center gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-[22vw]">
                <Reel
                    position={position}
                    delay={0.06}
                    className="lg:justify-self-start"
                    items={slides.map((s, i) => i
                        ? <h2 key={s.key} className="text-center text-background lg:text-start">{s.title}</h2>
                        : <h1 key={s.key} className="text-center text-background lg:text-start">{s.title}</h1>)}
                />

                <div className="grid max-w-[52ch] text-center lg:justify-self-end lg:text-end">
                    {slides.map((s, i) => (
                        <MethodText key={s.key} text={s.text} place={i === position ? 0 : i < position ? -1 : 1} />
                    ))}
                </div>
            </div>

            {/* the intro is not a part */}
            <MethodIndex parts={slides.filter((s) => s.anchor)} active={target - 1} open={arrived && target < n} />
        </section>
    );
}
