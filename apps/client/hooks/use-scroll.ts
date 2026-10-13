import { useEffect, useRef } from "react";

type Handler = () => void;

// one window listener for every scroll reader on the page: a page with a band, two shelves, the header and the footer used to mount a dozen listeners and force as many layouts per event
const handlers = new Set<Handler>();

const frame = () => {
    handlers.forEach((handler) => handler());
};

const subscribe = (handler: Handler) => {
    handlers.add(handler);

    if (handlers.size === 1)
        window.addEventListener("scroll", frame, { passive: true });

    return () => {
        handlers.delete(handler);

        if (!handlers.size)
            window.removeEventListener("scroll", frame);
    };
};

export function useScroll(handler: () => void) {
    const ref = useRef(handler);

    useEffect(() => {
        ref.current = handler;
    });

    useEffect(() => {
        const fn = () => ref.current();
        fn();

        return subscribe(fn);
    }, []);
}
