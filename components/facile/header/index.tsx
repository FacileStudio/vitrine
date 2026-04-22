'use client'
import React from "react";
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";

type ContactModalProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setOpen }: ContactModalProps) => {
    const locale = useLocale();
    const router = useRouter();

    const switchLocale = (newLocale: string) => {
        document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
        router.refresh();
    };

    return (
        <div className={"z-50 absolute w-full top-0"}>
            <DesktopHeader />
            <MobileHeader locale={locale} switchLocale={switchLocale} setOpen={setOpen} />
        </div>
    );
};

export default Header;
