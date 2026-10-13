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

const revealY = (show: boolean, leaving: boolean) => show ? 0 : leaving ? -110 : 110;

const present = (els: (HTMLElement | null)[]) => els.filter((el): el is HTMLElement => el != null);

export const hideRevealY = (els: (HTMLElement | null)[]) => {
    const t = present(els);

    if (t.length)
        gsap.set(t, { yPercent: 110 });
};

export const slideY = (show: boolean, leaving: boolean, { stagger = 0.2, duration = 0.5, delay = 0 } = {}) =>
    (el: HTMLElement, i: number) =>
        gsap.to(el, {
            yPercent: revealY(show, leaving),
            duration,
            ease: EASE.soft,
            delay: delay + i * stagger,
            overwrite: "auto",
        });
