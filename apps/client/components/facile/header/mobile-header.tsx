'use client'
import React from "react";
import { useTranslations } from 'next-intl';
import LocaleSwitcher from "./localeSwitcher";

type MobileHeaderProps = {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileHeader = ({ menuOpen, setMenuOpen }: MobileHeaderProps) => {
    const t = useTranslations('common.header');

    return (
        // fixed like the desktop bar: the home page scrolls the window, and the menu can only close from here
        <div className={"fixed top-0 right-0 flex flex-col items-end justify-end lg:hidden"}>
            <div className={"flex items-center gap-6 p-6 pr-10 bg-foreground rounded-bl-4xl"}>
                <LocaleSwitcher className="text-white" />
                <button
                    className="cursor-pointer"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <img src={"/icons/menu.svg"} alt={t('navigation')} width={20} height={20} className="invert" />
                </button>
            </div>
        </div>
    );
};
