'use client'

import { useEffect, useRef, useState } from "react"
import { useProgress } from "@react-three/drei"
import Stripes from "./stripes"
import { gsap } from "gsap"

function DualRing({ value }: { value: number }) {
    const r = 46;           // same radius for both arcs
    const gapDeg = 8;      // white gap between the two arcs' endpoints — bump for more

    // both arcs sit on the same circle, split by two gaps of gapDeg
    const arcA = (value / 100) * 360 - gapDeg;
    const arcB = ((100 - value) / 100) * 360 - gapDeg;

    const polar = (deg: number) => {
        const a = (deg * Math.PI) / 180;
        return [50 + r * Math.cos(a), 50 + r * Math.sin(a)];
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
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <path
                d={arcPath(aStart, aEnd)} fill="none"
                stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"
                className="text-[#242424]/75"
            />
            <path
                d={arcPath(bStart, bEnd)} fill="none"
                stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"
                className="text-[#242424]/33"
                strokeDasharray="0.5 3"
            />
        </svg>
    );
}

// white curtain over the whole viewport; its stripes slide up to reveal the home once loading is done
const Rideau = ({ setCharged }: { setCharged: (charged: boolean) => void }) => {
    const firstBarRef = useRef<HTMLDivElement | null>(null);
    const secondBarRef = useRef<HTMLDivElement | null>(null);
    const thirdBarRef = useRef<HTMLDivElement | null>(null);
    const lastBarRef = useRef<HTMLDivElement | null>(null);
    
    const [open, setOpen] = useState(false)
    const [pourcentage, setPourcentage] = useState(0)
    const firedBars = useRef<Set<number>>(new Set())
    const shown = useRef(0)
    const target = useRef(0)

    // real load progress of everything three.js pulls in (glb models, textures, ...)
    const { progress, active, total } = useProgress()
    target.current = progress



    // each bar pops out once, when the percentage crosses its threshold
    useEffect(() => {
        const bars = [
            { ref: firstBarRef, at: 0, vars: { height: "20px", top: "-20px" } },
            { ref: secondBarRef, at: 25, vars: { width: "20px", right: "-20px" } },
            { ref: thirdBarRef, at: 50, vars: { height: "20px", bottom: "-20px" } },
            { ref: lastBarRef, at: 75, vars: { width: "20px", left: "-20px" } },
        ];
        bars.forEach(({ ref, at, vars }) => {
            if (pourcentage >= at && !firedBars.current.has(at)) {
                firedBars.current.add(at);
                gsap.to(ref.current, { ...vars, backgroundColor: "#24242466", duration: 0.5, ease: "power2.inOut" });
            }
        });
    }, [pourcentage]);



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
    }, [active, total])



    useEffect(() => {
        const t = setTimeout(() => setOpen(true), 10000);
        return () => clearTimeout(t);
    }, [])

    return (
        <div className="fixed inset-0 z-100 pointer-events-none w-screen h-screen">

            <div className="absolute z-50 top-1/2 left-1/2 -translate-1/2">
                    <div
                        className="w-auto aspect-square rounded-full flex items-center justify-center"
                        style={{
                            transition: "opacity 0.6s ease, transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)",
                            opacity: open ? 0 : 1,
                            transform: open ? "translateY(-30vh)" : "translateY(0)",
                        }}
                    >
                        <div ref={firstBarRef}  className="h-2 w-[2px] bg-[#242424]/10 absolute -top-2 rounded-full -translate-x-1/2" />
                        <div ref={secondBarRef} className="w-2 h-[2px] bg-[#242424]/10 absolute -right-2 rounded-full -translate-y-1/2" />
                        <div ref={thirdBarRef}  className="h-2 w-[2px] bg-[#242424]/10 absolute -bottom-2 rounded-full -translate-x-1/2" />
                        <div ref={lastBarRef}   className="w-2 h-[2px] bg-[#242424]/10 absolute -left-2 rounded-full -translate-y-1/2" />

                        <DualRing value={pourcentage} />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-[#242424]/75">
                            <img src="/F.svg" alt="Facile" className="w-6 h-6 md:w-8 md:h-8" />
                            <div className="mt-4 text-center">
                                {pourcentage}
                            </div>
                        </div>
                    </div>
            </div>

            <Stripes count={4} orientation={0} open={open} className="bg-white" />
        </div>
    )
}

export default Rideau
