'use client'

import data from "./projects.json"
import React, { useRef } from "react"
import { useRouter } from "next/navigation"
import {TransitionIn, TransitionOut} from "@/components/facile/pageTransition";
import { useTranslations } from 'next-intl';
import { usePortfolioTitleAnimation } from "@/lib/animations/portfolio-title";
import { usePortfolioNavigation } from "./navigation";
import { usePortfolioContentAnimations } from "@/lib/animations/portfolio-content";
import { MobileNavigationButtons } from "./mobile-navigation-buttons";

export default function Portfolio() {
    const t = useTranslations('portfolio');
    const common = useTranslations('common.header');
    const router = useRouter();
    const titleRef = useRef<HTMLDivElement>(null);
    const {setSelectedWorkId, selectedWorkId, handleNext, handlePrevious} = usePortfolioNavigation();
    const { bandsRightRef, bandsLeftRef, backgroundRef, animateIn, animateOut } = usePortfolioContentAnimations(selectedWorkId);

    usePortfolioTitleAnimation(titleRef);

    React.useEffect(() => TransitionIn(0), []);

    const ProjectButton = ({item, id}: {item: typeof data[0], id: number}) => (
        <div
            className={`${id === selectedWorkId && "uppercase font-extrabold"} group flex justify-between items-center shrink-0
                cursor-pointer hover:font-extrabold hover:uppercase duration-100 transition-all px-4 py-1.5 sm:py-3`}
            onMouseEnter={() => animateIn(id)}
            onMouseLeave={() => animateOut(id)}
            onClick={() => {
                if (item.tier < 3) {
                    TransitionOut({ href: `/projects/${item.slug}`, router });
                } else {
                    window.open(item.link, "_blank", "noopener,noreferrer");
                }
            }}
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

                <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#CAE6D8]/25 bg-[#CAE6D8]/10 transition-all duration-300 ease-out group-hover:scale-105 group-hover:bg-[#CAE6D8]"
                >
                    <span
                        className="h-4 w-4 rotate-180 bg-[#CAE6D8] transition-all duration-300 ease-out group-hover:bg-[#1E1E1E]"
                        style={{
                            WebkitMaskImage: "url(/icons/arrow.svg)",
                            maskImage: "url(/icons/arrow.svg)",
                            WebkitMaskSize: "contain",
                            maskSize: "contain",
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                        }}
                    />
                </div>
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
                        <div className="mb-12 lg:mb-16">
                            <div className="space-y-4">
                                <div ref={titleRef} className="max-w-4xl whitespace-nowrap">
                                    <h1 className="flex items-end gap-2 font-sans text-[clamp(3.5rem,11vw,8rem)] leading-[0.9] tracking-[-0.06em]">
                                        <span className="font-dirtyline capitalize leading-[0.82]">
                                            {common('portfolio')[0]}
                                        </span>
                                        <span className="font-black uppercase">
                                            {common('portfolio').slice(1)}
                                        </span>
                                    </h1>
                                </div>
                                <p className="max-w-2xl text-base leading-relaxed text-[#CAE6D8]/72 md:text-xl">
                                    {t('hero.subtitle')}
                                </p>
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
