'use client'

import React, { useRef } from "react";
import gsap from "gsap";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomEase } from "gsap/CustomEase";
import { Button, TransitionButton } from "@/components/facile/button";
import { useTranslations } from 'next-intl';
import { useGSAP } from "@gsap/react";
import { DribbbleIcon } from "../ui/dribbble";
import { GithubIcon } from "../ui/github";
import { InstagramIcon } from "../ui/instagram";
import { useParams } from "next/navigation";
import { LanguageDropdown } from "./header/langage-dropdown";
import { useRouter, usePathname } from "next/navigation";

type ContactModalProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer = ({setOpen}: ContactModalProps) => {
    const t = useTranslations('common');
    const hireUsRef = useRef<HTMLDivElement>(null);
    const params = useParams();
    const locale = params.locale as string;

    const pathname = usePathname();
    const router = useRouter();

    useGSAP(() => {
        gsap.registerPlugin(CustomEase);
        gsap.registerPlugin(CustomBounce);
        CustomBounce.create("myBounce", { strength: 0.7, squash: 2 });
    }, []);

    const switchLocale = (newLocale: string) => {
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
    };


    const triggerBounce = () => {
        if (hireUsRef.current && !gsap.isTweening(hireUsRef.current)) {
            gsap.fromTo(
                hireUsRef.current,
                { x: 0 },
                {
                    x: -15,
                    duration: 2,
                    ease: "myBounce",
                }
            );
        }
    };

    const LeftCTAs = () => (
        <div className={"flex gap-6 items-center"}>
            <Button text={t('footer.hireUs')} icon={"mail"} onClick={() => setOpen(true)} onMouseEnter={triggerBounce} />
            <a
                onMouseEnter={triggerBounce}
                href={"tel:+33768884818"}
                className="
                    group
                    bg-[#CAE6D8] hover:bg-[#1E1E1E]
                    text-[#1E1E1E] hover:text-[#CAE6D8]
                    border-2 border-[#1E1E1E]/50 rounded-full
                    px-6 py-3
                    duration-150 transition-colors
                    flex gap-2 items-center
                    cursor-pointer
                "
            >
                <div 
                    className="w-6 h-6 bg-[#1E1E1E] group-hover:bg-[#CAE6D8] transition-colors duration-150"
                    style={{
                        WebkitMaskImage: `url(/icons/phone.svg)`,
                        maskImage: `url(/icons/phone.svg)`,
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat'
                    }}
                />
                <span>{t('footer.callUs')}</span>
            </a>
            <div ref={hireUsRef} className="flex gap-2 items-center hire-us">
                <img className={"lg:flex hidden xl:text-sm text-xs"} src={"/icons/arrow.svg"} alt="arrow" />
                <p className={"lg:flex hidden"}>{t('footer.buildTogether')}</p>
            </div>
        </div>
    )

    return (
        <div className={"items-center md:flex hidden justify-between w-full px-12 py-3"}>
            <LeftCTAs />

            <div className={"flex gap-8 items-center"}>
                {/* add simple langage switch with the 2 first letters of the langage */}
                <div className="flex gap-4">
                    <a href={"https://www.dribbble.com/webbygian"} target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                        <DribbbleIcon className={"hover:scale-130 duration-200 transition-all"} size={24}  />
                    </a>
                    <a href={"https://www.github.com/saravenpi"} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <GithubIcon className={"hover:scale-130 duration-200 transition-all"} size={24} />
                    </a>
                    <a href={"https://www.instagram.com/webbygian"} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <InstagramIcon className={"hover:scale-130 duration-200 transition-all"} size={24} />
                    </a>
                </div>
                <p className={"lg:flex hidden"}>{t('footer.madeBy')}</p>
                <LanguageDropdown className="" locale={locale} switchLocale={switchLocale}  />
            </div>
        </div>
    )
}

export default Footer;
