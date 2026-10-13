'use client'

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { filePercent } from "@/webgl/loadBytes"
import TextReveal from "./textReveal"

const STAGGER = 0.04
const BAR_DELAY = 0.5

const name = (key: string) => decodeURIComponent(key.split("/").pop() || key)

const LoadRow = ({ file, index }: { file: string; index: number }) => {
    const fill = useRef<HTMLSpanElement>(null)
    const reveal = index * STAGGER

    // the ticker writes the fill straight to the DOM, and scaleX skips the layout a width tween forces every frame
    useEffect(() => {
        const to = gsap.quickTo(fill.current, "scaleX", {
            duration: 0.3,
            ease: "power2.out",
        })
        const start = gsap.ticker.time + reveal + BAR_DELAY
        let last = -1

        const tick = (time: number) => {
            const percent = filePercent(file)

            if (time < start || percent === last)
                return

            last = percent
            to(percent / 100)

            if (percent === 100)
                gsap.ticker.remove(tick)
        }

        gsap.ticker.add(tick)

        return () => gsap.ticker.remove(tick)
    }, [file, reveal])

    return (
        <li className="flex items-center gap-4 text-background/50">
            <TextReveal as="p" open delay={reveal} cropClassName="w-[20ch]" className="truncate">
                {name(file)}
            </TextReveal>
            <TextReveal open delay={reveal} className="h-1 w-80 bg-background/10">
                <span ref={fill} className="block h-full w-full origin-left bg-background/50" style={{ transform: "scaleX(0)" }} />
            </TextReveal>
        </li>
    )
}

export default LoadRow
