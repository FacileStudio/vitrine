'use client'

import { useEffect, useLayoutEffect, useRef, type PointerEvent } from "react";
import gsap from "gsap";
import { ARROW } from "@/components/facile/arrow";
import TextReveal from "@/components/facile/textReveal";
import TransitionLink from "@/components/facile/transitionLink";
import type { MethodStep } from "@/lib/content/method";
import { EASE } from "@/lib/animations";
import { cn, pad2 } from "@/lib/utils";

// touch fires hover on tap, so the swap only answers a real mouse
const POINTER = "(hover: hover) and (pointer: fine)";

const HIDDEN = "inset(100% 0% 0% 0%)";
const SHOWN = "inset(0% 0% 0% 0%)";

const MAX_ITEMS = 4;

const LIFT = -16;

// degrees the card turns flat on the page with the cursor at its left or right edge
const TURN = 3;

export default function MethodCard({ step, index, open, className }: { step: MethodStep; index: number; open: boolean; className?: string }) {
    const card = useRef<HTMLAnchorElement>(null);
    const flood = useRef<HTMLDivElement>(null);
    const arrow = useRef<HTMLSpanElement>(null);
    const turn = useRef<gsap.QuickToFunc | null>(null);
    const keywords = step.keywords.split(",").map((k) => k.trim()).filter(Boolean);
    const items = step.items.slice(0, MAX_ITEMS);
    // non-uniform stagger: the first cards follow each other closely, later ones settle in
    const delay = 0.2 + Math.sqrt(index) * 0.12;

    const lines = (kind: "rest" | "more") => card.current?.querySelectorAll(`[data-line="${kind}"]`) ?? [];

    useLayoutEffect(() => {
        gsap.set(lines("more"), {
            yPercent: 110,
        });
    }, []);

    useEffect(() => {
        gsap.to(card.current, {
            clipPath: open ? SHOWN : HIDDEN,
            duration: open ? 0.9 : 0.4,
            delay: open ? delay : 0,
            ease: open ? EASE.cover : EASE.in,
            overwrite: "auto",
        });
    }, [open, delay]);

    useEffect(() => {
        const el = card.current;
        const fill = flood.current;
        const tip = arrow.current;

        return () => {
            gsap.killTweensOf([el, fill, tip]);
            el?.querySelectorAll("[data-line]").forEach((line) => gsap.killTweensOf(line));
        };
    }, []);

    // entering reads slower and staggers wider than leaving, so the swap feels deliberate in and snappy out
    const swap = (entering: boolean) => {
        if (!window.matchMedia(POINTER).matches)
            return;

        // multiplies every duration and stagger below: hover runs at 0.6, leaving at 0.42
        const speed = entering ? 0.6 : 0.42;

        // the hovered card rides above its neighbours while it overlaps them, and drops back once it has settled
        gsap.set(card.current, {
            zIndex: 10,
        });
        gsap.to(card.current, {
            y: entering ? LIFT : 0,
            duration: 0.5 * speed,
            ease: EASE.out,
            overwrite: "auto",
            onComplete: entering ? undefined : () => {
                gsap.set(card.current, {
                    zIndex: 0,
                });
            },
        });
        gsap.to(flood.current, {
            clipPath: entering ? SHOWN : HIDDEN,
            duration: 0.5 * speed,
            ease: EASE.cover,
            overwrite: true,
        });
        gsap.to(lines("rest"), {
            yPercent: entering ? -110 : 0,
            duration: 0.45 * speed,
            stagger: 0.04 * speed,
            ease: EASE.glide,
            overwrite: true,
        });
        gsap.to(lines("more"), {
            yPercent: entering ? 0 : 110,
            duration: 0.5 * speed,
            delay: entering ? 0.06 : 0,
            stagger: 0.05 * speed,
            ease: EASE.out,
            overwrite: true,
        });
        gsap.to(arrow.current, {
            rotate: entering ? 45 : 0,
            duration: 0.4 * speed,
            ease: EASE.out,
            overwrite: true,
        });
    };

    const lean = (x: number) => {
        const el = card.current;

        if (!el || !window.matchMedia(POINTER).matches)
            return;

        turn.current ??= gsap.quickTo(el, "rotation", {
            duration: 0.35,
            ease: EASE.out,
        });
        turn.current(x * TURN);
    };

    // the pointer across the card, from -1 at its left edge to 1 at its right
    const across = (e: PointerEvent<HTMLAnchorElement>) => {
        const r = e.currentTarget.getBoundingClientRect();

        return ((e.clientX - r.left) / r.width) * 2 - 1;
    };

    const press = (down: boolean) => gsap.to(card.current, {
        scale: down ? 0.98 : 1,
        duration: down ? 0.12 : 0.2,
        ease: EASE.out,
    });

    return (
        <TransitionLink
            ref={card}
            href={`/method#${step.slug}`}
            onPointerEnter={(e) => {
                swap(true);
                lean(across(e));
            }}
            onPointerMove={(e) => lean(across(e))}
            onPointerLeave={() => {
                lean(0);
                swap(false);
                press(false);
            }}
            onPointerDown={() => press(true)}
            onPointerUp={() => press(false)}
            style={{ clipPath: HIDDEN }}
            className={cn("glass relative isolate overflow-hidden rounded-fc flex flex-col gap-[3vh] p-[2.5vh] min-h-[32vh] text-foreground will-change-transform", className)}
        >
            <div ref={flood} style={{ clipPath: HIDDEN }} className="absolute inset-0 -z-10 bg-accent" aria-hidden="true" />

            <div className="flex items-center justify-between gap-6">
                <TextReveal as="p" open={open} delay={delay + 0.2} className="tabular-nums">
                    {pad2(index + 1)}
                </TextReveal>

                <TextReveal as="p" open={open} delay={delay + 0.22} className="text-current">
                    {step.duration}
                </TextReveal>
            </div>

            <div className="relative flex-1">
                <div className="flex flex-col">
                    {keywords.map((k) => (
                        <span key={k} className="block overflow-hidden">
                            <span data-line="rest" className="subtitle block text-foreground/30">
                                {k}
                            </span>
                        </span>
                    ))}
                </div>

                <ul className="absolute inset-0 flex flex-col gap-[0.5vh]" aria-hidden="true">
                    {items.map((item) => (
                        <li key={item} className="overflow-hidden">
                            <span data-line="more" className="block">
                                <p>{item}</p>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-end justify-between gap-6">
                <div className="flex flex-col gap-[1vh]">
                    <TextReveal as="h3" open={open} delay={delay + 0.24} className="subtitle">
                        {step.title}
                    </TextReveal>

                    <TextReveal as="p" open={open} delay={delay + 0.28} className="subtext text-current max-w-[40ch]">
                        {step.tagline}
                    </TextReveal>
                </div>

                <span ref={arrow} className="subtitle inline-block">{ARROW}</span>
            </div>
        </TransitionLink>
    );
}
