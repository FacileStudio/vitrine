'use client'

import * as Dialog from "@radix-ui/react-dialog";
import architecture from "../architecture.json";

type ArchitectureModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// the shelf's filter slot leads here instead: one tall, narrow column of prose
// explaining what the suite actually is under the fifteen names. Narrow on
// purpose — the measure is the point, the reading is the interaction. Lenis is
// told to keep its hands off the panel so the inner scroll behaves like a page
export default function ArchitectureModal({ open, setOpen }: ArchitectureModalProps) {
    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[120] bg-foreground/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

                <Dialog.Content className="fixed left-1/2 top-1/2 z-[121] flex max-h-[86vh] w-[92vw] max-w-[30rem] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md bg-background text-foreground outline-none ring-1 ring-foreground/10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                    <div className="flex items-start justify-between gap-6 border-b border-foreground/10 px-8 py-6">
                        <div>
                            <Dialog.Title className="text-2xl font-medium leading-tight">
                                {architecture.title}
                            </Dialog.Title>
                            <Dialog.Description className="mt-2 font-bb-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground/40">
                                {architecture.kicker}
                            </Dialog.Description>
                        </div>

                        <Dialog.Close
                            aria-label="Close"
                            className="shrink-0 rounded-md bg-foreground/5 px-3 py-2 text-sm text-foreground/60 transition-colors duration-200 hover:bg-foreground/10 hover:text-foreground"
                        >
                            Close
                        </Dialog.Close>
                    </div>

                    <div data-lenis-prevent className="flex flex-col gap-10 overflow-y-auto px-8 py-8">
                        {architecture.sections.map((section) => (
                            <section key={section.heading} className="flex flex-col gap-3">
                                <h3 className="font-bb-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent-ink">
                                    {section.heading}
                                </h3>

                                {section.body.map((paragraph, i) => (
                                    <p key={i} className="text-justify text-sm leading-relaxed text-foreground/70 hyphens-auto">
                                        {paragraph}
                                    </p>
                                ))}
                            </section>
                        ))}

                        <p className="border-t border-foreground/10 pt-6 text-justify font-bb-mono text-[0.7rem] leading-relaxed text-foreground/40">
                            {architecture.footer}
                        </p>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
