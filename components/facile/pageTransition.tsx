'use client'

import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const TransitionIn = (delayValue: number) => {
    if (!document.querySelector(".page-transition")) return;
    gsap.to(".page-transition", {
        height: 0,

        duration: 2,
        delay: delayValue,
        ease: "power4.inOut",
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
        ease: "power3.inOut",
        onComplete: () => {
            router.push(href)
        }
    })
}
