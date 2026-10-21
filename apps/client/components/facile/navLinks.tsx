'use client'

import React, { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import TextReveal from '@/components/facile/textReveal';
import type { Project } from '@/lib/content/projects';
import { useMembers, useProjects } from '@/components/facile/contentProvider';
import type { AuthoredMember } from '@/lib/content/studio';
import { Link } from '@/lib/i18n/navigation';
import { useTransitionGo } from '@/hooks/use-transition-go';
import { cn, isExternal } from '@/lib/utils';
import AppMark from '@/components/facile/appMark';
import type common from '@/locales/en/common.json';
import { GithubIcon } from '../ui/github';
import { InstagramIcon } from '../ui/instagram';
import { DribbbleIcon } from '../ui/dribbble';

// TODO(gian): replace with the real studio contact details
const CONTACT = {
    email: 'contact@facile.studio',
    phone: '+33 7 68 88 88 18',
    socials: [
        { label: 'GitHub', href: 'https://github.com/FacileStudio', Icon: GithubIcon },
        { label: 'Instagram', href: 'https://www.instagram.com/webbygian', Icon: InstagramIcon },
        { label: 'Dribbble', href: 'https://www.dribbble.com/webbygian', Icon: DribbbleIcon },
    ],
};

type NavKey = keyof (typeof common)['nav'];

type Label = { key: NavKey } | { name: string };

type SubLink = Label & { href: string };
type NavLink = { href: string; key: NavKey; icon?: string; secondary?: SubLink[] };

const buildLinks = (members: AuthoredMember[], projects: Project[]): NavLink[] => [
    { href: '/', key: 'home' },
    {
        href: '/projects',
        key: 'projects',
        secondary: projects.map((p) => ({
            href: `/projects/${p.slug}`,
            name: p.name,
        })),
    },
    { href: '/method', key: 'process' },
    {
        href: 'https://suite.facile.studio',
        key: 'suite',
        icon: '/icons/Suite.svg',
    },
    {
        href: '/studio',
        key: 'studio',
        secondary: members.map((m) => ({
            href: `/studio/${m.slug}`,
            name: m.name,
        })),
    }
];

// index of each link's first sub-link across the whole menu, so the stagger runs on past section breaks
const subOffsets = (links: NavLink[]) => links.reduce<number[]>(
    (acc, l) => [...acc, acc[acc.length - 1] + (l.secondary?.length ?? 0)],
    [0],
);

const SUB_AFTER = 0.45;

function Anchor({ href, className, go, children }: {
    href: string;
    className: string;
    go: (e: React.MouseEvent, href: string) => void;
    children: React.ReactNode;
}) {
    if (isExternal(href))
        return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;

    return <Link href={href} onClick={(e) => go(e, href)} className={className}>{children}</Link>;
}

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
    const t = useTranslations('common.nav');
    const go = useTransitionGo();
    const members = useMembers();
    const projects = useProjects();
    const links = useMemo(() => buildLinks(members, projects), [members, projects]);
    const subBase = useMemo(() => subOffsets(links), [links]);

    const label = (l: Label) => ('key' in l ? t(l.key) : l.name);

    const handle = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        go(href, onSamePage);
    };

    return (
        <nav className={cn('flex flex-col md:flex-row mr-12 gap-4 md:gap-x-10 lg:gap-x-16', className)}>
            {links.map((link, i) => (
                <div key={link.href} className="flex w-auto flex-col items-start">
                    <TextReveal
                        open={open}
                        duration={0.6}
                        delay={open ? delay + i * 0.08 : 0}
                    >
                        <Anchor href={link.href} go={handle} className="subtitle flex items-center gap-[0.3em] text-background transition-colors">
                            {link.icon && <AppMark icon={link.icon} fileClassName="h-[0.9em] w-[0.9em] object-contain" />}
                            {t(link.key)}
                        </Anchor>
                    </TextReveal>
                    {link.secondary && link.secondary.length > 0 && (
                        <ul className="mt-4 hidden md:flex flex-col items-start gap-fc">
                            {link.secondary.map((sub, j) => (
                                <li key={sub.href}>
                                    <TextReveal
                                        open={open}
                                        duration={0.5}
                                        delay={open ? delay + SUB_AFTER + (subBase[i] + j) * 0.035 : 0}
                                    >
                                        <Anchor href={sub.href} go={handle} className="block text-background/45 transition-colors hover:text-background/90">
                                            <p>{label(sub)}</p>
                                        </Anchor>
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

export function ContactLinks({ open, delay = 0, className }: { open: boolean; delay?: number; className?: string }) {
    const at = (step: number) => (open ? delay + step : 0);

    return (
        <div className={cn('flex flex-row items-center gap-12 text-background/50', className)}>
            <TextReveal open={open} duration={0.5} delay={at(0)}>
                <a
                    href={`mailto:${CONTACT.email}`}
                    className="block transition-colors hover:text-background"
                >
                    <p>{CONTACT.email}</p>
                </a>
            </TextReveal>
            <TextReveal open={open} duration={0.5} delay={at(0.06)}>
                <a
                    href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                    className="block transition-colors hover:text-background"
                >
                    <p className="normal-case">{CONTACT.phone}</p>
                </a>
            </TextReveal>
            <TextReveal
                open={open}
                duration={0.5}
                delay={at(0.12)}
                className="text-background/40 hidden md:block select-none"
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
