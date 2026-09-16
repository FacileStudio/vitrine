'use client'

import { useEffect, useRef, useState } from "react"
import type { Ref } from "react"
import { useProgress } from "@react-three/drei"
import Stripes from "./stripes"
import { gsap } from "gsap"

const R = 46;           // same radius for both arcs
const GAP = 8;          // white gap between the two arcs' endpoints — bump for more
const TICKS = [1, 2, 4, 5, 7, 8, 10, 11];

const polar = (deg: number, radius = R) => {
    const a = (deg * Math.PI) / 180;
    return [50 + radius * Math.cos(a), 50 + radius * Math.sin(a)];
};

// an arc with no length draws nothing: a negative sweep would flip the arc to the far side
const arcPath = (start: number, end: number) => {
    if (end <= start) return "";
    const [x0, y0] = polar(start);
    const [x1, y1] = polar(end);
    const large = end - start > 180 ? 1 : 0;
    return `M ${x0} ${y0} A ${R} ${R} 0 ${large} 1 ${x1} ${y1}`;
};

// takes a fractional value, so the ring glides between whole percents instead of
// stepping 3.6° at a time; written straight to the DOM, no React render per frame
function drawRing(svg: SVGSVGElement, value: number) {
    const [a, b] = svg.querySelectorAll("path");
    const aStart = GAP / 2;
    const aEnd = aStart + (value / 100) * 360 - GAP;
    const bStart = aEnd + GAP;
    const bEnd = aStart + 360 - GAP;

    a.setAttribute("d", arcPath(aStart, aEnd));
    b.setAttribute("d", arcPath(bStart, bEnd));
    // pin the dashes to the circle, not to the arc's moving start, or they crawl
    b.setAttribute("stroke-dashoffset", String((bStart * Math.PI * R) / 180));

    svg.querySelectorAll("line").forEach((line, k) => {
        const start = (k / TICKS.length) * 100;
        const len = Math.max(0, Math.min(2, ((value - start) / 12) * 2));
        const [x1, y1] = polar(TICKS[k] * 30, 52 + len);
        line.setAttribute("x2", String(x1));
        line.setAttribute("y2", String(y1));
    });
}

const STIFFNESS = 4.5;  // higher settles faster
const LEAD = 1.5;       // aims past the target so the spring arrives instead of creeping in

/**
 * One frame of a critically damped spring toward `target`, solved exactly so the motion
 * is the same at any frame rate. It stops on the target and never passes it.
 */
export function springStep(x: number, v: number, target: number, dt: number): [number, number] {
    const offset = x - (target + LEAD);
    const decay = Math.exp(-STIFFNESS * dt);
    const temp = (v + STIFFNESS * offset) * dt;
    const next = target + LEAD + (offset + temp) * decay;
    if (next >= target) return [target, 0];
    return [next, (v - STIFFNESS * temp) * decay];
}

function DualRing({ ref }: { ref?: Ref<SVGSVGElement> }) {
    return (
        <svg ref={ref} viewBox="0 0 100 100" className="w-full h-full -rotate-90 opacity-0">
            {TICKS.map((i) => {
                const [x, y] = polar(i * 30, 52);
                return (
                    <line
                        key={i}
                        x1={x} y1={y} x2={x} y2={y}
                        stroke="currentColor" strokeWidth="0.4" strokeLinecap="round"
                        className="text-white/33"
                    />
                );
            })}
            <path
                fill="none"
                stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"
                className="text-white/33"
            />
            <path
                fill="none"
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

    const [open, setOpen] = useState(false)
    const entered = useRef(false)

    // real load progress of everything three.js pulls in (glb models, textures, ...).
    // It drops when a new file joins the queue, so the target only ever climbs
    const { progress, active, total } = useProgress()
    const loader = useRef({ target: 0, active, total })
    useEffect(() => {
        loader.current = { target: Math.max(loader.current.target, progress), active, total }
    }, [progress, active, total])



    // the dial builds itself in on mount — ring, logo, counter, then the ticks —
    // so landing on the home page fades into the loader instead of slamming into it
    useEffect(() => {
        const bars = [firstBarRef.current, secondBarRef.current, thirdBarRef.current, lastBarRef.current];
        const tl = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete: () => { entered.current = true; } });
        tl.fromTo(ringRef.current, { opacity: 0, scale: 0.86, rotation: -90 }, { opacity: 1, scale: 1, rotation: -90, duration: 0.9 }, 0)
            .fromTo(logoRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, 0.14)
            .fromTo(countRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6 }, 0.26)
            .to(bars, { opacity: 1, duration: 0.4, stagger: 0.08 }, 0.38);
        return () => { tl.kill(); };
    }, []);



    // a critically damped spring chases the real target: a jump eases in and out along
    // the circle, and a new target mid-glide bends the motion instead of restarting it
    useEffect(() => {
        const bars = [
            { ref: firstBarRef, at: 0, vars: { height: "20px", top: "-20px" } },
            { ref: secondBarRef, at: 25, vars: { width: "20px", right: "-20px" } },
            { ref: thirdBarRef, at: 50, vars: { height: "20px", bottom: "-20px" } },
            { ref: lastBarRef, at: 75, vars: { width: "20px", left: "-20px" } },
        ];
        let shown = 0;
        let velocity = 0;
        let count = -1;
        let finished = false;

        const tick = (_time: number, deltaMs: number) => {
            const { target, active, total } = loader.current;
            [shown, velocity] = springStep(shown, velocity, target, deltaMs / 1000);

            if (ringRef.current) drawRing(ringRef.current, shown);
            const rounded = Math.floor(shown + 0.001);
            if (rounded !== count && countRef.current) {
                count = rounded;
                countRef.current.textContent = String(rounded);
            }

            // each bar pops out once, when the count crosses its threshold; thresholds
            // already passed during the entrance fire as a staggered batch once it lands
            if (entered.current) {
                bars.filter(({ at }) => rounded >= at).forEach(({ ref, vars }, i) => {
                    gsap.fromTo(ref.current, { backgroundColor: "#ffffff10" }, { ...vars, backgroundColor: "#ffffffaa", duration: 0.5, ease: "power2.inOut", delay: i * 0.12 });
                });
                for (let i = bars.length - 1; i >= 0; i--)
                    if (rounded >= bars[i].at) bars.splice(i, 1);
            }

            if (!finished && total > 0 && target >= 100 && !active && shown >= 100) {
                finished = true;
                setOpen(true);
                setCharged(true);
            }
        };
        gsap.ticker.add(tick);
        return () => gsap.ticker.remove(tick);
    }, [setCharged])



    useEffect(() => {
        const t = setTimeout(() => { setOpen(true); setCharged(true); }, 10000);
        return () => clearTimeout(t);
    }, [setCharged])

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

                        <DualRing ref={ringRef} />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-white">
                            <img ref={logoRef} src="/F.svg" alt="Facile" className="w-6 h-6 md:w-9 md:h-9 brightness-0 invert opacity-0" />
                            <div ref={countRef} className="mt-4 text-center tabular-nums opacity-0">
                                0
                            </div>
                        </div>
                    </div>
            </div>

            {/* two layers leaving one after the other: the dark goes first and uncovers
                the white behind it, which follows a beat later. The counter sits above
                both on z-50, so it is still readable while the dark is on its way out */}
            <Stripes count={4} orientation={0} open={open} className="bg-foreground" zIndex={45} leadOpen={0} />
            <Stripes count={4} orientation={0} open={open} className="bg-background" zIndex={44} leadOpen={0.18} />
        </div>
    )
}

export default Rideau
