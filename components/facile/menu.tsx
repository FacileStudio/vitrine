'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import { run, slideY, hideRevealY } from '@/app/utils/animations';

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
];

const COUNT = 4;
const coverEase = 'cubic-bezier(0.7, 0, 0.3, 1)';

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
    const [mountDither, setMountDither] = React.useState(false);
    const [showDither, setShowDither] = React.useState(false);
    const [resolved, setResolved] = React.useState(false);


    React.useEffect(() => {
        hideRevealY(linkRefs.current);
    }, []);

    React.useEffect(() => {
        run(linkRefs.current, slideY(menuOpen, false, { stagger: 0.08, duration: 0.6, delay: menuOpen ? 0.55 : 0 }));
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
            {/* white curtain leads, dark curtain trails: two waves racing down the screen */}
            <div className="absolute inset-0 z-30">{Stripes(menuOpen, '#ffffff', 0, 0.14)}</div>
            <div className="absolute inset-0 z-40">{Stripes(menuOpen, '#1E1E1E', 0.14, 0)}</div>

            {/* dither backdrop, revealed top-to-bottom by a clip wipe once the covers land */}
            {mountDither && (
                <div
                    className="absolute inset-0 z-45 overflow-hidden"
                    style={{
                        clipPath: showDither ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)',
                        transition: `clip-path 0.6s ${coverEase} ${menuOpen ? '0.55s' : '0s'}`,
                    }}
                >
                    <DitherView
                        file="/models/F.glb"
                        className="absolute top-0 left-0 w-full h-full opacity-33"
                        gridSize={resolved ? 2 : 16}
                        position={[-1, -0.5, -0.5]}
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

            <nav className="absolute -translate-y-1/2 top-1/2 -translate-x-1/2 right-60 z-50 flex flex-col items-end justify-center gap-8">
                {links.map((link, i) => (
                    <span key={link.href} className="block overflow-hidden">
                        <a
                            ref={(el) => { linkRefs.current[i] = el; }}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-5xl md:text-6xl font-medium text-white/80 transition-colors hover:text-white"
                        >
                            {link.label}
                        </a>
                    </span>
                ))}
            </nav>
        </div>
    );
}

export default Menu;
