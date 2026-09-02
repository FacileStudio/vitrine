'use client'

import Link from "@/components/facile/transitionLink";
import TextReveal from "@/components/facile/textReveal";
import SplitLines from "@/components/facile/splitLines";
import type { Member } from "./memberData";
import { buttonClass, labelClass, nameClass } from "./memberStyles";

// phone: name, role, the short description, and one button for everything else
export default function MemberSummary({
    member,
    locale,
    shown,
    onSeeMore,
}: {
    member: Member;
    locale: string;
    shown: boolean;
    onSeeMore: () => void;
}) {
    return (
        <div className="absolute inset-x-0 bottom-0 z-40 flex flex-col items-center gap-5 px-6 pb-10 text-center md:hidden">
            <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: member.highlight }} />
                <TextReveal open={shown} delay={0.1} className={`${nameClass} text-3xl text-white`}>
                    {member.name}
                </TextReveal>
            </div>

            <TextReveal open={shown} delay={0.16} className={labelClass}>
                {member.role}
            </TextReveal>

            <SplitLines
                text={member.description}
                gap="mb-1"
                className="max-w-[36ch] font-goga text-sm normal-case tracking-normal text-white/60"
            />

            <button type="button" onClick={onSeeMore} className={buttonClass}>
                See more
            </button>

            <Link
                href={`/${locale}/studio`}
                className="font-bb-mono text-[0.7rem] uppercase text-white/40 transition-colors hover:text-white"
            >
                ← Studio
            </Link>
        </div>
    );
}
