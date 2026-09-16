'use client'

import React from 'react';
import { ContactLinks, NavLinks } from '@/components/facile/navLinks';
import { useAfter } from '@/hooks/use-after';
import { DitherView } from '@/webgl/lazy';

const COUNT = 4;
const coverEase = 'cubic-bezier(0.7, 0, 0.3, 1)';
const exitDelay = 0.9;

// when the last cover lands: the trailing layer's lead, plus its stagger across the
// stripes, plus the slide itself. Nothing behind the covers may show before this
const COVERED_MS = (0.14 + (COUNT - 1) * 0.1 + 0.8) * 1000;

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



    
const Menu = ({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const OPEN_AT = { link: 0.55, contact: 1.3 };
    const [mountDither, setMountDither] = React.useState(false);
    const resolved = useAfter(menuOpen, COVERED_MS + 600);
    const [stage, setStage] = React.useState<'off' | 'ready' | 'shown'>('off');

    if (menuOpen && !mountDither) setMountDither(true);
    if (!menuOpen && stage === 'shown') setStage('ready');

    React.useEffect(() => {
        if (menuOpen) {
            const ready = setTimeout(() => setStage('ready'), COVERED_MS);
            const shown = setTimeout(() => setStage('shown'), COVERED_MS + 60);
            return () => {
                clearTimeout(ready);
                clearTimeout(shown);
            };
        }

        const off = setTimeout(() => {
            setStage('off');
            setMountDither(false);
        }, (exitDelay + 0.6) * 1000);
        return () => clearTimeout(off);
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
                    className={`absolute inset-0 z-45 overflow-hidden ${stage === 'off' ? 'hidden' : 'visible'}`}
                    style={{
                        clipPath: stage === 'shown' ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)',
                        opacity: stage === 'shown' ? 1 : 0,
                        transition: `clip-path 0.6s ${coverEase} ${menuOpen ? '0s' : `${exitDelay}s`}, opacity 0.9s ${coverEase} 0s`,
                    }}
                >
                    <DitherView
                        file="/models/F.glb"
                        className="absolute top-0 left-0 w-full h-full opacity-33"
                        gridSize={resolved ? 2 : 16}
                        position={[-1.5, -0.5, -0.5]}
                        rotation={[0, 0.35, 0]}
                        parallax={0.55}
                        float={false}
                        scale={45}
                        fov={50}
                    />
                </div>
            )}

            <NavLinks
                open={menuOpen}
                delay={OPEN_AT.link}
                onSamePage={() => setMenuOpen(false)}
                className="absolute -translate-y-1/2 top-1/3 right-0 pr-20 z-50 justify-end"
            />

            <ContactLinks open={menuOpen} delay={OPEN_AT.contact} className="absolute bottom-12 right-20 z-50 hidden md:flex" />
        </div>
    );
}

export default Menu;
