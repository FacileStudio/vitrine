'use client'

import gsap from "gsap";
import { useEffect, type Ref, type RefObject } from "react";
import { EASE, hideRevealY, run, slideY } from "@/lib/animations";
import { Bento } from "./bento";
import { BLOCKS } from "./blocks";
import PersonHead from "./head";
import type { Chapter } from "./types";

interface TrackProps {
    sections: Chapter[];
    scrollerRef: RefObject<HTMLElement | null>;
    onClose?: () => void;
    ref?: Ref<HTMLDivElement>;
}

export function useTrackReveal(scrollerRef: RefObject<HTMLElement | null>, sections: Chapter[], rootMargin: string) {
    useEffect(() => {
        const el = scrollerRef.current;
        if (!el)
            return;

        const arrival = { root: el, rootMargin, threshold: 0.2 };

        const media = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                const v = e.target as HTMLVideoElement;
                if (e.isIntersecting) v.play().catch(() => {});
                else v.pause();
            });
        }, { root: el, threshold: 0.2 });
        el.querySelectorAll("video").forEach((v) => media.observe(v));

        const stills = Array.from(el.querySelectorAll<HTMLElement>("[data-pop]"));

        gsap.set(stills, { scale: 1.1 });

        const pop = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                const inView = e.isIntersecting;

                gsap.to(e.target, {
                    scale: inView ? 1 : 1.1,
                    duration: inView ? 1.1 : 0.45,
                    ease: inView ? EASE.out : EASE.in,
                    overwrite: true,
                });
            });
        }, arrival);
        stills.forEach((m) => pop.observe(m));

        const lines = (b: Element) => Array.from(b.querySelectorAll<HTMLElement>("[data-reveal]"));
        const blocks = Array.from(el.querySelectorAll<HTMLElement>("[data-block]"));

        blocks.forEach((b) => hideRevealY(lines(b)));

        const copy = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                run(lines(e.target), slideY(e.isIntersecting, false, { stagger: 0.06, duration: 0.6 }));
            });
        }, arrival);
        blocks.forEach((b) => copy.observe(b));

        return () => { media.disconnect(); pop.disconnect(); copy.disconnect(); };
    }, [scrollerRef, sections, rootMargin]);
}

export default function Track({ sections, scrollerRef, onClose, ref }: TrackProps) {
    useTrackReveal(scrollerRef, sections, "0px -18% 0px -18%");

    return (
        <div ref={ref} className="flex h-full w-max items-center gap-32 lg:gap-128 px-[6vw]">
            {sections.map((chapter, s) => (
                <div key={s} className="flex items-center gap-8 lg:gap-20">
                        <div className="">
                            {chapter.owners.map((p) => (
                                <PersonHead key={p.name} person={p} className="h-[12vh] w-[12vh] mt-4 max-h-64 max-w-64" />
                            ))}
                        </div>

                    <Bento>
                        {chapter.blocks.map((b, i) => {
                            const Part = BLOCKS[b.type];

                            return <Part key={i} block={b} onClose={onClose} />;
                        })}
                    </Bento>
                </div>
            ))}
        </div>
    );
}
