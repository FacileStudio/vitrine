'use client'

import React from "react";
import Header from "@/components/facile/header";
import Footer from "@/components/facile/footer";
import Menu from "@/components/facile/menu";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

type AppShellProps = {
    children: React.ReactNode;
};

const ContactModal = dynamic(() => import("@/components/facile/contactModal"), {
    ssr: false,
});

export default function AppShell({ children }: AppShellProps) {
    const [open, setOpen] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    React.useEffect(() => {
        const handleOpenContactModal = () => setOpen(true);

        window.addEventListener("facile:open-contact-modal", handleOpenContactModal);

        return () => {
            window.removeEventListener("facile:open-contact-modal", handleOpenContactModal);
        };
    }, []);


    return (
        <div className="bg-background p-3 xl:p-4 w-screen h-screen relative tracking-tight overflow-hidden text-[#1E1E1E] flex flex-col gap-3">
            { !isHome &&
                <div className={"page-transition absolute rounded-b-[64px] top-0 left-0 w-screen overflow-hidden h-screen z-60 bg-[#CAE6D8]"}/>
            }
            {/* home renders its own Header + Menu with its local menuOpen state */}
            { !isHome && <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> }
            { !isHome && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> }
            {children}
            <Footer setOpen={setOpen} />
            <ContactModal open={open} setOpen={setOpen} />
        </div>
    );
}
