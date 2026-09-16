import { useTranslations } from "next-intl";

export default function Avis() {
    const t = useTranslations("home.avis");

    return (
        <section id="testimonials" className="w-full min-h-screen">
            <h2>{t("title")}</h2>
        </section>
    );
}
