'use client'

import { useRef } from "react";
import { useTranslations } from "next-intl";
import PageShell from "@/components/facile/pageShell";
import Shelf from "@/components/facile/shelf/shelf";
import TextReveal from "@/components/facile/textReveal";
import ArrowLink from "@/components/facile/arrowLink";
import Emphasis from "@/components/facile/emphasis";
import { ARRIVE } from "@/components/facile/pageTransition";
import { useInView } from "@/hooks/use-in-view";
import { useLocalized } from "@/lib/i18n/localize";
import { useProcess } from "@/components/facile/processProvider";
import Heading from "./components/heading";
import ProcessScroll from "./components/processScroll";

export default function ProcessPage() {
    const t = useTranslations("process");
    const steps = useLocalized(useProcess());
    const endRef = useRef<HTMLDivElement>(null);
    const endOpen = useInView(endRef);

    return (
        <PageShell
            className="relative min-h-screen w-full bg-foreground text-background"
            lenis
            curtain={{ enter: "dark", leave: "dark" }}
            footer
        >
            {/* the swap stays on main so the footer keeps the site colours */}
            <main className="[--background:#111111] [--foreground:#E4EEE8]">
                <Shelf
                    id="process-shelf"
                    tone="light"
                    stickyBackdrop
                    backdropPlacement="top"
                    columnClassName="w-full h-full flex flex-col gap-fc justify-start items-center px-3 lg:px-6"
                >
                    {/* the list and team read the active step, so an empty process renders nothing */}
                    {steps.length > 0 && <ProcessScroll steps={steps} />}
                </Shelf>
            </main>
        </PageShell>
    );
}
