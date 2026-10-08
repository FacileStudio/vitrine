import { useState, type RefObject } from "react";
import { useScroll } from "@/hooks/use-scroll";

export function useInView(ref: RefObject<HTMLElement | null>, from = 0.85) {
    const [inView, setInView] = useState(false);

    useScroll(() => {
        const el = ref.current;
        if (!el)
            return;

        setInView(el.getBoundingClientRect().top < window.innerHeight * from);
    });

    return inView;
}
