"use client";

import { useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useScroll } from "@/hooks/use-scroll";
import TextReveal from "@/components/facile/textReveal";
import { Button } from "@/components/facile/button";
import { links, CONTACT } from "@/components/facile/menu";

export default function Footer() {
    const sectionRef = useRef<HTMLElement>(null);
    const [show, setShow] = useState(false);
    const t = useTranslations("common");
    const locale = useLocale();
    const withLocale = (href: string) => (href.startsWith("/") ? `/${locale}${href === "/" ? "" : href}` : href);

    const openContactModal = () => window.dispatchEvent(new Event("facile:open-contact-modal"));

    useScroll(() => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        setShow(rect.top < window.innerHeight * 0.85);
    });

    return (
        <section ref={sectionRef} id="contact" className="relative w-full bg-foreground text-white/80 py-24 px-12 lg:px-20">
            <TextReveal open={show}>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    <h2 className="max-w-[16ch] text-white">{t("footer.buildTogether")}</h2>
                    <div className="flex gap-4 shrink-0">
                        <Button text={t("footer.hireUs")} icon="mail" onClick={openContactModal} />
                        <a
                            href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                            className="border-2 border-white/20 rounded-full px-6 py-3 text-white transition-colors hover:bg-white hover:text-foreground"
                        >
                            {t("footer.callUs")}
                        </a>
                    </div>
                </div>
            </TextReveal>

            <TextReveal open={show} delay={0.1} cropClassName="mt-20">
                <div className="flex flex-wrap gap-x-16 gap-y-10">
                    {links.map((link) => (
                        <div key={link.href} className="flex w-32 flex-col items-start">
                            <a href={withLocale(link.href)} className="subtitle text-white/80 transition-colors hover:text-white">
                                {link.label}
                            </a>
                            {link.secondary && link.secondary.length > 0 && (
                                <ul className="mt-3 flex flex-col items-start gap-1">
                                    {link.secondary.map((sub) => (
                                        <li key={sub.label}>
                                            <a
                                                href={sub.external ? sub.href : withLocale(sub.href)}
                                                {...(sub.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                                className="text-white/45 transition-colors hover:text-white/90"
                                            >
                                                <p>{sub.label}</p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </TextReveal>

            <TextReveal open={show} delay={0.2} cropClassName="mt-20">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-t border-white/10 pt-8">
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                        <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">{CONTACT.email}</a>
                        <span className="text-white/40 select-none" aria-hidden="true">·</span>
                        <a href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-white">{CONTACT.phone}</a>
                        <div className="flex items-center gap-4">
                            {CONTACT.socials.map(({ label, href, Icon }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                    <Icon className="transition-all duration-200 hover:scale-115" size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <p className="text-white/40">{t("footer.madeBy")}</p>
                </div>
            </TextReveal>
        </section>
    );
}
