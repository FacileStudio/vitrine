import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
const sharp = CustomEase.create("sharp", "0.8, 0, 0.2, 1");
const cover = CustomEase.create("cover", "0.7, 0, 0.3, 1");
const drop = CustomEase.create("drop", "0.6, 0, 1, 1");

export const EASE = {
    soft: "power2.out",
    in: "power3.in",
    out: "power3.out",
    glide: "power3.inOut",
    sharp,
    cover,
    drop,
} as const;

// waapi transforms run on the compositor, so a curtain keeps moving while the next page compiles its shaders
export const slide = (el: HTMLElement, transform: string, { duration, delay = 0, easing }: { duration: number; delay?: number; easing: string }) => {
    const from = getComputedStyle(el).transform;

    el.getAnimations().forEach((a) => a.cancel());
    el.style.transform = transform;
    el.animate([{ transform: from }, { transform }], {
        duration: duration * 1000,
        delay: delay * 1000,
        easing,
        fill: "backwards",
    });
};

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
