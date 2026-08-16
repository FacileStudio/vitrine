'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import gsap from 'gsap';

interface BlockRevealProps {
    children: React.ReactNode;
    className?: string;
    blockColor?: 'light' | 'dark';
    duration?: number;
    open?: boolean;
    openWhen?: () => boolean;
    delay?: number;
}

export default function BlockReveal({
    children,
    className = '',
    blockColor = 'light',
    duration = 0.8,
    open: openProp,
    openWhen,
    delay = 0,
}: BlockRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const blockRef = useRef<HTMLDivElement>(null);
    const [openState, setOpenState] = useState(false);
    const openWhenRef = useRef(openWhen);
    const [ready, setReady] = useState(false);
    const animationRef = useRef<gsap.core.Animation | null>(null);

    useEffect(() => {
        openWhenRef.current = openWhen;
    });

    useEffect(() => {
        if (!openWhenRef.current) return;
        const update = () => setOpenState(openWhenRef.current!());
        window.addEventListener('scroll', update, { passive: true });
        update();
        return () => window.removeEventListener('scroll', update);
    }, []);

    useEffect(() => {
        const id = requestAnimationFrame(() => setReady(true));
        return () => cancelAnimationFrame(id);
    }, []);

    const open = ready && (openWhen ? openState : !!openProp);

    useEffect(() => {
        if (!blockRef.current || !containerRef.current) return;

        if (animationRef.current) {
            animationRef.current.kill();
        }

        const fontSize = parseInt(
            window.getComputedStyle(containerRef.current).fontSize,
            10
        );
        const blockHeight = fontSize * 1.2;

        const timeline = gsap.timeline({ delay });

        if (open) {
            timeline
                .set(blockRef.current, {
                    width: 0,
                    left: 0,
                    height: blockHeight,
                    opacity: 1,
                })
                .to(
                    blockRef.current,
                    {
                        width: '100%',
                        duration: duration * 0.6,
                        ease: 'power2.out',
                    },
                    0
                )
                .to(
                    blockRef.current,
                    {
                        width: 0,
                        left: 'auto',
                        right: 0,
                        duration: duration * 0.4,
                        ease: 'power2.in',
                    },
                    duration * 0.6
                );
        } else {
            gsap.set(blockRef.current, {
                width: 0,
                left: 0,
                right: 'auto',
                height: blockHeight,
                opacity: 0,
            });
        }

        animationRef.current = timeline;

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [open, duration, delay]);

    const blockBg =
        blockColor === 'dark'
            ? 'bg-foreground'
            : 'bg-background';

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
        >
            {children}
            <div
                ref={blockRef}
                className={`absolute inset-y-0 left-0 pointer-events-none ${blockBg}`}
                style={{
                    height: 'auto',
                    top: '50%',
                    transform: 'translateY(-50%)',
                } as CSSProperties}
            />
        </div>
    );
}
