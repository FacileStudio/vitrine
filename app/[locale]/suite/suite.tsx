'use client'

import React from "react";
import PageCurtain from "@/components/facile/pageTransition";
import { useTranslations } from 'next-intl';
import data from "../projects/projects.json";

const productSlugs = ["capsule", "opus", "glouton", "marcel"];

export default function SuitePage() {
    const t = useTranslations('suite');
    const common = useTranslations('common');

    const openContactModal = React.useCallback(() => {
        window.dispatchEvent(new Event("facile:open-contact-modal"));
    }, []);

    const products = productSlugs
        .map((slug) => data.find((p) => p.slug === slug))
        .filter((p): p is NonNullable<typeof p> => p !== undefined);

    return (
        <main>
            <PageCurtain enter="light" leave="light" />

            <section>
                <h1>{t('title')}</h1>
                <p>{t('subtitle')}</p>
            </section>

            <section>
                <div>
                    {products.map((product) => (
                        <div key={product.slug}>
                            <h2>{product.name}</h2>
                            <p>{t(`products.${product.slug}.tagline`)}</p>
                            <p>{t(`products.${product.slug}.description`)}</p>
                            <div>
                                {product.techStack?.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>
                            {product.link && (
                                <a href={product.link} target="_blank" rel="noopener noreferrer" aria-label={`${product.name} ${t('visit')}`}>
                                    {t('visit')}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>{t('cta.headline')}</h2>
                <p>{t('cta.text')}</p>
                <button type="button" onClick={openContactModal}>
                    {common('header.contactUs')}
                </button>
            </section>
        </main>
    );
}
