'use client'

import { useEffect, useRef, useState } from "react";
import { useRouter } from "@/lib/i18n/navigation";
import Stripes from "./stripes";
import { useScenesReady } from "@/webgl/sceneReady";

// tones are class names rather than raw hex, so Tailwind still sees them
type CurtainTone = { lead: string; trail: string };

const TONES = {
    dark: { lead: "bg-white", trail: "bg-foreground" },
    light: { lead: "bg-foreground", trail: "bg-white" },
    mint: { lead: "bg-white", trail: "bg-[#CAE6D8]" },
} as const;

type ToneName = keyof typeof TONES;
export type Tone = ToneName | CurtainTone;

const COUNT = 4;
const DURATION = 0.8;
const STAGGER = 0.1;
export const LEAD = 0.14;

export const CURTAIN_MS = (DURATION + LEAD + (COUNT - 1) * STAGGER) * 1000;

export const ARRIVE = CURTAIN_MS * 0.55;

const resolve = (t: Tone): CurtainTone => (typeof t === "string" ? TONES[t] : t);



function Curtain({ covered, tone = "dark", zIndex = 200 }: { covered: boolean; tone?: Tone; zIndex?: number }) {
    const c = resolve(tone);

    return (
        <div aria-hidden="true" className={`fixed inset-0 overflow-hidden ${covered ? "" : "pointer-events-none"}`} style={{ zIndex }}>
            <Stripes
                orientation={270}
                exitOrientation={90}
                count={COUNT}
                open={!covered}
                className={c.lead}
                zIndex={1}
                leadOpen={LEAD}
                leadClose={0}
                reverseOnOpen
                reverseOnClose
                duration={DURATION}
                stagger={STAGGER}
            />
            <Stripes
                orientation={270}
                exitOrientation={90}
                count={COUNT}
                open={!covered}
                className={c.trail}
                zIndex={2}
                leadOpen={0}
                leadClose={LEAD}
                reverseOnOpen
                reverseOnClose
                duration={DURATION}
                stagger={STAGGER}
            />
        </div>
    );
}



let sweeper: ((mid: () => void) => void) | null = null;
let leaver: ((href: string) => void) | null = null;

export const sweep = (mid: () => void) => {
    if (sweeper)
        sweeper(mid);
    else mid();
};

export const TransitionOut = ({ href, router }: { href: string; router: { push: (href: string) => void } }) => {
    if (leaver)
        leaver(href);
    else router.push(href);
};



export default function PageCurtain({ enter = "dark", leave = "dark", arrive = true }: { enter?: Tone; leave?: Tone; arrive?: boolean }) {
    const router = useRouter();
    const [covered, setCovered] = useState(arrive);
    const [shown, setShown] = useState(arrive);
    const [tone, setTone] = useState<Tone>(enter);
    const busy = useRef(false);
    const ready = useScenesReady();

    useEffect(() => {
        if (ready && !busy.current)
            setCovered(false);
    }, [ready]);

    useEffect(() => {
        sweeper = (mid) => {
            if (busy.current)
                return;

            busy.current = true;
            setShown(true);
            setTone(leave);
            setCovered(true);

            window.setTimeout(() => {
                mid();
                setTone(enter);
                setCovered(false);
                busy.current = false;
            }, CURTAIN_MS);
        };

        leaver = (href) => {
            if (busy.current)
                return;

            busy.current = true;
            setShown(true);
            setTone(leave);
            setCovered(true);
            window.setTimeout(() => router.push(href), CURTAIN_MS);
        };

        return () => { sweeper = null; leaver = null; };
    }, [router, enter, leave]);

    return (
        <div style={{ visibility: shown ? "visible" : "hidden" }}>
            <Curtain covered={covered} tone={tone} />
        </div>
    );
}
