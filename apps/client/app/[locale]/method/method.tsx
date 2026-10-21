'use client'

import { useTranslations } from "next-intl";
import PageShell from "@/components/facile/pageShell";
import { useLocalized } from "@/lib/i18n/localize";
import { useProcess } from "@/components/facile/contentProvider";
import MethodScroll from "./components/methodScroll";

export default function MethodPage() {
    const t = useTranslations("process");
    const steps = useLocalized(useProcess());

    const slides = [
        { key: "intro", title: t("meta.title"), text: t("scroll") },
        ...steps.map((s) => ({
            key: s.slug,
            anchor: s.slug,
            title: s.title,
            text: s.text,
            team: s.team,
        })),
    ];

    return (
        <PageShell className="relative" lenis curtain={{ enter: "dark", leave: "dark" }} footer>
            <main className="w-full">
                <MethodScroll slides={slides} />
            </main>
        </PageShell>
    );
}
