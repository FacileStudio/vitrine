import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
const cover = CustomEase.create("cover", "0.7, 0, 0.3, 1");
const sharp = CustomEase.create("sharp", "0.8, 0, 0.2, 1");

export const EASE = {
    soft: "power2.out",
    in: "power3.in",
    out: "power3.out",
    inOut: "power4.inOut",
    glide: "power3.inOut",
    cover,
    sharp,
} as const;

export const run = (els: (HTMLElement | null)[], animate: (el: HTMLElement, i: number) => void) =>
    els.forEach((el, i) => el && animate(el, i));



export const revealY =(show: boolean, leaving: boolean) => show ? 0 : leaving ? -110 : 110;

const present = (els: (HTMLElement | null)[]) => els.filter((el): el is HTMLElement => el != null);
export const hideRevealY = (els: (HTMLElement | null)[]) => { const t = present(els); if (t.length) gsap.set(t, { yPercent: 110 }); };
export const hideRevealX = (els: (HTMLElement | null)[]) => { const t = present(els); if (t.length) gsap.set(t, { xPercent: 110 }); };

export const slideY = (show: boolean, leaving: boolean, { stagger = 0.2, duration = 0.5, delay = 0 } = {}) =>
    (el: HTMLElement, i: number) =>
        gsap.to(el, { yPercent: revealY(show, leaving), duration, ease: EASE.soft, delay: delay + i * stagger, overwrite: "auto" });
export const slideX = (show: boolean, { stagger = 0.2, duration = 1, delay = 0 } = {}) =>
    (el: HTMLElement, i: number) =>
        gsap.to(el, { xPercent: show ? 0 : 110, duration, ease: EASE.cover, delay: delay + i * stagger, overwrite: "auto" });



export const hideFade = (els: (HTMLElement | null)[], y = 12) => gsap.set(els, { opacity: 0, y });
export const fade = (show: boolean, { y = 12, duration = 0.6, stagger = 0.1, delay = 0 } = {}) =>
    (el: HTMLElement, i: number) =>
        gsap.to(el, { opacity: show ? 1 : 0, y: show ? 0 : y, duration, ease: EASE.soft, delay: delay + i * stagger });


export function pointerDrift(el: HTMLElement | null, strength = 24, duration = 1.2) {
    const onMove = (e: PointerEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * strength;
        const y = (e.clientY / window.innerHeight - 0.5) * strength;
        gsap.to(el, { x, y, duration, ease: EASE.soft });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
}
