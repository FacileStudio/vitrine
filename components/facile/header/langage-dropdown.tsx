import { languages } from "./languages";
import clsx from "clsx";
import type { Locale } from "@/lib/i18n/locales";

export const LanguageDropdown = ({locale, switchLocale, className} : {
    locale: string;
    switchLocale: (newLocale: Locale) => void;
    className?: string;
}) => {

    const currentLang = languages.find(lang => lang.code === locale) || languages[0];

    return (
        <div className={clsx("group relative", className)}>
            <div className="flex items-center bg-[#CAE6D8] overflow-hidden transition-all duration-500 ease-in-out w-[3.5rem] group-hover:w-[13.5rem]">
                {/* Current language trigger */}
                <div className="text-xl px-4 py-1 cursor-pointer flex items-center gap-2 whitespace-nowrap">
                    <span className="uppercase">{currentLang.code}</span>
                </div>
                
                {/* Expanded language list - hidden by default, visible on hover */}
                <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                    {languages
                        .filter(lang => lang.code !== locale)
                        .map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => switchLocale(lang.code)}
                                className="px-4 py-1 flex gap-2 items-center hover:bg-[#1E1E1E]/10 transition-colors cursor-pointer whitespace-nowrap border-l-2 border-[#1E1E1E]/20"
                            >
                                <span className="uppercase">{lang.code}</span>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};
