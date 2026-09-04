'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import TextReveal from '@/components/facile/textReveal';
import { TransitionOut } from '@/components/facile/pageTransition';
import { allProjects } from '@/app/[locale]/projects/lib/projects';
import suite from '@/app/[locale]/suite/suite.json';
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

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

export type SubLink = { href: string; label: string; external?: boolean };
export type NavLink = { href: string; label: string; secondary?: SubLink[] };
const MENU_PROJECTS = allProjects.length;
const MENU_SUITE = 0;

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

const subBase = links.reduce<number[]>(
    (acc, l) => [...acc, acc[acc.length - 1] + (l.secondary?.length ?? 0)],
    [0],
);

const COUNT = 4;
const coverEase = 'cubic-bezier(0.7, 0, 0.3, 1)';
const exitDelay = 0.9;

const Stripes = (open: boolean, color: string, leadOpen: number, leadClose: number) =>
    Array.from({ length: COUNT }, (_, i) => (
        <div
            key={i}
            className="absolute left-0 w-full"
            style={{
                top: `${(i * 100) / COUNT}%`,
                height: `calc(${100 / COUNT}% + 1px)`,
                background: color,
                transform: open ? 'translateX(0%)' : 'translateX(110%)',
                transition: `transform 0.8s ${coverEase}`,
                transitionDelay: `${(open ? leadOpen + i * 0.1 : leadClose + (COUNT - 1 - i) * 0.1)}s`,
            }}
        />
    ));



const OPEN_AT = { link: 0.55, sub: 1.0, contact: 1.3 };

export const Menu = ({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const withLocale = (href: string) => href.startsWith('/') ? `/${locale}${href === '/' ? '' : href}` : href;

    const go = (e: React.MouseEvent, href: string) => {
        e.preventDefault();

        if (href.split('#')[0] === pathname) {
            setMenuOpen(false);
            router.push(href);
            return;
        }

        TransitionOut({ href, router });
    };
    const [mountDither, setMountDither] = React.useState(false);
    const [showDither, setShowDither] = React.useState(false);
    const [resolved, setResolved] = React.useState(false);


    // dither on open
    React.useEffect(() => {
        if (menuOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setMountDither(true);
            const id = requestAnimationFrame(() => setShowDither(true));
            // let the clip wipe land before the dither grid resolves
            const t = setTimeout(() => setResolved(true), 800);
            return () => {
                cancelAnimationFrame(id);
                clearTimeout(t);
            };
        }
        setShowDither(false);
        setResolved(false);

        // and give the canvas back once the wipe has finished: mounted, it holds a
        // WebGL context and renders every frame behind a clip-path, on whatever page
        // the visitor went back to
        const t = setTimeout(() => setMountDither(false), (exitDelay + 0.6) * 1000);
        return () => clearTimeout(t);
    }, [menuOpen]);

    return (
        <div
            aria-hidden={!menuOpen}
            className={`fixed inset-0 z-100 ${menuOpen ? '' : 'pointer-events-none'}`}
        >
            <div className="absolute inset-0 z-30">{Stripes(menuOpen, '#ffffff', 0, 0.14 + exitDelay)}</div>
            <div className="absolute inset-0 z-40">{Stripes(menuOpen, 'var(--foreground)', 0.14, 0 + exitDelay)}</div>

            {mountDither && (
                <div
                    className="absolute inset-0 z-45 overflow-hidden"
                    style={{
                        clipPath: showDither ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)',
                        opacity: showDither ? 1 : 0,
                        transition: `clip-path 0.6s ${coverEase} ${menuOpen ? '0.55s' : `${exitDelay}s`}, opacity 0.9s ${coverEase} ${menuOpen ? '0.85s' : '0s'}`,
                    }}
                >
                    <DitherView
                        file="/models/F.glb"
                        className="absolute top-0 left-0 w-full h-full opacity-33"
                        gridSize={resolved ? 2 : 16}
                        position={[-1.5, -0.5, -0.5]}
                        rotation={[0, 0.35, 0]}
                        grayscaleOnly={false}
                        background={null}
                        highlight="#24E27A"
                        parallax={0.55}
                        intensity={1.8}
                        float={false}
                        scale={45}
                        fov={50}
                    />
                </div>
            )}

            <nav className="absolute -translate-y-1/2 top-1/3 right-0 pr-20 z-50 flex justify-end gap-4">
                {links.map((link, i) => (
                    <div key={link.href} className="flex w-48 flex-col items-start">
                        <TextReveal
                            open={menuOpen}
                            duration={0.6}
                            delay={menuOpen ? OPEN_AT.link + i * 0.08 : 0}
                        >
                            <a
                                href={withLocale(link.href)}
                                onClick={(e) => go(e, withLocale(link.href))}
                                className="subtitle block text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        </TextReveal>
                        {link.secondary && link.secondary.length > 0 && (
                            <ul className="mt-4 flex flex-col items-start gap-1">
                                {link.secondary.map((sub, j) => (
                                    <li key={sub.label}>
                                        <TextReveal
                                            open={menuOpen}
                                            duration={0.5}
                                            delay={menuOpen ? OPEN_AT.sub + (subBase[i] + j) * 0.035 : 0}
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

            {/* contact block, bottom-right: normal text for email/phone, logos for the socials,
                a dot separating the two sections */}
            <div className="absolute bottom-12 right-20 z-50 flex flex-row items-center gap-12 text-white/50">
                <TextReveal open={menuOpen} duration={0.5} delay={menuOpen ? OPEN_AT.contact : 0}>
                    <a
                        href={`mailto:${CONTACT.email}`}
                        className="block transition-colors hover:text-white"
                    >
                        <p>{CONTACT.email}</p>
                    </a>
                </TextReveal>
                <TextReveal open={menuOpen} duration={0.5} delay={menuOpen ? OPEN_AT.contact + 0.06 : 0}>
                    <a
                        href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                        className="block transition-colors hover:text-white"
                    >
                        <p className="normal-case">{CONTACT.phone}</p>
                    </a>
                </TextReveal>
                <TextReveal
                    open={menuOpen}
                    duration={0.5}
                    delay={menuOpen ? OPEN_AT.contact + 0.12 : 0}
                    className="text-white/40 select-none"
                >
                    <span aria-hidden="true">·</span>
                </TextReveal>
                <TextReveal
                    open={menuOpen}
                    duration={0.5}
                    delay={menuOpen ? OPEN_AT.contact + 0.18 : 0}
                    className="flex items-center gap-4"
                >
                    {CONTACT.socials.map(({ label, href, Icon }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                            <Icon className="transition-all duration-200 hover:scale-115" size={22} />
                        </a>
                    ))}
                </TextReveal>
            </div>
        </div>
    );
}

export default Menu;
