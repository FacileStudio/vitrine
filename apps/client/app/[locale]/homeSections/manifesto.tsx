'use client'

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "@/components/facile/transitionLink";
import Stripes from "@/components/facile/stripes";
import TextReveal from "@/components/facile/textReveal";
import { usePinProgress } from "@/hooks/use-pin-progress";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

const SERVICES = ["Branding", "Web - UI/UX design", "Showcase Websites", "Applications", "DevOps", "Self hosting"];

// the marquee's square, sized to fit seven of them across one row instead of
// scrolling past
const CARD = "flex aspect-square w-[11vw] max-w-40 flex-col items-center justify-center gap-3 rounded-xl bg-background/66 backdrop-blur-xl";

// the clients, and the project each one is the client of. A null slug is a client
// whose work is not in projects.json yet — it still belongs in the ring, it just has
// nowhere to send anybody
const CLIENTS: { src: string; name: string; slug: string | null }[] = [
    { src: "LH", name: "Laura Hervé", slug: "laura-herve" },
    { src: "Marcel", name: "Marcel", slug: "marcel" },
    { src: "Zero", name: "Projet Zéro", slug: "projet-zero" },
    { src: "Solais", name: "Solaïs", slug: "solais-intra" },
    { src: "Lpb", name: "Les P'tits Bonheurs", slug: null },
    { src: "Heranova", name: "Heranova", slug: null },
    { src: "Equinox", name: "Equinox Studio", slug: null },
];

// a point on a ring around the middle, as percentages of the section. `from` is
// where the first one sits — -90 is straight up, so a six-point ring reads as a
// hexagon standing on a vertex rather than resting on an edge
const at = (i: number, count: number, rx: number, ry: number, from = -90) => {
    const a = ((from + (360 / count) * i) * Math.PI) / 180;
    return {
        left: `${50 + rx * Math.cos(a)}%`,
        top: `${50 + ry * Math.sin(a)}%`,
        transform: "translate(-50%, -50%)",
    };
};

export default function Manifesto() {
    const sectionRef = useRef<HTMLElement>(null);
    const progressRef = useRef(0);

    const [showText, setShowText] = useState(false);
    const [showCta, setShowCta] = useState(false);
    const [leaving, setLeaving] = useState(false);

    usePinProgress(sectionRef, (p) => {
        progressRef.current = p;
        const textOut = p >= 0.7;
        const textIn = p > 0.20 && !textOut;
        setShowText(textIn);
        setShowCta(textIn);
        setLeaving(textOut);
    });

    return (
        <section ref={sectionRef} id="manifesto" className="relative bg-background w-full mt-32 min-h-[400vh]">
            <div className="absolute inset-0 bg-background -z-10" aria-hidden="true" />
            <div className="sticky top-0 z-20 h-screen w-full overflow-hidden">

                <DitherView
                    className="absolute top-0 left-0 w-full h-full z-0 opacity-50"
                    background="#E4EEE8"
                    highlight="#24E27A"
                    grayscaleOnly={false}
                    intensity={1.8}
                    parallax={1}
                    scale={1.6}
                    gridSize={showText ? 2 : 9}
                    file="/models/manifesto.glb"
                    models={[
                        { file: "/models/manifesto.glb", position: [-1.5, 0, 2], rotation: [0, 90, 90]},
                        { file: "/models/manifesto.glb", position: [1.5, -2.5, 2] },
                    ]}
                />

                <Stripes orientation={0} count={4} className="bg-foreground" openWhen={() => progressRef.current > 0.02} />

                <Stripes orientation={180} count={4} className="bg-foreground" openWhen={() => progressRef.current < 0.90} />

                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center px-6 text-center pointer-events-none">
                    <h2 className="max-w-3xl text-foreground/80">
                        {["We are creators building", "stunning and memorable", "experiences."].map((line, i) => (
                            <TextReveal key={i} open={showText} leaving={leaving} delay={i * 0.2}>
                                {line}
                            </TextReveal>
                        ))}
                    </h2>
                    <TextReveal open={showCta} leaving={leaving} duration={0.7} delay={0.5} cropClassName="w-fit mt-10">
                        <Link
                            href="/projects"
                            className="button pointer-events-auto inline-block"
                        >
                            <p>Voir nos projets</p>
                        </Link>
                    </TextReveal>
                </div>

                {/* what we do, six points around the copy — laid out by angle rather
                    than by flow, so the ring cannot be pushed around by what is in it.
                    It needs width to read as a hexagon, so below lg the copy stands alone */}
                <div className="pointer-events-none absolute inset-0 z-40 hidden text-foreground lg:block">
                    {SERVICES.map((entry, i) => (
                        <div key={entry} className="absolute" style={at(i, SERVICES.length, 30, 32)}>
                            <TextReveal open={showText} leaving={leaving} delay={0.3 + i * 0.08} className="button whitespace-nowrap">
                                <p>{entry}</p>
                            </TextReveal>
                        </div>
                    ))}

                </div>

                <div className="pointer-events-none absolute bottom-0 left-0 z-40 flex w-full items-end justify-center gap-1 px-48 pb-12 text-foreground">
                    {CLIENTS.map((client, i) => (
                        <TextReveal key={client.src} open={showText} leaving={leaving} delay={0.6 + i * 0.08}>
                            {client.slug ? (
                                <Link
                                    href={`/projects/${client.slug}`}
                                    aria-label={`${client.name} — see the project`}
                                    className={`${CARD} pointer-events-auto transition-transform duration-200 hover:scale-105`}
                                >
                                    <img src={`/images/icons/${client.src}.png`} alt={client.name} loading="lazy" decoding="async" className="h-12 w-auto" />
                                    <p className="subtext whitespace-nowrap">{client.name}</p>
                                </Link>
                            ) : (
                                <span className={`${CARD}`}>
                                    <img src={`/images/icons/${client.src}.png`} alt={client.name} loading="lazy" decoding="async" className="h-12 w-auto" />
                                    <p className="subtext whitespace-nowrap">{client.name}</p>
                                </span>
                            )}
                        </TextReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
