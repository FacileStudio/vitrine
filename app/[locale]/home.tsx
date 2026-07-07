'use client'

import React from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { TransitionIn, TransitionOut } from "@/components/facile/pageTransition";
import { useTranslations } from 'next-intl';
import { useRouter } from "next/navigation";
import data from "./projects/projects.json";
import Menu from "@/components/facile/menu";
import Header from "@/components/facile/header";
import ShadowFilter from "@/components/facile/shadowFilter";
import Rideau from "@/components/facile/rideau";
import Hero from "./homeSections/hero";
import Manifesto from "./homeSections/manifesto";
import Suite from "./homeSections/suite";
import Avis from "./homeSections/avis";
import Projects from "./homeSections/projects";
import Friends from "./homeSections/friends";

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
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
    const t = useTranslations('home');
    const router = useRouter();

    const [charged, setCharged] = React.useState(false);
    const lenisRef = React.useRef<LenisRef>(null);

    // lock scrolling until loaded, and while the menu is open
    React.useEffect(() => {
        const lenis = lenisRef.current?.lenis;
        if (!lenis) return;
        if (charged && !menuOpen) lenis.start();
        else lenis.stop();
    }, [charged, menuOpen]);

    // const caseStudyT = useTranslations('portfolio.caseStudy');
    // const featuredProjects = featuredSlugs.map(slug => data.find(p => p.slug === slug)).filter((p): p is NonNullable<typeof p> => p !== undefined);



    // React.useEffect(() => TransitionIn(2), []);


    return (
        <div className="relative">
            <Rideau setCharged={setCharged} />

            <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, smoothWheel: true }} />

            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <ShadowFilter />

            <main className="min-h-screen w-screen">
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                <Hero charged={charged} />

                <Manifesto />

                <Friends />

                <Projects />
                
                <Suite />

                <Avis />
            </main>
            
            {/* <FeaturedProjects
                projects={featuredProjects}
                t={t}
                caseStudyT={caseStudyT}
                onNavigate={(href: string) => TransitionOut({ href, router })}
            />

            <Process t={t} /> */}

        </div>
    );
}
