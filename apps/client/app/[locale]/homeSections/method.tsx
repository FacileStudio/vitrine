'use client'

import { useRef } from "react";
import { useTranslations } from "next-intl";
import Link from "@/components/facile/transitionLink";
import TextReveal from "@/components/facile/textReveal";
import { useInView } from "@/hooks/use-in-view";
import { useLocalized } from "@/lib/i18n/localize";
import { useMethod } from "@/components/facile/contentProvider";
import Heading from "../method/components/heading";
import MethodRow from "../method/components/methodRow";

export default function Method() {
    const t = useTranslations("method");
    const steps = useLocalized(useMethod());
    const ref = useRef<HTMLElement>(null);
    const open = useInView(ref, 0.6);

    return (
        <section
            ref={ref}
            id="method"
            className="relative w-full bg-background text-foreground flex flex-col items-center gap-fc px-3 lg:px-6 pt-[10vh] pb-[30vh]"
        >
            <Heading eyebrow={t("home.eyebrow")} lines={t.raw("home.lines") as string[]} open={open} />

            {steps.map((e, i) => (
                <MethodRow key={e.slug} step={e} index={i} open={open} />
            ))}

            <div className="w-full lg:w-[80vw] 3xl:w-[70vw] pt-[6vh]">
                <TextReveal open={open} delay={0.7} cropClassName="w-fit">
                    <Link href="/method" className="button inline-block">
                        <p>{t("home.discover")}</p>
                    </Link>
                </TextReveal>
            </div>
        </section>
    );
}
