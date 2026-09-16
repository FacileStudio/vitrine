import { ReactNode } from "react";

// the document lives in app/[locale]/layout.tsx (see app/shell.tsx); this one only
// exists because app/not-found.tsx sits outside the locale segment
export default function RootLayout({ children }: { children: ReactNode }) {
    return children;
}

export { viewport } from "@/lib/seo";
