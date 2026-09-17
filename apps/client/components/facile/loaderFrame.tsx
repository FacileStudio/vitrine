'use client'

import { useTranslations } from "next-intl"
import TextReveal from "@/components/facile/textReveal"

export default function LoaderFrame({ open, leaving }: { open: boolean; leaving: boolean }) {
    const t = useTranslations("common")

    // self-start and self-end stop grid rows stretching a crop taller than its text, which would hide nothing
    const items = [
        { text: t("footer.buildTogether"), crop: "max-w-[18ch] self-start", tone: "text-white" },
        { text: "F.", crop: "self-start justify-self-center", tone: "text-white/40" },
        { text: "facile.studio", crop: "self-start justify-self-end", tone: "text-white/40" },
        { text: t("loader.team"), crop: "col-start-1 row-start-3 self-end", tone: "text-white/40" },
        { text: `@26 ${t("loader.rights")}`, crop: "col-start-2 row-start-3 self-end justify-self-center", tone: "text-white/40" },
        { text: t("loader.crafting"), crop: "col-start-3 row-start-3 max-w-[24ch] self-end justify-self-end", tone: "text-right text-white" },
    ]

    return (
        <div className="absolute inset-0 z-50 grid grid-cols-3 grid-rows-[auto_1fr_auto] p-20">
            {items.map((item, i) => (
                <TextReveal key={i} as="p" open={open} leaving={leaving} delay={i * 0.08} cropClassName={item.crop} className={item.tone}>
                    {item.text}
                </TextReveal>
            ))}
        </div>
    )
}
