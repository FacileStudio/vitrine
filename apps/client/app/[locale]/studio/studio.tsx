'use client'

import PageShell from "@/components/facile/pageShell";
import { CURTAIN_MS } from "@/components/facile/pageTransition";
import MemberTiles from "@/components/facile/memberTiles";
import { useAfter } from "@/hooks/use-after";

export default function StudioPage() {
    const resolved = useAfter(true, CURTAIN_MS);

    return (
        <PageShell
            className="relative h-screen w-full overflow-hidden bg-foreground"
            curtain={{ enter: "dark", leave: "dark" }}
        >
            <MemberTiles
                resolved={resolved}
                tileClassName="border-b border-r border-white/5 even:border-r-0 lg:border-b-0 lg:even:border-r lg:last:border-r-0"
            />
        </PageShell>
    );
}
