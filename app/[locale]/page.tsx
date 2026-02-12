'use client'

import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { RideauxIn } from "@/components/facile/rideaux";
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('home');
    const [start, setStart] = React.useState(false);
    const [percent, setPercent] = React.useState(0);
    const [isDesktop, setIsDesktop] = React.useState(false);
    const [loadedAssets, setLoadedAssets] = React.useState(0);
    const totalAssets = 3; // background, F..svg, FACILE.svg
    
    const stack = React.useRef<HTMLDivElement>(null);
    const background = React.useRef<HTMLImageElement>(null);
    const title = React.useRef<HTMLDivElement>(null);

    const handleAssetLoad = React.useCallback(() => {
        setLoadedAssets(prev => {
            const newCount = prev + 1;
            const progressPercent = Math.floor((newCount / totalAssets) * 100);
            setPercent(progressPercent);
            
            if (newCount === totalAssets) {
                setTimeout(() => {
                    setStart(true);
                }, 300);
            }
            return newCount;
        });
    }, []);

    // Fallback timeout
    React.useEffect(() => {
        const fallbackTimeout = setTimeout(() => {
            if (!start) {
                setPercent(100);
                setStart(true);
            }
        }, 3000);

        return () => clearTimeout(fallbackTimeout);
    }, [start]);

    React.useEffect(() => {
        const tl = gsap.timeline({}); 

        RideauxIn(2);

        if (start) {
            tl
                // 1. Disparition du loader
                .to(".disappear", {
                    delay: 1,
                    stagger: 0.1,
                    y: "-110%",
                    duration: 1,
                    ease: "power2.inOut",
                })
                // 2. Réduction du volet noir
                .to(stack.current, {
                    height: 0,
                    duration: 1.5,
                    ease: "power4.inOut",
                }, "<")
                // 3. Apparition du Background (Intro)
                .to(background.current, {
                    delay: 1,
                    duration: 3,
                    ease: "power4.inOut",
                    // IMPORTANT : On atterrit à 1.1 (110%) et pas 1.
                    // Cela laisse de la marge ("bleed") pour le mouvement gauche/droite
                    scale: 1.1, 
                    filter: "blur(0px)"
                }, "<")
                // 4. Nettoyage du loader
                .set(stack.current, {
                    display: "none"
                })

        }
        
        // Nettoyage propre si le composant est démonté
        return () => {
            tl.kill();
        };
    }, [start]);

    React.useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    React.useEffect(() => {
        if (title.current) {
            if (!isDesktop) {
                gsap.to(title.current, {
                    delay: 3,
                    x: "-2000%",
                    duration: 133,
                    ease: "none",
                    repeat: -1,
                });
            } else {
                gsap.killTweensOf(title.current);
                gsap.set(title.current, { x: 0 });
            }
        }

        return () => {
            if (title.current) {
                gsap.killTweensOf(title.current);
            }
        };
    }, [isDesktop]);

    return (
        <>
            <div ref={stack} className={"absolute rounded-b-[64px] top-0 left-0 w-screen overflow-hidden h-screen z-[999] flex flex-col gap-8 items-center justify-center bg-background"}>
                <div className={"overflow-hidden"}>
                    <Image 
                        src="/icons/F..svg" 
                        alt="Facile logo" 
                        width={96} 
                        height={96} 
                        className="w-24 disappear"
                        onLoad={handleAssetLoad}
                        priority
                    />
                </div>

                <div className={"overflow-hidden"}>
                    <div className="font-extrabold disappear text-black">
                        {percent}%
                    </div>
                </div>

                <div className={"gap-0"}>
                    <div className="overflow-hidden">
                        <div className={"opacity-66 text-center disappear text-black"}>
                            {t('loading.line1')}
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <div className={"opacity-66 text-center disappear text-black"}>
                            {t('loading.line2')}
                        </div>
                    </div>
                </div>
            </div>

            <div className={"w-full overflow-hidden bg-[#1E1E1E] h-full relative rounded-[32px]"}>

                <Image 
                    ref={background}
                    alt="background"
                    src="/Backgrounds/background.webp"
                    fill
                    className="object-cover blur-3xl will-change-transform"
                    onLoad={handleAssetLoad}
                    fetchPriority="high"
                    priority
                />

                <div ref={title} className="absolute -bottom-1 left-0 lg:w-full w-[200%] flex items-start justify-start">
                    <div className="flex shrink-0 gap-12 xl:w-full relative">
                        <Image
                            alt="Facile"
                            src="/icons/FACILE.svg"
                            width={1920}
                            height={400}
                            className="min-h-[400px] xl:min-h-0 object-cover w-full"
                            onLoad={handleAssetLoad}
                            priority
                        />
                        {isDesktop ? (
                            <div className={"top-0 right-0 mr-[7%] fixed text-[#CAE6D8] font-extrabold text-5xl"}>
                                STUDIO
                            </div>
                        ) : (
                            Array.from({ length: 20 }).map((_, i) => (
                                <Image
                                    key={i}
                                    alt="Facile"
                                    src="/icons/FACILE.svg"
                                    width={800}
                                    height={400}
                                    className="min-h-[400px] object-cover"
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}