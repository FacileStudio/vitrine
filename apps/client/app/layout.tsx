import { ReactNode } from "react";

// only exists because app/not-found.tsx sits outside the locale segment
export default function RootLayout({ children }: { children: ReactNode }) {
    return children;
}

export { viewport } from "@/lib/seo";
