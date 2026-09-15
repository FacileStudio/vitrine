'use client'

import gsap from "gsap";
import { useEffect, type Ref, type RefObject } from "react";
import { EASE, hideRevealY, run, slideY } from "@/app/utils/animations";
import { Bento } from "./bento";
import { BLOCKS } from "./blocks";
import PersonHead from "./head";
import type { Chapter } from "./types";

interface TrackProps {
    sections: Chapter[];
    /** the element the blocks travel across — the observers measure against it */
    scrollerRef: RefObject<HTMLElement | null>;
    onClose?: () => void;
    ref?: Ref<HTMLDivElement>;
}

/**
 * The observers that wake a block as it arrives: videos play, stills settle out of
 * their zoom, copy rides up. Both tracks share it and only differ in `rootMargin`,
 * the axis the band is cropped along before anything counts as arrived.
 */
export function useTrackReveal(scrollerRef: RefObject<HTMLElement | null>, sections: Chapter[], rootMargin: string) {
    useEffect(() => {
        const el = scrollerRef.current;
        if (!el)
            return;

        // cropped in from both leading edges, so a block plays once it is properly
        // on screen rather than the instant a sliver of it clears the edge
        const arrival = { root: el, rootMargin, threshold: 0.2 };

        const media = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                const v = e.target as HTMLVideoElement;
                if (e.isIntersecting) v.play().catch(() => {});
                else v.pause();
            });
        }, { root: el, threshold: 0.2 });
        el.querySelectorAll("video").forEach((v) => media.observe(v));

        // media waits in the wings zoomed in, then settles into its natural
        // framing as the band reaches it, cropped by its own cell the whole way.
        // Nothing is faded out — a block half off screen still has to read
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

        // the copy rides up out of its own crop, so it has to start under it —
        // SplitLines pre-hides the lines it builds, the hand-written ones need it here
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

// the band itself: chapters of bento blocks laid out sideways. It does not move —
// a driver (the fullscreen Story, the pinned Band) decides how it travels. A phone
// reads the same chapters down a VerticalTrack
export default function Track({ sections, scrollerRef, onClose, ref }: TrackProps) {
    useTrackReveal(scrollerRef, sections, "0px -18% 0px -18%");

    return (
        <div ref={ref} className="flex h-full w-max items-center gap-32 lg:gap-128 px-[6vw]">
            {sections.map((chapter, s) => (
                <div key={s} className="flex items-center gap-8 lg:gap-20">
                        <div className="">
                            {chapter.owners.map((p) => (
                                <PersonHead key={p.name} person={p} className="h-[12vh] w-[12vh] mt-4 max-h-64 max-w-64" gridSize={0.43} scaleMultiplier={2.5} />
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
