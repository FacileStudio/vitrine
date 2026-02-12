'use client';

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";

export const usePortfolioContentAnimations = (selectedWorkId: number | null) => {
    const bandsRightRef = useRef<(HTMLDivElement | null)[]>([]);
    const bandsLeftRef = useRef<(HTMLDivElement | null)[]>([]);
    const backgroundRef = useRef<(HTMLDivElement | null)[]>([]);

    // Memoized animation function for entering
    const animateIn = useCallback((id: number) => {
        const right = bandsRightRef.current[id];
        const left = bandsLeftRef.current[id];
        const bg = backgroundRef.current[id];

        if (!right || !left || !bg) return;

        gsap.to([right, left], {
            opacity: 1,
            duration: 0.2,
            ease: "power2.inOut",
        });

        gsap.to(bg, {
            zIndex: 1,
            opacity: 1,
            duration: 0.3,
            ease: "power3.out",
            onComplete: () => {
                gsap.set(bg, { zIndex: 1 });
            }
        });
    }, []);

    // Memoized animation function for leaving
    const animateOut = useCallback((id: number) => {
        const right = bandsRightRef.current[id];
        const left = bandsLeftRef.current[id];
        const bg = backgroundRef.current[id];

        if (!right || !left || !bg) return;

        gsap.to([right, left], {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
        });

        gsap.to(bg, {
            opacity: 0,
            duration: 0.3,
            ease: "power3.out",
            onComplete: () => {
                gsap.set(bg, { zIndex: 0 });
            }
        });
    }, []);

    // Handle automated animations based on selectedWorkId
    useEffect(() => {
        if (selectedWorkId !== null) {
            animateIn(selectedWorkId);
        }

        return () => {
            if (selectedWorkId !== null) {
                animateOut(selectedWorkId);
            }
        };
    }, [selectedWorkId, animateIn, animateOut]);

    return {
        bandsRightRef,
        bandsLeftRef,
        backgroundRef,
        animateIn,
        animateOut
    };
};
