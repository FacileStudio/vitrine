'use client'
import React from "react";
import { TransitionButton, LogoButton } from "@/components/facile/button"
import { useTranslations } from 'next-intl';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { languages } from "./languages";
import { LanguageDropdown } from "./langage-dropdown";
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";

type ContactModalProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({setOpen}: ContactModalProps) => {
    const t = useTranslations('common.header');
    const [openHeader, setOpenHeader] = React.useState(false);

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
            <div className={"absolute navbar-desktop  top-0 left-1/2 -translate-x-1/2 z-50 items-start hidden lg:flex"}>
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

                            <Link aria-label="Get back to home" href={`/${locale}`} onClick={() => setOpenHeader(false)}>{t('home')}</Link>
                            <Link aria-label="Go to portfolio" href={`/${locale}/portfolio`} onClick={() => setOpenHeader(false)}>{t('portfolio')}</Link>
                            <Link aria-label="Learn more about us" href={`/${locale}/us`} onClick={(e) => {e.stopPropagation();setOpenHeader(false)}}>{t('aboutUs')}</Link>
                            <button
                                onClick={() => {
                                    setOpen(true);
                                    setOpenHeader(false);
                                }}
                                className={"w-auto"}
                            >
                                {t('contactUs')}
                            </button>

                            {/* Language Selector Mobile */}
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
        </div>
    )
}

export default Header;