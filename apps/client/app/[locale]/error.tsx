'use client';

import { useTranslations } from "next-intl";
import Link from "@/components/facile/transitionLink";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
    const t = useTranslations("common");

    return (
        <main className="flex h-screen w-full flex-col items-center justify-end bg-foreground p-6 pb-[2vh] text-background">
            <div className="flex gap-24">
                <div className="flex flex-col gap-2">
                    <h1 className="subtitle">{t("error.title")}</h1>
                    <p className="mt-2 max-w-[32ch]">{t("error.message")}</p>
                </div>
                <div className="mt-4 flex h-fit gap-4">
                    <button type="button" onClick={reset} className="button button-dark uppercase">{t("error.retry")}</button>
                    <Link href="/" className="button button-dark uppercase">{t("notFound.goHome")}</Link>
                </div>
            </div>
        </main>
    );
}
