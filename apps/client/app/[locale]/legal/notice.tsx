'use client'

import { useTranslations } from "next-intl";
import Link from "@/components/facile/transitionLink";
import LegalPage from "@/components/facile/legal/legalPage";
import LegalSection from "@/components/facile/legal/legalSection";
import LegalFacts from "@/components/facile/legal/legalFacts";
import { CONTACT } from "@/components/facile/navLinks";
import { LEGAL } from "@/lib/content/legal";

export default function NoticePage() {
    const t = useTranslations("legal");

    return (
        <LegalPage title={t("notice.meta.title")}>
            <LegalSection title={t("notice.publisher.title")}>
                <p className="lead">{t("notice.publisher.text")}</p>
                <LegalFacts facts={[
                    [t("fields.company"), LEGAL.company],
                    [t("fields.legalForm"), LEGAL.legalForm],
                    [t("fields.siret"), LEGAL.siret],
                    [t("fields.address"), LEGAL.address],
                    [t("fields.email"), CONTACT.email],
                    [t("fields.phone"), CONTACT.phone],
                ]} />
            </LegalSection>

            <LegalSection title={t("notice.director.title")}>
                <LegalFacts facts={[[t("fields.name"), LEGAL.director]]} />
            </LegalSection>

            <LegalSection title={t("notice.host.title")}>
                <p className="lead">{t("notice.host.text")}</p>
                <LegalFacts facts={[
                    [t("fields.company"), LEGAL.host.name],
                    [t("fields.address"), LEGAL.host.address],
                    [t("fields.phone"), LEGAL.host.phone],
                ]} />
            </LegalSection>

            <LegalSection title={t("notice.ip.title")}>
                <p className="lead">{t("notice.ip.text", { company: LEGAL.company })}</p>
            </LegalSection>

            <LegalSection title={t("notice.data.title")}>
                <p className="lead">{t("notice.data.text")}</p>
                <Link href="/privacy" className="button button-dark w-fit">
                    <p>{t("notice.data.link")}</p>
                </Link>
            </LegalSection>
        </LegalPage>
    );
}
