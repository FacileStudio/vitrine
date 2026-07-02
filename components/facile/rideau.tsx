'use client'

import { useEffect, useState } from "react"
import Stripes from "./stripes"

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
const Rideau = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const reveal = () => setOpen(true)
        if (document.readyState === "complete") {
            const t = setTimeout(reveal, 5000)
            return () => clearTimeout(t)
        }
        window.addEventListener("load", reveal)
        return () => window.removeEventListener("load", reveal)
    }, [])

    return (
        <div className="fixed inset-0 z-100 pointer-events-none w-screen h-screen">

            <div className="absolute z-50 top-1/2 left-1/2 -translate-1/2">
                    <div
                        className="w-auto aspect-square rounded-full flex items-center justify-center bg-red-500"
                        style={{
                            transition: "opacity 0.6s ease, transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)",
                            opacity: open ? 0 : 1,
                            transform: open ? "translateY(-30vh)" : "translateY(0)",
                        }}
                    >
                        <DualRing value={33} />

                        <img src="/F.svg" alt="Facile" className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8" />
                    </div>
            </div>

            <Stripes count={4} orientation={0} open={open} className="bg-white" />
        </div>
    )
}

export default Rideau
