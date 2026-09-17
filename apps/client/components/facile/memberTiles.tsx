'use client'

import { memo, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/lib/i18n/navigation";
import { useLocalized } from "@/lib/i18n/localize";
import { TransitionOut } from "@/components/facile/pageTransition";
import DitherReveal from "@/components/facile/ditherReveal";
import TextReveal from "@/components/facile/textReveal";
import { useNarrow } from "@/hooks/use-narrow";
import { cn } from "@/lib/utils";
import { authoredMembers as members } from "@/lib/content/studio";

// a re-render re-bakes drei's Environment cubemap, so hover must never re-render a head
const Head = memo(DitherReveal);

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
    const coarse = useNarrow("(hover: none)");
    const router = useRouter();
    const t = useTranslations("studio.tiles");
    const crew = useLocalized(members);

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
