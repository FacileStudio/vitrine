export default function Hero() {
    return (
        <section id="hero" className="h-screen w-screen relative">
            <div className="absolute top-1/2 w-full -translate-y-1/2 text-center flex items-center px-15">
                <div className="w-full text-left">
                    <div className="italic text-lg">[fasil]</div>
                    <div className="opacity-50 font-medium text-xs mt-2">Qui se fait sans effort, qui ne presente aucune<br/>difficulté. Simple, aise, etc...</div>
                </div>
                <div className="w-full text-left">
                    <div className="text-2xl">Quand 2 bons designers rencontrent<br/>2 bons développeurs</div>
                </div>
            </div> 
            
            <div className="absolute bottom-0 flex items-end justify-between w-full px-15 pb-12">
                <img src="/Facile.svg" alt="Facile Logo" className="w-1/2 aspect-auto max-h-[33vh]" />
                <span className="font-medium text-4xl">Studio</span>
            </div>
        </section>
    )
}