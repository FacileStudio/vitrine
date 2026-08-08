'use client'

import data from "../projects.json"
import React, { useState } from "react"
import { notFound, useParams, useRouter } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { TransitionIn, TransitionOut } from "@/components/facile/pageTransition"
import Header from "@/components/facile/header"
import Menu from "@/components/facile/menu"

type Project = (typeof data)[number]

function getNavigableProjects(): Project[] {
    return data.filter((p) => p.tier === 1 || p.tier === 2)
}

function findNextProject(currentSlug: string): Project {
    const navigable = getNavigableProjects()
    const currentIndex = navigable.findIndex((p) => p.slug === currentSlug)
    return navigable[(currentIndex + 1) % navigable.length]
}

export default function CaseStudyPage() {
    const [menuOpen, setMenuOpen] = useState(false)
    const params = useParams<{ slug: string }>()
    const router = useRouter()
    const locale = useLocale()
    const t = useTranslations("portfolio.caseStudy")

    React.useEffect(() => TransitionIn(0), [])

    const project = data.find((p) => p.slug === params.slug)

    if (!project || project.tier === 3) {
        notFound()
    }

    const nextProject = findNextProject(project.slug)
    const isTier1 = project.tier === 1

    // routes live under /[locale]/ (no middleware), so navigation must carry the locale
    const handleNavigation = (path: string) => {
        TransitionOut({ href: `/${locale}${path}`, router })
    }

    return (
        <div className="relative min-h-screen w-full bg-[#111] text-white">
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <article className="mx-auto max-w-4xl px-6 pb-32 pt-32 md:px-10 3xl:max-w-6xl">
                <button
                    onClick={() => handleNavigation("/projects")}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                >
                    ← {t("backToProjects")}
                </button>

                <header className="mt-10 border-b border-white/10 pb-12">
                    <h1 className="text-6xl font-medium leading-none 3xl:text-8xl">{project.name}</h1>
                    <p className="mt-6 max-w-[55ch] text-lg text-white/60">{t(`${project.slug}.tagline`)}</p>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#24E27A] px-6 py-3 text-sm font-medium text-[#111] transition-transform hover:scale-105"
                        >
                            {project.link.includes("github.com") ? t("viewSource") : t("viewLive")}
                            <span aria-hidden="true">↗</span>
                        </a>
                    )}
                </header>

                <div className="mt-12 flex flex-wrap items-start justify-between gap-8">
                    <div>
                        <span className="text-xs uppercase tracking-widest text-white/40">{t("techStack")}</span>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.techStack?.map((tech) => (
                                <span key={tech} className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/70">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-xs uppercase tracking-widest text-white/40">{t("duration")}</span>
                        <div className="mt-3 text-lg">{project.weeks} {t("weeks")}</div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-14">
                    {isTier1 ? (
                        <>
                            <Section title={t("challengeTitle")}>{t(`${project.slug}.challenge`)}</Section>
                            <Section title={t("approachTitle")}>{t(`${project.slug}.approach`)}</Section>
                            <Section title={t("resultTitle")}>{t(`${project.slug}.result`)}</Section>

                            <section>
                                <h2 className="text-sm uppercase tracking-widest text-[#24E27A]">{t("featuresTitle")}</h2>
                                <ul className="mt-4 flex flex-col gap-2">
                                    {(t.raw(`${project.slug}.features`) as string[]).map((feature) => (
                                        <li key={feature} className="flex gap-3 text-white/70">
                                            <span className="text-[#24E27A]" aria-hidden="true">—</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </>
                    ) : (
                        <Section title={t("scopeTitle")}>{t(`${project.slug}.scope`)}</Section>
                    )}
                </div>

                <footer className="mt-24 border-t border-white/10 pt-10">
                    <span className="text-xs uppercase tracking-widest text-white/40">{t("nextProject")}</span>
                    <button
                        onClick={() => handleNavigation(`/projects/${nextProject.slug}`)}
                        className="group mt-3 flex w-full items-center justify-between text-left"
                    >
                        <span className="text-4xl font-medium transition-transform duration-300 group-hover:translate-x-2 3xl:text-5xl">
                            {nextProject.name}
                        </span>
                        <span className="text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">→</span>
                    </button>
                </footer>
            </article>

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section>
            <h2 className="text-sm uppercase tracking-widest text-[#24E27A]">{title}</h2>
            <p className="mt-4 max-w-[65ch] text-white/70">{children}</p>
        </section>
    )
}
