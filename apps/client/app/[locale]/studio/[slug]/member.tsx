'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { Icon } from "@iconify/react";
import Link from "@/components/facile/transitionLink";
import Header from "@/components/facile/header";
import Menu from "@/components/facile/menu";
import PageCurtain from "@/components/facile/pageTransition";
import DitherReveal from "@/components/facile/ditherReveal";
import TextReveal from "@/components/facile/textReveal";
import SplitLines from "@/components/facile/splitLines";
import { GithubIcon } from "@/components/ui/github";
import { InstagramIcon } from "@/components/ui/instagram";
import { DribbbleIcon } from "@/components/ui/dribbble";
import members from "../studio.json";
import projects from "../../projects/projects.json";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    GitHub: GithubIcon,
    Instagram: InstagramIcon,
    Dribbble: DribbbleIcon,
    LinkedIn: ({ size = 22, className }) => <Icon icon="mdi:linkedin" width={size} height={size} className={className} />,
};

const labelClass = "font-bb-mono font-semibold text-[clamp(0.65rem,1.4vh,0.9rem)] tracking-tight uppercase text-white/35";

const chipClass = "rounded-md px-[2vh] py-[1vh] font-bb-mono font-semibold tracking-tight text-[clamp(0.65rem,1.4vh,0.9rem)] uppercase bg-[#212121] text-white";

export default function MemberPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [shown, setShown] = useState(false);
    const params = useParams<{ slug: string }>();
    const locale = useLocale();
    const member = members.find((m) => m.slug === params.slug) ?? members[0];

    const worked = member.projects
        .map((slug) => projects.find((p) => p.slug === slug))
        .filter((p): p is (typeof projects)[number] => Boolean(p));

    useEffect(() => {
        const t = setTimeout(() => setShown(true), 200);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-foreground text-white">
            <PageCurtain enter="dark" leave="dark" />

            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            {/* head 3D object, filling the whole viewport */}
            <DitherReveal
                model={member.model}
                highlight={member.highlight}
                delay={0.15}
                className="absolute inset-0 h-full"
                dither={{
                    gridSize: 2,
                    parallax: 1,
                    parallaxSpeed: 0.02,
                    intensity: 1.0,
                    ambient: 0.9,
                    scale: 0.05,
                    position: [0, -1.1, 0],
                    roughness: member.roughness,
                    metalness: 1,
                    rotation: [0, 0, 0],
                    bloom: true,
                    bloomIntensity: 1.5,
                }}
            />

            <div className="pointer-events-none absolute inset-0 z-40 flex justify-between mt-24 gap-10 p-8 md:p-14">
                {/* identity, top-left — same stack as a shelf card's content column, mirrored */}
                
                <div className="flex max-w-sm flex-col items-start gap-text-left">
                    <div className="flex flex-col items-start gap-y-8">
                        <div className="flex flex-wrap items-center gap-8">
                            <div className="flex gap-2 items-center">
                                <div className="w-3 h-3 aspect-square rounded-sm" style={{backgroundColor: member.highlight }} />
                                <TextReveal open={shown} cropClassName="z-10" delay={0.1} className="font-goga text-5xl font-medium mb-1 normal-case tracking-normal text-white">
                                    {member.name}
                                </TextReveal>
                            </div>
                            <TextReveal open={shown} cropClassName="z-10" delay={0.16} className={labelClass}>
                                {member.role}
                            </TextReveal>
                        </div>

                        <SplitLines
                            text={member.description}
                            reveal={false}
                            className="relative z-10 max-w-[80ch] font-goga text-[clamp(0.8rem,1.9vh,1.35rem)] normal-case tracking-normal text-white/70"
                        />

                        {member.labels.length > 0 && (
                            <span className="relative z-10 flex flex-wrap items-center gap-1">
                                {member.labels.map((label, i) => (
                                    <TextReveal key={label} open={shown} delay={0.24 + i * 0.05} cropClassName="shrink-0" className={chipClass}>
                                        {label}
                                    </TextReveal>
                                ))}
                            </span>
                        )}

                        {member.socials.length > 0 && (
                            <TextReveal open={shown} delay={0.4} cropClassName="z-10" className="flex items-center gap-4 text-white/50">
                                {member.socials.map(({ label, href }) => {
                                    const SocialIcon = SOCIAL_ICONS[label];
                                    return (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            className="pointer-events-auto transition-colors hover:text-white"
                                        >
                                            {SocialIcon
                                                ? <SocialIcon size={22} className="transition-all duration-200 hover:scale-115" />
                                                : label}
                                        </a>
                                    );
                                })}
                            </TextReveal>
                        )}
                    </div>
                </div>

                <TextReveal open={shown} cropClassName="z-10 absolute top-12 left-1/2 -translate-x-1/2" delay={0.05}>
                    <Link
                        href={`/${locale}/studio`}
                        className="pointer-events-auto font-goga tracking-tight text-[clamp(0.65rem,1.7vh,1.3rem)] capitalize font-medium transition-colors hover:text-white"
                    >
                        ← Go back
                    </Link>
                </TextReveal>


                {/* projects top-right, facts bottom-right */}
                <div className="flex max-w-sm flex-col items-end justify-between gap-12 text-right">
                    {worked.length > 0 && (
                        <div className="flex flex-col items-end gap-3">
                            <TextReveal open={shown} cropClassName="relative z-10" delay={0.12} className={labelClass}>
                                Worked on
                            </TextReveal>
                            <div className="flex flex-col items-end gap-2">
                                {worked.map((project, i) => (
                                    <TextReveal key={project.slug} open={shown} cropClassName="relative z-10" delay={0.2 + i * 0.06}>
                                        <Link
                                            href={`/${locale}/projects/${project.slug}`}
                                            className="group pointer-events-auto flex items-center gap-2 font-goga text-2xl font-medium normal-case tracking-normal text-white/70 transition-colors hover:text-white"
                                        >
                                            {project.name}
                                            <span className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                                        </Link>
                                    </TextReveal>
                                ))}
                            </div>
                        </div>
                    )}

                    {member.facts.length > 0 && (
                        <div className="flex flex-col items-end gap-3">
                            <TextReveal open={shown} cropClassName="relative z-10" delay={0.34} className={labelClass}>
                                Off the clock
                            </TextReveal>
                            <div className="flex flex-col items-end gap-3">
                                {member.facts.map((fact) => (
                                    <SplitLines
                                        key={fact}
                                        text={fact}
                                        reveal={false}
                                        className="relative z-10 text-right font-bb-mono font-medium text-md uppercase tracking-tight text-white/66"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    );
}
