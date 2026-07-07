'use client'
import React from "react";
import { useLocale } from 'next-intl';
import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";
import { useLocaleSwitcher } from "@/hooks/use-locale-switcher";

type ContactModalProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const locale = useLocale();
    const switchLocale = useLocaleSwitcher();

    return (
        <div className={"z-[110] absolute w-full top-0"}>
            <DesktopHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileHeader locale={locale} switchLocale={switchLocale} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    );
};

export default Header;
