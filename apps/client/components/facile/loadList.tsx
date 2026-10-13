'use client'

import type { Ref } from "react"
import { useLoadList } from "@/hooks/use-load-list"
import LoadRow from "./loadRow"

const LoadList = ({ ref, active }: { ref: Ref<HTMLUListElement>; active: boolean }) => {
    const keys = useLoadList(active)

    return (
        <ul ref={ref} className="absolute left-8 top-1/2 z-50 flex max-h-[80vh] -translate-y-1/2 flex-col flex-wrap content-start gap-x-12 gap-y-1">
            {keys.map((key, i) => (
                <LoadRow key={key} file={key} index={i} />
            ))}
        </ul>
    )
}

export default LoadList
