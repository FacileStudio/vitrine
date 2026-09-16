'use client'

import { useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "@/components/facile/transitionLink";
import PageShell from "@/components/facile/pageShell";
import TextReveal from "@/components/facile/textReveal";
import { crew, findMember, workedOn } from "@/lib/content/studio";
import { useNarrow } from "@/hooks/use-narrow";
import { useAfter } from "@/hooks/use-after";
import { useLineReveal } from "@/hooks/use-line-reveal";
import MemberHead from "../components/memberHead";
import MemberIdentity from "../components/memberIdentity";
import MemberAside from "../components/memberAside";
import MemberSummary from "../components/memberSummary";
import MemberPanel, { type PanelTab } from "../components/memberPanel";

export default function MemberPage() {
    const shown = useAfter(true, 200);
    const [panelOpen, setPanelOpen] = useState(false);
    const [tab, setTab] = useState<PanelTab>("details");
    const page = useRef<HTMLDivElement>(null);
    const params = useParams<{ slug: string }>();
    const narrow = useNarrow();
    const locale = useLocale();
    const t = useTranslations("studio.member");

    const member = findMember(params.slug, locale) ?? crew(locale)[0];
    const worked = workedOn(member, locale);

    useLineReveal(page, shown, [narrow]);

    return (
        <PageShell
            ref={page}
            className="relative h-screen w-full overflow-hidden bg-foreground p-2 text-white lg:p-0"
            curtain={{ enter: "dark", leave: "dark" }}
        >
            <MemberHead member={member} narrow={narrow} />

            <div className="pointer-events-none absolute inset-0 z-40 mt-24 hidden justify-between gap-10 p-8 lg:flex lg:p-14">
                <MemberIdentity member={member} shown={shown} />

                <TextReveal open={shown} cropClassName="z-10 absolute top-12 left-1/2 -translate-x-1/2" delay={0.05}>
                    <Link
                        href="/studio"
                        className="pointer-events-auto font-goga text-[clamp(0.65rem,1.7vh,1.3rem)] font-medium capitalize tracking-tight transition-colors hover:text-white"
                    >
                        {t("back")}
                    </Link>
                </TextReveal>

                <MemberAside member={member} worked={worked} shown={shown} />
            </div>

            <MemberSummary
                member={member}
                shown={shown}
                onSeeMore={() => { setTab("details"); setPanelOpen(true); }}
            />

            <MemberPanel
                member={member}
                worked={worked}
                open={panelOpen}
                setOpen={setPanelOpen}
                tab={tab}
                setTab={setTab}
            />
        </PageShell>
    );
}
