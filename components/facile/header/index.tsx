'use client'
import React from "react";
import { useParams, usePathname, useRouter } from 'next/navigation';
import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";

type ContactModalProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setOpen }: ContactModalProps) => {
    const params = useParams();
    const pathname = usePathname();
    const router = useRouter();
    const locale = params.locale as string;

    const switchLocale = (newLocale: string) => {
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
    };

    return (
        <div className={"z-50 absolute w-full top-0"}>
            <DesktopHeader locale={locale} />
            <MobileHeader locale={locale} switchLocale={switchLocale} setOpen={setOpen} />
        </div>
    );
};

export default Header;
