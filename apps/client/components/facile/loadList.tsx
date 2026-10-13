'use client'

import { useEffect, useRef, type Ref } from "react"
import { gsap } from "gsap"
import { fileKeys, filePercent } from "@/webgl/loadBytes"

const name = (key: string) => decodeURIComponent(key.split("/").pop() || key)

// one line flicking through the files, each swap after a random beat so the download reads fast and uneven
const LoadList = ({ ref, active }: { ref: Ref<HTMLDivElement>; active: boolean }) => {
    const line = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if (!active)
            return

        let shown = ""
        let next: gsap.core.Tween | undefined

        const swap = () => {
            const others = fileKeys().filter((key) => key !== shown)
            const loading = others.filter((key) => filePercent(key) < 100)
            const pool = loading.length ? loading : others

            if (pool.length && line.current) {
                shown = gsap.utils.random(pool)
                line.current.textContent = name(shown)
            }

            next = gsap.delayedCall(gsap.utils.random(0.03, 0.16), swap)
        }

        swap()

        return () => {
            next?.kill()
        }
    }, [active])

    return (
        <div ref={ref} className="absolute left-8 top-1/2 z-50 -translate-y-1/2">
            <p ref={line} className="w-[40ch] truncate text-background/50" />
        </div>
    )
}

export default LoadList
