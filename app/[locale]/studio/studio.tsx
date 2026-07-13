'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Header from "@/components/facile/header";
import Menu from "@/components/facile/menu";
import DitherReveal from "@/components/facile/ditherReveal";
import members from "./studio.json";

export default function StudioPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();
    const locale = useLocale();

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#111]">
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <div className="flex h-full w-full">
                {members.map((member, i) => (
                    <button
                        key={member.slug}
                        type="button"
                        onClick={() => router.push(`/${locale}/studio/${member.slug}`)}
                        aria-label={`Open ${member.name}`}
                        className="group relative h-full flex-1 cursor-pointer overflow-hidden border-r border-white/5 last:border-r-0"
                    >
                        {/* the head 3D object, revealed from behind the stripes */}
                        <DitherReveal
                            model={member.model}
                            highlight={member.highlight}
                            delay={0.15 + i * 0.15}
                            className="absolute inset-0"
                            dither={{ parallax: 0.5 }}
                        />

                        {/* subtle darken + lift on hover */}
                        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

                        {/* name / role, bottom-left */}
                        <div className="pointer-events-none absolute bottom-10 left-8 z-50 text-left text-white transition-transform duration-300 group-hover:-translate-y-1">
                            <div className="text-3xl font-medium 3xl:text-4xl">{member.name}</div>
                            <div className="text-sm text-white/60 3xl:text-base">{member.role}</div>
                        </div>
                    </button>
                ))}
            </div>

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    );
}
