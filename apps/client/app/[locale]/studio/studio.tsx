'use client'

import { memo, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Header from "@/components/facile/header";
import Menu from "@/components/facile/menu";
import PageCurtain, { CURTAIN_MS, TransitionOut } from "@/components/facile/pageTransition";
import DitherReveal from "@/components/facile/ditherReveal";
import TextReveal from "@/components/facile/textReveal";
import members from "./studio.json";

// the canvases must never re-render on hover: a re-render re-bakes drei's
// Environment cubemap, four at a time. Memoised component, props built once
const Head = memo(DitherReveal);

const HEAD_PROPS = (idle: number, gridSize: number) => members.map((member, i) => ({
    model: member.model,
    highlight: member.highlight,
    delay: 0.15 + i * 0.15,
    dither: {
        gridSize,
        intensity: 1.0,
        parallax: 0.6,
        parallaxSpeed: 0.05,
        idle,
        ambient: 0.3,
        float: false,
        scale: member.scale + 0.005,
        roughness: member.roughness,
        metalness: 0,
        hairColor: member.hair ?? undefined,
        rotation: [0, 0, 0] as [number, number, number],
        bloom: true,
        bloomIntensity: 1,
    },
}));

export default function StudioPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);
    const [coarse, setCoarse] = useState(false);
    const [resolved, setResolved] = useState(false);
    const router = useRouter();
    const locale = useLocale();

    // no cursor means no hover and no parallax: the copy stays up and the heads
    // drift on their own
    useEffect(() => {
        const mq = window.matchMedia("(hover: none)");
        const sync = () => setCoarse(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    // the heads arrive as a coarse grid and settle once the curtain has swept
    // off, so the page resolves rather than appearing finished — PostProcessing
    // tweens the value onto the dither uniform, nothing re-renders to animate it
    useEffect(() => {
        const t = setTimeout(() => setResolved(true), CURTAIN_MS);
        return () => clearTimeout(t);
    }, []);

    const heads = useMemo(() => HEAD_PROPS(coarse ? 0.5 : 0.12, resolved ? 0.9 : 12), [coarse, resolved]);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-foreground">
            <PageCurtain enter="dark" leave="dark" />

            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <div className="grid h-full w-full grid-cols-2 grid-rows-2 lg:flex">
                {members.map((member, i) => (
                    <button
                        key={member.slug}
                        type="button"
                        onClick={() => TransitionOut({ href: `/${locale}/studio/${member.slug}`, router })}
                        onMouseEnter={() => setHovered(member.slug)}
                        onMouseLeave={() => setHovered((s) => (s === member.slug ? null : s))}
                        onFocus={() => setHovered(member.slug)}
                        onBlur={() => setHovered((s) => (s === member.slug ? null : s))}
                        aria-label={`Open ${member.name}`}
                        className="group relative h-full w-full cursor-pointer overflow-hidden border-b border-r border-white/5 even:border-r-0 lg:flex-1 lg:border-b-0 lg:even:border-r lg:last:border-r-0"
                    >
                        <Head
                            {...heads[i]}
                            className={`absolute inset-0 h-full transition-all duration-200 ${coarse ? "opacity-100 brightness-100" : "opacity-33 brightness-50 hover:opacity-100 hover:brightness-100"}`}
                        />

                        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

                        <div className="pointer-events-none absolute inset-x-0 top-[66%] z-50 flex flex-col items-center gap-1 text-center text-white">
                            <TextReveal
                                open={coarse || hovered === member.slug}
                                duration={0.45}
                                as="h2"
                                className="subtitle"
                            >
                                {member.name}
                            </TextReveal>
                            <TextReveal
                                open={coarse || hovered === member.slug}
                                duration={0.45}
                                delay={coarse || hovered === member.slug ? 0.08 : 0}
                                as="p"
                                className="text-white/60"
                            >
                                {member.role}
                            </TextReveal>
                        </div>
                    </button>
                ))}
            </div>

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    );
}
