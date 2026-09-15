'use client'

import { useEffect, useState } from "react";

// a phone, not a tablet: an iPad in portrait is 768px wide and keeps the desktop layouts.
// False until mounted, so the server render and the first client render agree
export function useNarrow(query = "(max-width: 767px)") {
    const [narrow, setNarrow] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia(query);
        const sync = () => setNarrow(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, [query]);

    return narrow;
}
