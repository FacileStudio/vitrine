'use client'

import { useState } from "react";
import Rideau from "@/components/facile/rideau";
import PageShell from "@/components/facile/pageShell";
import Hero from "./homeSections/hero";
import Manifesto from "./homeSections/manifesto";
import Suite from "./homeSections/suite";
import Shelf from "./homeSections/shelf";

export default function Home() {
    const [charged, setCharged] = useState(false);

    return (
        <PageShell
            className="relative"
            lenis
            locked={!charged}
            curtain={{ enter: "dark", leave: "dark", arrive: false }}
            footer
        >
            <Rideau setCharged={setCharged} />

            <main className="min-h-screen w-full">
                <Hero charged={charged} />
                <Manifesto />
                <Shelf />
                <Suite />
            </main>
        </PageShell>
    );
}
