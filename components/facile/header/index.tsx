'use client'
import React from "react";
import { useLocale } from 'next-intl';
import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";
import { useLocaleSwitcher } from "@/hooks/use-locale-switcher";

type ContactModalProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ sideBarOpen, setSidebarOpen }: { sideBarOpen: boolean; setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const locale = useLocale();
    const switchLocale = useLocaleSwitcher();

    return (
        <div className={"z-50 absolute w-full top-0"}>
            <DesktopHeader sideBarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen} />
            <MobileHeader locale={locale} switchLocale={switchLocale} sideBarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
    );
};

export default Header;
