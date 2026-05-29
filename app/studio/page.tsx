'use client'

import Image from "next/image";
import React from "react";
import { TransitionIn } from "@/components/facile/pageTransition";
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

const Panel = ({ children, className = "" }: PanelProps) => (
    <div className={`rounded-[28px]  bg-[#0D1310]/55 text-[#CAE6D8] shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-md ${className}`}>
        {children}
    </div>
);

const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
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
    const common = useTranslations('common');

    React.useEffect(() => {
        TransitionIn(0);
    }, []);

    const openContactModal = React.useCallback(() => {
        window.dispatchEvent(new Event("facile:open-contact-modal"));
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
            <div className="relative z-10 mx-auto flex w-full max-w-[1920px] flex-col gap-10 px-8 pb-24 md:px-20 lg:gap-20 lg:px-32">
                <div className="pb-10 pt-36 md:pt-44">
                    <div className="flex flex-col gap-10 lg:gap-20">
                        <section>
                            <Reveal delay={40}>
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <h1 className="max-w-4xl font-sans text-[clamp(4rem,13vw,9rem)] font-black leading-[0.9] tracking-[-0.06em]">
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
                        </section>

                        <section className="mx-auto w-full max-w-5xl py-6">
                            <Reveal>
                                <div className="rounded-[32px]  bg-[#CAE6D8]/8 p-10 text-[#CAE6D8] shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm md:p-12">
                                    <div className="w-full flex-col ">
                                        <h2 className="mb-5 text-3xl font-extrabold  md:text-4xl">
                                            {t('mission.title')}
                                        </h2>
                                        <p className="w-full whitespace-pre-line text-base leading-relaxed text-[#CAE6D8]/72 md:text-lg">
                                            {t('mission.text')}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        </section>
                    </div>
                </div>

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
                                                <div className="rounded-2xl  bg-[#CAE6D8]/8 p-3">
                                                    <Image src={service.icon} alt="" width={20} height={20} />
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
                                                    className="rounded-full bg-black/20 px-4 py-2 text-sm text-[#CAE6D8]/84"
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
                                        <p className="mt-3 rounded-full bg-[#CAE6D8]/8 px-4 py-2 text-sm text-[#CAE6D8]/78">
                                            {t('team.yann.role')}
                                        </p>
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
                                        <p className="mt-3 rounded-full bg-[#CAE6D8]/8 px-4 py-2 text-sm text-[#CAE6D8]/78">
                                            {t('team.noah.role')}
                                        </p>
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
                                        <Image src="/images/team/mezz.webp" alt="Mezz" width={64} height={64} className="rounded-full" />
                                        <h3 className="mt-3 whitespace-pre-line text-3xl font-extrabold leading-[110%] text-[#CAE6D8]">{t('team.mezz.name')}</h3>
                                        <p className="mt-3 rounded-full bg-[#CAE6D8]/8 px-4 py-2 text-sm text-[#CAE6D8]/78">
                                            {t('team.mezz.role')}
                                        </p>
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
                                        <Image src="/images/team/cami.webp" alt="Cami" width={64} height={64} className="rounded-full" />
                                        <h3 className="mt-3 whitespace-pre-line text-3xl font-extrabold leading-[110%] text-[#CAE6D8]">{t('team.cami.name')}</h3>
                                        <p className="mt-3 rounded-full bg-[#CAE6D8]/8 px-4 py-2 text-sm text-[#CAE6D8]/78">
                                            {t('team.cami.role')}
                                        </p>
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

                <section className="mx-auto w-full max-w-5xl py-10">
                    <Reveal>
                        <Panel className="px-6 py-10 text-center md:px-10 md:py-14">
                            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
                                <h2 className="text-3xl font-extrabold md:text-4xl">
                                    {common('contactModal.title')}
                                </h2>
                                <p className="max-w-2xl text-base leading-relaxed text-[#CAE6D8]/72 md:text-lg">
                                    {common('contactModal.description')}
                                </p>
                                <button
                                    type="button"
                                    onClick={openContactModal}
                                    className="group flex items-center gap-3 rounded-full bg-[#CAE6D8] px-6 py-3 text-[#1E1E1E] transition-colors duration-150 hover:bg-[#1E1E1E] hover:text-[#CAE6D8]"
                                >
                                    <span
                                        className="h-5 w-5 bg-[#1E1E1E] transition-colors duration-150 group-hover:bg-[#CAE6D8]"
                                        style={{
                                            WebkitMaskImage: "url(/icons/mail.svg)",
                                            maskImage: "url(/icons/mail.svg)",
                                            WebkitMaskSize: "contain",
                                            maskSize: "contain",
                                            WebkitMaskRepeat: "no-repeat",
                                            maskRepeat: "no-repeat",
                                        }}
                                    />
                                    {common('header.contactUs')}
                                </button>
                            </div>
                        </Panel>
                    </Reveal>
                </section>
            </div>
        </div>
    );
}
