'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { EASE } from "@/lib/animations"
import { useAfter } from "@/hooks/use-after"
import { useNarrow } from "@/hooks/use-narrow"
import { useLoadFill } from "@/hooks/use-load-fill"
import { useTrackPage } from "@/hooks/use-track-page"
import { idleFor } from "@/webgl/loadBytes"
import { LoaderLogo } from "@/webgl/lazy"
import { holdBoot } from "@/webgl/boot"
import { GRID, MODEL_SCALE } from "@/webgl/offscreen/logoScene"
import TextReveal from "./textReveal"
import LoaderFrame from "./loaderFrame"
import Stripes from "./stripes"
import LoadList from "./loadList"

const STALL_MS = 10000
const REVEAL_MS = 2600
const glide = gsap.parseEase(EASE.glide)

const TRACKS = {
    // a finer grid draws the F lower, so it starts raised and lands as the grid settles
    lift: [{ transform: "translateY(-20px)" }, { transform: "translateY(0px)", offset: GRID.doneAt / 100 }, { transform: "translateY(0px)" }],
}

const Loader = ({ setCharged }: { setCharged: (charged: boolean) => void }) => {
    const [open, setOpen] = useState(false)
    const logo = useRef<HTMLDivElement>(null)
    const list = useRef<HTMLDivElement>(null)
    const shown = useAfter(true, 150)
    const narrow = useNarrow()
    const hold = useRef<(() => void) | null>(null)
    const reveal = useRef<ReturnType<typeof setTimeout> | null>(null)

    useLayoutEffect(() => {
        const release = holdBoot()

        hold.current = release
        return () => {
            if (reveal.current)
                clearTimeout(reveal.current)
            release()
        }
    }, [])

    const finish = useCallback(() => {
        if (!reveal.current)
            reveal.current = setTimeout(() => hold.current?.(), REVEAL_MS)
        setOpen(true)
        setCharged(true)
    }, [setCharged])

    const { bind, percent } = useLoadFill(TRACKS, finish)

    useTrackPage()

    // a stuck download must not trap the visitor behind the loader, but a slow one that still moves keeps it
    useEffect(() => {
        if (open)
            return

        const timer = setInterval(() => {
            if (idleFor() > STALL_MS)
                finish()
        }, 1000)

        return () => clearInterval(timer)
    }, [open, finish])

    useEffect(() => {
        if (!open)
            return

        const nodes = [logo.current, list.current]

        gsap.to(nodes, {
            y: "-100vh",
            opacity: 0,
            duration: 0.8,
            ease: EASE.sharp,
        })

        return () => {
            gsap.killTweensOf(nodes)
        }
    }, [open])

    return (
        <div
            className="fixed inset-0 z-999 pointer-events-none w-screen h-screen flex items-center justify-center"
            data-open={open}
            data-percent={percent}
        >
            <LoaderFrame open={shown && !open} leaving={open} />
            <LoadList ref={list} active={!open} />
            <div ref={logo} className="absolute inset-0 z-50">
                <div className="absolute inset-0">
                    <div ref={bind("lift")} className="size-full" style={{ transform: "translateY(-20px)" }}>
                        <LoaderLogo
                            className="size-full opacity-75"
                            lite={narrow}
                            grid={GRID.from - (GRID.from - GRID.to) * Math.min(1, percent / GRID.doneAt)}
                            scale={MODEL_SCALE.from + (MODEL_SCALE.to - MODEL_SCALE.from) * glide(percent / 100)}
                        />
                    </div>
                </div>
                <div className="absolute top-[74%] left-1/2 -translate-x-1/2">
                    <TextReveal as="p" open={shown && !open} leaving={open} cropClassName="w-[8ch]" className="text-center text-background">
                        {String(percent).padStart(3, "0")}
                    </TextReveal>
                </div>
            </div>
            <Stripes count={4} orientation={0} open={open} className="bg-foreground" zIndex={45} leadOpen={0} />
            <Stripes count={4} orientation={0} open={open} className="bg-background" zIndex={44} leadOpen={0.18} />
        </div>
    )
}

export default Loader
