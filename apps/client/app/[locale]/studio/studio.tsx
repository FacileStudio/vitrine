'use client'

import { memo, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Header from "@/components/facile/header";
import Menu from "@/components/facile/menu";
import PageCurtain, { TransitionOut } from "@/components/facile/pageTransition";
import DitherReveal from "@/components/facile/ditherReveal";
import TextReveal from "@/components/facile/textReveal";
import members from "./studio.json";

// the canvases must never re-render on hover: a re-render re-bakes drei's
// Environment cubemap, four at a time. Memoised component, props built once
const Head = memo(DitherReveal);

const HEAD_PROPS = members.map((member, i) => ({
    model: member.model,
    highlight: member.highlight,
    delay: 0.15 + i * 0.15,
    dither: {
        gridSize: 0.9,
        intensity: 1.0,
        parallax: 0.6,
        parallaxSpeed: 0.05,
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
    const router = useRouter();
    const locale = useLocale();

    return (
        <div className="relative h-screen w-full overflow-hidden bg-foreground">
            <PageCurtain enter="dark" leave="dark" />

            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <div className="flex h-full w-full">
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
                        className="group relative h-full flex-1 cursor-pointer overflow-hidden border-r border-white/5 last:border-r-0"
                    >
                        {/* the head 3D object, revealed from behind the stripes */}
                        <Head
                            {...HEAD_PROPS[i]}
                            className="absolute hover:opacity-100 saturate-50 hover:saturate-100 opacity-33 transition-all duration-200 inset-0 h-full"
                        />

                        {/* subtle darken + lift on hover */}
                        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

                        {/* name / role, revealed just under the head on hover */}
                        <div className="pointer-events-none absolute inset-x-0 top-[66%] z-50 flex flex-col items-center gap-1 text-center text-white">
                            <TextReveal
                                open={hovered === member.slug}
                                duration={0.45}
                                className="font-goga text-4xl font-medium normal-case tracking-tight 3xl:text-5xl"
                            >
                                {member.name}
                            </TextReveal>
                            <TextReveal
                                open={hovered === member.slug}
                                duration={0.45}
                                delay={hovered === member.slug ? 0.08 : 0}
                                className="text-sm font-semibold tracking-[-0.7%] uppercase text-white/60 3xl:text-base"
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
