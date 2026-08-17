'use client'

import { useState } from "react";
import { useScroll } from "@/hooks/use-scroll";

// full-screen vignette; fades away while a section marked data-no-shadow
// (e.g. the dark Suite panel) covers the viewport
const ShadowFilter: React.FC = () => {
    const [hidden, setHidden] = useState(false);

    useScroll(() => {
        const margin = window.innerHeight * 0.45;
        const covered = Array.from(document.querySelectorAll<HTMLElement>("[data-no-shadow]")).some((el) => {
            const r = el.getBoundingClientRect();
            return r.top <= margin && r.bottom >= window.innerHeight - margin;
        });
        setHidden(covered);
    });

    return (
        <div
            className="w-screen h-screen fixed top-0 left-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_60%,#B4FED4_100%)] pointer-events-none transform-gpu will-change-transform transition-opacity duration-700"
            style={{ opacity: hidden ? 0 : 0.6 }}
        />
    );
};

export default ShadowFilter;
