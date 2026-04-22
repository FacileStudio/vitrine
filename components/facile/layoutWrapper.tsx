'use client'

import React from "react";
import Header from "@/components/facile/header";
import Footer from "@/components/facile/footer";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

type LayoutWrapperProps = {
    children: React.ReactNode;
};

const ContactModal = dynamic(() => import("@/components/facile/contactModal"), {
    ssr: false,
});

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
    const [open, setOpen] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleOpenContactModal = () => setOpen(true);

        window.addEventListener("facile:open-contact-modal", handleOpenContactModal);

        return () => {
            window.removeEventListener("facile:open-contact-modal", handleOpenContactModal);
        };
    }, []);


    return (
        <div className="bg-background p-3 xl:p-4 w-screen h-screen relative tracking-tight overflow-hidden text-[#1E1E1E] flex flex-col gap-3">
        { pathname !== "/" &&
            <div className={"rideaux absolute rounded-b-[64px] top-0 left-0 w-screen overflow-hidden h-screen z-60 bg-[#CAE6D8]"}/>
        }
            <Header setOpen={setOpen} />
            {children}
            <Footer setOpen={setOpen} />
            <ContactModal open={open} setOpen={setOpen} />
        </div>
    );
}
