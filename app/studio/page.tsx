'use client'

import Image from "next/image";
import React from "react";
import {RideauxIn} from "@/components/facile/rideaux";
import {useTranslations} from 'next-intl';

const Box = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={"p-8 bg-[#CAE6D8]/10 rounded-[20px] hover:shadow-[inset_0_0_40px_0_#CAE6D815] border text-[#CAE6D8]/66 border-[#CAE6D8]/33 flex flex-col gap-6 duration-300 transition-all hover:text-[#CAE6D8]"}>
            {children}
        </div>
    )
}

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
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

export default function AboutPage() {
    const t = useTranslations('about');

    React.useEffect(() => {
        RideauxIn(0);
    }, [])

    return (
    <div
        style={{
            backgroundImage: 'url("/images/bg-blur.webp")',
            backgroundSize: "cover", 
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
        }}
        className="w-full h-full flex flex-col items-center justify-start text-[#CAE6D8] leading-[110%] text-sm md:text-lg tracking-tight overflow-x-hidden overflow-y-auto relative rounded-[32px] outline-none">

        {/* ABOUT FACILE */}
        <section className="w-full max-w-3xl z-10 py-20 mt-64 pb-16 flex flex-col gap-5 items-center text-center">
            <Reveal className="w-full flex justify-center">
                <div className={"flex lg:flex-row flex-col items-center justify-center lg:gap-8 overflow-visible"}>
                    <h1 className="text-[90px] leading-[100%] font-extrabold shrink-0">
                        {t('title')}
                    </h1>
                    <div className={"pb-2 shrink-0 min-w-[300px]"}>
                        <Image src="/icons/FACILE Text.svg" className="w-[310px]" alt="Facile Studio logo" width={310} height={80} />
                    </div>
                </div>
            </Reveal>
            <Reveal delay={100}>
                <p className="max-w-2xl text-[#CAE6D8]/66">
                    {t('subtitle')}
                </p>
            </Reveal>

            {/* OUR MISSION */}
            <div className={"flex flex-col md:flex-row gap-8 py-20 items-center justify-between w-full "}>
                <Reveal className="w-full md:w-auto">
                    <div className={"flex flex-col items-start justify-start"}>
                        <h1 className="text-3xl font-extrabold mb-5 px-3 lg:px-0 text-start">
                            {t('mission.title')}
                        </h1>
                        <p className="max-w-sm text-justify px-3 lg:px-0 text-normal">
                            {t('mission.text')}
                        </p>
                    </div>
                </Reveal>

                <Reveal className="w-full md:w-auto" delay={120}>
                    <Box>
                        <>
                            <div className={"text-xl font-extrabold leading-[110%] text-[#CAE6D8] text-start"}>
                                {t('whatSetsUsApart.title')}
                            </div>
                            <ul className="list-disc pl-2 text-start">
                                <li className={"mt-1"}>{t('whatSetsUsApart.items.0')}</li>
                                <li className={"mt-1"}>{t('whatSetsUsApart.items.1')}</li>
                                <li className={"mt-1"}>{t('whatSetsUsApart.items.2')}</li>
                                <li className={"mt-1"}>{t('whatSetsUsApart.items.3')}</li>
                            </ul>
                        </>
                    </Box>
                </Reveal>
            </div>
        </section>

        {/* SERVICES */}
        <section className="w-full max-w-5xl px-6 py-20 z-10 flex flex-col items-center justify-center gap-6">
            <Reveal className="text-center">
                <div className={"text-center"}>
                    <h1 className="text-3xl font-extrabold">
                        {t('services.title')}
                    </h1>
                    <p className="text-[#CAE6D8]/66 mt-5 text-center">
                        {t('services.subtitle')}
                    </p>
                </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Reveal delay={50}>
                    <Box>
                        <Image src={"/icons/style.svg"} alt={"logo"} width={20} height={20} />
                        <h3 className="text-xl font-extrabold leading-[110%] text-[#CAE6D8]">{t('services.design.title')}</h3>
                        <p className="">
                            {t('services.design.description')}
                        </p>
                        <ul className="list-disc pl-2 text-start">
                            <li className={"mt-1"}>{t('services.design.items.0')}</li>
                            <li className={"mt-1"}>{t('services.design.items.1')}</li>
                            <li className={"mt-1"}>{t('services.design.items.2')}</li>
                        </ul>
                    </Box>
                </Reveal>

                <Reveal delay={140}>
                    <Box>
                        <Image src={"/icons/web.svg"} alt={"logo"} width={20} height={20} />
                        <h3 className="text-xl font-extrabold leading-[110%] text-[#CAE6D8]">{t('services.uiux.title')}</h3>
                        <p className="">
                            {t('services.uiux.description')}
                        </p>
                        <ul className="list-disc pl-2 text-start">
                            <li className={"mt-1"}>{t('services.uiux.items.0')}</li>
                            <li className={"mt-1"}>{t('services.uiux.items.1')}</li>
                            <li className={"mt-1"}>{t('services.uiux.items.2')}</li>
                        </ul>
                    </Box>
                </Reveal>

                <Reveal delay={230}>
                    <Box>
                        <Image src={"/icons/code.svg"} alt={"logo"} width={20} height={20} />
                        <h3 className="text-xl font-extrabold leading-[110%] text-[#CAE6D8]">{t('services.webapp.title')}</h3>
                        <p className="">
                            {t('services.webapp.description')}
                        </p>
                        <ul className="list-disc pl-2 text-start">
                            <li className={"mt-1"}>{t('services.webapp.items.0')}</li>
                            <li className={"mt-1"}>{t('services.webapp.items.1')}</li>
                            <li className={"mt-1"}>{t('services.webapp.items.2')}</li>
                        </ul>
                    </Box>
                </Reveal>
            </div>
        </section>

        {/* TEAM */}
        <section className="w-full max-w-4xl px-6 py-20 z-10 flex flex-col items-center justify-center gap-6">
            <Reveal className="text-center">
                <div className={"text-center"}>
                    <h1 className="text-3xl font-extrabold">
                        {t('team.title')}
                    </h1>
                    <p className="text-[#CAE6D8]/66 mt-5 text-center">
                        {t('team.subtitle')}
                    </p>
                </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Reveal delay={50}>
                    <Box>
                        <div>
                            <Image src={"/images/team/yann.webp"} alt={"logo"} width={64} height={64}  className="rounded-full"/>
                            <h3 className="text-3xl font-extrabold leading-[110%] text-[#CAE6D8] mt-3">{t('team.yann.name')}</h3>
                            <p className=" mt-3">
                                {t('team.yann.role')}
                            </p>
                        </div>
                        <p className="mt-6">
                            {t('team.yann.description')}
                        </p>
                        <div className={"flex items-center justify-start gap-6"}>
                            <a href={"https://linkedin.com/in/thevyann"} target="_blank" rel="noopener noreferrer" aria-label="Yann's LinkedIn profile">
                                <Image src="/icons/linkedIn.svg" alt="LinkedIn" className="hover:scale-130 duration-200 transition-all" width={20} height={20} />
                            </a>
                            <a href={"https://www.github.com/saravenpi"} target="_blank" rel="noopener noreferrer" aria-label="Yann's GitHub profile">
                                <Image src="/icons/githubWhite.svg" alt="GitHub" className="hover:scale-130 duration-200 transition-all" width={20} height={20} />
                            </a>
                        </div>
                    </Box>
                </Reveal>

                <Reveal delay={140}>
                    <Box>
                        <div className={""}>
                            <Image src={"/icons/noah.svg"} alt={"logo"} width={64} height={64} />
                            <h3 className="text-3xl font-extrabold leading-[110%] text-[#CAE6D8] mt-3">{t('team.noah.name')}</h3>
                            <p className="text-start mt-3">
                                {t('team.noah.role')}
                            </p>
                        </div>
                        <p className="mt-6">
                            {t('team.noah.description')}
                        </p>
                        <div className={"flex items-center justify-start gap-6 mt-3"}>
                            <a href={"https://www.dribbble.com/webbygian"} target="_blank" rel="noopener noreferrer" aria-label="Noah's Dribbble profile">
                                <Image src="/icons/dribbbleWhite.svg" alt="Dribbble" className="hover:scale-130 duration-200 transition-all" width={20} height={20} />
                            </a>
                            <a href={"https://www.github.com/G1anC"} target="_blank" rel="noopener noreferrer" aria-label="Noah's GitHub profile">
                                <Image src="/icons/githubWhite.svg" alt="GitHub" className="hover:scale-130 duration-200 transition-all" width={20} height={20} />
                            </a>
                            <a href={"https://www.instagram.com/webbygian"} target="_blank" rel="noopener noreferrer" aria-label="Noah's Instagram profile">
                                <Image src="/icons/instagramWhite.svg" alt="Instagram" className="hover:scale-130 duration-200 transition-all" width={20} height={20} />
                            </a>
                        </div>
                    </Box>
                </Reveal>

                <Reveal delay={230}>
                    <Box>
                        <div className={""}>
                            <Image src={"/images/team/mezz.webp"} alt={"logo"} width={64} height={64} className="rounded-full border border-white/50" />
                            <h3 className="text-3xl font-extrabold leading-[110%] text-[#CAE6D8] mt-3">{t('team.mezz.name')}</h3>
                            <p className="text-start mt-3">
                                {t('team.mezz.role')}
                            </p>
                        </div>
                        <p className="mt-6">
                            {t('team.mezz.description')}
                        </p>
                        <div className={"flex items-center justify-start gap-6 mt-3"}>
                            <a href={"https://www.github.com/MezzLMC"} target="_blank" rel="noopener noreferrer" aria-label="Mezz's GitHub profile">
                                <Image src="/icons/githubWhite.svg" alt="GitHub" className="hover:scale-130 duration-200 transition-all" width={20} height={20} />
                            </a>
                        </div>
                    </Box>
                </Reveal>

                <Reveal delay={320}>
                    <Box>
                        <div className={""}>
                            <Image src={"/images/team/cami.webp"} alt={"logo"} width={64} height={64} className="rounded-full border border-white/50" />
                            <h3 className="text-3xl font-extrabold leading-[110%] text-[#CAE6D8] mt-3">{t('team.cami.name')}</h3>
                            <p className="text-start mt-3">
                                {t('team.cami.role')}
                            </p>
                        </div>
                        <p className="mt-6">
                            {t('team.cami.description')}
                        </p>
                        <div className={"flex items-center justify-start gap-6 mt-3"}>
                            <a href={"https://www.instagram.com/camg_raphic/"} target="_blank" rel="noopener noreferrer" aria-label="Cami's Instagram profile">
                                <Image src="/icons/instagramWhite.svg" alt="Instagram" className="hover:scale-130 duration-200 transition-all" width={20} height={20} />
                            </a>
                        </div>
                    </Box>
                </Reveal>
            </div>
        </section>

    </div>
    );
}
