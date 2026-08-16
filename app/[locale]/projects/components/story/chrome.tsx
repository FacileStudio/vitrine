'use client'

import type { Ref } from "react";
import TextReveal from "@/components/facile/textReveal";

interface ChromeProps {
    name: string;
    index: number;
    total: number;
    barRef: Ref<HTMLSpanElement>;
    onBack: () => void;
    show?: boolean;
    leaving?: boolean;
}

export default function Chrome({ name, index, total, barRef, onBack, show = true, leaving = false }: ChromeProps) {
    return (
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 md:p-10">
            <div className="flex items-start justify-between gap-8">
                <span className="block overflow-hidden">
                    <TextReveal show={show} leaving={leaving} blockColor="dark" delay={0}>
                        <button
                            type="button"
                            onClick={onBack}
                            className="pointer-events-auto block text-sm text-white/50 transition-colors hover:text-white"
                        >
                            ← Back to projects
                        </button>
                    </TextReveal>
                </span>

                <span className="block overflow-hidden">
                    <TextReveal show={show} leaving={leaving} blockColor="dark" delay={0.06}>
                        <span className="block text-sm tabular-nums text-white/40">
                            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                        </span>
                    </TextReveal>
                </span>
            </div>

            <div className="flex items-end justify-between gap-8">
                <span className="block overflow-hidden">
                    <TextReveal show={show} leaving={leaving} blockColor="dark" delay={0}>
                        <span className="block text-xs uppercase tracking-widest text-white/40">
                            {name}
                        </span>
                    </TextReveal>
                </span>

                <span className="block overflow-hidden">
                    <TextReveal show={show} leaving={leaving} blockColor="dark" delay={0.06}>
                        <span className="flex items-center gap-4">
                            <span className="text-xs uppercase tracking-widest text-white/40">scroll</span>
                            <span className="relative h-px w-32 bg-white/20 md:w-48">
                                <span ref={barRef} className="absolute inset-0 origin-left scale-x-0 bg-[#24E27A]" />
                            </span>
                        </span>
                    </TextReveal>
                </span>
            </div>
        </div>
    );
}
