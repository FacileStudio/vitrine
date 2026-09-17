import { useEffect, useRef } from "react";

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
