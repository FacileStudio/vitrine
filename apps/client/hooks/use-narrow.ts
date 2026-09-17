'use client'

import { useEffect, useState } from "react";

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
