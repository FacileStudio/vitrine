'use client'

import { useRef } from "react";
import { useTranslations } from "next-intl";
import Link from "@/components/facile/transitionLink";
import TextReveal from "@/components/facile/textReveal";
import { useInView } from "@/hooks/use-in-view";
import { useLocalized } from "@/lib/i18n/localize";
import { authoredExpertise } from "@/lib/content/expertise";
import Heading from "../expertise/components/heading";
import ExpertiseRow from "../expertise/components/expertiseRow";

export default function Expertise() {
    const t = useTranslations("expertise");
    const expertise = useLocalized(authoredExpertise);
    const ref = useRef<HTMLElement>(null);
    const open = useInView(ref, 0.6);

    return (
        <section
            ref={ref}
            id="expertise"
            className="relative w-full bg-background text-foreground flex flex-col items-center gap-fc px-3 lg:px-6 pt-[10vh] pb-[30vh]"
        >
            <Heading eyebrow={t("home.eyebrow")} lines={t.raw("home.lines") as string[]} open={open} />

            {expertise.map((e, i) => (
                <ExpertiseRow key={e.id} expertise={e} index={i} open={open} />
            ))}

            <div className="w-full lg:w-[80vw] 3xl:w-[70vw] pt-[6vh]">
                <TextReveal open={open} delay={0.7} cropClassName="w-fit">
                    <Link href="/expertise" className="button inline-block">
                        <p>{t("home.discover")}</p>
                    </Link>
                </TextReveal>
            </div>
        </section>
    );
}
