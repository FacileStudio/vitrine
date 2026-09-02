'use client'

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import TextReveal from "@/components/facile/textReveal";
import { hideRevealY, run, slideY } from "@/app/utils/animations";

type InfoModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    title: string;
    kicker?: string;
    /** called with `entered` once the panel has finished sliding up, so the copy inside can reveal after it */
    children: (entered: boolean) => ReactNode;
};

// The panel shape the suite's architecture note introduced: centred card on a
// blurred overlay, fixed header with the title and a Close, everything below it
// scrolling on its own. Lenis is told to keep its hands off the body so the
// inner scroll behaves like a page
export default function InfoModal({ open, setOpen, title, kicker, children }: InfoModalProps) {
    const [entered, setEntered] = useState(false);
    const body = useRef<HTMLDivElement>(null);

    // the slide fires `entered`, but a browser that skips the animation entirely
    // (reduced motion, missing keyframes) never emits animationend — so time out too
    useEffect(() => {
        if (!open) {
            setEntered(false);
            return;
        }
        const t = setTimeout(() => setEntered(true), 600);
        return () => clearTimeout(t);
    }, [open]);

    // whatever the panel holds that is tagged [data-reveal] — SplitLines writes one
    // per rendered line — is parked below its crop and slid up once the panel lands
    useEffect(() => {
        const el = body.current;
        if (!el) return;
        const lines = Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));
        if (!lines.length) return;
        if (!entered) {
            hideRevealY(lines);
            return;
        }
        run(lines, slideY(true, false, { stagger: 0.05, duration: 0.55, delay: 0.1 }));
    }, [entered, children]);

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[120] rounded-md bg-foreground/20 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

                <Dialog.Content
                    onAnimationEnd={(e) => { if (e.target === e.currentTarget && open) setEntered(true); }}
                    className="fixed inset-2 z-[121] flex flex-col overflow-hidden rounded-md bg-background text-foreground duration-500 data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-full"
                >
                    <div className="flex items-start justify-between gap-6 px-8 py-6">
                        <div>
                            <Dialog.Title className="font-goga text-[2.5rem] font-medium normal-case leading-tight tracking-normal text-foreground">
                                <TextReveal open={entered}>{title}</TextReveal>
                            </Dialog.Title>
                            {kicker ? (
                                <Dialog.Description className="mt-2 font-bb-mono font-medium tracking-tight text-[0.7rem] uppercase text-foreground/40">
                                    <TextReveal open={entered} delay={0.06}>{kicker}</TextReveal>
                                </Dialog.Description>
                            ) : null}
                        </div>

                        <Dialog.Close
                            aria-label="Close"
                            className="flex size-10 shrink-0 items-center justify-center rounded-md bg-foreground/5 text-xl leading-none font-medium text-foreground/60 transition-colors duration-200 hover:bg-foreground/10 hover:text-foreground"
                        >
                            <span aria-hidden="true">×</span>
                        </Dialog.Close>
                    </div>

                    <div ref={body} data-lenis-prevent className="flex flex-col gap-10 overflow-y-auto px-8 py-8">
                        {children(entered)}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
