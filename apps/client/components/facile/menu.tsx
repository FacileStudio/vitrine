'use client'

import React from 'react';
import gsap from 'gsap';
import { ContactLinks, NavLinks } from '@/components/facile/navLinks';
import { EASE, slide } from '@/lib/animations';
import { useAfter } from '@/hooks/use-after';
import { useNarrow } from '@/hooks/use-narrow';
import { DitherView } from '@/webgl/lazy';

const COUNT = 4;
const coverEase = 'cubic-bezier(0.7, 0, 0.3, 1)';
const exitDelay = 0.9;

const COVERED_MS = (0.14 + (COUNT - 1) * 0.1 + 0.8) * 1000;

function Stripes({ open, color, leadOpen, leadClose }: { open: boolean; color: string; leadOpen: number; leadClose: number }) {
    const refs = React.useRef<(HTMLDivElement | null)[]>([]);

    React.useEffect(() => {
        refs.current.forEach((el, i) => {
            if (el)
                slide(el, open ? 'translateX(0%)' : 'translateX(110%)', {
                    duration: 0.8,
                    delay: open ? leadOpen + i * 0.1 : leadClose + (COUNT - 1 - i) * 0.1,
                    easing: coverEase,
                });
        });
    }, [open, leadOpen, leadClose]);

    return Array.from({ length: COUNT }, (_, i) => (
        <div
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            className="absolute left-0 w-full"
            style={{
                top: `${(i * 100) / COUNT}%`,
                height: `calc(${100 / COUNT}% + 1px)`,
                background: color,
                transform: 'translateX(110%)',
            }}
        />
    ));
}

const Menu = ({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const OPEN_AT = { link: 0.55, contact: 1.3 };
    const [mountDither, setMountDither] = React.useState(false);
    const resolved = useAfter(menuOpen, COVERED_MS + 600);
    const narrow = useNarrow();
    const [stage, setStage] = React.useState<'off' | 'ready' | 'shown'>('off');
    const cover = React.useRef<HTMLDivElement>(null);

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

    React.useEffect(() => {
        const el = cover.current;
        const shown = stage === 'shown';

        if (!el)
            return;

        gsap.to(el, {
            clipPath: shown ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)',
            duration: 0.6,
            delay: menuOpen ? 0 : exitDelay,
            ease: EASE.cover,
            overwrite: 'auto',
        });
        gsap.to(el, {
            opacity: shown ? 1 : 0,
            duration: 0.9,
            ease: EASE.cover,
            overwrite: 'auto',
        });

        return () => {
            gsap.killTweensOf(el);
        };
    }, [stage, menuOpen, mountDither]);

    return (
        <div
            aria-hidden={!menuOpen}
            className={`fixed inset-0 z-100 ${menuOpen ? '' : 'pointer-events-none'}`}
        >
            <div className="absolute inset-0 z-30"><Stripes open={menuOpen} color="#ffffff" leadOpen={0} leadClose={0.14 + exitDelay} /></div>
            <div className="absolute inset-0 z-40"><Stripes open={menuOpen} color="var(--foreground)" leadOpen={0.14} leadClose={exitDelay} /></div>

            {mountDither && !narrow && (
                <div
                    ref={cover}
                    className={`absolute inset-0 z-45 overflow-hidden ${stage === 'off' ? 'hidden' : 'visible'}`}
                    style={{ clipPath: 'inset(0% 0% 0% 100%)', opacity: 0 }}
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
                className="absolute -translate-y-1/2 top-1/3 right-0 pr-20 z-50 justify-end [&_.subtitle]:font-magnetik!"
            />

            <ContactLinks open={menuOpen} delay={OPEN_AT.contact} className="absolute bottom-12 right-20 z-50 hidden md:flex" />
        </div>
    );
}

export default Menu;
