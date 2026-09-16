'use client'

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "@/components/facile/transitionLink";
import Stripes from "@/components/facile/stripes";
import TextReveal from "@/components/facile/textReveal";
import Emphasis from "@/components/facile/emphasis";
import { usePinProgress } from "@/hooks/use-pin-progress";
import { useNarrow } from "@/hooks/use-narrow";
import { DitherView } from "@/webgl/lazy";

// the pinned scroll, in section progress: the copy alone first, then it lifts and the
// collaborators ride across under it, and both leave together
const TITLE_IN = 0.12;
const LIST_FROM = 0.42;
const LIST_TO = 0.9;

// a box only shows while its middle sits inside this band of the viewport width
const BAND = { from: 0.2, to: 0.8 };

const CARD = "flex aspect-square w-[40vw] md:w-[20vw] max-w-80 flex-col items-center justify-center gap-4 rounded-xl bg-foreground/10 text-foreground backdrop-blur-3xl";

// the clients, and the project each one is the client of. A null slug is a client
// whose work is not in projects.json yet, so its box has nowhere to send anybody
const CLIENTS: { src: string; name: string; slug: string | null }[] = [
    { src: "LH", name: "Laura Hervé", slug: "laura-herve" },
    { src: "Marcel", name: "Marcel", slug: "marcel" },
    { src: "Zero", name: "Projet Zéro", slug: "projet-zero" },
    { src: "Solais", name: "Solaïs", slug: "solais-intra" },
    { src: "Lpb", name: "Les P'tits Bonheurs", slug: null },
    { src: "Heranova", name: "Heranova", slug: null },
    { src: "Equinox", name: "Equinox Studio", slug: null },
];

// "down" is still to come on the right, "open" is in the band, "gone" has left on the left
type BoxState = "down" | "open" | "gone";

export default function Manifesto() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef(0);
    const boxesKey = useRef("");
    const narrow = useNarrow();
    const t = useTranslations("home");

    const [showText, setShowText] = useState(false);
    const [trusted, setTrusted] = useState(false);
    const [leaving, setLeaving] = useState(false);
    const [boxes, setBoxes] = useState<BoxState[]>(() => CLIENTS.map(() => "down"));

    usePinProgress(sectionRef, (p) => {
        progressRef.current = p;
        const textOut = p >= LIST_TO;
        const textIn = p > TITLE_IN && !textOut;
        setShowText(textIn);
        setLeaving(textOut);

        const title = titleRef.current;
        const list = listRef.current;
        const row = list?.parentElement;
        if (!title || !list || !row) return;

        // the column centres title, gap and row together: pushed down by half the gap and
        // the row, the title sits centred alone until the row comes in, then eases up
        const drop = (row.offsetTop + row.offsetHeight - title.offsetTop - title.offsetHeight) / 2;
        title.style.transform = `translateY(${p >= LIST_FROM ? 0 : drop}px)`;
        // the CTA stays pinned under where the title sits alone, and never lifts with it
        if (ctaRef.current) ctaRef.current.style.top = `${title.offsetTop + drop + title.offsetHeight}px`;

        // from its left edge on the viewport's right edge to its right edge on the left one
        const vw = window.innerWidth;
        const t = Math.min(1, Math.max(0, (p - LIST_FROM) / (LIST_TO - LIST_FROM)));
        const x = vw + (-list.offsetWidth - vw) * t;
        list.style.transform = `translate3d(${x}px, 0, 0)`;

        // measured off the offsets rather than getBoundingClientRect, so no layout per box
        const mids = Array.from(list.children as HTMLCollectionOf<HTMLElement>, (box) => (x + box.offsetLeft + box.offsetWidth / 2) / vw);
        // the copy hands over as soon as the row is a tenth of the way into the screen
        setTrusted(x <= vw * 0.9);

        const next = mids.map((mid): BoxState => {
            if (mid < BAND.from) return "gone";
            return mid <= BAND.to ? "open" : "down";
        });
        const key = next.join();
        if (key !== boxesKey.current) {
            boxesKey.current = key;
            setBoxes(next);
        }
    });

    return (
        <section ref={sectionRef} id="manifesto" className="relative bg-background w-full mt-32 min-h-[600vh]">
            <div className="absolute inset-0 bg-background -z-10" aria-hidden="true" />
            <div className="sticky top-0 z-20 h-screen w-full overflow-hidden">

                <DitherView
                    className="absolute top-0 left-0 w-full h-full z-0 opacity-50"
                    background="#E4EEE8"
                    parallax={1}
                    scale={1.6}
                    gridSize={showText ? 2 : 9}
                    file="/models/manifesto.glb"
                    models={[
                        { file: "/models/manifesto.glb", position: narrow ? [-1, 0.5, 2] : [-1.5, 0.5, 2], rotation: [0, 90, 90]},
                        { file: "/models/manifesto.glb", position: narrow ? [0.8, -3.2, 2] : [1.5, -3, 2] },
                    ]}
                />

                <Stripes orientation={0} count={4} className="bg-foreground" openWhen={() => progressRef.current > 0.02} />

                <Stripes orientation={180} count={4} className="bg-foreground" openWhen={() => progressRef.current < 0.94} />

                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none gap-12">
                    <div ref={titleRef} className="grid place-items-center px-2 text-center transition-transform duration-700 ease-out">
                        <h2 className="col-start-1 row-start-1 max-w-3xl text-foreground" aria-hidden={trusted}>
                            {(t.raw("manifesto.creators") as string[]).map((line, i) => (
                                <TextReveal key={i} open={showText && !trusted} leaving={leaving || trusted} duration={trusted ? 0.35 : 0.6} delay={i * (trusted ? 0.04 : 0.1)}>
                                    <Emphasis text={line} />
                                </TextReveal>
                            ))}
                        </h2>
                        <h2 className="col-start-1 row-start-1 text-foreground" aria-hidden={!trusted}>
                            {(t.raw("manifesto.trusted") as string[]).map((line, i) => (
                                <TextReveal key={i} open={showText && trusted} leaving={leaving} delay={0.15}>
                                    <Emphasis text={line} />
                                </TextReveal>
                            ))}
                        </h2>
                    </div>

                    <div ref={ctaRef} className="absolute left-1/2 mt-10 -translate-x-1/2">
                        <TextReveal open={showText && !trusted} leaving={leaving || trusted} duration={trusted ? 0.35 : 0.7} delay={trusted ? 0.08 : 0.5} cropClassName="w-fit">
                            <Link href="/projects" className="button pointer-events-auto inline-block">
                                <p>{t("seeProjects")}</p>
                            </Link>
                        </TextReveal>
                    </div>

                    <div className="w-full">
                        <div
                            ref={listRef}
                            className="flex w-max gap-1 text-foreground will-change-transform"
                            style={{ transform: "translate3d(100vw, 0, 0)" }}
                        >
                            {CLIENTS.map((client, i) => {
                                const open = boxes[i] === "open";
                                const gone = boxes[i] === "gone";
                                const content = (
                                    <>
                                        <TextReveal open={open} leaving={gone} duration={0.5}>
                                            <img src={`/images/icons/${client.src}.png`} alt={client.name} loading="lazy" decoding="async" className="h-12 md:h-24 w-auto" />
                                        </TextReveal>
                                        <TextReveal as="p" open={open} leaving={gone} duration={0.5} delay={0.08} className="subtext whitespace-nowrap">
                                            {client.name}
                                        </TextReveal>
                                    </>
                                );

                                return client.slug ? (
                                    <Link
                                        key={client.src}
                                        href={`/projects/${client.slug}`}
                                        aria-label={t("manifesto.openProject", { name: client.name })}
                                        className={`${CARD} pointer-events-auto`}
                                    >
                                        {content}
                                    </Link>
                                ) : (
                                    <span key={client.src} className={CARD}>{content}</span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
