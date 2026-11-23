import { useEffect, useRef, type PointerEvent } from "react";
import gsap from "gsap";
import { EASE } from "@/lib/animations";

// touch fires hover on tap, so the card only answers a real mouse
const POINTER = "(hover: hover) and (pointer: fine)";

export const HIDDEN = "inset(100% 0% 0% 0%)";
export const SHOWN = "inset(0% 0% 0% 0%)";

const INK = "#FFFFFF";

// rest matches --fc-radius (0.375rem), so leaving clears back to the class without a jump
const RADIUS = { rest: "0.375rem", hover: "1.5rem" };

const LIFT = -16;

// degrees the card turns flat on the page with the cursor at its left or right edge
const TURN = 3;

// speed multiplies a caller's durations and staggers: hover runs at 0.6, leaving at 0.42
export type Swap = (entering: boolean, speed: number, card: HTMLElement) => void;

export function useHoverCard<T extends HTMLElement>(onSwap?: Swap) {
    const card = useRef<T>(null);
    const flood = useRef<HTMLDivElement>(null);
    const turn = useRef<gsap.QuickToFunc | null>(null);
    const ink = useRef("");

    useEffect(() => {
        const el = card.current;
        const fill = flood.current;

        return () => {
            gsap.killTweensOf([el, fill]);
        };
    }, []);

    const fine = () => window.matchMedia(POINTER).matches;

    // entering reads slower than leaving, so the card answers deliberately and lets go fast
    const swap = (entering: boolean) => {
        const el = card.current;

        if (!el || !fine())
            return;

        const speed = entering ? 0.6 : 0.42;

        // the card's own text colour, read before the tween so a light card fades back to light rather than to black
        if (entering && !gsap.isTweening(el))
            ink.current = getComputedStyle(el).color;

        gsap.to(el, {
            color: entering ? INK : ink.current,
            duration: 0.4 * speed,
            ease: EASE.out,
            overwrite: "auto",
            clearProps: entering ? undefined : "color",
        });
        gsap.to(el, {
            borderRadius: entering ? RADIUS.hover : RADIUS.rest,
            duration: 0.5 * speed,
            ease: EASE.out,
            overwrite: "auto",
            clearProps: entering ? undefined : "borderRadius",
        });

        // the hovered card rides above its neighbours while it overlaps them, and drops back once it has settled
        gsap.set(el, {
            zIndex: 10,
        });
        gsap.to(el, {
            y: entering ? LIFT : 0,
            duration: 0.5 * speed,
            ease: EASE.out,
            overwrite: "auto",
            onComplete: entering ? undefined : () => {
                gsap.set(el, {
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

        onSwap?.(entering, speed, el);
    };

    const lean = (x: number) => {
        const el = card.current;

        if (!el || !fine())
            return;

        turn.current ??= gsap.quickTo(el, "rotation", {
            duration: 0.35,
            ease: EASE.out,
        });
        turn.current(x * TURN);
    };

    // the pointer across the card, from -1 at its left edge to 1 at its right
    const across = (e: PointerEvent<T>) => {
        const r = e.currentTarget.getBoundingClientRect();

        return ((e.clientX - r.left) / r.width) * 2 - 1;
    };

    const press = (down: boolean) => gsap.to(card.current, {
        scale: down ? 0.98 : 1,
        duration: down ? 0.12 : 0.2,
        ease: EASE.out,
    });

    const handlers = {
        onPointerEnter: (e: PointerEvent<T>) => {
            swap(true);
            lean(across(e));
        },
        onPointerMove: (e: PointerEvent<T>) => lean(across(e)),
        onPointerLeave: () => {
            lean(0);
            swap(false);
            press(false);
        },
        onPointerDown: () => press(true),
        onPointerUp: () => press(false),
    };

    return { card, flood, handlers };
}
