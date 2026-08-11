'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { run, slideY, hideRevealY } from '@/app/utils/animations';
import { TransitionOut } from '@/components/facile/pageTransition';
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

// each main entry can carry `secondary` sub-links connected to it (project names,
// Suite apps, process/service entries, contact channels). rendered under the main link.
export const links: NavLink[] = [
    { href: '/', label: 'Home' },
    {
        href: '/projects',
        label: 'Projects',
        secondary: [
            { href: '/projects/marcel', label: 'Marcel' },
            { href: '/projects/laura-herve', label: 'Laura Hervé' },
            { href: '/projects/evelynecrea', label: 'Evelyne Créa' },
            { href: '/projects/solais-intra', label: 'Solaïs' },
        ],
    },
    {
        href: '/suite',
        label: 'Suite',
        secondary: [
            { href: '/projects/capsule', label: 'Capsule' },
            { href: '/projects/opus', label: 'Opus' },
            { href: '/projects/glouton', label: 'Glouton' },
            { href: '/projects/marcel', label: 'Marcel' },
        ],
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

// running start index of each link's secondary group, so sub-link refs get stable
// global indices for a single flattened stagger across every group
const subBase: number[] = [];
links.reduce((c, l, i) => { subBase[i] = c; return c + (l.secondary?.length ?? 0); }, 0);

const COUNT = 4;
const coverEase = 'cubic-bezier(0.7, 0, 0.3, 1)';
// on close, the dither object fades out first; the stripes wait this long before
// retreating so they only uncover the page once it's actually gone
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



export const Menu = ({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const linkRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
    const subRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
    const contactRefs = React.useRef<(HTMLElement | null)[]>([]);
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    // internal routes need the always-on locale prefix; external URLs (http…) pass through
    const withLocale = (href: string) => href.startsWith('/') ? `/${locale}${href === '/' ? '' : href}` : href;

    // the curtain is already down while the menu is open, so the route is pushed
    // under it and the arriving page lifts it — closing the menu first would
    // uncover the old page for the length of the navigation
    const go = (e: React.MouseEvent, href: string) => {
        e.preventDefault();

        // an anchor on the page we are already on has nothing to cover: close the
        // menu and let the scroll happen in the open
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


    React.useEffect(() => {
        hideRevealY([...linkRefs.current, ...subRefs.current, ...contactRefs.current]);
    }, []);

    React.useEffect(() => {
        // big links reveal first, then the smaller sub-links, then the contact block
        run(linkRefs.current, slideY(menuOpen, false, { stagger: 0.08, duration: 0.6, delay: menuOpen ? 0.55 : 0 }));
        run(subRefs.current, slideY(menuOpen, false, { stagger: 0.035, duration: 0.5, delay: menuOpen ? 1.0 : 0 }));
        run(contactRefs.current, slideY(menuOpen, false, { stagger: 0.06, duration: 0.5, delay: menuOpen ? 1.3 : 0 }));
    }, [menuOpen]);


    
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
    }, [menuOpen]);

    return (
        <div
            aria-hidden={!menuOpen}
            className={`fixed inset-0 z-100 ${menuOpen ? '' : 'pointer-events-none'}`}
        >
            {/* white curtain leads, dark curtain trails: two waves racing down the screen.
                on close they wait for the dither object to fade out before retreating */}
            <div className="absolute inset-0 z-30">{Stripes(menuOpen, '#ffffff', 0, 0.14 + exitDelay)}</div>
            <div className="absolute inset-0 z-40">{Stripes(menuOpen, '#111111', 0.14, 0 + exitDelay)}</div>

            {/* dither backdrop, revealed top-to-bottom by a clip wipe once the covers land */}
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
                        scale={35}
                        fov={50}
                    />
                </div>
            )}

            <nav className="absolute -translate-y-1/2 top-1/3 right-0 pr-20 z-50 flex justify-end gap-4">
                {links.map((link, i) => (
                    <div key={link.href} className="flex w-40 flex-col items-start">
                        <div className="block overflow-hidden">
                            <a
                                ref={(el) => { linkRefs.current[i] = el; }}
                                href={withLocale(link.href)}
                                onClick={(e) => go(e, withLocale(link.href))}
                                className="block text-3xl md:text-4xl 3xl:text-5xl font-medium text-white/80 transition-colors hover:text-white"
                            >
                                {link.label}
                            </a>
                        </div>
                        {link.secondary && link.secondary.length > 0 && (
                            <ul className="mt-4 flex flex-col items-start gap-1">
                                {link.secondary.map((sub, j) => (
                                    <li key={sub.label} className="overflow-hidden">
                                        <a
                                            ref={(el) => { subRefs.current[subBase[i] + j] = el; }}
                                            href={sub.external ? sub.href : withLocale(sub.href)}
                                            onClick={(e) => { if (!sub.external) go(e, withLocale(sub.href)); }}
                                            {...(sub.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                            className="block text-sm md:text-md 3xl:text-lg text-white/45 transition-colors hover:text-white/90"
                                        >
                                            {sub.label}
                                        </a>
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
                <div className="overflow-hidden">
                    <a
                        ref={(el) => { contactRefs.current[0] = el; }}
                        href={`mailto:${CONTACT.email}`}
                        className="block text-sm md:text-md 3xl:text-lg transition-colors hover:text-white"
                    >
                        {CONTACT.email}
                    </a>
                </div>
                <div className="overflow-hidden">
                    <a
                        ref={(el) => { contactRefs.current[1] = el; }}
                        href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                        className="block text-sm md:text-md 3xl:text-lg transition-colors hover:text-white"
                    >
                        {CONTACT.phone}
                    </a>
                </div>
                <div className="overflow-hidden">
                    <span
                        ref={(el) => { contactRefs.current[2] = el; }}
                        className="block text-sm md:text-md 3xl:text-lg text-white/40 select-none"
                        aria-hidden="true"
                    >
                        ·
                    </span>
                </div>
                <div className="overflow-hidden">
                    <div
                        ref={(el) => { contactRefs.current[3] = el; }}
                        className="flex items-center gap-4"
                    >
                        {CONTACT.socials.map(({ label, href, Icon }) => (
                            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                <Icon className="transition-all duration-200 hover:scale-115" size={22} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
