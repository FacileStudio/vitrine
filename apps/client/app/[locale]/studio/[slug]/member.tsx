'use client'

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "@/components/facile/transitionLink";
import Header from "@/components/facile/header";
import Menu from "@/components/facile/menu";
import PageCurtain from "@/components/facile/pageTransition";
import TextReveal from "@/components/facile/textReveal";
import { findMember, workedOn, type PanelTab } from "../components/memberData";
import { useNarrow } from "../components/useNarrow";
import { useLineReveal } from "../components/useLineReveal";
import MemberHead from "../components/memberHead";
import MemberIdentity from "../components/memberIdentity";
import MemberAside from "../components/memberAside";
import MemberSummary from "../components/memberSummary";
import MemberPanel from "../components/memberPanel";

export default function MemberPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [shown, setShown] = useState(false);
    const [panelOpen, setPanelOpen] = useState(false);
    const [tab, setTab] = useState<PanelTab>("details");
    const page = useRef<HTMLDivElement>(null);
    const params = useParams<{ slug: string }>();
    const locale = useLocale();
    const narrow = useNarrow();

    const member = findMember(params.slug);
    const worked = workedOn(member);

    useEffect(() => {
        const t = setTimeout(() => setShown(true), 200);
        return () => clearTimeout(t);
    }, []);

    useLineReveal(page, shown, [narrow]);

    return (
        <div ref={page} className="relative h-screen w-full overflow-hidden bg-foreground p-2 text-white lg:p-0">
            <PageCurtain enter="dark" leave="dark" />

            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <MemberHead member={member} narrow={narrow} />

            <div className="pointer-events-none absolute inset-0 z-40 mt-24 hidden justify-between gap-10 p-8 lg:flex lg:p-14">
                <MemberIdentity member={member} shown={shown} />

                <TextReveal open={shown} cropClassName="z-10 absolute top-12 left-1/2 -translate-x-1/2" delay={0.05}>
                    <Link
                        href={`/${locale}/studio`}
                        className="pointer-events-auto font-goga text-[clamp(0.65rem,1.7vh,1.3rem)] font-medium capitalize tracking-tight transition-colors hover:text-white"
                    >
                        ← Go back
                    </Link>
                </TextReveal>

                <MemberAside member={member} worked={worked} locale={locale} shown={shown} />
            </div>

            <MemberSummary
                member={member}
                locale={locale}
                shown={shown}
                onSeeMore={() => { setTab("details"); setPanelOpen(true); }}
            />

            <MemberPanel
                member={member}
                worked={worked}
                locale={locale}
                open={panelOpen}
                setOpen={setPanelOpen}
                tab={tab}
                setTab={setTab}
            />

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    );
}
