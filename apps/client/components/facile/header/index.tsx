'use client'
import React from "react";
import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";

const Header =({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className={"z-[110] absolute w-full top-0"}>
            <DesktopHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    );
};

export default Header;
