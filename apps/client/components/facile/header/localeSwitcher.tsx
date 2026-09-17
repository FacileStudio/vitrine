'use client'

import { useLocale, useTranslations } from "next-intl";
import { sweep } from "@/components/facile/pageTransition";
import { locales } from "@/lib/i18n/locales";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

export default function LocaleSwitcher({ className }: { className?: string }) {
    const locale = useLocale();
    const t = useTranslations("common");
    const router = useRouter();
    const pathname = usePathname();

    return (
        <nav
            aria-label={t("header.language")}
            className={cn("pointer-events-auto flex items-center gap-3 font-bb-mono text-[clamp(0.6rem,1.3vh,0.85rem)] font-medium uppercase tracking-tight", className)}
        >
            {locales.map((l) => {
                const current = l === locale;

                return (
                    <button
                        key={l}
                        type="button"
                        lang={l}
                        title={t(`locales.${l}`)}
                        aria-label={t(`locales.${l}`)}
                        aria-current={current ? "true" : undefined}
                        disabled={current}
                        onClick={() => sweep(() => router.replace(pathname, { locale: l }))}
                        className={cn("transition-opacity uppercase duration-200", current ? "opacity-100" : "cursor-pointer opacity-40 hover:opacity-100")}
                    >
                        {l}
                    </button>
                );
            })}
        </nav>
    );
}
