'use client'

import React from "react";
import { TransitionIn } from "@/components/facile/pageTransition";
import { useTranslations } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('about');
    const common = useTranslations('common');

    React.useEffect(() => {
        TransitionIn(0);
    }, []);

    const openContactModal = React.useCallback(() => {
        window.dispatchEvent(new Event("facile:open-contact-modal"));
    }, []);

    const services = [
        {
            key: 'design',
            title: t('services.design.title'),
            description: t('services.design.description'),
            items: [
                t('services.design.items.0'),
                t('services.design.items.1'),
                t('services.design.items.2'),
            ],
        },
        {
            key: 'uiux',
            title: t('services.uiux.title'),
            description: t('services.uiux.description'),
            items: [
                t('services.uiux.items.0'),
                t('services.uiux.items.1'),
                t('services.uiux.items.2'),
            ],
        },
        {
            key: 'webapp',
            title: t('services.webapp.title'),
            description: t('services.webapp.description'),
            items: [
                t('services.webapp.items.0'),
                t('services.webapp.items.1'),
                t('services.webapp.items.2'),
            ],
        },
    ];

    const team = [
        {
            key: 'yann',
            links: [
                { label: 'LinkedIn', href: 'https://linkedin.com/in/thevyann' },
                { label: 'GitHub', href: 'https://www.github.com/saravenpi' },
            ],
        },
        {
            key: 'noah',
            links: [
                { label: 'Dribbble', href: 'https://www.dribbble.com/webbygian' },
                { label: 'GitHub', href: 'https://www.github.com/G1anC' },
                { label: 'Instagram', href: 'https://www.instagram.com/webbygian' },
            ],
        },
        {
            key: 'mezz',
            links: [
                { label: 'GitHub', href: 'https://www.github.com/MezzLMC' },
            ],
        },
        {
            key: 'cami',
            links: [
                { label: 'Instagram', href: 'https://www.instagram.com/camg_raphic/' },
            ],
        },
    ];

    return (
        <main>
            <section>
                <h1>{t('title')}</h1>
                <p>{t('subtitle')}</p>
            </section>

            <section>
                <h2>{t('mission.title')}</h2>
                <p>{t('mission.text')}</p>
            </section>

            <section>
                <div>{t('services.title')}</div>
                <div>{t('services.subtitle')}</div>

                <div>
                    {services.map((service) => (
                        <div key={service.key}>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <div>
                                {service.items.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>{t('team.title')}</h2>
                <p>{t('team.subtitle')}</p>

                <div>
                    {team.map((member) => (
                        <div key={member.key}>
                            <h3>{t(`team.${member.key}.name`)}</h3>
                            <p>{t(`team.${member.key}.role`)}</p>
                            <p>{t(`team.${member.key}.description`)}</p>
                            <div>
                                {member.links.map((link) => (
                                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${t(`team.${member.key}.name`)} ${link.label}`}>
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>{common('contactModal.title')}</h2>
                <p>{common('contactModal.description')}</p>
                <button type="button" onClick={openContactModal}>
                    {common('header.contactUs')}
                </button>
            </section>
        </main>
    );
}
