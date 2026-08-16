'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import gsap from 'gsap';

interface TextRevealProps {
    children: React.ReactNode;
    blockColor?: 'light' | 'dark';
    duration?: number;
    delay?: number;
    show?: boolean;
    leaving?: boolean;
}

export default function TextReveal({
    children,
    blockColor = 'light',
    duration = 0.8,
    delay = 0,
    show = true,
    leaving = false,
}: TextRevealProps) {
    const textRef = useRef<HTMLSpanElement>(null);
    const blockRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Animation | null>(null);

    useEffect(() => {
        if (!blockRef.current) return;

        if (animationRef.current) {
            animationRef.current.kill();
        }

        const timeline = gsap.timeline({ delay });

        if (show && !leaving) {
            timeline
                .set(blockRef.current, {
                    scaleX: 0,
                    transformOrigin: '0% 50%',
                    opacity: 1,
                })
                .to(
                    blockRef.current,
                    {
                        scaleX: 1,
                        duration: duration * 0.6,
                        ease: 'power2.out',
                    },
                    0
                )
                .to(
                    blockRef.current,
                    {
                        scaleX: 0,
                        transformOrigin: '100% 50%',
                        duration: duration * 0.4,
                        ease: 'power2.in',
                    },
                    duration * 0.6
                );
        } else {
            gsap.set(blockRef.current, {
                scaleX: 0,
                transformOrigin: '0% 50%',
                opacity: leaving ? 0 : 1,
            });
        }

        animationRef.current = timeline;

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [show, leaving, duration, delay]);

    const blockBg = blockColor === 'dark' ? 'bg-foreground' : 'bg-background';

    return (
        <span ref={textRef} className="block overflow-hidden">
            <span className="block relative">
                {children}
                <div
                    ref={blockRef}
                    className={`absolute inset-0 pointer-events-none ${blockBg}`}
                />
            </span>
        </span>
    );
}
