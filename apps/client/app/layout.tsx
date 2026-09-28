import { ReactNode } from "react";

// Shell fetches studio members from the backend, so every route, 404 included, renders per request
export const dynamic = 'force-dynamic';

// only exists because app/not-found.tsx sits outside the locale segment
export default function RootLayout({ children }: { children: ReactNode }) {
    return children;
}

export { viewport } from "@/lib/seo";
