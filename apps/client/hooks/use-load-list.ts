import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { fileKeys } from "@/webgl/loadBytes";

// re-renders only when a file joins; each row reads its own progress, so a download never re-renders the list
export function useLoadList(active: boolean) {
    const [keys, setKeys] = useState<string[]>([]);

    useEffect(() => {
        if (!active)
            return;

        let last = "";

        const tick = () => {
            const next = fileKeys();
            const signature = next.join("|");

            if (signature === last)
                return;

            last = signature;
            setKeys(next);
        };

        gsap.ticker.add(tick);

        return () => gsap.ticker.remove(tick);
    }, [active]);

    return keys;
}
