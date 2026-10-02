'use client'

import TextReveal from "@/components/facile/textReveal";
import { cn } from "@/lib/utils";

export default function TechLogos({ stack, max = 5, className }: { stack?: string[]; max?: number; className?: string }) {
    if (!stack?.length) return null;

    return (
        <TextReveal cropClassName="z-10" className={cn("flex items-center gap-3", className)}>
            {stack.slice(0, max).map((name) => (
                <img
                    key={name}
                    src={`/images/logo/${name}.png`}
                    alt={name}
                    title={name}
                    fetchPriority="low"
                    decoding="async"
                    className="max-w-8 h-5 object-contain"
                    onError={(e) => e.currentTarget.remove()}
                />
            ))}
            {stack.length > max && <span className="subtext text-white/45">+{stack.length - max}</span>}
        </TextReveal>
    );
}
