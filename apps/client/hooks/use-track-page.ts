import { useEffect } from "react";
import { useMembers } from "@/components/facile/contentProvider";
import { trackFetch, trackPromise } from "@/webgl/loadBytes";

// these canvases mount after the loader, so their models are warmed into the http cache instead of awaited as a parse
const WARM = ["/models/F.glb", "/models/manifesto.glb"];

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
        // phones render no scene models, so expecting them would hold the loader until the stall timeout
        const phone = window.matchMedia("(max-width: 767px)").matches;

        [...(phone ? [] : WARM), ...members.flatMap((m) => (m.model ? [m.model] : [])), ...mediaUrls()].forEach(trackFetch);
        trackPromise("fonts", document.fonts.ready);
    }, [members]);
}
