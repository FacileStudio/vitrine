'use client'

import { useEffect, useRef, useState } from "react"
import type { Ref } from "react"
import { useProgress } from "@react-three/drei"
import Stripes from "./stripes"
import { gsap } from "gsap"

function DualRing({ value, ref }: { value: number; ref?: Ref<SVGSVGElement> }) {
    const r = 46;           // same radius for both arcs
    const gapDeg = 8;      // white gap between the two arcs' endpoints — bump for more

    // both arcs sit on the same circle, split by two gaps of gapDeg
    const arcA = (value / 100) * 360 - gapDeg;
    const arcB = ((100 - value) / 100) * 360 - gapDeg;

    const polar = (deg: number, radius = r) => {
        const a = (deg * Math.PI) / 180;
        return [50 + radius * Math.cos(a), 50 + radius * Math.sin(a)];
    };
    const arcPath = (start: number, end: number) => {
        const [x0, y0] = polar(start);
        const [x1, y1] = polar(end);
        const large = end - start > 180 ? 1 : 0;
        return `M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1}`;
    };

    const aStart = gapDeg / 2;
    const aEnd = aStart + arcA;
    const bStart = aEnd + gapDeg;
    const bEnd = bStart + arcB;

    return (
        <svg ref={ref} viewBox="0 0 100 100" className="w-full h-full -rotate-90 opacity-0">
            {[1, 2, 4, 5, 7, 8, 10, 11].map((i, k, arr) => {
                const start = (k / arr.length) * 100;
                const len = Math.max(0, Math.min(2, ((value - start) / 12) * 2));
                const [x0, y0] = polar(i * 30, 52);
                const [x1, y1] = polar(i * 30, 52 + len);
                return (
                    <line
                        key={i}
                        x1={x0} y1={y0} x2={x1} y2={y1}
                        stroke="currentColor" strokeWidth="0.4" strokeLinecap="round"
                        className="text-white/33"
                    />
                );
            })}
            <path
                d={arcPath(aStart, aEnd)} fill="none"
                stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"
                className="text-white/33"
            />
            <path
                d={arcPath(bStart, bEnd)} fill="none"
                stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"
                className="text-white/10"
                strokeDasharray="0.5 3"
            />
        </svg>
    );
}

// dark curtain over the whole viewport; its stripes slide up to reveal the home once loading is done
const Rideau = ({ setCharged }: { setCharged: (charged: boolean) => void }) => {
    const firstBarRef = useRef<HTMLDivElement | null>(null);
    const secondBarRef = useRef<HTMLDivElement | null>(null);
    const thirdBarRef = useRef<HTMLDivElement | null>(null);
    const lastBarRef = useRef<HTMLDivElement | null>(null);
    const ringRef = useRef<SVGSVGElement | null>(null);
    const logoRef = useRef<HTMLImageElement | null>(null);
    const countRef = useRef<HTMLDivElement | null>(null);

    const [entered, setEntered] = useState(false)
    const [open, setOpen] = useState(false)
    const [pourcentage, setPourcentage] = useState(0)
    const firedBars = useRef<Set<number>>(new Set())
    const shown = useRef(0)
    const target = useRef(0)

    // real load progress of everything three.js pulls in (glb models, textures, ...)
    const { progress, active, total } = useProgress()
    useEffect(() => {
        target.current = progress
    }, [progress])



    // the dial builds itself in on mount — ring, logo, counter, then the ticks —
    // so landing on the home page fades into the loader instead of slamming into it
    useEffect(() => {
        const bars = [firstBarRef.current, secondBarRef.current, thirdBarRef.current, lastBarRef.current];
        const tl = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete: () => setEntered(true) });
        tl.fromTo(ringRef.current, { opacity: 0, scale: 0.86, rotation: -90 }, { opacity: 1, scale: 1, rotation: -90, duration: 0.9 }, 0)
            .fromTo(logoRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, 0.14)
            .fromTo(countRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6 }, 0.26)
            .to(bars, { opacity: 1, duration: 0.4, stagger: 0.08 }, 0.38);
        return () => { tl.kill(); };
    }, []);

    // each bar pops out once, when the percentage crosses its threshold; thresholds
    // already passed during the entrance fire as a staggered batch once it lands
    useEffect(() => {
        if (!entered) return;
        const bars = [
            { ref: firstBarRef, at: 0, vars: { height: "20px", top: "-20px" } },
            { ref: secondBarRef, at: 25, vars: { width: "20px", right: "-20px" } },
            { ref: thirdBarRef, at: 50, vars: { height: "20px", bottom: "-20px" } },
            { ref: lastBarRef, at: 75, vars: { width: "20px", left: "-20px" } },
        ];
        bars
            .filter(({ at }) => pourcentage >= at && !firedBars.current.has(at))
            .forEach(({ ref, at, vars }, i) => {
                firedBars.current.add(at);
                gsap.fromTo(ref.current, { backgroundColor: "#ffffff10" }, { ...vars, backgroundColor: "#ffffffaa", duration: 0.5, ease: "power2.inOut", delay: i * 0.12 });
            });
    }, [pourcentage, entered]);



    // one continuous lerp toward the real target so the count keeps gliding
    // between the loader's discrete progress jumps instead of stalling
    useEffect(() => {
        const maxStep = 0.6; // cap per-frame change so big jumps don't snap
        const tick = () => {
            const diff = target.current - shown.current;
            const step = Math.max(-maxStep, Math.min(maxStep, diff * 0.08));
            shown.current += step;

            const rounded = Math.round(shown.current);
            setPourcentage((prev) => (prev !== rounded ? rounded : prev));

            const done = total > 0 && target.current >= 100 && !active;
            if (done && rounded >= 100) {
                setOpen(true);
                setCharged(true);
            }
        };
        gsap.ticker.add(tick);
        return () => gsap.ticker.remove(tick);
    }, [active, total, setCharged])



    useEffect(() => {
        const t = setTimeout(() => setOpen(true), 10000);
        return () => clearTimeout(t);
    }, [])

    return (
        <div className="fixed inset-0 z-999 pointer-events-none w-screen h-screen">

            <div className="absolute z-50 top-1/2 left-1/2 -translate-1/2">
                    <div
                        className="w-auto aspect-square rounded-full flex items-center justify-center"
                        style={{
                            transition: "opacity 0.6s ease, transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)",
                            opacity: open ? 0 : 1,
                            transform: open ? "translateY(-30vh)" : "translateY(0)",
                        }}
                    >
                        <div ref={firstBarRef}  className="h-2 w-[2px] bg-white/10 absolute -top-2 rounded-full -translate-x-1/2 opacity-0" />
                        <div ref={secondBarRef} className="w-2 h-[2px] bg-white/10 absolute -right-2 rounded-full -translate-y-1/2 opacity-0" />
                        <div ref={thirdBarRef}  className="h-2 w-[2px] bg-white/10 absolute -bottom-2 rounded-full -translate-x-1/2 opacity-0" />
                        <div ref={lastBarRef}   className="w-2 h-[2px] bg-white/10 absolute -left-2 rounded-full -translate-y-1/2 opacity-0" />

                        <DualRing ref={ringRef} value={pourcentage} />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-white">
                            <img ref={logoRef} src="/F.svg" alt="Facile" className="w-6 h-6 md:w-9 md:h-9 brightness-0 invert opacity-0" />
                            <div ref={countRef} className="mt-4 text-center opacity-0">
                                {pourcentage}
                            </div>
                        </div>
                    </div>
            </div>

            {/* two layers leaving one after the other: the dark goes first and uncovers
                the white behind it, which follows a beat later. The counter sits above
                both on z-50, so it is still readable while the dark is on its way out */}
            <Stripes count={4} orientation={0} open={open} className="bg-foreground" zIndex={45} leadOpen={0} />
            <Stripes count={4} orientation={0} open={open} className="bg-background" zIndex={44} leadOpen={0.35} />
        </div>
    )
}

export default Rideau
