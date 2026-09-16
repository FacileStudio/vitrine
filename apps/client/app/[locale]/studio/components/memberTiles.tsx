'use client'

import { memo, useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/lib/i18n/navigation";
import { useLocalized } from "@/lib/i18n/localize";
import { TransitionOut } from "@/components/facile/pageTransition";
import DitherReveal from "@/components/facile/ditherReveal";
import TextReveal from "@/components/facile/textReveal";
import { cn } from "@/app/utils";
import members from "../studio.json";

// the canvases must never re-render on hover: a re-render re-bakes drei's
// Environment cubemap, four at a time. Memoised component, props built once
const Head = memo(DitherReveal);

// a head's cover takes about a second to clear, so each starts once most of the one
// before it is out: they arrive one at a time rather than as a block
const HEAD_STEP = 0.5;

const HEAD_PROPS = (idle: number, gridSize: number) => members.map((member, i) => ({
    model: member.model,
    highlight: member.highlight,
    delay: 0.15 + i * HEAD_STEP,
    dither: {
        gridSize,
        intensity: 1.0,
        parallax: 0.6,
        parallaxSpeed: 0.05,
        idle,
        ambient: 0.3,
        float: false,
        scale: member.scale * (4 / 3),
        roughness: member.roughness,
        metalness: 0,
        hairColor: member.hair ?? undefined,
        rotation: [0, 0, 0] as [number, number, number],
        bloom: true,
        bloomIntensity: 1,
    },
}));

/**
 * The crew's four dithered heads side by side, each opening its member's page, with the
 * name and role rising on hover. The studio page fills the screen with them and the
 * footer lines them up along its bottom.
 *
 * `resolved` settles the heads out of the coarse grid they arrive in; the parent decides
 * when, so they resolve once whatever covered them has gone. `dimmed` keeps them faded
 * until hovered, as the studio page wants; turn it off to show them at full strength.
 * `tileClassName` goes on every head's tile, for the dividers the studio page draws.
 */
export default function MemberTiles({
    resolved,
    dimmed = true,
    className,
    tileClassName,
}: {
    resolved: boolean;
    dimmed?: boolean;
    className?: string;
    tileClassName?: string;
}) {
    const [hovered, setHovered] = useState<string | null>(null);
    const [coarse, setCoarse] = useState(false);
    const router = useRouter();
    const t = useTranslations("studio.tiles");
    const crew = useLocalized(members);

    // no cursor means no hover and no parallax: the copy stays up and the heads
    // drift on their own
    useEffect(() => {
        const mq = window.matchMedia("(hover: none)");
        const sync = () => setCoarse(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    const heads = useMemo(() => HEAD_PROPS(coarse ? 0.5 : 0.12, resolved ? 0.9 : 12), [coarse, resolved]);

    return (
        <div className={cn("grid h-full w-full grid-cols-2 grid-rows-2 lg:flex", className)}>
            {crew.map((member, i) => (
                <button
                    key={member.slug}
                    type="button"
                    onClick={() => TransitionOut({ href: `/studio/${member.slug}`, router })}
                    onMouseEnter={() => setHovered(member.slug)}
                    onMouseLeave={() => setHovered((s) => (s === member.slug ? null : s))}
                    onFocus={() => setHovered(member.slug)}
                    onBlur={() => setHovered((s) => (s === member.slug ? null : s))}
                    aria-label={t("open", { name: member.name })}
                    className={cn("group relative h-full w-full cursor-pointer overflow-hidden lg:flex-1", tileClassName)}
                >
                    <Head
                        {...heads[i]}
                        className={`absolute inset-0 h-full transition-all duration-200 ${coarse || !dimmed ? "opacity-100 brightness-100" : "opacity-33 brightness-50 hover:opacity-100 hover:brightness-100"}`}
                    />

                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300" />

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
    );
}
