'use client'

import dynamic from "next/dynamic";

const DitherView = dynamic(
    () => import("@/webgl/DitherView").then((m) => m.DitherView),
    { ssr: false },
);

// the dithered backdrop the cards scroll over. On /projects the shelf is the whole
// page, so the backdrop is fixed; inside the home page it has to let go once the
// section scrolls past, which is what `sticky` buys — pinned to the section, out
// of the flow via the negative margin so the cards still start at the top
export default function Backdrop({ sticky = false }: { sticky?: boolean }) {
    return (
        <div
            data-no-shadow
            className={`h-screen w-full overflow-hidden text-white ${sticky ? "sticky top-0 -mb-[100vh]" : "fixed top-0"}`}
        >
            <DitherView
                className="absolute inset-0 w-full h-full z-0 opacity-20"
                background={null}
                highlight="#24E27A"
                grayscaleOnly={false}
                intensity={1.8}
                parallax={0.7}
                gridSize={2}
                scale={4}
                file="/models/manifesto.glb"
                models={[
                    { file: "/models/manifesto.glb", position: [3, -3, 0], scale: 4 },
                    { file: "/models/manifesto.glb", position: [-3, 1, 0], scale: 4 },
                ]}
            />
        </div>
    );
}
