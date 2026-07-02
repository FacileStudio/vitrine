'use client'

import { useEffect, useState } from "react"
import Stripes from "./stripes"

// white curtain over the whole viewport; its stripes slide up to reveal the home once loading is done
const Rideau = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const reveal = () => setOpen(true)
        if (document.readyState === "complete") {
            const t = setTimeout(reveal, 1000)
            return () => clearTimeout(t)
        }
        window.addEventListener("load", reveal)
        return () => window.removeEventListener("load", reveal)
    }, [])

    return (
        <div className="fixed inset-0 z-100 pointer-events-none w-screen h-screen">
            <Stripes count={4} orientation={0} open={open} className="bg-white" />
        </div>
    )
}

export default Rideau
