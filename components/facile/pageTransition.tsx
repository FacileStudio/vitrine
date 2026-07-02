'use client'

import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { EASE } from "@/app/utils/animations";

export const TransitionIn = (delayValue: number) => {
    if (!document.querySelector(".page-transition")) return;
    gsap.to(".page-transition", {
        height: 0,

        duration: 2,
        delay: delayValue,
        ease: EASE.inOut,
    })
}

export const TransitionOut = ({href, router}: {href: string, router: AppRouterInstance}) => {
    if (!document.querySelector(".page-transition")) {
        router.push(href);
        return;
    }

    gsap.fromTo(".page-transition", {
        height: 0,
        top: "100%",
    }, {
        height: "100%",
        top: 0,

        duration: 1,
        ease: EASE.glide,
        onComplete: () => {
            router.push(href)
        }
    })
}
