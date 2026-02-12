'use client'

import React from "react";
import Header from "@/components/facile/header";
import Footer from "@/components/facile/footer";
import ContactModal from "@/components/facile/contactModal";
import { usePathname } from "next/navigation";

type LayoutWrapperProps = {
    children: React.ReactNode;
};

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
    const [open, setOpen] = React.useState(false);
    const pathname = usePathname();

    // disable rideaux on main page


    return (
        <div className="bg-background p-3 xl:p-4 w-screen h-screen relative tracking-tight overflow-hidden text-[#1E1E1E] flex flex-col gap-3">
        { pathname.substring(1).split("/").length != 1 && 
            <div className={"rideaux absolute rounded-b-[64px] top-0 left-0 w-screen overflow-hidden h-screen z-60 bg-[#CAE6D8]"}/>
        }
            <Header setOpen={setOpen} />
            {children}
            <Footer setOpen={setOpen} />
            <ContactModal open={open} setOpen={setOpen} />
        </div>
    );
}
