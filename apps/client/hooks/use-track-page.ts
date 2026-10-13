import { useEffect } from "react";
import { useMembers } from "@/components/facile/membersProvider";
import { expectFile, trackFetch, trackPromise } from "@/webgl/loadBytes";

const MODELS = ["/models/manifesto.glb"];
// the menu model loads only when the menu opens, so it is warmed into the cache instead of awaited as a parse
const WARM = ["/models/F.glb"];

function mediaUrls() {
    const urls = new Set<string>();

    document.querySelectorAll<HTMLImageElement | HTMLVideoElement | HTMLSourceElement>("img[src], video[src], video[poster], source[src]").forEach((el) => {
        urls.add(el.src);

        if (el instanceof HTMLVideoElement)
            urls.add(el.poster);
    });

    return [...urls].filter((url) => url && !url.startsWith("data:") && !url.startsWith("blob:") && !url.includes("/icons/"));
}

// lazy images and preload="none" videos are fetched now, so scrolling never waits on the network
export function useTrackPage() {
    const members = useMembers();

    useEffect(() => {
        [...MODELS, ...members.flatMap((m) => (m.model ? [m.model] : []))].forEach(expectFile);
        [...WARM, ...mediaUrls()].forEach(trackFetch);
        trackPromise("fonts", document.fonts.ready);
    }, [members]);
}
