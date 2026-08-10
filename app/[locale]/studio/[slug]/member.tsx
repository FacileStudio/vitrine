'use client'

import { useState } from "react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import Header from "@/components/facile/header";
import Menu from "@/components/facile/menu";
import DitherReveal from "@/components/facile/ditherReveal";
import members from "../studio.json";

export default function MemberPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const params = useParams<{ slug: string }>();
    const locale = useLocale();
    const member = members.find((m) => m.slug === params.slug) ?? members[0];

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#111] text-white">
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <div className="flex h-full w-full flex-col md:flex-row">
                {/* head 3D object */}
                <DitherReveal
                    model={member.model}
                    highlight={member.highlight}
                    delay={0.15}
                    className="h-1/2 w-full md:h-full md:w-1/2"
                    dither={{ parallax: 0.6 }}
                />

                {/* member info */}
                <div className="flex h-1/2 w-full flex-col justify-center gap-6 px-10 md:h-full md:w-1/2 md:px-20">
                    <Link href={`/${locale}/studio`} className="text-sm text-white/50 transition-colors hover:text-white">
                        ← Studio
                    </Link>

                    <div>
                        <h1 className="text-5xl font-medium 3xl:text-6xl">{member.name}</h1>
                        <p className="mt-2 text-lg text-white/60">{member.role}</p>
                    </div>

                    <p className="max-w-[48ch] text-white/50">{member.description}</p>

                    {member.socials.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-4">
                            {member.socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-white/50 transition-colors hover:text-white"
                                >
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    );
}
