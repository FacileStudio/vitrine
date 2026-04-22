'use client'

import data from "./projects.json"
import React, { useRef } from "react"
import {RideauxIn} from "@/components/facile/rideaux";
import { useTranslations } from 'next-intl';
import { usePortfolioTitleAnimation } from "@/lib/animations/portfolio-title";
import { usePortfolioNavigation } from "./navigation";
import { usePortfolioContentAnimations } from "@/lib/animations/portfolio-content";
import { MobileNavigationButtons } from "./mobile-navigation-buttons";

export default function Portfolio() {
    const t = useTranslations('portfolio');
    const common = useTranslations('common.header');
    const titleRef = useRef<HTMLDivElement>(null);
    const {setSelectedWorkId, selectedWorkId, handleNext, handlePrevious} = usePortfolioNavigation();
    const { bandsRightRef, bandsLeftRef, backgroundRef, animateIn, animateOut } = usePortfolioContentAnimations(selectedWorkId);

    usePortfolioTitleAnimation(titleRef);

    React.useEffect(() => RideauxIn(0), []);

    const ProjectButton = ({item, id}: {item: typeof data[0], id: number}) => (
        <div
            className={`${id === selectedWorkId && "uppercase font-extrabold"} flex justify-between items-center shrink-0
                cursor-pointer hover:font-extrabold hover:uppercase duration-100 transition-all px-4 py-1.5 sm:py-3`}
            onMouseEnter={() => animateIn(id)}
            onMouseLeave={() => animateOut(id)}
        >
            <div className="shrink-0">{t(`projects.${id}.name`)}</div>
                <div ref={el => void (bandsRightRef.current[id] = el)} className={`hidden sm:block w-full h-4 lg:px-16 px-4 opacity-0`}>
                    <div className="bg-[#CAE6D8] h-4 rounded-full w-full"></div>
                </div>

            <div className="flex shrink-0 justify-between items-center md:w-60 xl:w-150 w-auto gap-4">
                <div className="shrink-0 md:inline hidden">{t(`projects.${id}.description`)}</div>

                <div ref={el => void (bandsLeftRef.current[id] = el)} className="hidden sm:block w-full h-4 lg:px-16 px-4 opacity-0">
                    <div className="bg-[#CAE6D8] h-4 rounded-full w-full"></div>
                </div>

                <a
                    href={item.link}
                    aria-label={`View project ${t(`projects.${id}.name`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#CAE6D8]/25 bg-[#CAE6D8]/10 transition-colors duration-150 hover:bg-[#CAE6D8] hover:text-[#1E1E1E]"
                >
                    <span
                        className="h-4 w-4 rotate-180 bg-[#CAE6D8] transition-colors duration-150 group-hover:bg-[#1E1E1E]"
                        style={{
                            WebkitMaskImage: "url(/icons/arrow.svg)",
                            maskImage: "url(/icons/arrow.svg)",
                            WebkitMaskSize: "contain",
                            maskSize: "contain",
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                        }}
                    />
                </a>
            </div>
        </div>
    );

    return (
        <>
            <div className="w-full overflow-hidden h-full relative border rounded-4xl">
                {data.map((item, id) => {
                    if (item.name === "Brain.h")
                        return <div style={{ backgroundImage: `url(/images/projects/${item.name}.webp)`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", }}
                                    ref={el => { backgroundRef.current[id] = el; }} key={id}
                                    className="absolute top-0 left-0 opacity-0 w-full h-full object-cover"
                        />
                    
                    return (
                        <div
                            style={{
                                backgroundImage: `url(/images/projects/${item.name}.webp)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat",
                            }}
                            ref={el => {
                                backgroundRef.current[id] = el;
                            }}
                            key={id}
                            className="absolute top-0 left-0 opacity-0 w-full h-full object-cover"
                        />
                    )
                })}
                <div
                    style={{
                        backgroundImage: 'url("/images/bg-blur.webp")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-1/2 z-0 w-full h-auto min-h-full object-cover"
                />

                <div className="absolute inset-0 z-40 overflow-y-auto">
                    <div className="mx-auto flex min-h-full w-full max-w-[1920px] flex-col px-8 pb-24 pt-32 text-[#CAE6D8] md:px-20 lg:px-32 lg:pt-36">
                        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:grid lg:grid-cols-[1.35fr_0.9fr] lg:items-end">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-3 rounded-full border border-[#CAE6D8]/18 bg-[#CAE6D8]/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#CAE6D8]/70">
                                    <span className="h-2 w-2 rounded-full bg-[#CAE6D8]" />
                                    {common('portfolio')}
                                </div>

                                <div className="space-y-4">
                                    <h1 ref={titleRef} className="max-w-4xl whitespace-nowrap text-[clamp(3.5rem,11vw,8rem)] font-black leading-[0.9] tracking-[-0.06em]">
                                        {common('portfolio')}
                                    </h1>
                                    <p className="max-w-2xl text-base leading-relaxed text-[#CAE6D8]/72 md:text-xl">
                                        {t('hero.subtitle')}
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-[28px] border border-[#CAE6D8]/18 bg-[#0D1310]/55 p-6 text-[#CAE6D8] shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-md md:p-8">
                                <div className="text-[11px] uppercase tracking-[0.28em] text-[#CAE6D8]/48">
                                    {t('hero.panelTitle')}
                                </div>
                                <div className="mt-6 space-y-4">
                                    {t.raw('hero.points').map((item: string) => (
                                        <div key={item} className="flex items-center justify-between gap-4 border-b border-[#CAE6D8]/10 pb-4 last:border-b-0 last:pb-0">
                                            <span className="text-lg leading-tight text-[#CAE6D8]/92">{item}</span>
                                            <span className="text-[#CAE6D8]/35">+</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 flex justify-between px-4 font-extrabold">
                            {t('headers.name')}
                            <div className="flex items-between justify-between md:w-60 xl:w-150 w-auto">
                                <div className={"md:inline hidden"}>{t('headers.type')}</div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full z-50 shrink-0">
                            {data.map((item, id) => <ProjectButton key={id} item={item} id={id} />)}
                        </div>

                        <div className="mt-auto pt-8">
                            <MobileNavigationButtons handleNext={handleNext} handlePrevious={handlePrevious} selectedWorkId={selectedWorkId} setSelectedWorkId={setSelectedWorkId} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
