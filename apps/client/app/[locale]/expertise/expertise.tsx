'use client'

import { useRef } from "react";
import { useTranslations } from "next-intl";
import PageShell from "@/components/facile/pageShell";
import Shelf from "@/components/facile/shelf/shelf";
import TextReveal from "@/components/facile/textReveal";
import ArrowLink from "@/components/facile/arrowLink";
import Emphasis from "@/components/facile/emphasis";
import { ARRIVE } from "@/components/facile/pageTransition";
import { useInView } from "@/hooks/use-in-view";
import { useLocalized } from "@/lib/i18n/localize";
import { authoredExpertise } from "@/lib/content/expertise";
import Heading from "./components/heading";
import ExpertiseBlock from "./components/expertiseBlock";

export default function ExpertisePage() {
    const t = useTranslations("expertise");
    const expertise = useLocalized(authoredExpertise);
    const endRef = useRef<HTMLDivElement>(null);
    const endOpen = useInView(endRef);

    return (
        <PageShell
            className="relative min-h-screen w-full bg-background text-foreground"
            lenis
            curtain={{ enter: "light", leave: "light" }}
            footer
        >
            <main>
                <Shelf
                    id="expertise"
                    tone="light"
                    stickyBackdrop
                    columnClassName="w-full h-full pt-[20vh] pb-[20vh] flex flex-col gap-fc justify-start items-center px-3 lg:px-6"
                >
                    <Heading
                        as="h1"
                        open
                        delay={ARRIVE / 1000}
                        eyebrow={t("eyebrow")}
                        lines={t.raw("title") as string[]}
                        count={expertise.length}
                        countLabel={t("count", { count: expertise.length })}
                    />

                    {expertise.map((e, i) => (
                        <ExpertiseBlock key={e.id} expertise={e} index={i} />
                    ))}

                    <div ref={endRef} className="w-full lg:w-[80vw] 3xl:w-[70vw] flex flex-col gap-[2.5vh] pt-[16vh]">
                        <TextReveal as="p" open={endOpen} className="subtext text-current">
                            {t("end.eyebrow")}
                        </TextReveal>

                        <TextReveal as="h2" open={endOpen} delay={0.08}>
                            <Emphasis text={t("end.title")} />
                        </TextReveal>

                        <TextReveal open={endOpen} delay={0.16} cropClassName="w-fit">
                            <ArrowLink href="/projects" className="button group flex w-fit items-center gap-[1vh]">
                                <p>{t("end.link")}</p>
                            </ArrowLink>
                        </TextReveal>
                    </div>
                </Shelf>
            </main>
        </PageShell>
    );
}
