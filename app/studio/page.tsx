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

const Box = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="rounded-[20px] border border-[#CAE6D8]/33 bg-[#CAE6D8]/10 p-8 text-[#CAE6D8]/66 transition-all duration-300 hover:text-[#CAE6D8] hover:shadow-[inset_0_0_40px_0_#CAE6D815]">
            <div className="flex flex-col gap-6">
                {children}
            </div>
        </div>
    );
};

const Panel = ({children, className = ""}: PanelProps) => (
    <div className={`rounded-[28px] border border-[#CAE6D8]/18 bg-[#0D1310]/55 text-[#CAE6D8] shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-md ${className}`}>
        {children}
    </div>
);

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

                            <div className="max-w-2xl">
                                <p className="text-base leading-relaxed text-[#CAE6D8]/72 md:text-xl">
                                    {t('subtitle')}
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={140} className="h-full">
                        <Panel className="p-6 md:p-8">
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
                        </Panel>
                    </Reveal>
                </section>

                <section className="mx-auto w-full max-w-5xl py-6">
                    <Reveal>
                        <div className="rounded-[32px] border border-[#CAE6D8]/25 bg-[#CAE6D8] px-6 py-10 text-[#1E1E1E] shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:px-10 md:py-12">
                            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                                <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[#1E1E1E]/45">
                                    Studio
                                </div>
                                <h2 className="mb-5 text-3xl font-extrabold text-center md:text-4xl">
                                    {t('mission.title')}
                                </h2>
                                <p className="max-w-3xl whitespace-pre-line text-base leading-relaxed text-[#1E1E1E]/72 md:text-lg">
                                    {t('mission.text')}
                                </p>
                            </div>
                        </div>
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

                <section className="mx-auto w-full max-w-5xl py-6">
                    <Reveal className="text-center">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold">
                                {t('team.title')}
                            </h2>
                            <p className="mt-5 text-center text-[#CAE6D8]/66">
                                {t('team.subtitle')}
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <Reveal delay={50}>
                            <Panel className="h-full p-8 text-center">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center">
                                        <Image src="/images/team/yann.webp" alt="Yann" width={64} height={64} className="rounded-full" />
                                        <h3 className="mt-3 whitespace-pre-line text-3xl font-extrabold leading-[110%] text-[#CAE6D8]">{t('team.yann.name')}</h3>
                                        <p className="mt-3 text-[#CAE6D8]/72">{t('team.yann.role')}</p>
                                    </div>
                                    <p className="mt-6 text-[#CAE6D8]/72">{t('team.yann.description')}</p>
                                    <div className="flex items-center justify-center gap-6">
                                        <a href="https://linkedin.com/in/thevyann" target="_blank" rel="noopener noreferrer" aria-label="Yann's LinkedIn profile">
                                            <Image src="/icons/linkedIn.svg" alt="LinkedIn" className="transition-all duration-200 hover:scale-130" width={20} height={20} />
                                        </a>
                                        <a href="https://www.github.com/saravenpi" target="_blank" rel="noopener noreferrer" aria-label="Yann's GitHub profile">
                                            <Image src="/icons/githubWhite.svg" alt="GitHub" className="transition-all duration-200 hover:scale-130" width={20} height={20} />
                                        </a>
                                    </div>
                                </div>
                            </Panel>
                        </Reveal>

                        <Reveal delay={140}>
                            <Panel className="h-full p-8 text-center">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center">
                                        <Image src="/icons/noah.svg" alt="Noah" width={64} height={64} />
                                        <h3 className="mt-3 whitespace-pre-line text-3xl font-extrabold leading-[110%] text-[#CAE6D8]">{t('team.noah.name')}</h3>
                                        <p className="mt-3 text-[#CAE6D8]/72">{t('team.noah.role')}</p>
                                    </div>
                                    <p className="mt-6 text-[#CAE6D8]/72">{t('team.noah.description')}</p>
                                    <div className="mt-3 flex items-center justify-center gap-6">
                                        <a href="https://www.dribbble.com/webbygian" target="_blank" rel="noopener noreferrer" aria-label="Noah's Dribbble profile">
                                            <Image src="/icons/dribbbleWhite.svg" alt="Dribbble" className="transition-all duration-200 hover:scale-130" width={20} height={20} />
                                        </a>
                                        <a href="https://www.github.com/G1anC" target="_blank" rel="noopener noreferrer" aria-label="Noah's GitHub profile">
                                            <Image src="/icons/githubWhite.svg" alt="GitHub" className="transition-all duration-200 hover:scale-130" width={20} height={20} />
                                        </a>
                                        <a href="https://www.instagram.com/webbygian" target="_blank" rel="noopener noreferrer" aria-label="Noah's Instagram profile">
                                            <Image src="/icons/instagramWhite.svg" alt="Instagram" className="transition-all duration-200 hover:scale-130" width={20} height={20} />
                                        </a>
                                    </div>
                                </div>
                            </Panel>
                        </Reveal>

                        <Reveal delay={230}>
                            <Panel className="h-full p-8 text-center">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center">
                                        <Image src="/images/team/mezz.webp" alt="Mezz" width={64} height={64} className="rounded-full border border-white/50" />
                                        <h3 className="mt-3 whitespace-pre-line text-3xl font-extrabold leading-[110%] text-[#CAE6D8]">{t('team.mezz.name')}</h3>
                                        <p className="mt-3 text-[#CAE6D8]/72">{t('team.mezz.role')}</p>
                                    </div>
                                    <p className="mt-6 text-[#CAE6D8]/72">{t('team.mezz.description')}</p>
                                    <div className="mt-3 flex items-center justify-center gap-6">
                                        <a href="https://www.github.com/MezzLMC" target="_blank" rel="noopener noreferrer" aria-label="Mezz's GitHub profile">
                                            <Image src="/icons/githubWhite.svg" alt="GitHub" className="transition-all duration-200 hover:scale-130" width={20} height={20} />
                                        </a>
                                    </div>
                                </div>
                            </Panel>
                        </Reveal>

                        <Reveal delay={320}>
                            <Panel className="h-full p-8 text-center">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center">
                                        <Image src="/images/team/cami.webp" alt="Cami" width={64} height={64} className="rounded-full border border-white/50" />
                                        <h3 className="mt-3 whitespace-pre-line text-3xl font-extrabold leading-[110%] text-[#CAE6D8]">{t('team.cami.name')}</h3>
                                        <p className="mt-3 text-[#CAE6D8]/72">{t('team.cami.role')}</p>
                                    </div>
                                    <p className="mt-6 text-[#CAE6D8]/72">{t('team.cami.description')}</p>
                                    <div className="mt-3 flex items-center justify-center gap-6">
                                        <a href="https://www.instagram.com/camg_raphic/" target="_blank" rel="noopener noreferrer" aria-label="Cami's Instagram profile">
                                            <Image src="/icons/instagramWhite.svg" alt="Instagram" className="transition-all duration-200 hover:scale-130" width={20} height={20} />
                                        </a>
                                    </div>
                                </div>
                            </Panel>
                        </Reveal>
                    </div>
                </section>
            </div>
        </div>
    );
}
