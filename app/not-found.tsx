'use client';

import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("common.notFound");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1E1E1E] text-white">
      <h1 className="text-6xl font-bold mb-4">{t("title")}</h1>
      <p className="text-xl mb-8">{t("message")}</p>
      <a
        href="/"
        className="px-6 py-3 bg-[#CAE6D8] text-[#1E1E1E] rounded-full font-medium hover:opacity-80 transition-colors duration-150"
      >
        {t("goHome")}
      </a>
    </div>
  );
}
