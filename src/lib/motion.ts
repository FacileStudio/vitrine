import { gsap } from "gsap";
import { prefersReducedMotion } from "@facile/muse";

let scrollLockUntil = 0;

export function scrollReveal(
  node: HTMLElement,
  opts: { delay?: number; stagger?: number; y?: number } = {},
) {
  if (typeof window === "undefined" || prefersReducedMotion()) return {};
  const delay = opts.delay ?? 0;
  const stagger = opts.stagger ?? 0.07;
  const items = Array.from(node.querySelectorAll<HTMLElement>("[data-reveal-item]"));
  const targets = items.length > 0 ? items : [node];
  gsap.set(targets, { opacity: 0, y: opts.y ?? 20 });

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        delay,
        stagger,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );
  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
      gsap.killTweensOf(targets);
    },
  };
}

export function moveNavPill(
  pill: HTMLElement | null,
  target: HTMLElement | undefined,
  animate = true,
) {
  if (!pill || !target) {
    if (pill) gsap.set(pill, { autoAlpha: 0 });
    return;
  }
  const to = { x: target.offsetLeft, width: target.offsetWidth, autoAlpha: 1 };
  if (!animate || prefersReducedMotion()) {
    gsap.set(pill, to);
    return;
  }
  gsap.to(pill, { ...to, duration: 0.32, ease: "power3.inOut", overwrite: "auto" });
}

export function scrollToSection(id: string, event?: MouseEvent) {
  if (typeof window === "undefined") return;
  const target = document.getElementById(id);
  if (!target) return;
  event?.preventDefault();
  scrollLockUntil = performance.now() + 750;
  history.replaceState(null, "", `#${id}`);
  const top = target.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

function detectActiveSection(ids: string[]): string {
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
  const triggerLine = window.innerHeight * (0.24 + progress * 0.56);
  let current = "";
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= triggerLine) {
      current = id;
    }
  }
  return current;
}

export function watchActiveSection(
  ids: string[],
  onActive: (id: string) => void,
  onScrollState?: (scrolled: boolean) => void,
) {
  if (typeof window === "undefined") return () => {};
  let isScrolled = false;
  const onScroll = () => {
    const y = window.scrollY;
    const nextScrolled = isScrolled ? y > 8 : y > 24;
    if (nextScrolled !== isScrolled) {
      isScrolled = nextScrolled;
      onScrollState?.(isScrolled);
    }
    if (performance.now() < scrollLockUntil) return;
    onActive(detectActiveSection(ids));
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
  };
}
