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
    const titleRef = useRef<HTMLDivElement>(null);
    const {setSelectedWorkId, selectedWorkId, handleNext, handlePrevious} = usePortfolioNavigation();
    const { bandsRightRef, bandsLeftRef, backgroundRef, animateIn, animateOut } = usePortfolioContentAnimations(selectedWorkId);

    usePortfolioTitleAnimation(titleRef);

    React.useEffect(() => RideauxIn(0), []);

    const ProjectButton = ({item, id}: {item: typeof data[0], id: number}) => (
        <a
            href={item.link}
            key={id}
            aria-label={`View project ${t(`projects.${id}.name`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${id === selectedWorkId && "uppercase font-extrabold"} flex justify-between items-center shrink-0
                cursor-pointer hover:font-extrabold hover:uppercase duration-100 transition-all px-4 py-1.5 sm:py-3`}
            onMouseEnter={() => animateIn(id)}
            onMouseLeave={() => animateOut(id)}
        >
            <div className="shrink-0">{t(`projects.${id}.name`)}</div>
                <div ref={el => void (bandsRightRef.current[id] = el)} className={`hidden sm:block w-full h-4 lg:px-16 px-4 opacity-0`}>
                    <div className="bg-[#CAE6D8] h-4 rounded-full w-full"></div>
                </div>

            <div className="flex shrink-0 justify-between items-center md:w-60 xl:w-150 w-auto">
                <div className="shrink-0 md:inline hidden">{t(`projects.${id}.description`)}</div>

                <div ref={el => void (bandsLeftRef.current[id] = el)} className="hidden sm:block w-full h-4 lg:px-16 px-4 opacity-0">
                    <div className="bg-[#CAE6D8] h-4 rounded-full w-full"></div>
                </div>

                <div className="shrink-0">{item.weeks}</div>
            </div>
        </a>
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

                <div className="flex flex-col justify-between relative w-full my-auto text-[#CAE6D8] absolute top-1/2 -translate-y-1/2 lg:mt-0 px-8 md:px-32 gap-6 lg:gap-16 z-40 max-w-[1920px] mx-auto">
                    <div className="flex justify-between px-4 font-extrabold">
                        {t('headers.name')}
                        <div className="flex items-between justify-between md:w-100 xl:w-150 w-auto">
                            <div className={"md:inline hidden"}>{t('headers.type')}</div>
                            <div>{t('headers.time')}</div>
                        </div>  
                    </div>

                    <div className="flex flex-col w-full z-50 shrink-0">
                        {data.map((item, id) => <ProjectButton key={id} item={item} id={id} />)}
                    </div>

                    <MobileNavigationButtons handleNext={handleNext} handlePrevious={handlePrevious} selectedWorkId={selectedWorkId} setSelectedWorkId={setSelectedWorkId} />
                    
                </div>
            </div>

        </>
    )
}
