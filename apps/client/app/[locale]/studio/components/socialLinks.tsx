'use client'

import { Icon } from "@iconify/react";
import TextReveal from "@/components/facile/textReveal";
import { GithubIcon } from "@/components/ui/github";
import { InstagramIcon } from "@/components/ui/instagram";
import { DribbbleIcon } from "@/components/ui/dribbble";
import type { Member } from "./memberData";

// lucide dropped its brand icons, so LinkedIn comes from iconify while the other
// three are the studio's own animated marks
const SOCIAL_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    GitHub: GithubIcon,
    Instagram: InstagramIcon,
    Dribbble: DribbbleIcon,
    LinkedIn: ({ size = 22, className }) => <Icon icon="mdi:linkedin" width={size} height={size} className={className} />,
};

type Socials = Member["socials"];

export function SocialIcons({ socials, size = 22 }: { socials: Socials; size?: number }) {
    return (
        <>
            {socials.map(({ label, href }) => {
                const SocialIcon = SOCIAL_ICONS[label];
                return (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="pointer-events-auto transition-colors hover:text-white"
                    >
                        {SocialIcon ? <SocialIcon size={size} className="transition-all duration-200 hover:scale-115" /> : label}
                    </a>
                );
            })}
        </>
    );
}

export function SocialRows({ socials, entered, delay = 0.32 }: { socials: Socials; entered: boolean; delay?: number }) {
    return (
        <div className="flex flex-col gap-3  pt-6">
            {socials.map(({ label, href }, i) => {
                const SocialIcon = SOCIAL_ICONS[label];
                return (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 transition-colors hover:text-foreground"
                    >
                        <TextReveal as="p" open={entered} delay={delay + i * 0.05} className="flex items-center gap-3">
                            {SocialIcon ? <SocialIcon size={18} /> : null}
                            {label}
                            <span className="ml-auto">↗</span>
                        </TextReveal>
                    </a>
                );
            })}
        </div>
    );
}
