'use client'

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Stripes from "./stripes";

// the same curtain the Menu drops: two waves racing across the viewport, the
// lead colour landing first and leaving last so the pair never travels as one
// slab. The covers arrive from the right and leave off the left, staggered
// bottom-to-top both times, so the reveal carries straight on the way the cover
// came in instead of retreating back out the side it entered from.
// Tones are class names rather than raw hex, so Tailwind still sees them
export type CurtainTone = { lead: string; trail: string };

export const TONES = {
    dark: { lead: "bg-white", trail: "bg-foreground" },
    light: { lead: "bg-foreground", trail: "bg-white" },
    mint: { lead: "bg-white", trail: "bg-[#CAE6D8]" },
} as const;

export type ToneName = keyof typeof TONES;
export type Tone = ToneName | CurtainTone;

const COUNT = 4;
const DURATION = 0.8;
const STAGGER = 0.1;
const LEAD = 0.14;

// how long a full sweep takes end to end, so a route push or a mount can be
// timed against it instead of guessed
export const CURTAIN_MS = (DURATION + LEAD + (COUNT - 1) * STAGGER) * 1000;

// nothing on an arriving page starts moving until the curtain has cleared most
// of the viewport, so its stagger reads as the page waking up behind it
export const ARRIVE = CURTAIN_MS * 0.55;

const resolve = (t: Tone): CurtainTone => (typeof t === "string" ? TONES[t] : t);



// presentational half: `covered` paints the viewport, false slides the stripes
// off to the left. Mounting it uncovered plays the reveal on its own, since
// Stripes always starts a frame in place before it moves
export function Curtain({ covered, tone = "dark", zIndex = 200 }: { covered: boolean; tone?: Tone; zIndex?: number }) {
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



// a page mounts one curtain, so in-page sweeps borrow it through this registry
// rather than stacking a second one over the first
let sweeper: ((mid: () => void) => void) | null = null;
let leaver: ((href: string) => void) | null = null;

// cover the screen, run `mid` behind it, uncover. Without a curtain mounted the
// callback still runs, just bare
export const sweep = (mid: () => void) => {
    if (sweeper) sweeper(mid);
    else mid();
};

export const TransitionOut = ({ href, router }: { href: string; router: AppRouterInstance }) => {
    if (leaver) leaver(href);
    else router.push(href);
};



// the leaving/arriving colours are the page's own call: a dark page is uncovered
// by a dark curtain, a white one (Suite) by a white one
export default function PageCurtain({ enter = "dark", leave = "dark" }: { enter?: Tone; leave?: Tone }) {
    const router = useRouter();
    const [covered, setCovered] = useState(false);
    const [tone, setTone] = useState<Tone>(enter);
    const busy = useRef(false);

    useEffect(() => {
        sweeper = (mid) => {
            if (busy.current)
                return;

            busy.current = true;
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
            setTone(leave);
            setCovered(true);
            window.setTimeout(() => router.push(href), CURTAIN_MS);
        };

        return () => { sweeper = null; leaver = null; };
    }, [router, enter, leave]);

    return <Curtain covered={covered} tone={tone} />;
}
