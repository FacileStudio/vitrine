import gsap from "gsap";
import Stripes from "@/components/facile/stripes";
import { useRef, useState, useEffect, useLayoutEffect, type MouseEvent } from "react";
import { useScroll } from "@/hooks/use-scroll";
import { past } from "@/app/utils";
import dynamic from "next/dynamic";
import projects from "../projects/projects.json";
import { run, slideY, slideX, hideRevealY } from "@/app/utils/animations";

const DitherView = dynamic(
    () => import("@/webgl/DitherView").then((m) => m.DitherView),
    { ssr: false },
);

const triggerLine = 0.5;

const newest = projects.slice(0, 4);

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const colsSentinel = useRef<HTMLDivElement>(null);
    const paraSentinel = useRef<HTMLDivElement>(null);
    const textExitSentinel = useRef<HTMLDivElement>(null);
    const exitSentinel = useRef<HTMLDivElement>(null);

    const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const entryRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const ctaRef = useRef<HTMLButtonElement>(null);
    const marcelEyesRef = useRef<HTMLDivElement>(null);
    const marcelSpheresRef = useRef<HTMLDivElement>(null);
    const eyesMove = useRef<((e: PointerEvent) => void) | null>(null);

    const [showText, setShowText] = useState(false);
    const [showCta, setShowCta] = useState(false);
    const [leaving, setLeaving] = useState(false);



    useEffect(() => {
        hideRevealY([...lineRefs.current, ctaRef.current]);
        return () => { if (eyesMove.current) window.removeEventListener("pointermove", eyesMove.current); };
    }, []);



    useEffect(() => {
        run(lineRefs.current, slideY(showText, leaving));
        run([ctaRef.current], slideY(showCta, leaving, { duration: 0.7 }));
    }, [showText, showCta, leaving]);



    useScroll(() => {
        // anchors
        const textOut = past(textExitSentinel, triggerLine);
        const textIn = past(paraSentinel, triggerLine) && !textOut;
        setShowText(textIn);
        setShowCta(textIn);
        setLeaving(textOut);

        // parallax
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



    // marcel eyes
    const startEyes = (card: HTMLElement) => {
        const eyes = marcelEyesRef.current;
        if (!eyes || !card.contains(eyes))
            return;

        if (eyesMove.current)
            window.removeEventListener("pointermove", eyesMove.current);

        // measure the eyes' rest centre (offsets are relative to it)
        gsap.set(eyes, { x: 0, y: 0 });
        const r = eyes.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;

        const clampX = gsap.utils.clamp(-150, 150),
              clampY = gsap.utils.clamp(-20, 20),
              setX = gsap.quickTo(eyes, "x", { duration: 1.4, ease: "power2.out" }), 
              setY = gsap.quickTo(eyes, "y", { duration: 1.4, ease: "power2.out" }), 
              spheres = marcelSpheresRef.current, 
              setSphX = spheres ? gsap.quickTo(spheres, "x", { duration: 1.6, ease: "power2.out", delay: 0.2 }) : null;

        const move = (e: PointerEvent) => {
            const tx = clampX(e.clientX - cx);
            setX(tx);
            setY(clampY(e.clientY - cy));
            setSphX?.(tx);
        };
        eyesMove.current = move;
        window.addEventListener("pointermove", move, { passive: true });
    };

    const stopEyes = (card: HTMLElement) => {
        const eyes = marcelEyesRef.current;
        if (!eyes || !card.contains(eyes)) return;
        if (eyesMove.current) window.removeEventListener("pointermove", eyesMove.current);
        eyesMove.current = null;
        // overwrite:true kills the lingering quickTo tweens so they can't snap back to the cursor
        gsap.to(eyes, { x: 0, y: 0, duration: 0.6, ease: "power2.out", overwrite: true });
        gsap.to(marcelSpheresRef.current, { x: 0, duration: 0.6, ease: "power2.out", overwrite: true });
    };



    // hover: wipe the centered video open from the bottom up, then close it back down
    const onEnter = (e: MouseEvent<HTMLAnchorElement>) => {
        startEyes(e.currentTarget);

        const v = e.currentTarget.querySelector("video");
        if (!v)
            return;

        v.currentTime = 0;
        v.play().catch(() => {});
        gsap.to(v, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.55,
            ease: "power3.out",
            overwrite: "auto"
        });
    };

    const onLeave = (e: MouseEvent<HTMLAnchorElement>) => {
        stopEyes(e.currentTarget);

        const v = e.currentTarget.querySelector("video");
        if (!v)
            return;

        gsap.to(v, {
            clipPath: "inset(100% 0% 0% 0%)",
            duration: 0.4,
            ease: "power3.in",
            overwrite: "auto",
            onComplete: () => v.pause()
        });
    };


    return (
        <section
            ref={sectionRef}
            id="projects"
            className="w-screen relative min-h-[500vh]"
        >
            <div className="absolute inset-0 bg-[#242424] -z-10" aria-hidden="true" />
            <div data-no-shadow className="sticky top-0 h-screen w-full overflow-hidden text-white">
                <DitherView
                    className="absolute inset-0 w-full h-full z-0 opacity-33"
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

                <Stripes orientation={0}   count={4} className="bg-background" openWhen={() =>  past(colsSentinel)} />
                <Stripes orientation={180} count={4} className="bg-background" openWhen={() => !past(exitSentinel)} />

                <div className="absolute inset-0 z-50 flex flex-col items-center justify-start pt-24 px-6 text-center pointer-events-none">
                    <h2 className="max-w-3xl text-4xl md:text-5xl font-medium leading-tight">
                        {["Take a look at", "our latest projects."].map((line, i) => 
                            <span key={i} className="block overflow-hidden">
                                <span ref={(el) => { lineRefs.current[i] = el; }} className="block">
                                    {line}
                                </span>
                            </span>
                        )}
                    </h2>
                </div>
            </div>

            <div className="w-screen h-full flex flex-col justify-start items-center gap-[2px] pt-240 px-6">
                {newest.map((p, i) => (
                    <div className="w-[80vw] shrink-0 flex items-start justify-between">
                      <div className="relative shrink-0">
                        {p.name === "Marcel" && (
                            <div ref={marcelSpheresRef} className="pointer-events-none absolute bottom-6 z-20 left-1/2 flex -translate-x-1/2 translate-y-1/2 gap-16 will-change-transform">
                                <div className="w-28 h-28 rounded-full bg-[#95DFE9] shadow-3xl" />
                                <div className="w-28 h-28 rounded-full bg-[#95DFE9] shadow-3xl" />
                            </div>
                        )}
                        <a
                            ref={(el) => { if (el) entryRefs.current[i] = el; }}
                            key={p.slug}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                            className="group relative w-5xl aspect-16/10 shrink-0 flex flex-col group-hover:bg-black/50 justify-start gap-1 overflow-hidden rounded-md"
                        >
                            {p.image && p.name === "Marcel"
                            ?
                                <>
                                    <div ref={(el) => { imgRefs.current[i] = el; }} className="absolute inset-0 will-change-transform">
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="w-full h-full object-cover transition-all brightness-100 duration-300 ease-out"
                                    />
                                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div ref={marcelEyesRef} className="flex gap-8 z-30 will-change-transform">
                                            <div className="w-12 h-60 bg-black rounded-full" />
                                            <div className="w-12 h-60 bg-black rounded-full" />
                                        </div>
                                    </div>
                                </div>
                                </>
                            :
                                <>
                                    <div ref={(el) => { imgRefs.current[i] = el; }} className="absolute inset-0 will-change-transform">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-cover transition-all brightness-100 group-hover:brightness-[0.25] duration-300 ease-out group-hover:scale-110"
                                        />
                                    </div>

                                    {p.video && (
                                        <video
                                            ref={(el) => { videoRefs.current[i] = el; }}
                                            src={p.video}
                                            loop muted playsInline preload="none"
                                            className={`pointer-events-none absolute rounded will-change-[clip-path] [clip-path:inset(100%_0_0_0)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5`}
                                        />
                                    )}
                                </>
                            }
                        </a>
                      </div>

                        <div className="flex flex-col items-end gap-1">
                            <span className="relative z-10 text-5xl font-medium text-white">
                                {p.name}
                            </span>
                            <span className="relative z-10 text-xs text-white/50">
                                {p.techStack?.join(" · ")}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div ref={colsSentinel}     className="absolute top-[4%]  w-full h-px" aria-hidden="true" />
            <div ref={paraSentinel}     className="absolute top-[12%] w-full h-px" aria-hidden="true" />
            <div ref={textExitSentinel} className="absolute top-[33%] w-full h-px" aria-hidden="true" />
            <div ref={exitSentinel}     className="absolute top-[90%] w-full h-px" aria-hidden="true" />
        </section>
    );
}
