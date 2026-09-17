'use client'

import PageShell from "@/components/facile/pageShell";
import Shelf from "./shelf";

export default function Portfolio() {
    return (
        <PageShell
            className="relative min-h-screen w-full bg-foreground text-white"
            lenis
            curtain={{ enter: "light", leave: "light" }}
            footer
        >
            <Shelf />
        </PageShell>
    );
}
