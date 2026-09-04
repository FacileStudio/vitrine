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

// the band itself: chapters of bento blocks, and the observers that wake a block
// as it arrives. It does not move — a driver (the fullscreen Story, the pinned
// Band) decides how the track travels across its scroller
export default function Track({ sections, scrollerRef, onClose, ref }: TrackProps) {
    useEffect(() => {
        const el = scrollerRef.current;
        if (!el)
            return;

        // the band is cropped in from both edges before anything counts as arrived,
        // so a block plays once it is properly on screen rather than the instant a
        // sliver of it clears the right edge
        const arrival = { root: el, rootMargin: "0px -18% 0px -18%", threshold: 0.2 };

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
    }, [scrollerRef, sections]);

    return (
        <div ref={ref} className="flex h-full w-max items-center gap-128 px-[6vw]">
            {sections.map((chapter, s) => (
                <div key={s} className="flex items-center gap-8">
                    {/* whoever owns the chapter, sat in front of its bento. The
                        opening chapter credits nobody — its intro already names
                        the whole crew */}
                    {chapter.owners.map((p) => (
                        <PersonHead key={p.name} person={p} className="h-[7vh] w-[7vh] max-h-20 max-w-20" gridSize={0.5} label />
                    ))}

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
