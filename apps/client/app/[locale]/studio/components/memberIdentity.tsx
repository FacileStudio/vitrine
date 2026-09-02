'use client'

import TextReveal from "@/components/facile/textReveal";
import SplitLines from "@/components/facile/splitLines";
import type { Member } from "./memberData";
import { chipClass, labelClass, nameClass } from "./memberStyles";
import { SocialIcons } from "./socialLinks";

// desktop, top-left: who they are. Same stack as a shelf card's content column,
// mirrored to the left edge
export default function MemberIdentity({ member, shown }: { member: Member; shown: boolean }) {
    return (
        <div className="flex max-w-xl flex-col items-start gap-8 text-left">
            <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="aspect-square h-3 w-3 rounded-sm" style={{ backgroundColor: member.highlight }} />
                    <TextReveal open={shown} cropClassName="z-10" delay={0.1} className={`${nameClass} mb-1 text-5xl text-white`}>
                        {member.name}
                    </TextReveal>
                </div>
                <TextReveal open={shown} cropClassName="z-10" delay={0.16} className={labelClass}>
                    {member.role}
                </TextReveal>
            </div>

            <SplitLines
                text={member.description}
                className="relative z-10 font-goga text-[clamp(0.8rem,1.9vh,1.35rem)] normal-case tracking-normal text-white/70"
            />

            {member.labels.length > 0 && (
                <span className="relative z-10 flex flex-wrap items-center gap-1">
                    {member.labels.map((label, i) => (
                        <TextReveal key={label} open={shown} delay={0.24 + i * 0.05} cropClassName="shrink-0" className={chipClass}>
                            {label}
                        </TextReveal>
                    ))}
                </span>
            )}

            {member.socials.length > 0 && (
                <TextReveal open={shown} delay={0.4} cropClassName="z-10" className="flex items-center gap-4 text-white/50">
                    <SocialIcons socials={member.socials} />
                </TextReveal>
            )}
        </div>
    );
}
