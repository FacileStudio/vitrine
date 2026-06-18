
export const DesktopHeader =({ sideBarOpen, setSidebarOpen }: { sideBarOpen: boolean; setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    
    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };
    
    return (
        <header className="fixed top-0 left-0 w-full pt-4 px-12 z-20 flex justify-between items-center">
            <div className="flex items-center space-x-24">
                <a href="/">
                    <img src="/F.svg" alt="Facile Logo" className="h-6 aspect-auto" />
                </a>
                <div className="flex items-center">
                    <span className="italic text-lg">[fasil]</span>
                    <span className="opacity-50 font-medium text-xs ml-4">Qui ne représente aucune difficulté.</span>
                </div>
            </div>
            <button onClick={toggleSidebar}>
                {sideBarOpen ? 'Close Sidebar' : 'Open Sidebar'}
            </button>
        </header>
    )
}
