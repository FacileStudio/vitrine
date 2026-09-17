'use client'

import React from 'react';
import { useTranslations } from 'next-intl';
import TextReveal from '@/components/facile/textReveal';
import { TransitionOut } from '@/components/facile/pageTransition';
import { allProjects } from '@/lib/content/projects';
import { authoredMembers } from '@/lib/content/studio';
import { Link, usePathname, useRouter } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils';
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
type NavLink = { href: string; key: NavKey; secondary?: SubLink[] };

const links: NavLink[] = [
    { href: '/', key: 'home' },
    {
        href: '/projects',
        key: 'projects',
        secondary: allProjects.map((p) => ({
            href: `/projects/${p.slug}`,
            name: p.name,
        })),
    },
    {
        href: 'https://suite.facile.studio',
        key: 'suite',
    },
    {
        href: '/studio',
        key: 'studio',
        secondary: authoredMembers.map((m) => ({
            href: `/studio/${m.slug}`,
            name: m.name,
        })),
    }
];

const subBase = links.reduce<number[]>(
    (acc, l) => [...acc, acc[acc.length - 1] + (l.secondary?.length ?? 0)],
    [0],
);

const SUB_AFTER = 0.45;

const isExternal = (href: string) => href.startsWith('http');

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
    const router = useRouter();
    const pathname = usePathname();

    const label = (l: Label) => ('key' in l ? t(l.key) : l.name);

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
        <nav className={cn('flex flex-col md:flex-row gap-4 md:gap-x-10 lg:gap-x-4', className)}>
            {links.map((link, i) => (
                <div key={link.href} className="flex w-48 md:w-auto lg:w-48 flex-col items-start">
                    <TextReveal
                        open={open}
                        duration={0.6}
                        delay={open ? delay + i * 0.08 : 0}
                    >
                        <Anchor href={link.href} go={go} className="subtitle block text-white transition-colors">
                            {t(link.key)}
                        </Anchor>
                    </TextReveal>
                    {link.secondary && link.secondary.length > 0 && (
                        <ul className="mt-4 hidden md:flex flex-col items-start gap-1">
                            {link.secondary.map((sub, j) => (
                                <li key={sub.href}>
                                    <TextReveal
                                        open={open}
                                        duration={0.5}
                                        delay={open ? delay + SUB_AFTER + (subBase[i] + j) * 0.035 : 0}
                                    >
                                        <Anchor href={sub.href} go={go} className="block text-white/45 transition-colors hover:text-white/90">
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
