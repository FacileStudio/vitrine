'use client'

import data from "../projects.json"
import React from "react"
import { notFound, useParams, useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { TransitionIn, TransitionOut } from "@/components/facile/pageTransition"

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
    const params = useParams<{ slug: string }>()
    const router = useRouter()
    const t = useTranslations("portfolio.caseStudy")

    React.useEffect(() => TransitionIn(0), [])

    const project = data.find((p) => p.slug === params.slug)

    if (!project || project.tier === 3) {
        notFound()
    }

    const nextProject = findNextProject(project.slug)
    const isTier1 = project.tier === 1

    const handleNavigation = (href: string) => {
        TransitionOut({ href, router })
    }

    return (
        <article>
            <button onClick={() => handleNavigation("/projects")}>
                {t("backToProjects")}
            </button>

            <header>
                <h1>{project.name}</h1>
                <p>{t(`${project.slug}.tagline`)}</p>
                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.link.includes("github.com") ? t("viewSource") : t("viewLive")}
                    </a>
                )}
            </header>

            <div>
                <div>
                    <span>{t("techStack")}</span>
                    <div>
                        {project.techStack?.map((tech) => (
                            <span key={tech}>{tech}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <span>{t("duration")}</span>
                    <span>{project.weeks} {t("weeks")}</span>
                </div>
            </div>

            <div>
                {isTier1 ? (
                    <>
                        <section>
                            <h2>{t("challengeTitle")}</h2>
                            <p>{t(`${project.slug}.challenge`)}</p>
                        </section>

                        <section>
                            <h2>{t("approachTitle")}</h2>
                            <p>{t(`${project.slug}.approach`)}</p>
                        </section>

                        <section>
                            <h2>{t("resultTitle")}</h2>
                            <p>{t(`${project.slug}.result`)}</p>
                        </section>

                        <section>
                            <h2>{t("featuresTitle")}</h2>
                            <ul>
                                {(t.raw(`${project.slug}.features`) as string[]).map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                        </section>
                    </>
                ) : (
                    <section>
                        <h2>{t("scopeTitle")}</h2>
                        <p>{t(`${project.slug}.scope`)}</p>
                    </section>
                )}
            </div>

            <footer>
                <button onClick={() => handleNavigation(`/projects/${nextProject.slug}`)}>
                    {nextProject.name}
                </button>
            </footer>
        </article>
    )
}
