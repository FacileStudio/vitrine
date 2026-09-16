'use client'

import { useTranslations } from "next-intl";
import PageShell from "@/components/facile/pageShell";
import Shelf from "./components/shelf";

export default function SuitePage() {
    const t = useTranslations("suite");

    return (
        <PageShell
            className="relative min-h-screen w-full bg-background text-foreground"
            lenis
            curtain={{ enter: "light", leave: "light" }}
        >
            <Shelf eyebrow={t("title")} lines={[t("subtitle")]} />
        </PageShell>
    );
}
