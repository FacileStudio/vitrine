'use client'

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { useScroll } from "@/hooks/use-scroll";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

// the field a story is read on, so the fullscreen one and the pinned one sit on
// the same ground.
//
// `arrive` makes it charge in as its section reaches the top of the window rather
// than being there already: a coarse grid at nothing, resolving as it fades up. The
// fade is inline because the class-level opacity is already spent, and two opacity
// utilities on one element resolve by stylesheet order rather than by whichever the
// author meant. The fullscreen reader wants none of this — it is an overlay that is
// already there when it opens — so it stays off by default
export default function Backdrop({ arrive = false }: { arrive?: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    const [arrived, setArrived] = useState(false);

    useScroll(() => {
        if (!arrive) return;

        const section = ref.current?.parentElement;
        if (!section) return;

        setArrived(section.getBoundingClientRect().top <= 0);
    });

    const on = !arrive || arrived;

    return (
        <div
            ref={ref}
            className="absolute inset-0 h-full w-full"
            style={{ opacity: on ? 1 : 0, transition: "opacity 0.8s cubic-bezier(0.7, 0, 0.3, 1)" }}
        >
            <DitherView
                className="absolute inset-0 h-full w-full opacity-20"
                file="/models/manifesto.glb"
                background={null}
                highlight="#24E27A"
                grayscaleOnly={false}
                intensity={1.8}
                parallax={0.5}
                gridSize={on ? 3 : 14}
                scale={4}
                models={[
                    { file: "/models/manifesto.glb", position: [-3.5, -1.5, 0.5], scale: 4 },
                    { file: "/models/manifesto.glb", position: [3.5, 1, 0.5], scale: 4 },
                ]}
            />
        </div>
    );
}
