'use client'

import type { Ref } from "react";
import { useTranslations } from "next-intl";
import { pad2 } from "@/lib/utils";

interface ChromeProps {
    name: string;
    index: number;
    total: number;
    backLabel: string;
    barRef: Ref<HTMLSpanElement>;
    onBack: () => void;
}

export default function Chrome({ name, index, total, backLabel, barRef, onBack }: ChromeProps) {
    const t = useTranslations("story");

    return (
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 md:p-10">
            <div className="flex items-start justify-between gap-8">
                <span className="block overflow-hidden">
                    <button
                        data-chrome
                        type="button"
                        onClick={onBack}
                        className="pointer-events-auto block font-bb-mono uppercase text-sm text-white/50 transition-colors hover:text-white"
                    >
                        ← {backLabel}
                    </button>
                </span>

                <span className="block overflow-hidden">
                    <p data-chrome className="block tabular-nums text-white/40">
                        {pad2(index + 1)} / {pad2(total)}
                    </p>
                </span>
            </div>

            <div className="flex items-end justify-between gap-8">
                <span className="block overflow-hidden">
                    <p data-chrome className="block text-xs tracking-widest text-white/40">
                        {name}
                    </p>
                </span>

                <span className="block overflow-hidden">
                    <span data-chrome className="flex items-center gap-4">
                        <p className="text-xs tracking-widest text-white/40">{t("scroll")}</p>
                        <span className="relative h-px w-32 bg-white/20 md:w-48">
                            <span ref={barRef} className="absolute inset-0 origin-left scale-x-0 bg-accent" />
                        </span>
                    </span>
                </span>
            </div>
        </div>
    );
}