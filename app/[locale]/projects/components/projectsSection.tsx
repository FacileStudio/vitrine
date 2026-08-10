import gsap from "gsap";
import SplitLines from "@/components/facile/splitLines";
import { useRef, useState, useEffect, useLayoutEffect, type MouseEvent } from "react";
import { useLenis } from "lenis/react";
import { usePinProgress } from "@/hooks/use-pin-progress";
import dynamic from "next/dynamic";
import { EASE, run, slideY, hideRevealY } from "@/app/utils/animations";
import { allProjects as projects, isVideoFile, type Project } from "../lib/story";
import { MarcelEyes, MarcelSpheres, useMarcelEyes } from "./marcelEyes";
import ProjectDetail from "./projectDetail";

const DitherView = dynamic(
    () => import("@/webgl/DitherView").then((m) => m.DitherView),
    { ssr: false },
);

const mediaClass = "pointer-events-none absolute rounded object-cover will-change-[clip-path] [clip-path:inset(100%_0_0_0)] rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5";



// the pinned dithered backdrop the cards scroll over
function ProjectsBackdrop() {
    return (
        <div data-no-shadow className="fixed top-0 h-screen w-full overflow-hidden text-white">
            <DitherView
                className="absolute inset-0 w-full h-full z-0 opacity-20"
                background={null}
                highlight="#24E27A"
                grayscaleOnly={false}
                intensity={1.8}
                parallax={0.7}
                gridSize={2}
                file="/models/manifesto.glb"
                models={[
                    { file: "/models/manifesto.glb", position: [3, 1, 0] },
                    { file: "/models/manifesto.glb", position: [-3, -2, 0] },
                ]}
            />
        </div>
    );
}



interface ProjectCardProps {
    p: Project;
    index: number;
    setCardRef: (i: number) => (el: HTMLDivElement | null) => void;
    setEntryRef: (i: number) => (el: HTMLButtonElement | null) => void;
    setImgRef: (i: number) => (el: HTMLDivElement | null) => void;
    setContentRef: (i: number) => (el: HTMLDivElement | null) => void;
    onOpen: (i: number) => void;
    onEnter: (e: MouseEvent<HTMLButtonElement>) => void;
    onLeave: (e: MouseEvent<HTMLButtonElement>) => void;
}

// one project row: parallaxed cover image on the left with the hover media wipe,
// its name/tech/description on the right. Marcel gets the extra googly-eyes markup
function ProjectCard({ p, index, setCardRef, setEntryRef, setImgRef, setContentRef, onOpen, onEnter, onLeave }: ProjectCardProps) {
    const { frame, eyes, spheres, start, stop } = useMarcelEyes();
    const marcel = p.name === "Marcel";

    return (
        <div ref={setCardRef(index)} className="3xl:w-[70vw] w-[80vw] shrink-0 flex items-start justify-between">
            <div className="relative shrink-0">
                {marcel && <MarcelSpheres ref={spheres} />}
                <button
                    ref={setEntryRef(index)}
                    type="button"
                    aria-label={p.name}
                    onClick={() => { stop(); onOpen(index); }}
                    onMouseEnter={(e) => { onEnter(e); if (marcel) start(); }}
                    onMouseLeave={(e) => { onLeave(e); stop(); }}
                    className="group relative 3xl:w-5xl w-[50vw] aspect-16/10 shrink-0 flex flex-col group-hover:bg-black/50 justify-start gap-1 overflow-hidden rounded-md"
                >
                    {p.image && marcel
                    ?
                        <div ref={setImgRef(index)} className="absolute inset-0 will-change-transform">
                            <img
                                src={p.image}
                                alt={p.name}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-all brightness-100 duration-300 ease-out"
                            />
                            <MarcelEyes frameRef={frame} ref={eyes} />
                        </div>
                    :
                        <>
                            <div ref={setImgRef(index)} className="absolute inset-0 will-change-transform">
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-all  brightness-100 group-hover:brightness-[0.6] duration-300 ease-out group-hover:scale-110"
                                />
                            </div>

                            {p.video && (
                                isVideoFile(p.video) ? (
                                    <video
                                        data-media
                                        src={p.video}
                                        loop muted playsInline preload="none"
                                        className={mediaClass}
                                    />
                                ) : (
                                    <img
                                        data-media
                                        src={p.video}
                                        alt={p.name}
                                        className={mediaClass}
                                    />
                                )
                            )}
                        </>
                    }
                </button>
          </div>

            <div ref={setContentRef(index)} className="flex flex-col items-end gap-12 max-w-sm text-right py-12">
                <span className="relative z-10 block overflow-hidden">
                    <span data-reveal className="block text-5xl font-medium text-white">
                        {p.name}
                    </span>
                </span>
                <span className="relative z-10 block overflow-hidden">
                    <span data-reveal className="flex flex-wrap justify-end gap-6">
                        {p.techStack?.map((name) => (
                            <img key={name} src={`/images/logo/${name}.png`} alt={name} className="h-5" />
                        ))}
                    </span>
                </span>
                {p.description && (
                    <SplitLines
                        text={p.description}
                        justify
                        className="relative z-10 text-md font-medium leading-relaxed text-white/50"
                    />
                )}
            </div>
        </div>
    );
}



export default function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const entryRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [active, setActive] = useState<number | null>(null);

    // the detail overlay runs its own horizontal Lenis, so the page's vertical one
    // has to let go or a wheel gesture drives both at once
    const pageLenis = useLenis();
    useEffect(() => {
        if (!pageLenis) return;
        if (active !== null) pageLenis.stop();
        else pageLenis.start();
    }, [pageLenis, active]);

    // callback-ref setters: the refs are owned here, so the children just receive
    // a per-index setter instead of writing into a ref object passed as a prop
    const setCardRef = (i: number) => (el: HTMLDivElement | null) => { cardRefs.current[i] = el; };
    const setEntryRef = (i: number) => (el: HTMLButtonElement | null) => { if (el) entryRefs.current[i] = el; };
    const setImgRef = (i: number) => (el: HTMLDivElement | null) => { imgRefs.current[i] = el; };
    const setContentRef = (i: number) => (el: HTMLDivElement | null) => { contentRefs.current[i] = el; };

    const cards = () => cardRefs.current.filter((el): el is HTMLDivElement => el != null);






    // reveal each project's text + logos while its card sits in the centre band,
    // then hide it again as the card crosses out (media excluded)
    useLayoutEffect(() => {
        const targets = (el: Element) => Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));
        contentRefs.current.forEach((el) => el && hideRevealY(targets(el)));

        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    run(targets(e.target), slideY(true, false, { stagger: 0.08, duration: 0.6 }));
                } else {
                    run(targets(e.target), slideY(false, true, { stagger: 0.04, duration: 0.4 }));
                }
            });
        }, { threshold: 0, rootMargin: "-40% 0px -40% 0px" });

        contentRefs.current.forEach((el) => el && io.observe(el));
        return () => io.disconnect();
    }, []);



    usePinProgress(sectionRef, (_p, visible) => {
        if (!visible)
            return;

        const vh = window.innerHeight;
        imgRefs.current.forEach((el) => {
            const card = el?.parentElement;
            if (!el || !card)
                return;

            const r = card.getBoundingClientRect();
            const progress = gsap.utils.clamp(0, 1, (vh - r.top) / (vh + r.height));

            gsap.set(el, {
                yPercent: gsap.utils.mapRange(0, 1, -25, 25, progress),
                scale: 1.30,
            });
        });
    });



    // hover: wipe the centered media (video or image) open from the bottom up, then close it back down
    const onEnter = (e: MouseEvent<HTMLButtonElement>) => {
        const m = e.currentTarget.querySelector<HTMLElement>("[data-media]");
        if (!m)
            return;

        if (m instanceof HTMLVideoElement) {
            m.currentTime = 0;
            m.play().catch(() => {});
        }
        gsap.to(m, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.55,
            ease: "power3.out",
            overwrite: "auto"
        });
    };

    const onLeave = (e: MouseEvent<HTMLButtonElement>) => {
        const m = e.currentTarget.querySelector<HTMLElement>("[data-media]");
        if (!m)
            return;

        gsap.to(m, {
            clipPath: "inset(100% 0% 0% 0%)",
            duration: 0.4,
            ease: "power3.in",
            overwrite: "auto",
            onComplete: () => { if (m instanceof HTMLVideoElement) m.pause(); }
        });
    };



    // the clicked cover hands its box over to the detail view, so it is dropped
    // instantly while the rest of the list fades away behind the overlay
    const openProject = (i: number) => {
        const card = entryRefs.current[i];
        if (active !== null || !card)
            return;

        const m = card.querySelector<HTMLElement>("[data-media]");
        if (m) {
            gsap.set(m, { clipPath: "inset(100% 0% 0% 0%)" });
            if (m instanceof HTMLVideoElement) m.pause();
        }

        gsap.set(card, { opacity: 0 });
        gsap.to(cards(), { opacity: 0, duration: 0.45, ease: EASE.in });
        setActive(i);
    };

    const restoreList = () => {
        gsap.to(cards(), { opacity: 1, duration: 0.6, ease: EASE.out });
    };

    const closeProject = () => {
        if (active !== null)
            gsap.set(entryRefs.current[active], { opacity: 1 });

        setActive(null);
    };


    return (
        <section
            ref={sectionRef}
            id="projects"
            className="w-full relative h-full"
        >
            <div className="absolute inset-0 bg-[#242424] -z-10" aria-hidden="true" />

            <ProjectsBackdrop />

            <div className="w-full h-full pt-[20vh] flex flex-col justify-start items-center gap-1 px-6">
                {projects.map((p, i) => (
                    <ProjectCard
                        key={i}
                        p={p}
                        index={i}
                        setCardRef={setCardRef}
                        setEntryRef={setEntryRef}
                        setImgRef={setImgRef}
                        setContentRef={setContentRef}
                        onOpen={openProject}
                        onEnter={onEnter}
                        onLeave={onLeave}
                    />
                ))}
            </div>

            {active !== null && (
                <ProjectDetail
                    project={projects[active]}
                    index={active}
                    total={projects.length}
                    origin={() => ({ box: entryRefs.current[active], img: imgRefs.current[active] })}
                    onExit={restoreList}
                    onClosed={closeProject}
                />
            )}
        </section>
    );
}
