'use client'

import React from "react";
import { TransitionIn, TransitionOut } from "@/components/facile/pageTransition";
import { useTranslations } from 'next-intl';
import { useRouter } from "next/navigation";
import data from "./projects/projects.json";
import SideBar from "@/components/facile/sidebar";
import Header from "@/components/facile/header";
import ShadowFilter from "@/components/facile/shadowFilter";

const featuredSlugs = ["capsule", "opus", "glouton", "marcel"];

type TranslationFn = ReturnType<typeof useTranslations>;

const ProjectCard = ({ project, tagline, onNavigate }: {
    project: (typeof data)[number];
    tagline: string;
    onNavigate: (href: string) => void;
}) => (
    <div onClick={() => onNavigate(`/projects/${project.slug}`)}>
        <h3>{project.name}</h3>
        <p>{tagline}</p>
        <div>
            {project.techStack?.map(tech => (
                <span key={tech}>{tech}</span>
            ))}
        </div>
    </div>
);

const FeaturedProjects = ({ projects, t, caseStudyT, onNavigate }: {
    projects: (typeof data)[number][];
    t: TranslationFn;
    caseStudyT: TranslationFn;
    onNavigate: (href: string) => void;
}) => (
    <section>
        <div>{t('featured.title')}</div>

        <div>
            {projects.map((project) => (
                <ProjectCard
                    key={project.slug}
                    project={project}
                    tagline={caseStudyT(`${project.slug}.tagline`)}
                    onNavigate={onNavigate}
                />
            ))}
        </div>

        <button onClick={() => onNavigate('/projects')}>{t('featured.viewAll')}</button>
    </section>
);

const Process = ({ t }: { t: TranslationFn }) => {
    const steps = t.raw('process.steps') as { name: string; text: string }[];

    return (
        <section>
            <div>{t('process.title')}</div>

            <div>
                {steps.map((step, i) => (
                    <div key={step.name}>
                        <div>0{i + 1}</div>
                        <h3>{step.name}</h3>
                        <p>{step.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default function Home() {
    const t = useTranslations('home');
    const caseStudyT = useTranslations('portfolio.caseStudy');
    const router = useRouter();

    const [sideBarOpen, setSidebarOpen] = React.useState<boolean>(false);

    const featuredProjects = featuredSlugs
        .map(slug => data.find(p => p.slug === slug))
        .filter((p): p is NonNullable<typeof p> => p !== undefined);

    React.useEffect(() => TransitionIn(2), []);



    // sideBar opening effect and slide of main content
    React.useEffect(() => {
        if (sideBarOpen) {}
        else {}
    }, [sideBarOpen]);

    return (
        <div>
            <SideBar sideBarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen} />

            <ShadowFilter />

            <main className="min-h-screen w-screen space-y-20">
                <Header sideBarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen} />

                <section className="h-screen w-screen relative">
                    <div className="absolute top-1/2 w-full -translate-y-1/2 text-center flex items-center px-15">
                        <div>
                            <><span className="italic text-lg">[fasil]</span><span className="opacity-50 font-medium text-xs ml-4">Qui ne représente aucune difficulté.</span></>
                        </div>
                    </div>

                    <div className="absolute bottom-0 flex items-end justify-between w-full px-15 pb-12">
                        <img src="/Facile.svg" alt="Facile Logo" className="h-1/4 aspect-auto" />
                        <span className="font-medium text-4xl">Studio</span>
                    </div>
                </section>
            </main>
            
            <FeaturedProjects
                projects={featuredProjects}
                t={t}
                caseStudyT={caseStudyT}
                onNavigate={(href: string) => TransitionOut({ href, router })}
            />

            <Process t={t} />

        </div>
    );
}
