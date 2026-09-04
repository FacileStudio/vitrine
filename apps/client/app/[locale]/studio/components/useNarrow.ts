'use client'

import { useEffect, useState } from "react";

// the phone gets a small head and its copy behind a button: there is no room to
// pin four blocks to the edges of a 390px viewport
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
