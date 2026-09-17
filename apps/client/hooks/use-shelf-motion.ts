'use client'

import gsap from "gsap";
import { useLayoutEffect, useRef, type MouseEvent } from "react";
import { usePinProgress } from "@/hooks/use-pin-progress";
import { EASE, run, slideY, hideRevealY } from "@/lib/animations";
import { ARRIVE } from "@/components/facile/pageTransition";

type SetRef = (i: number) => (el: HTMLDivElement | null) => void;

export type ShelfRefs = {
    card: SetRef;
    media: SetRef;
    content: SetRef;
};

const targets = (el: Element) => Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));

export function useShelfMotion({ zoom, range, key }: { zoom: number; range: number; key?: unknown }) {
    const sectionRef = useRef<HTMLElement>(null);
    const progressRef = useRef(0);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const mounted = useRef(0);

    const refs: ShelfRefs = {
        card: (i) => (el) => { cardRefs.current[i] = el; },
        media: (i) => (el) => { mediaRefs.current[i] = el; },
        content: (i) => (el) => { contentRefs.current[i] = el; },
    };

    const reset = () => {
        cardRefs.current = [];
        mediaRefs.current = [];
        contentRefs.current = [];
    };

    useLayoutEffect(() => {
        if (!mounted.current) mounted.current = performance.now();
        const wait = () => Math.max(0, ARRIVE - (performance.now() - mounted.current)) / 1000;
        const cards = cardRefs.current.filter((el): el is HTMLDivElement => el != null);

        gsap.set(mediaRefs.current.filter(Boolean), { scale: zoom });

        contentRefs.current.forEach((el) => el && hideRevealY(targets(el)));
        gsap.fromTo(cards, { opacity: 0 }, { opacity: 1, duration: 0.5, stagger: 0.06, delay: wait(), ease: EASE.out });

        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    run(targets(e.target), slideY(true, false, { stagger: 0.08, duration: 0.6, delay: wait() }));
                } else {
                    run(targets(e.target), slideY(false, true, { stagger: 0.04, duration: 0.4 }));
                }
            });
        }, { threshold: 0, rootMargin: "-40% 0px -40% 0px" });

        contentRefs.current.forEach((el) => el && io.observe(el));
        return () => io.disconnect();
    }, [key, zoom]);

    usePinProgress(sectionRef, (p, visible) => {
        progressRef.current = p;

        if (!visible)
            return;

        const vh = window.innerHeight;
        mediaRefs.current.forEach((el) => {
            const frame = el?.parentElement;
            if (!el || !frame)
                return;

            const r = frame.getBoundingClientRect();
            const progress = gsap.utils.clamp(0, 1, (vh - r.top) / (vh + r.height));

            gsap.set(el, { yPercent: gsap.utils.mapRange(0, 1, -range, range, progress) });
        });
    });

    const onEnter = (e: MouseEvent<HTMLElement>) => {
        const m = e.currentTarget.querySelector<HTMLElement>("[data-media]");
        if (!m)
            return;

        if (m instanceof HTMLVideoElement) {
            m.currentTime = 0;
            m.play().catch(() => {});
        }
        gsap.to(m, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.55,
            ease: "power3.out",
            overwrite: "auto"
        });
    };

    const onLeave = (e: MouseEvent<HTMLElement>) => {
        const m = e.currentTarget.querySelector<HTMLElement>("[data-media]");
        if (!m)
            return;

        gsap.to(m, {
            clipPath: "inset(100% 0% 0% 0%)",
            duration: 0.4,
            ease: "power3.in",
            overwrite: "auto",
            onComplete: () => { if (m instanceof HTMLVideoElement) m.pause(); }
        });
    };

    return { sectionRef, progressRef, refs, reset, onEnter, onLeave };
}
