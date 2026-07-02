'use client'

import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { past } from "@/app/utils";
import { pointerDrift } from "@/app/utils/animations";
import { useScroll } from "@/hooks/use-scroll";

const coverTransition = "transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)";

const plus = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Cpath d='M5 2h2v3h3v2H7v3H5V7H2V5h3z' fill='%239FB0A8'/%3E%3C/svg%3E";
const cornerFade =
    "radial-gradient(60% 60% at 0% 0%, #000 0%, transparent 60%), radial-gradient(55% 55% at 100% 100%, #000 0%, transparent 60%)";

type RevealState = {
    revealed: boolean;
    gone: boolean;
    showText: boolean;
    showCta: boolean;
    leaving: boolean;
};

type RevealContextValue = {
    visible: boolean;
    setActive: (id: string, on: boolean) => void;
};

const RevealContext = createContext<RevealContextValue | null>(null);

function useReveal() {
    const ctx = useContext(RevealContext);
    if (!ctx)
        throw new Error("RevealModel / StripReveal must be wrapped in <RevealProvider>");
    return ctx;
}



// provider: the shared model stays alive while any StripReveal is pinned
export function RevealProvider({ children }: { children: ReactNode }) {
    const active = useRef<Set<string>>(new Set());
    const [visible, setVisible] = useState(false);

    const setActive = useCallback((id: string, on: boolean) => {
        if (on)
            active.current.add(id);
        else
            active.current.delete(id);
        setVisible(active.current.size > 0);
    }, []);

    const value = useMemo(() => ({ visible, setActive }), [visible, setActive]);

    return <RevealContext.Provider value={value}>{children}</RevealContext.Provider>;
}



// the single shared 3d placeholder — place once, anywhere inside the provider
export function RevealModel() {
    const { visible } = useReveal();
    const modelRef = useRef<HTMLDivElement>(null);

    // drift: pointer parallax for a touch of depth
    useEffect(() => pointerDrift(modelRef.current), []);

    return (
        <div
            className="fixed inset-0 z-30 bg-white pointer-events-none transition-opacity duration-500"
            style={{ opacity: visible ? 1 : 0 }}
        >
            <div
                ref={modelRef}
                className="absolute inset-0"
                style={{
                    backgroundImage: `url("${plus}")`,
                    backgroundSize: "12px 12px",
                    WebkitMaskImage: cornerFade,
                    maskImage: cornerFade,
                    opacity: 0.85,
                }}
            />
        </div>
    );
}



type StripRevealProps = {
    orientation?: number;
    strips?: number;
    heightVh?: number;
    children?: ReactNode | ((state: RevealState) => ReactNode);
};

// reusable reveal section — covers retract to expose the shared model behind them
export function StripReveal({ orientation = 0, strips = 4, heightVh = 250, children }: StripRevealProps) {
    const id = useId();
    const { setActive } = useReveal();

    const sectionRef = useRef<HTMLElement>(null);
    const paraSentinel = useRef<HTMLDivElement>(null);
    const ctaSentinel = useRef<HTMLDivElement>(null);
    const textExitSentinel = useRef<HTMLDivElement>(null);
    const exitSentinel = useRef<HTMLDivElement>(null);
    const pinnedRef = useRef(false);

    const [revealed, setRevealed] = useState(false);
    const [gone, setGone] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showCta, setShowCta] = useState(false);
    const [leaving, setLeaving] = useState(false);

    // anchors: drive the model + every flag from scroll position; text leaves before the panels
    useScroll(() => {
        const rect = sectionRef.current?.getBoundingClientRect();
        const pinned = !!rect && rect.top <= 0 && rect.bottom >= window.innerHeight;

        if (pinned !== pinnedRef.current) {
            pinnedRef.current = pinned;
            setActive(id, pinned);
        }
        if (pinned)
            setRevealed(true);

        const textOut = past(textExitSentinel, 0);
        setShowText(past(paraSentinel, 0) && !textOut);
        setShowCta(past(ctaSentinel, 0) && !textOut);
        setLeaving(textOut);
        setGone(past(exitSentinel, 0));
    });

    // release this section's hold on the shared model when it unmounts
    useEffect(() => () => setActive(id, false), [id, setActive]);

    // orientation: covers slide along (-sin, -cos); strips split on the dominant axis
    const rad = (orientation * Math.PI) / 180;
    const dx = -Math.sin(rad);
    const dy = -Math.cos(rad);
    const enterHidden = `translate(${(dx * 110).toFixed(2)}%, ${(dy * 110).toFixed(2)}%)`;
    const exitStart = `translate(${(-dx * 110).toFixed(2)}%, ${(-dy * 110).toFixed(2)}%)`;
    const vertical = Math.abs(Math.cos(rad)) >= Math.abs(Math.sin(rad));

    const cols = Array.from({ length: strips }, (_, i) => i);
    const stripStyle = (i: number): CSSProperties =>
        vertical
            ? { left: `${(i * 100) / strips}%`, width: `${100 / strips}%`, top: 0, height: "100%" }
            : { top: `${(i * 100) / strips}%`, height: `${100 / strips}%`, left: 0, width: "100%" };

    const content = typeof children === "function" ? children({ revealed, gone, showText, showCta, leaving }) : children;

    return (
        <section ref={sectionRef} className="relative w-full" style={{ minHeight: `${heightVh}vh` }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {cols.map((i) => (
                    <div
                        key={`enter-${i}`}
                        className="absolute z-40 bg-background pointer-events-none"
                        style={{
                            ...stripStyle(i),
                            transform: revealed ? enterHidden : "translate(0%, 0%)",
                            transition: coverTransition,
                            transitionDelay: `${i * 0.1}s`,
                        }}
                    />
                ))}

                {cols.map((i) => (
                    <div
                        key={`exit-${i}`}
                        className="absolute z-40 bg-background pointer-events-none"
                        style={{
                            ...stripStyle(i),
                            transform: gone ? "translate(0%, 0%)" : exitStart,
                            transition: coverTransition,
                            transitionDelay: `${i * 0.1}s`,
                        }}
                    />
                ))}

                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center px-6 text-center pointer-events-none">
                    {content}
                </div>
            </div>

            <div ref={paraSentinel} className="absolute top-[12%] bg-red-500 w-full h-px" aria-hidden="true" />
            <div ref={ctaSentinel} className="absolute top-[24%] bg-red-500 w-full h-px" aria-hidden="true" />
            <div ref={textExitSentinel} className="absolute top-[36%] bg-red-500 w-full h-px" aria-hidden="true" />
            <div ref={exitSentinel} className="absolute top-[48%] bg-red-500 w-full h-px" aria-hidden="true" />
        </section>
    );
}
