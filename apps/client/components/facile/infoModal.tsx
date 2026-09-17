'use client'

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import TextReveal from "@/components/facile/textReveal";
import SplitLines from "@/components/facile/splitLines";
import { useAfter } from "@/hooks/use-after";
import { useLineReveal } from "@/hooks/use-line-reveal";

type InfoModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    title: string;
    kicker?: string;
    note?: string;
    children: (entered: boolean) => ReactNode;
};

export default function InfoModal({ open, setOpen, title, kicker, note, children }: InfoModalProps) {
    const t = useTranslations("common.header");
    const [landed, setLanded] = useState(false);
    if (!open && landed) setLanded(false);
    const entered = useAfter(open, 600) || landed;
    const panel = useRef<HTMLDivElement>(null);

    useLineReveal(panel, entered, [children]);

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[120] rounded-md bg-foreground/20 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

                <Dialog.Content
                    ref={panel}
                    onAnimationEnd={(e) => { if (e.target === e.currentTarget && open) setLanded(true); }}
                    className="fixed inset-2 z-[121] flex flex-col overflow-hidden rounded-md bg-background text-foreground duration-500 data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-full"
                >
                    <div className="flex items-start justify-between gap-6 px-8 py-8">
                        <div>
                            <Dialog.Title className="text-foreground">
                                <TextReveal open={entered}>{title}</TextReveal>
                            </Dialog.Title>
                            {kicker ? (
                                <Dialog.Description className="mt-2 text-[0.7rem] text-foreground/50">
                                    <TextReveal open={entered} delay={0.06}>{kicker}</TextReveal>
                                </Dialog.Description>
                            ) : null}

                            {note ? (
                                <SplitLines
                                    as="p"
                                    text={note}
                                    gap="mb-1"
                                    className="lead mt-3 max-w-[52ch] text-foreground/75"
                                />
                            ) : null}
                        </div>

                        <Dialog.Close
                            aria-label={t("close")}
                            className="flex size-10 shrink-0 items-center justify-center rounded-md bg-foreground/5 text-xl leading-none font-medium text-foreground/60 transition-colors duration-200 hover:bg-foreground/10 hover:text-foreground"
                        >
                            <span aria-hidden="true">×</span>
                        </Dialog.Close>
                    </div>

                    <div data-lenis-prevent className="flex flex-col gap-10 overflow-y-auto px-8 py-8">
                        {children(entered)}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
