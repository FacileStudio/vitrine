import gsap from "gsap";

// One home for every UI motion. Import the preset you need and tune it through
// its options. Replicable reveal pattern: derive boolean flags from scroll, then
// feed them to `slide` / `revealY` through `run` (see homeSections/manifesto).

// Named eases so intent reads clearly and stays consistent across the app.
export const EASE = {
    soft: "power2.out",     // gentle settle — reveals, pointer drift
    in: "power3.in",        // accelerate away — closing panels
    out: "power3.out",      // decelerate in — opening panels
    inOut: "power4.inOut",  // heavy full-screen transition
    glide: "power3.inOut",  // lighter transition
} as const;

export const run = (els: (HTMLElement | null)[], animate: (el: HTMLElement, i: number) => void) => els.forEach((el, i) => el && animate(el, i));


export const revealY = (show: boolean, leaving: boolean) => show ? 0 : leaving ? -110 : 110;

export const hideReveal = (els: (HTMLElement | null)[]) => gsap.set(els, { yPercent: 110 });

export const slide = (show: boolean, leaving: boolean, { stagger = 0.2, duration = 0.5, delay = 0 } = {}) =>
    (el: HTMLElement, i: number) =>
        gsap.to(el, { yPercent: revealY(show, leaving), duration, ease: EASE.soft, delay: delay + i * stagger });

// --- fade: for elements a slide mask would clip (buttons, bordered pills) ---
// Park elements faded + nudged down before the first reveal.
export const hideFade = (els: (HTMLElement | null)[], y = 12) =>
    gsap.set(els, { opacity: 0, y });

// Animator for `run`: fade + lift into place, staggered by index.
export const fade = (show: boolean, { y = 12, duration = 0.6, stagger = 0.1, delay = 0 } = {}) =>
    (el: HTMLElement, i: number) =>
        gsap.to(el, { opacity: show ? 1 : 0, y: show ? 0 : y, duration, ease: EASE.soft, delay: delay + i * stagger });

// --- pointer drift: lag an element toward the cursor for a touch of depth ---
// Attach in an effect and return the value so cleanup detaches the listener.
export function pointerDrift(el: HTMLElement | null, strength = 24, duration = 1.2) {
    const onMove = (e: PointerEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * strength;
        const y = (e.clientY / window.innerHeight - 0.5) * strength;
        gsap.to(el, { x, y, duration, ease: EASE.soft });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
}
