'use client'

import data from "./projects.json"
import React from "react"
import { useRouter } from "next/navigation"
import { TransitionIn, TransitionOut } from "@/components/facile/pageTransition";
import { useTranslations } from 'next-intl';
import { usePortfolioNavigation } from "./navigation";
import { MobileNavigationButtons } from "./mobile-navigation-buttons";

export default function Portfolio() {
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
        >
            <div>{t(`projects.${id}.name`)}</div>
            <div>{t(`projects.${id}.description`)}</div>
        </div>
    );

    return (
        <div>
            <h1>
                <span>{common('portfolio')[0]}</span>
                <span>{common('portfolio').slice(1)}</span>
            </h1>
            <p>{t('hero.subtitle')}</p>

            <div>
                <span>{t('headers.name')}</span>
                <span>{t('headers.type')}</span>
            </div>

            <div>
                {data.map((item, id) => <ProjectButton key={id} item={item} id={id} />)}
            </div>

            <MobileNavigationButtons
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                selectedWorkId={selectedWorkId}
                setSelectedWorkId={setSelectedWorkId}
            />
        </div>
    )
}
