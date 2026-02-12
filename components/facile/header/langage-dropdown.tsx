import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { languages } from "./languages";
import clsx from "clsx";

export const LanguageDropdown = ({locale, switchLocale} : {
    locale: string;
    switchLocale: (newLocale: string) => void;
}) => {

    const currentLang = languages.find(lang => lang.code === locale) || languages[0];

    return (
        <div className="relative">
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <button
                        className="border-2 border-transparent hover:border-[#1E1E1E]/50 rounded-full lg:px-3 lg:py-2 duration-150 transition-colors flex gap-2 items-center cursor-pointer"
                    >
                        <span>{currentLang.flag}</span>
                    </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                    sideOffset={8}
                    className="bg-[#CAE6D8] rounded-2xl border-2 border-[#1E1E1E]/20 overflow-hidden min-w-30 shadow-lg"
                >
                    {languages.map((lang) => (
                        <DropdownMenu.Item
                            key={lang.code}
                            onSelect={() => switchLocale(lang.code)}
                            className={clsx(
                                "w-full px-4 py-2 flex gap-2 items-center hover:bg-[#1E1E1E]/10 transition-colors cursor-pointer",
                                lang.code === locale && "bg-[#1E1E1E]/10 font-semibold"
                            )}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                        </DropdownMenu.Item>
                    ))}
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    )
};
