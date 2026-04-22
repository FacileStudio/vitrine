'use client'

import Image from "next/image";
import React from "react";
import { RideauxIn } from "@/components/facile/rideaux";
import { useTranslations } from 'next-intl';

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

type PanelProps = {
    children: React.ReactNode;
    className?: string;
};

const Reveal = ({children, className = "", delay = 0}: RevealProps) => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }

                setIsVisible(true);
                observer.unobserve(entry.target);
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transitionProperty: "opacity, transform",
                transitionDuration: "700ms",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: `${delay}ms`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </div>
    );
};

const Panel = ({children, className = ""}: PanelProps) => (
    <div className={`rounded-[28px] border border-[#CAE6D8]/18 bg-[#0D1310]/55 backdrop-blur-md text-[#CAE6D8] shadow-[0_24px_80px_rgba(0,0,0,0.25)] ${className}`}>
        {children}
    </div>
);

export default function AboutPage() {
    const t = useTranslations('about');

    React.useEffect(() => {
        RideauxIn(0);
    }, []);

    const differentiators = [
        t('whatSetsUsApart.items.0'),
        t('whatSetsUsApart.items.1'),
        t('whatSetsUsApart.items.2'),
        t('whatSetsUsApart.items.3'),
    ];

    const services = [
        {
            key: 'design',
            icon: '/icons/style.svg',
            title: t('services.design.title'),
            description: t('services.design.description'),
            items: [
                t('services.design.items.0'),
                t('services.design.items.1'),
                t('services.design.items.2'),
            ],
            className: 'md:col-span-5',
        },
        {
            key: 'uiux',
            icon: '/icons/web.svg',
            title: t('services.uiux.title'),
            description: t('services.uiux.description'),
            items: [
                t('services.uiux.items.0'),
                t('services.uiux.items.1'),
                t('services.uiux.items.2'),
            ],
            className: 'md:col-span-7',
        },
        {
            key: 'webapp',
            icon: '/icons/code.svg',
            title: t('services.webapp.title'),
            description: t('services.webapp.description'),
            items: [
                t('services.webapp.items.0'),
                t('services.webapp.items.1'),
                t('services.webapp.items.2'),
            ],
            className: 'md:col-span-12',
        },
    ];

    const team = [
        {
            key: 'yann',
            image: '/images/team/yann.webp',
            rounded: true,
            links: [
                {
                    href: 'https://linkedin.com/in/thevyann',
                    icon: '/icons/linkedIn.svg',
                    label: "Yann's LinkedIn profile",
                },
                {
                    href: 'https://www.github.com/saravenpi',
                    icon: '/icons/githubWhite.svg',
                    label: "Yann's GitHub profile",
                },
            ],
        },
        {
            key: 'noah',
            image: '/icons/noah.svg',
            rounded: false,
            links: [
                {
                    href: 'https://www.dribbble.com/webbygian',
                    icon: '/icons/dribbbleWhite.svg',
                    label: "Noah's Dribbble profile",
                },
                {
                    href: 'https://www.github.com/G1anC',
                    icon: '/icons/githubWhite.svg',
                    label: "Noah's GitHub profile",
                },
                {
                    href: 'https://www.instagram.com/webbygian',
                    icon: '/icons/instagramWhite.svg',
                    label: "Noah's Instagram profile",
                },
            ],
        },
        {
            key: 'mezz',
            image: '/images/team/mezz.webp',
            rounded: true,
            links: [
                {
                    href: 'https://www.github.com/MezzLMC',
                    icon: '/icons/githubWhite.svg',
                    label: "Mezz's GitHub profile",
                },
            ],
        },
        {
            key: 'cami',
            image: '/images/team/cami.webp',
            rounded: true,
            links: [
                {
                    href: 'https://www.instagram.com/camg_raphic/',
                    icon: '/icons/instagramWhite.svg',
                    label: "Cami's Instagram profile",
                },
            ],
        },
    ];

    return (
        <div
            style={{
                backgroundImage: 'url("/images/bg-blur.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
            }}
            className="relative h-full w-full overflow-x-hidden overflow-y-auto rounded-[32px] outline-none text-[#CAE6D8]"
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-[#CAE6D8]/10 blur-3xl" />
                <div className="absolute right-[-5%] top-[32rem] h-80 w-80 rounded-full bg-[#CAE6D8]/8 blur-3xl" />
                <div className="absolute bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#CAE6D8]/8 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,15,12,0.2),rgba(9,15,12,0.88)_30%,rgba(9,15,12,0.98))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(202,230,216,0.12),transparent_45%)]" />
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 pb-24 pt-36 md:px-8 md:pt-44 lg:gap-20 lg:px-12">
                <section className="grid items-end gap-6 lg:grid-cols-[1.45fr_0.9fr]">
                    <Reveal delay={40}>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 rounded-full border border-[#CAE6D8]/18 bg-[#CAE6D8]/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#CAE6D8]/70">
                                <span className="h-2 w-2 rounded-full bg-[#CAE6D8]" />
                                Facile. Studio
                            </div>

                            <div className="space-y-4">
                                <h1 className="max-w-4xl text-[clamp(4rem,13vw,9rem)] font-black leading-[0.9] tracking-[-0.06em]">
                                    {t('title')}
                                </h1>
                                <div className="max-w-[320px] md:max-w-[420px]">
                                    <Image
                                        src="/icons/FACILE Text.svg"
                                        className="w-full"
                                        alt="Facile Studio logo"
                                        width={420}
                                        height={90}
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                                <p className="max-w-2xl text-base leading-relaxed text-[#CAE6D8]/72 md:text-xl">
                                    {t('subtitle')}
                                </p>
                                <div className="grid gap-2 sm:grid-cols-2">
                                    {differentiators.map((item, index) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl border border-[#CAE6D8]/12 bg-[#CAE6D8]/7 px-4 py-4 text-sm uppercase tracking-[0.16em] text-[#CAE6D8]/82"
                                        >
                                            <div className="mb-3 text-[10px] text-[#CAE6D8]/45">0{index + 1}</div>
                                            <div className="leading-snug">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={140} className="h-full">
                        <Panel className="flex h-full flex-col justify-between p-6 md:p-8">
                            <div className="space-y-6">
                                <div className="text-[11px] uppercase tracking-[0.28em] text-[#CAE6D8]/48">
                                    {t('whatSetsUsApart.title').replace('\n', ' ')}
                                </div>
                                <div className="space-y-4">
                                    {differentiators.map((item) => (
                                        <div key={item} className="flex items-center justify-between gap-4 border-b border-[#CAE6D8]/10 pb-4 last:border-b-0 last:pb-0">
                                            <span className="text-lg leading-tight text-[#CAE6D8]/92">{item}</span>
                                            <span className="text-[#CAE6D8]/35">+</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 rounded-[24px] border border-[#CAE6D8]/10 bg-black/20 p-5">
                                <div className="text-[11px] uppercase tracking-[0.28em] text-[#CAE6D8]/45">
                                    Studio note
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-[#CAE6D8]/72">
                                    Design-first, build-ready, and allergic to dead interfaces.
                                </p>
                            </div>
                        </Panel>
                    </Reveal>
                </section>

                <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                    <Reveal>
                        <div className="space-y-4">
                            <div className="text-[11px] uppercase tracking-[0.28em] text-[#CAE6D8]/45">
                                {t('mission.title')}
                            </div>
                            <div className="max-w-sm text-3xl font-black leading-[0.95] tracking-[-0.05em] md:text-5xl">
                                {t('whatSetsUsApart.title')}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <Panel className="overflow-hidden">
                            <div className="grid gap-0 md:grid-cols-[0.85fr_1.15fr]">
                                <div className="border-b border-[#CAE6D8]/10 p-6 md:border-b-0 md:border-r md:p-8">
                                    <div className="text-[11px] uppercase tracking-[0.28em] text-[#CAE6D8]/45">
                                        Mission
                                    </div>
                                    <div className="mt-6 space-y-3 text-sm uppercase tracking-[0.18em] text-[#CAE6D8]/70">
                                        <div>Brand systems</div>
                                        <div>Web craft</div>
                                        <div>Conversion clarity</div>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8">
                                    <p className="whitespace-pre-line text-base leading-relaxed text-[#CAE6D8]/78 md:text-lg">
                                        {t('mission.text')}
                                    </p>
                                </div>
                            </div>
                        </Panel>
                    </Reveal>
                </section>

                <section className="space-y-8">
                    <Reveal>
                        <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                            <div className="text-[11px] uppercase tracking-[0.28em] text-[#CAE6D8]/45">
                                {t('services.title')}
                            </div>
                            <div className="max-w-3xl text-lg leading-relaxed text-[#CAE6D8]/72 md:text-2xl">
                                {t('services.subtitle')}
                            </div>
                        </div>
                    </Reveal>

                    <div className="grid gap-6 md:grid-cols-12">
                        {services.map((service, index) => (
                            <Reveal key={service.key} delay={80 + index * 90} className={service.className}>
                                <Panel className="group h-full p-6 transition-colors duration-300 hover:bg-[#111A15]/72 md:p-8">
                                    <div className="flex h-full flex-col gap-8">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="rounded-2xl border border-[#CAE6D8]/12 bg-[#CAE6D8]/8 p-3">
                                                    <Image src={service.icon} alt="" width={20} height={20} />
                                                </div>
                                                <div className="text-[11px] uppercase tracking-[0.28em] text-[#CAE6D8]/42">
                                                    0{index + 1}
                                                </div>
                                            </div>
                                            <div className="h-px w-16 bg-[#CAE6D8]/12 transition-all duration-300 group-hover:w-24" />
                                        </div>

                                        <div className="space-y-4">
                                            <h2 className="whitespace-pre-line text-3xl font-black leading-[0.92] tracking-[-0.05em] md:text-4xl">
                                                {service.title}
                                            </h2>
                                            <p className="max-w-2xl text-base leading-relaxed text-[#CAE6D8]/72">
                                                {service.description}
                                            </p>
                                        </div>

                                        <div className="mt-auto flex flex-wrap gap-3">
                                            {service.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full border border-[#CAE6D8]/14 bg-black/20 px-4 py-2 text-sm text-[#CAE6D8]/84"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Panel>
                            </Reveal>
                        ))}
                    </div>
                </section>

                <section className="space-y-8">
                    <Reveal>
                        <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                            <div className="text-[11px] uppercase tracking-[0.28em] text-[#CAE6D8]/45">
                                {t('team.title')}
                            </div>
                            <div className="max-w-3xl text-lg leading-relaxed text-[#CAE6D8]/72 md:text-2xl">
                                {t('team.subtitle')}
                            </div>
                        </div>
                    </Reveal>

                    <div className="grid gap-6 md:grid-cols-2">
                        {team.map((member, index) => (
                            <Reveal key={member.key} delay={90 + index * 90}>
                                <Panel className="group h-full overflow-hidden p-6 transition-colors duration-300 hover:bg-[#111A15]/70 md:p-8">
                                    <div className="flex h-full flex-col gap-8">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="overflow-hidden rounded-2xl border border-[#CAE6D8]/15 bg-[#CAE6D8]/7 p-1">
                                                    <Image
                                                        src={member.image}
                                                        alt=""
                                                        width={72}
                                                        height={72}
                                                        className={member.rounded ? "h-[72px] w-[72px] rounded-[18px] object-cover" : "h-[72px] w-[72px] object-contain"}
                                                    />
                                                </div>
                                                <div>
                                                    <div className="text-[11px] uppercase tracking-[0.28em] text-[#CAE6D8]/42">
                                                        0{index + 1}
                                                    </div>
                                                    <h3 className="mt-2 whitespace-pre-line text-2xl font-black leading-[0.95] tracking-[-0.05em]">
                                                        {t(`team.${member.key}.name`)}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                {member.links.map((link) => (
                                                    <a
                                                        key={link.href}
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={link.label}
                                                        className="opacity-72 transition-transform duration-200 hover:scale-110 hover:opacity-100"
                                                    >
                                                        <Image src={link.icon} alt="" width={20} height={20} />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="rounded-[22px] border border-[#CAE6D8]/10 bg-black/20 px-4 py-3 text-sm uppercase tracking-[0.18em] text-[#CAE6D8]/68">
                                            {t(`team.${member.key}.role`)}
                                        </div>

                                        <p className="text-base leading-relaxed text-[#CAE6D8]/74">
                                            {t(`team.${member.key}.description`)}
                                        </p>
                                    </div>
                                </Panel>
                            </Reveal>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
