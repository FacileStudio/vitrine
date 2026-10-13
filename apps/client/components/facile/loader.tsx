'use client'

import { useCallback, useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import { gsap } from "gsap"
import { EASE } from "@/lib/animations"
import { useAfter } from "@/hooks/use-after"
import { useLoadFill } from "@/hooks/use-load-fill"
import { useTrackPage } from "@/hooks/use-track-page"
import { idleFor } from "@/webgl/loadBytes"
import TextReveal from "./textReveal"
import LoaderFrame from "./loaderFrame"
import Stripes from "./stripes"
import LoadList from "./loadList"

const STALL_MS = 10000

// the clip slides right while the logo inside slides back left, so the logo holds still as it is revealed
const TRACKS = {
    clip: [{ transform: "translateX(-100%)" }, { transform: "translateX(0%)" }],
    logo: [{ transform: "translateX(100%)" }, { transform: "translateX(0%)" }],
}

const Loader = ({ setCharged }: { setCharged: (charged: boolean) => void }) => {
    const [open, setOpen] = useState(false)
    const logo = useRef<HTMLDivElement>(null)
    const list = useRef<HTMLUListElement>(null)
    const shown = useAfter(true, 150)
    const t = useTranslations("common.nav")

    const finish = useCallback(() => {
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
            <div className="relative z-50 flex items-center gap-12">
                {/* equal widths keep the logo centred whatever the label's length */}
                <TextReveal as="p" open={shown && !open} leaving={open} cropClassName="w-[8ch]" className="text-right text-background">
                    {String(percent).padStart(3, "0")}
                </TextReveal>
                <div ref={logo}>
                    <div ref={bind("clip")} className="overflow-hidden" style={{ transform: "translateX(-100%)" }}>
                        <img ref={bind("logo")} src="/Facile.svg" alt="Facile" className="invert h-32" style={{ transform: "translateX(100%)" }} />
                    </div>
                </div>
                <TextReveal as="p" open={shown && !open} leaving={open} cropClassName="w-[8ch]" className="text-background">
                    {t("studio")}
                </TextReveal>
            </div>
            <Stripes count={4} orientation={0} open={open} className="bg-foreground" zIndex={45} leadOpen={0} />
            <Stripes count={4} orientation={0} open={open} className="bg-background" zIndex={44} leadOpen={0.18} />
        </div>
    )
}

export default Loader
