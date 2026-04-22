'use client';

import { RideauxIn } from "@/components/facile/rideaux";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function NotFound() {
    const t = useTranslations("common.notFound");

    React.useEffect(() => RideauxIn(0), []);

    return (
    <div className="relative flex flex-col items-center justify-center h-full bg-[#1E1E1E] text-white">
        <Image
            className="z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 w-full h-full object-cover"
            src="/images/bg-blur.webp"
            alt="404 Not Found"
            width={1920}
            height={1080}
        />
        <div className="z-10 text-center p-4">
            <h1 className="text-6xl font-bold mb-4">{t("title")}</h1>
            <p className="text-xl mb-8">{t("message")}</p>
            <a
            href="/"
            className="px-6 py-3 bg-[#CAE6D8] text-[#1E1E1E] rounded-full font-medium hover:opacity-80 transition-colors duration-150"
            >
            {t("goHome")}
            </a>
        </div>
    </div>
    );
}
