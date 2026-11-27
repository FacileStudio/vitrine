"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Link from "@/components/facile/transitionLink";
import Arrow from "@/components/facile/arrow";
import { useProjects } from "@/components/facile/contentProvider";
import { EASE } from "@/lib/animations";

// every: seconds a cover stays; wipe: seconds its clip takes to close from full height to nothing, uncovering the next one
const PEEK = { every: 1.6, wipe: 0.6 };

// both ends spelled in full: the browser stores inset(0% 0% 0% 0%) as inset(0%), and gsap cannot tween between mismatched shapes
const FULL = "inset(0% 0% 0% 0%)";
const SHUT = "inset(0% 0% 100% 0%)";

/** A small window cycling through project covers that turns into the projects button on hover or focus. */
export default function ProjectPeek({ className = "" }: { className?: string }) {
    const covers = useProjects().map((p) => p.image).filter(Boolean);
    const refs = useRef<(HTMLImageElement | null)[]>([]);
    const t = useTranslations("home");

    useEffect(() => {
        const imgs = refs.current.slice(0, covers.length);

        if (imgs.length < 2)
            return;

        let at = 0;
        let wait: gsap.core.Tween | null = null;

        // only the shown cover and the one under it render, so hidden covers never bleed through the subpixel edges
        gsap.set(imgs, { clipPath: FULL, zIndex: (i) => (i === 0 ? 2 : 0), autoAlpha: (i) => (i === 0 ? 1 : 0) });

        // each wipe schedules the next on gsap's clock, so wipes never overlap and pause with the tab
        const step = () => {
            const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const cur = imgs[at];
            const next = imgs[(at = (at + 1) % imgs.length)];

            gsap.set(next, { zIndex: 1, autoAlpha: 1, clipPath: FULL });
            gsap.fromTo(cur, { clipPath: FULL }, {
                clipPath: SHUT,
                duration: still ? 0 : PEEK.wipe,
                ease: EASE.cover,
                onComplete: () => {
                    gsap.set(cur, { zIndex: 0, autoAlpha: 0, clipPath: FULL });
                    gsap.set(next, { zIndex: 2 });
                    wait = gsap.delayedCall(PEEK.every, step);
                },
            });
        };

        wait = gsap.delayedCall(PEEK.every, step);

        return () => {
            wait?.kill();
            gsap.killTweensOf(imgs);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [covers.join()]);

    // only the link is rounded and clips; isolate keeps its own stacking context so the composited layers stay inside the corners
    // the button's own backdrop blur softens the covers on hover, so the covers never need a filter or a scale of their own
    return (
        <Link
            href="/projects"
            aria-label={t("seeProjects")}
            className={`group relative block aspect-[4/2] w-[18vh] overflow-hidden isolate rounded-md ${className}`}
        >
            {covers.map((src, i) => (
                <img
                    key={src}
                    ref={(el) => { refs.current[i] = el; }}
                    src={src}
                    alt=""
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={i === 0 ? { zIndex: 2 } : { zIndex: 0, visibility: "hidden" }}
                />
            ))}

            <span className="button button-dark absolute inset-0 z-10 !rounded-none flex items-center justify-center gap-[1vh] !bg-black/50 [--glass-blur:3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true">
                <p>{t("seeProjects")}</p>
                <Arrow />
            </span>
        </Link>
    );
}
