'use client'
import React from "react";
import { useTranslations } from 'next-intl';
import LocaleSwitcher from "./localeSwitcher";

type MobileHeaderProps = {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    dark: boolean;
};

export const MobileHeader = ({ menuOpen, setMenuOpen, dark }: MobileHeaderProps) => {
    const t = useTranslations('common.header');

    return (
        // fixed like the desktop bar: the home page scrolls the window, and the menu can only close from here
        <div className={"fixed top-0 right-0 flex flex-col items-end justify-end lg:hidden"}>
            <div className="flex items-center gap-6 p-6 pr-10">
                <LocaleSwitcher className={`transition-colors duration-300 ${dark ? "text-[#1E1E1E]" : "text-white"}`} />
                <button
                    className="cursor-pointer"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <img src={"/icons/menu.svg"} alt={t('navigation')} width={20} height={20} className={dark ? "" : "invert"} />
                </button>
            </div>
        </div>
    );
};
