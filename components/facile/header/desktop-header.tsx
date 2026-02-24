'use client'
import React from "react";
import { TransitionButton, LogoButton } from "@/components/facile/button"
import { useTranslations } from 'next-intl';

type DesktopHeaderProps = {
    locale: string;
};

export const DesktopHeader = ({ locale }: DesktopHeaderProps) => {
    const t = useTranslations('common.header');

    return (
        <div className={"absolute navbar-desktop top-0 left-1/2 -translate-x-1/2 z-50 items-start hidden lg:flex"}>
            <img src={"/icons/Exclude.svg"} alt={""} className={"lg:mt-4 md:mt-2 mt-2 mr-[-1px]"} width={32} height={32} />

            <div className={"lg:px-8 px-6 lg:py-6 py-3 bg-[#CAE6D8] flex items-center lg:space-x-6 space-x-4 shrink-0 rounded-b-4xl gap-6"}>
                <LogoButton className="mr-12" />
                {/* <LanguageDropdown locale={locale} switchLocale={switchLocale} /> */}
                <TransitionButton text={t('portfolio')} href={`/${locale}/projects`} />
                <TransitionButton text={t('aboutUs')} href={`/${locale}/studio`} />
                <TransitionButton text={t('packages')} href={`/${locale}/offres`} />
            </div>

            <img src={"/icons/Exclude.svg"} alt={""} className={"scale-x-[-1] ml-[-1px] lg:mt-4 md:mt-2 mt-2"} width={32} height={32} />
        </div>
    );
};
