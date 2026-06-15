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
        <div className="w-full overflow-hidden h-full relative border rounded-4xl">
            <div
                style={{
                    backgroundImage: `url(/images/projects/${project.name}.webp)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                }}
                className="absolute top-0 left-0 w-full h-full"
            />

            <div
                style={{
                    backgroundImage: 'url("/images/bg-blur.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                }}
                className="absolute top-1/2 left-1/2 -translate-1/2 z-0 w-full h-auto min-h-full object-cover"
            />

            <div className="absolute inset-0 z-40 overflow-y-auto">
                <div className="mx-auto flex min-h-full w-full max-w-[1920px] flex-col px-8 pb-24 pt-32 text-[#CAE6D8] md:px-20 lg:px-32 lg:pt-36">
                    <button
                        onClick={() => handleNavigation("/projects")}
                        className="group mb-12 flex w-fit items-center gap-2 text-sm text-[#CAE6D8]/72 transition-colors duration-300 hover:text-[#CAE6D8]"
                    >
                        <span
                            className="h-3 w-3 bg-[#CAE6D8]/72 transition-colors duration-300 group-hover:bg-[#CAE6D8]"
                            style={{
                                WebkitMaskImage: "url(/icons/arrow.svg)",
                                maskImage: "url(/icons/arrow.svg)",
                                WebkitMaskSize: "contain",
                                maskSize: "contain",
                                WebkitMaskRepeat: "no-repeat",
                                maskRepeat: "no-repeat",
                            }}
                        />
                        {t("backToProjects")}
                    </button>

                    <div className="mb-12 lg:mb-16">
                        <h1 className="font-semibold text-[clamp(3rem,9vw,7rem)] leading-[0.9] tracking-[-0.06em]">
                            {project.name}
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#CAE6D8]/72 md:text-xl">
                            {t(`${project.slug}.tagline`)}
                        </p>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mt-6 inline-flex items-center gap-2 rounded-full border border-[#CAE6D8]/25 bg-[#CAE6D8]/10 px-6 py-3 text-sm text-[#CAE6D8] transition-all duration-300 hover:bg-[#CAE6D8] hover:text-[#1E1E1E]"
                            >
                                {project.link.includes("github.com")
                                    ? t("viewSource")
                                    : t("viewLive")}
                                <span
                                    className="h-3.5 w-3.5 rotate-180 bg-[#CAE6D8] transition-colors duration-300 group-hover:bg-[#1E1E1E]"
                                    style={{
                                        WebkitMaskImage: "url(/icons/arrow.svg)",
                                        maskImage: "url(/icons/arrow.svg)",
                                        WebkitMaskSize: "contain",
                                        maskSize: "contain",
                                        WebkitMaskRepeat: "no-repeat",
                                        maskRepeat: "no-repeat",
                                    }}
                                />
                            </a>
                        )}
                    </div>

                    <div className="mb-12 flex flex-wrap items-center gap-6 border-y border-[#CAE6D8]/10 py-6">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[11px] tracking-[0.28em] text-[#CAE6D8]/48 uppercase">
                                {t("techStack")}
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack?.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-[#CAE6D8]/20 px-3 py-1 text-xs text-[#CAE6D8]/92"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="h-4 w-px bg-[#CAE6D8]/20" />
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] tracking-[0.28em] text-[#CAE6D8]/48 uppercase">
                                {t("duration")}
                            </span>
                            <span className="text-sm text-[#CAE6D8]/92">
                                {project.weeks} {t("weeks")}
                            </span>
                        </div>
                    </div>

                    <div className="rounded-[28px] bg-[#0D1310]/55 p-6 text-[#CAE6D8] shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-md md:p-8 lg:p-10">
                        {isTier1 ? (
                            <div className="space-y-10">
                                <section>
                                    <h2 className="mb-4 text-[11px] tracking-[0.28em] text-[#CAE6D8]/48 uppercase">
                                        {t("challengeTitle")}
                                    </h2>
                                    <p className="max-w-3xl text-base leading-relaxed text-[#CAE6D8]/92 md:text-lg">
                                        {t(`${project.slug}.challenge`)}
                                    </p>
                                </section>

                                <div className="border-t border-[#CAE6D8]/10" />

                                <section>
                                    <h2 className="mb-4 text-[11px] tracking-[0.28em] text-[#CAE6D8]/48 uppercase">
                                        {t("approachTitle")}
                                    </h2>
                                    <p className="max-w-3xl text-base leading-relaxed text-[#CAE6D8]/92 md:text-lg">
                                        {t(`${project.slug}.approach`)}
                                    </p>
                                </section>

                                <div className="border-t border-[#CAE6D8]/10" />

                                <section>
                                    <h2 className="mb-4 text-[11px] tracking-[0.28em] text-[#CAE6D8]/48 uppercase">
                                        {t("resultTitle")}
                                    </h2>
                                    <p className="max-w-3xl text-base leading-relaxed text-[#CAE6D8]/92 md:text-lg">
                                        {t(`${project.slug}.result`)}
                                    </p>
                                </section>

                                <div className="border-t border-[#CAE6D8]/10" />

                                <section>
                                    <h2 className="mb-4 text-[11px] tracking-[0.28em] text-[#CAE6D8]/48 uppercase">
                                        {t("featuresTitle")}
                                    </h2>
                                    <ul className="space-y-3">
                                        {(t.raw(`${project.slug}.features`) as string[]).map(
                                            (feature) => (
                                                <li
                                                    key={feature}
                                                    className="flex items-start gap-3 text-base text-[#CAE6D8]/92 md:text-lg"
                                                >
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#CAE6D8]" />
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </section>
                            </div>
                        ) : (
                            <section>
                                <h2 className="mb-4 text-[11px] tracking-[0.28em] text-[#CAE6D8]/48 uppercase">
                                    {t("scopeTitle")}
                                </h2>
                                <p className="max-w-3xl text-base leading-relaxed text-[#CAE6D8]/92 md:text-lg">
                                    {t(`${project.slug}.scope`)}
                                </p>
                            </section>
                        )}
                    </div>

                    <div className="mt-auto border-t border-[#CAE6D8]/10 pt-10">
                        <button
                            onClick={() =>
                                handleNavigation(`/projects/${nextProject.slug}`)
                            }
                            className="group flex w-full items-center justify-end"
                        >
                            <span className="flex items-center gap-3 text-2xl font-semibold text-[#CAE6D8] transition-colors duration-300 group-hover:text-[#CAE6D8]/72 md:text-3xl">
                                {nextProject.name}
                                <span
                                    className="h-4 w-4 rotate-180 bg-[#CAE6D8] transition-colors duration-300 group-hover:bg-[#CAE6D8]/72"
                                    style={{
                                        WebkitMaskImage: "url(/icons/arrow.svg)",
                                        maskImage: "url(/icons/arrow.svg)",
                                        WebkitMaskSize: "contain",
                                        maskSize: "contain",
                                        WebkitMaskRepeat: "no-repeat",
                                        maskRepeat: "no-repeat",
                                    }}
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
