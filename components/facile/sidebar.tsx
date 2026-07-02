import React from 'react';
import gsap from 'gsap';
import { EASE } from '@/app/utils/animations';



export const SideBar = ({ sideBarOpen, setSidebarOpen }: { sideBarOpen: boolean; setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const sidebarRef = React.useRef<HTMLDivElement>(null);
    
    React.useEffect(() => {
        gsap.to(sidebarRef.current, {
            right: sideBarOpen ? 0 : '-320px',
            duration: 1,
            ease: sideBarOpen ? EASE.out : EASE.in,
        });
    }, [sideBarOpen]);
    
    return (
        <div ref={sidebarRef} className={`fixed top-0 -right-80 h-screen w-80  bg-[#1E1E1E] z-100`}>
            <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 text-white">Close</button>
            <nav className="mt-16 flex flex-col space-y-6 px-6">
                <a href="#home" className="text-white text-lg">Home</a>
                <a href="#projects" className="text-white text-lg">Projects</a>
                <a href="#process" className="text-white text-lg">Process</a>
                <a href="#contact" className="text-white text-lg">Contact</a>
            </nav>
        </div>
    );
}

export default SideBar;












