import { useEffect, useRef } from "react";

// Subscribe to window scroll (passive), run once on mount, and always invoke the
// latest handler without re-subscribing. Base for any scroll-driven animation.
export function useScroll(handler: () => void) {
    const ref = useRef(handler);

    useEffect(() => {
        ref.current = handler;
    });

    useEffect(() => {
        const fn = () => ref.current();
        fn();
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);
}
