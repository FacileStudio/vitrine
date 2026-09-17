'use client'

import { useTranslations } from "next-intl";
import TextReveal from "@/components/facile/textReveal";

export default function TechStack({
    stack,
    className,
    labelClassName,
    labelCropClassName,
    rowClassName,
    logoClassName,
    split = false,
}: {
    stack?: string[];
    className?: string;
    labelClassName?: string;
    labelCropClassName?: string;
    rowClassName?: string;
    logoClassName?: string;
    split?: boolean;
}) {
    const t = useTranslations("story");

    if (!stack?.length) return null;

    const logo = (name: string) => <img key={name} src={`/images/logo/${name}.png`} alt={name} className={logoClassName} />;

    return (
        <div className={className}>
            <TextReveal as="p" cropClassName={labelCropClassName} className={labelClassName}>
                {t("createdWith")}
            </TextReveal>
            {split ? (
                <span className={rowClassName}>
                    {stack.map((name) => (
                        <TextReveal key={name}>{logo(name)}</TextReveal>
                    ))}
                </span>
            ) : (
                <TextReveal className={rowClassName}>{stack.map(logo)}</TextReveal>
            )}
        </div>
    );
}
