'use client'

import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { TransitionIn, TransitionOut } from "@/components/facile/pageTransition";
import { useTranslations } from 'next-intl';
import { useRouter } from "next/navigation";
import data from "./projects/projects.json";

const featuredSlugs = ["capsule", "opus", "glouton", "marcel"];

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setIsVisible(true);
                observer.unobserve(entry.target);
            },
            { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transitionProperty: "opacity, transform",
                transitionDuration: "700ms",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: `${delay}ms`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </div>
    );
};

type TranslationFn = ReturnType<typeof useTranslations>;

const ArrowIcon = ({ className }: { className: string }) => (
    <span
        className={className}
        style={{
            WebkitMaskImage: "url(/icons/arrow.svg)",
            maskImage: "url(/icons/arrow.svg)",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
        }}
    />
);

const ProjectCard = ({ project, index, tagline, onNavigate }: {
    project: (typeof data)[number];
    index: number;
    tagline: string;
    onNavigate: (href: string) => void;
}) => (
    <Reveal delay={60 + index * 80}>
        <div
            onClick={() => onNavigate(`/projects/${project.slug}`)}
            className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-[#CAE6D8]/10 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#CAE6D8]/20 md:p-10"
        >
            <div
                className="absolute inset-0 bg-cover bg-center opacity-15 transition-opacity duration-500 group-hover:opacity-25"
                style={{ backgroundImage: `url(/images/projects/${project.name}.webp)` }}
            />
            <div className="relative z-10 flex min-h-[180px] flex-col gap-4 md:min-h-[200px]">
                <h3 className="text-2xl font-semibold text-[#CAE6D8] md:text-3xl">
                    {project.name}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-[#CAE6D8]/60">
                    {tagline}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                    {project.techStack?.map(tech => (
                        <span
                            key={tech}
                            className="rounded-full border border-[#CAE6D8]/15 px-3 py-1 text-xs text-[#CAE6D8]/50"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </Reveal>
);

const FeaturedProjects = ({ projects, t, caseStudyT, onNavigate }: {
    projects: (typeof data)[number][];
    t: TranslationFn;
    caseStudyT: TranslationFn;
    onNavigate: (href: string) => void;
}) => (
    <div className="relative z-10 mx-auto max-w-[1920px] px-8 py-20 text-[#CAE6D8] md:px-20 md:py-32 lg:px-32">
        <Reveal>
            <div className="mb-10 text-[11px] tracking-[0.28em] text-[#CAE6D8]/48 uppercase">
                {t('featured.title')}
            </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
                <ProjectCard
                    key={project.slug}
                    project={project}
                    index={i}
                    tagline={caseStudyT(`${project.slug}.tagline`)}
                    onNavigate={onNavigate}
                />
            ))}
        </div>

        <Reveal delay={400}>
            <div className="mt-10 flex justify-end">
                <button
                    onClick={() => onNavigate('/projects')}
                    className="group flex items-center gap-2 text-sm text-[#CAE6D8]/60 transition-colors duration-300 hover:text-[#CAE6D8]"
                >
                    {t('featured.viewAll')}
                    <ArrowIcon className="h-3 w-3 rotate-180 bg-[#CAE6D8]/60 transition-colors duration-300 group-hover:bg-[#CAE6D8]" />
                </button>
            </div>
        </Reveal>
    </div>
);

const Process = ({ t }: { t: TranslationFn }) => {
    const steps = t.raw('process.steps') as { name: string; text: string }[];

    return (
        <div className="relative z-10 bg-[#CAE6D8] text-[#1E1E1E]">
            <div className="mx-auto max-w-[1920px] px-8 py-20 md:px-20 md:py-28 lg:px-32">
                <Reveal>
                    <div className="mb-12 text-[11px] tracking-[0.28em] text-[#1E1E1E]/40 uppercase">
                        {t('process.title')}
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, i) => (
                        <Reveal key={step.name} delay={60 + i * 100}>
                            <div>
                                <div className="mb-3 text-sm font-semibold text-[#1E1E1E]/25">
                                    0{i + 1}
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-[#1E1E1E]">
                                    {step.name}
                                </h3>
                                <p className="text-sm leading-relaxed text-[#1E1E1E]/60">
                                    {step.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Closing = ({ t }: { t: TranslationFn }) => {
    const openContactModal = React.useCallback(() => {
        window.dispatchEvent(new Event("facile:open-contact-modal"));
    }, []);

    return (
        <div className="relative z-10 mx-auto max-w-[1920px] px-8 py-20 text-[#CAE6D8] md:px-20 md:py-28 lg:px-32">
            <Reveal>
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-2xl font-semibold leading-snug text-[#CAE6D8] md:text-3xl">
                        {t('closing.headline')}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-[#CAE6D8]/60 md:text-lg">
                        {t('closing.text')}
                    </p>
                    <button
                        onClick={openContactModal}
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#CAE6D8] px-6 py-3 text-sm font-medium text-[#1E1E1E] transition-colors duration-300 hover:bg-[#1E1E1E] hover:text-[#CAE6D8]"
                    >
                        {t('closing.cta')}
                    </button>
                </div>
            </Reveal>
        </div>
    );
};

export default function Home() {
    const t = useTranslations('home');
    const caseStudyT = useTranslations('portfolio.caseStudy');
    const router = useRouter();
    const [start, setStart] = React.useState(false);
    const [percent, setPercent] = React.useState(0);
    const [isDesktop, setIsDesktop] = React.useState(false);
    const [loadedAssets, setLoadedAssets] = React.useState(0);
    const totalAssets = 3;

    const stack = React.useRef<HTMLDivElement>(null);
    const background = React.useRef<HTMLImageElement>(null);
    const title = React.useRef<HTMLDivElement>(null);

    const featuredProjects = featuredSlugs
        .map(slug => data.find(p => p.slug === slug))
        .filter((p): p is NonNullable<typeof p> => p !== undefined);

    const handleAssetLoad = React.useCallback(() => {
        setLoadedAssets(prev => {
            const newCount = prev + 1;
            const progressPercent = Math.floor((newCount / totalAssets) * 100);
            setPercent(progressPercent);

            if (newCount === totalAssets) {
                setTimeout(() => setStart(true), 300);
            }
            return newCount;
        });
    }, []);

    React.useEffect(() => {
        const fallbackTimeout = setTimeout(() => {
            if (!start) {
                setPercent(100);
                setStart(true);
            }
        }, 3000);
        return () => clearTimeout(fallbackTimeout);
    }, [start]);

    React.useEffect(() => {
        const tl = gsap.timeline({});
        TransitionIn(2);

        if (start) {
            tl
                .to(".disappear", {
                    delay: 1,
                    stagger: 0.1,
                    y: "-110%",
                    duration: 1,
                    ease: "power2.inOut",
                })
                .to(stack.current, {
                    height: 0,
                    duration: 1.5,
                    ease: "power4.inOut",
                }, "<");
        }

        return () => { tl.kill(); };
    }, [start]);

    React.useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    React.useEffect(() => {
        if (title.current) {
            if (!isDesktop) {
                gsap.to(title.current, {
                    delay: 3,
                    x: "-2000%",
                    duration: 133,
                    ease: "none",
                    repeat: -1,
                });
            } else {
                gsap.killTweensOf(title.current);
                gsap.set(title.current, { x: 0 });
            }
        }

        return () => {
            if (title.current) {
                gsap.killTweensOf(title.current);
            }
        };
    }, [isDesktop]);

    return (
        <>
            <div ref={stack} className="absolute rounded-b-[64px] top-0 left-0 w-screen overflow-hidden h-screen z-[999] flex flex-col gap-8 items-center justify-center bg-background">
                <div className="overflow-hidden">
                    <Image
                        src="/icons/F..svg"
                        alt="Facile logo"
                        width={96}
                        height={96}
                        className="w-24 disappear"
                        onLoad={handleAssetLoad}
                    />
                </div>

                <div className="overflow-hidden">
                    <div className="font-extrabold disappear text-black">
                        {percent}%
                    </div>
                </div>

                <div className="gap-0">
                    <div className="overflow-hidden">
                        <div className="opacity-66 text-center disappear text-black">
                            {t('loading.line1')}
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <div className="opacity-66 text-center disappear text-black">
                            {t('loading.line2')}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full overflow-y-auto overflow-x-hidden bg-[#1E1E1E] h-full relative rounded-[32px]">
                <div className="relative h-full min-h-[500px]">
                    <h1 className="sr-only">Facile Studio - Design, branding et développement web</h1>

                    <Image
                        ref={background}
                        src="/images/hero.webp"
                        alt="background"
                        fill
                        sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, (max-width: 1536px) 1536px, 100vw"
                        quality={80}
                        className="object-cover object-left blur-lg will-change-transform"
                        onLoad={handleAssetLoad}
                        fetchPriority="high"
                        priority
                    />

                    <div ref={title} className="absolute -bottom-1 left-0 lg:w-full w-[200%] flex items-start justify-start">
                        <div className="flex shrink-0 gap-12 xl:w-full relative">
                            <Image
                                alt="Facile"
                                src="/icons/FACILE.svg"
                                width={1920}
                                height={400}
                                className="min-h-[400px] xl:min-h-0 object-cover w-full"
                                onLoad={handleAssetLoad}
                            />
                            {isDesktop ? (
                                <div className="top-0 right-0 mr-[7%] fixed text-[#CAE6D8] font-extrabold text-5xl">
                                    STUDIO
                                </div>
                            ) : (
                                Array.from({ length: 20 }).map((_, i) => (
                                    <Image
                                        key={i}
                                        alt="Facile"
                                        src="/icons/FACILE.svg"
                                        width={800}
                                        height={400}
                                        className="min-h-[400px] object-cover"
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <FeaturedProjects
                    projects={featuredProjects}
                    t={t}
                    caseStudyT={caseStudyT}
                    onNavigate={(href: string) => TransitionOut({ href, router })}
                />

                <Process t={t} />

                <Closing t={t} />
            </div>
        </>
    );
}
