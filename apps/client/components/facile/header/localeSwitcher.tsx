'use client'

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { sweep } from "@/components/facile/pageTransition";
import { locales, type Locale } from "@/lib/i18n/locales";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import Flag from "./flag";
import { twMerge } from "tailwind-merge";

export default function LocaleSwitcher({ className, dark = false }: { className?: string; dark?: boolean }) {
    const locale = useLocale() as Locale;
    const t = useTranslations("common");
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const root = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open)
            return;

        const close = (e: PointerEvent) => {
            if (!root.current?.contains(e.target as Node))
                setOpen(false);
        };
        const escape = (e: KeyboardEvent) => {
            if (e.key === "Escape")
                setOpen(false);
        };

        document.addEventListener("pointerdown", close);
        document.addEventListener("keydown", escape);

        return () => {
            document.removeEventListener("pointerdown", close);
            document.removeEventListener("keydown", escape);
        };
    }, [open]);

    const pick = (l: Locale) => {
        setOpen(false);

        if (l !== locale)
            sweep(() => router.replace(pathname, { locale: l }));
    };

    return (
        <div
            ref={root}
            className={twMerge("pointer-events-auto relative font-bb-mono text-[clamp(0.6rem,1.3vh,0.85rem)] font-medium uppercase tracking-tight", className)}
        >
            <button
                type="button"
                aria-label={t("header.language")}
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
                className={twMerge("button flex cursor-pointer items-center gap-2 uppercase", !dark && "button-dark")}
            >
                <Flag locale={locale} />
                {locale}
                <svg
                    viewBox="0 0 8 5"
                    aria-hidden="true"
                    className={twMerge("h-[5px] w-2 transition-transform duration-300 ease-out motion-reduce:transition-none", open && "rotate-180")}
                >
                    <path d="M1 1l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <ul
                role="listbox"
                aria-label={t("header.language")}
                className={twMerge(
                    "absolute right-0 top-full mt-1 flex min-w-full flex-col rounded-fc glass origin-top-right",
                    "transition-[clip-path,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                    open ? "opacity-100 [clip-path:inset(0_0_0_0_round_var(--fc-radius))]" : "pointer-events-none opacity-0 [clip-path:inset(0_0_100%_0_round_var(--fc-radius))]",
                )}
            >
                {locales.map((l, i) => {
                    const current = l === locale;
                    if (current)
                        return
                    return (
                        <li key={l} role="none">
                            <button
                                type="button"
                                role="option"
                                lang={l}
                                aria-selected={current}
                                tabIndex={open ? 0 : -1}
                                onClick={() => pick(l)}
                                style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
                                className={twMerge(
                                    "flex w-full cursor-pointer items-center gap-2.5 whitespace-nowrap px-4 py-3 text-left normal-case",
                                    "transition-[opacity,translate,background-color] duration-300 ease-out motion-reduce:transition-none",
                                    open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
                                    current ? "bg-current/10" : "hover:bg-current/10",
                                )}
                            >
                                <Flag locale={l} />
                                <span className={twMerge("uppercase opacity-60")}>{l}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
