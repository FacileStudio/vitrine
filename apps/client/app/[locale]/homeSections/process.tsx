'use client'

import { useRef } from "react";
import { useTranslations } from "next-intl";
import Link from "@/components/facile/transitionLink";
import TextReveal from "@/components/facile/textReveal";
import { useInView } from "@/hooks/use-in-view";
import { useLocalized } from "@/lib/i18n/localize";
import { useProcess } from "@/components/facile/processProvider";
import Heading from "../process/components/heading";
import ProcessRow from "../process/components/processRow";

export default function Process() {
    const t = useTranslations("process");
    const steps = useLocalized(useProcess());
    const ref = useRef<HTMLElement>(null);
    const open = useInView(ref, 0.6);

    return (
        <section
            ref={ref}
            id="process"
            className="relative w-full bg-background text-foreground flex flex-col items-center gap-fc px-3 lg:px-6 pt-[10vh] pb-[30vh]"
        >
            <Heading eyebrow={t("home.eyebrow")} lines={t.raw("home.lines") as string[]} open={open} />

            {steps.map((e, i) => (
                <ProcessRow key={e.slug} step={e} index={i} open={open} />
            ))}

            <div className="w-full lg:w-[80vw] 3xl:w-[70vw] pt-[6vh]">
                <TextReveal open={open} delay={0.7} cropClassName="w-fit">
                    <Link href="/process" className="button inline-block">
                        <p>{t("home.discover")}</p>
                    </Link>
                </TextReveal>
            </div>
        </section>
    );
}
