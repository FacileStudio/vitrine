import type { ReactNode } from "react";

export default function LegalSection({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="subtitle">{title}</h2>
            {children}
        </section>
    );
}
