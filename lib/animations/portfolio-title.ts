import { useIsMobile } from "@/hooks/use-mobile";
import gsap from "gsap";
import React from "react";

const usePortfolioTitleAnimation = (title: React.RefObject<HTMLDivElement | null>) => {

    const isMobile = useIsMobile();

    React.useEffect(() => {
        if (title.current) {
            if (isMobile) {
                // Lancer l'animation sur mobile
                gsap.to(title.current, {
                    delay: 0,
                    x: "-2000%",
                    duration: 133,
                    ease: "none",
                    repeat: -1,
                });
            } else {
                // Arrêter et réinitialiser l'animation sur desktop
                gsap.killTweensOf(title.current);
                gsap.set(title.current, { x: 0 });
            }
        }

        // Cleanup: tuer l'animation quand le composant se démonte
        return () => {
            if (title.current) {
                gsap.killTweensOf(title.current);
            }
        };
    }, [isMobile, title]);
};

export {usePortfolioTitleAnimation}; 
