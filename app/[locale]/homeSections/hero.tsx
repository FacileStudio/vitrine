import dynamic from "next/dynamic";


const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

export default function Hero() {
    return (
        <section id="hero" className="h-screen w-screen relative">
            <div className="relative w-screen h-screen">
                <DitherView
                    file="/models/fff.glb"
                    className="absolute top-0 left-0 w-full h-full -z-10 opacity-75"
                    background="#9DBAAD"
                    highlight="#24E27A"
                    grayscaleOnly={false}
                    intensity={1.8}
                    gridSize={2}
                    position={[-1, -0.5, -0.5]}
                    fov={50}
                    scale={35}
                    float={false}
                    parallax={0.55}
                    rotation={[0, 0.35, 0]}
                />
                <div className="absolute bottom-0 left-0 w-full h-1/5 bg-linear-to-t from-[#E4EEE8] to-transparent" />
            </div>
            <div className="absolute top-2/5 w-full -translate-y-1/2 text-center flex items-start px-15">
                <div className="w-full text-left">
                  <div className="italic text-lg">[fasil]</div>
                    <div className="opacity-50 font-medium text-xs mt-2">Qui se fait sans effort, qui ne presente aucune<br/>difficulté. Simple, aise, etc...</div>
                </div>
                <div className="w-full text-left ">
                    <div className="text-2xl font-medium">Quand 2 bons designers rencontrent<br/>2 bons developpeurs</div>
                    <button className="mt-6 px-6 py-4 border-2 border-black/10 text-xs font-medium rounded-full">Voir nos projets</button>
                </div>
            </div> 
            
            <div className="absolute bottom-0 flex items-end justify-between w-full px-15 pb-12">
                <img src="/Facile.svg" alt="Facile Logo" className="w-1/2 aspect-auto max-h-[33vh]" />
                <span className="font-medium text-4xl">Studio</span>
            </div>

        </section>
    )
}