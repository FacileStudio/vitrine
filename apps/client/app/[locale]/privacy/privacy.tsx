'use client'

import { useTranslations } from "next-intl";
import LegalPage from "@/components/facile/legal/legalPage";
import LegalSection from "@/components/facile/legal/legalSection";
import OptOut from "@/components/facile/legal/optOut";
import { CONTACT } from "@/components/facile/navLinks";
import { LEGAL } from "@/lib/content/legal";

const SECTIONS = ["audience", "contact", "none", "bases", "retention", "recipients"] as const;

export default function PrivacyPage() {
    const t = useTranslations("legal.privacy");
    const vars = { company: LEGAL.company, email: CONTACT.email };

    return (
        <LegalPage title={t("meta.title")}>
            <LegalSection title={t("controller.title")}>
                <p className="lead">{t("controller.text", vars)}</p>
            </LegalSection>

            {SECTIONS.map((key) => (
                <LegalSection key={key} title={t(`${key}.title`)}>
                    <p className="lead">{t(`${key}.text`)}</p>
                </LegalSection>
            ))}

            <LegalSection title={t("rights.title")}>
                <p className="lead">{t("rights.text", vars)}</p>
            </LegalSection>

            <LegalSection title={t("optOut.title")}>
                <p className="lead">{t("optOut.text")}</p>
                <OptOut />
            </LegalSection>
        </LegalPage>
    );
}
