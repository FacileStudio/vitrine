'use client'

import type { ReactNode } from "react";
import { useFormatter, useTranslations } from "next-intl";
import PageShell from "@/components/facile/pageShell";
import { LEGAL } from "@/lib/content/legal";

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
    const t = useTranslations("legal");
    const format = useFormatter();

    return (
        <PageShell lenis curtain={{ enter: "dark", leave: "dark" }} footer>
            <main className="w-full min-h-screen px-6 pt-40 pb-32 md:px-12 lg:px-20 text-background">
                <h1 className="max-w-[16ch]">{title}</h1>
                <p className="mt-6 text-background/50">
                    {t("updated", { date: format.dateTime(new Date(LEGAL.updated), { dateStyle: "long" }) })}
                </p>
                <div className="mt-20 flex max-w-[72ch] flex-col gap-16">{children}</div>
            </main>
        </PageShell>
    );
}
