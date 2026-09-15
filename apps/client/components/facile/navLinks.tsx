'use client'

import React from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import TextReveal from '@/components/facile/textReveal';
import { TransitionOut } from '@/components/facile/pageTransition';
import { allProjects } from '@/app/[locale]/projects/lib/projects';
import { useNarrow } from '@/hooks/use-narrow';
import { cn } from '@/app/utils';
import { GithubIcon } from '../ui/github';
import { InstagramIcon } from '../ui/instagram';
import { DribbbleIcon } from '../ui/dribbble';

// TODO(gian): replace with the real studio contact details
export const CONTACT = {
    email: 'contact@facile.studio',
    phone: '+33 7 68 88 88 18',
    socials: [
        { label: 'GitHub', href: 'https://github.com/FacileStudio', Icon: GithubIcon },
        { label: 'Instagram', href: 'https://www.instagram.com/webbygian', Icon: InstagramIcon },
        { label: 'Dribbble', href: 'https://www.dribbble.com/webbygian', Icon: DribbbleIcon },
    ],
};

export type SubLink = { href: string; label: string; external?: boolean };
export type NavLink = { href: string; label: string; secondary?: SubLink[] };
const MENU_PROJECTS = allProjects.length;

export const links: NavLink[] = [
    { href: '/', label: 'Home' },
    {
        href: '/projects',
        label: 'Projects',
        secondary: allProjects.slice(0, MENU_PROJECTS).map((p) => ({
            href: `/projects/${p.slug}`,
            label: p.name,
        })),
    },
    {
        href: 'https://suite.facile.studio',
        label: 'Suite',
    },
    {
        href: '/process',
        label: 'Process',
        secondary: [
            { href: '/process#discovery', label: 'Discovery' },
            { href: '/process#design', label: 'Design' },
            { href: '/process#development', label: 'Development' },
            { href: '/process#launch', label: 'Launch & Care' },
        ],
    },
    {
        href: '/studio',
        label: 'Studio',
        secondary: [
            { href: '/studio/yann', label: 'Yann' },
            { href: '/studio/noah', label: 'Noah' },
            { href: '/studio/mazouz', label: 'Mazouz' },
            { href: '/studio/camille', label: 'Camille' }
        ]
    }
];

// where each link's sub-links start in one count across the whole nav, so every
// sub-link staggers as a single run rather than restarting under each link
const subBase = links.reduce<number[]>(
    (acc, l) => [...acc, acc[acc.length - 1] + (l.secondary?.length ?? 0)],
    [0],
);

// the sub-links wait this long after the first link before they start rising
const SUB_AFTER = 0.45;

/**
 * The site navigation, every link and sub-link rising in its own crop. The menu and the
 * footer both render it, so they reveal and navigate the same way.
 *
 * `delay` is when the first link starts; closing drops everything at once. A click on the
 * page already showing calls `onSamePage` and scrolls, anything else leaves through the
 * page transition. Sub-links are left out on a phone.
 */
export function NavLinks({
    open,
    delay = 0,
    onSamePage,
    className,
}: {
    open: boolean;
    delay?: number;
    onSamePage?: () => void;
    className?: string;
}) {
    const locale = useLocale();
    const router = useRouter();
    const narrow = useNarrow();
    const pathname = usePathname();
    const withLocale = (href: string) => href.startsWith('/') ? `/${locale}${href === '/' ? '' : href}` : href;

    const go = (e: React.MouseEvent, href: string) => {
        e.preventDefault();

        if (href.split('#')[0] === pathname) {
            onSamePage?.();
            router.push(href);
            return;
        }

        TransitionOut({ href, router });
    };

    return (
        <nav className={cn('flex flex-col lg:flex-row gap-4', className)}>
            {links.map((link, i) => (
                <div key={link.href} className="flex w-48 flex-col items-start">
                    <TextReveal
                        open={open}
                        duration={0.6}
                        delay={open ? delay + i * 0.08 : 0}
                    >
                        <a
                            href={withLocale(link.href)}
                            onClick={(e) => go(e, withLocale(link.href))}
                            className="subtitle block text-white transition-colors"
                        >
                            {link.label}
                        </a>
                    </TextReveal>
                    {link.secondary && link.secondary.length > 0 && !narrow && (
                        <ul className="mt-4 flex flex-col items-start gap-1">
                            {link.secondary.map((sub, j) => (
                                <li key={sub.label}>
                                    <TextReveal
                                        open={open}
                                        duration={0.5}
                                        delay={open ? delay + SUB_AFTER + (subBase[i] + j) * 0.035 : 0}
                                    >
                                        <a
                                            href={sub.external ? sub.href : withLocale(sub.href)}
                                            onClick={(e) => { if (!sub.external) go(e, withLocale(sub.href)); }}
                                            {...(sub.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                            className="block text-white/45 transition-colors hover:text-white/90"
                                        >
                                            <p>{sub.label}</p>
                                        </a>
                                    </TextReveal>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </nav>
    );
}

/**
 * Email, phone and the socials, a dot between the two groups, each rising in turn from
 * `delay`. Shared by the menu and the footer for the same reason as `NavLinks`.
 */
export function ContactLinks({ open, delay = 0, className }: { open: boolean; delay?: number; className?: string }) {
    const at = (step: number) => (open ? delay + step : 0);

    return (
        <div className={cn('flex flex-row items-center gap-12 text-white/50', className)}>
            <TextReveal open={open} duration={0.5} delay={at(0)}>
                <a
                    href={`mailto:${CONTACT.email}`}
                    className="block transition-colors hover:text-white"
                >
                    <p>{CONTACT.email}</p>
                </a>
            </TextReveal>
            <TextReveal open={open} duration={0.5} delay={at(0.06)}>
                <a
                    href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                    className="block transition-colors hover:text-white"
                >
                    <p className="normal-case">{CONTACT.phone}</p>
                </a>
            </TextReveal>
            <TextReveal
                open={open}
                duration={0.5}
                delay={at(0.12)}
                className="text-white/40 select-none"
            >
                <span aria-hidden="true">·</span>
            </TextReveal>
            <TextReveal
                open={open}
                duration={0.5}
                delay={at(0.18)}
                className="flex items-center gap-4"
            >
                {CONTACT.socials.map(({ label, href, Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                        <Icon className="transition-all duration-200 hover:scale-115" size={22} />
                    </a>
                ))}
            </TextReveal>
        </div>
    );
}
