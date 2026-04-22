'use client'
import React from "react";
import { useTranslations } from 'next-intl';
import { languages } from "./languages";
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";

type MobileHeaderProps = {
    locale: string;
    switchLocale: (newLocale: string) => void;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileHeader = ({ locale, switchLocale, setOpen }: MobileHeaderProps) => {
    const t = useTranslations('common.header');
    const [openHeader, setOpenHeader] = React.useState(false);

    return (
        <Dialog.Root open={openHeader} onOpenChange={setOpenHeader}>
            <div className={"absolute top-0 right-0 flex flex-col items-end justify-end lg:hidden"}>
                <div className={"p-6 pr-10 bg-[#CAE6D8] rounded-bl-4xl"}>
                    <Dialog.Trigger asChild>
                        <button className="cursor-pointer">
                            <img src={"/icons/menu.svg"} alt={t('navigation')} width={20} height={20} />
                        </button>
                    </Dialog.Trigger>
                </div>
                <img src={"/icons/Exclude.svg"} alt={""} className={"mr-2"} width={28} height={28} />
            </div>

            <Dialog.Portal>
                <VisuallyHidden>
                    <Dialog.Title>{t('navigation')}</Dialog.Title>
                </VisuallyHidden>
                <VisuallyHidden>
                    <Dialog.Description>{t('navigationDescription')}</Dialog.Description>
                </VisuallyHidden>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-[#111111]/75 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                    <div className="bg-[#CAE6D8] p-16 px-24 rounded-4xl flex flex-col items-center gap-8 text-[#1e1e1e] relative max-w-md w-full mx-4">
                        <Dialog.Close className="absolute top-8 left-8 cursor-pointer text-[#1E1E1E]">
                            <img src={"/icons/arrow.svg"} alt="close" width={20} height={20} />
                        </Dialog.Close>

                        <Link aria-label="Get back to home" href="/" onClick={() => setOpenHeader(false)}>{t('home')}</Link>
                        <Link aria-label="Go to portfolio" href="/projects" onClick={() => setOpenHeader(false)}>{t('portfolio')}</Link>
                        <Link aria-label="Learn more about us" href="/studio" onClick={(e) => {e.stopPropagation();setOpenHeader(false)}}>{t('aboutUs')}</Link>
                        <button
                            onClick={() => {
                                setOpen(true);
                                setOpenHeader(false);
                            }}
                            className={"w-auto"}
                        >
                            {t('contactUs')}
                        </button>

                        <div className="flex gap-2 pt-4 border-t border-[#1E1E1E]/20">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        switchLocale(lang.code);
                                        setOpenHeader(false);
                                    }}
                                    className={`px-3 py-2 rounded-full transition-colors ${
                                        lang.code === locale
                                            ? 'bg-[#1E1E1E] text-[#CAE6D8]'
                                            : 'bg-[#1E1E1E]/10 hover:bg-[#1E1E1E]/20'
                                    }`}
                                >
                                    <span className="text-lg">{lang.flag}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
