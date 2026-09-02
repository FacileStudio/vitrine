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
        <>
            <Link
                href={`/${locale}/studio`}
                className="font-goga text-[1rem] lg:hidden block absolute top-12 font-medium tracking-tight left-1/2 -translate-x-1/2 capitalize transition-colors "
            >
                ← Go Back
            </Link>
            <div className="absolute inset-x-0 bottom-0 z-40 flex lg:flex-col justify-between lg:justify-start items-center lg:gap-5 gap-3 px-6 pb-10 text-center lg:hidden">

                <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: member.highlight }} />
                    <TextReveal open={shown} delay={0.1} className={`${nameClass} text-4xl text-white`}>
                        {member.name}
                    </TextReveal>
                    <TextReveal open={shown} delay={0.16} className={`${labelClass} ml-4`}>
                        {member.role}
                    </TextReveal>
                </div>


                <SplitLines
                    text={member.description}
                    gap="mb-1"
                    className="max-w-[36ch] font-goga hidden lg:block text-sm normal-case tracking-normal text-white/60"
                />

                <button type="button" onClick={onSeeMore} className={`${buttonClass} w-80`}>
                    See more
                </button>

            </div>
        </>
    );
}
