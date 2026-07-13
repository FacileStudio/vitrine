'use client'

import data from "./projects.json"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { TransitionIn, TransitionOut } from "@/components/facile/pageTransition";
import { useTranslations } from 'next-intl';
import { usePortfolioNavigation } from "./navigation";
import { MobileNavigationButtons } from "./mobile-navigation-buttons";
import Header from "@/components/facile/header";
import Menu from "@/components/facile/menu";

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);
    const t = useTranslations('portfolio');
    const common = useTranslations('common.header');
    const router = useRouter();
    const { setSelectedWorkId, selectedWorkId, handleNext, handlePrevious } = usePortfolioNavigation();

    React.useEffect(() => TransitionIn(0), []);

    const ProjectButton = ({ item, id }: { item: typeof data[0], id: number }) => (
        <div
            aria-current={id === selectedWorkId}
            onClick={() => {
                if (item.tier < 3) {
                    TransitionOut({ href: `/projects/${item.slug}`, router });
                } else {
                    window.open(item.link, "_blank", "noopener,noreferrer");
                }
            }}
            className="group flex cursor-pointer items-center justify-between gap-8 border-b border-white/10 py-6 transition-colors hover:bg-white/[0.04] aria-[current=true]:bg-white/[0.06]"
        >
            <div className="flex items-baseline gap-5">
                <span className="w-8 text-sm tabular-nums text-white/25">{String(id + 1).padStart(2, "0")}</span>
                <span className="text-2xl font-medium transition-transform duration-300 group-hover:translate-x-2 3xl:text-3xl">
                    {t(`projects.${id}.name`)}
                </span>
            </div>
            <div className="hidden max-w-md text-right text-sm text-white/45 md:block">
                {t(`projects.${id}.description`)}
            </div>
            <span className="text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">→</span>
        </div>
    );

    return (
        <div className="relative min-h-screen w-full bg-[#111] text-white">
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <main className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-12 3xl:max-w-[90rem]">
                <h1 className="text-6xl font-medium leading-none 3xl:text-8xl">
                    <span className="text-[#24E27A]">{common('portfolio')[0]}</span>
                    <span>{common('portfolio').slice(1)}</span>
                </h1>
                <p className="mt-6 max-w-[50ch] text-lg text-white/60">{t('hero.subtitle')}</p>

                <div className="mt-16 flex items-center justify-between border-b border-white/20 pb-3 text-xs uppercase tracking-widest text-white/40">
                    <span>{t('headers.name')}</span>
                    <span>{t('headers.type')}</span>
                </div>

                <div>
                    {data.map((item, id) => <ProjectButton key={id} item={item} id={id} />)}
                </div>
            </main>

            <MobileNavigationButtons
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                selectedWorkId={selectedWorkId}
                setSelectedWorkId={setSelectedWorkId}
            />

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    )
}
