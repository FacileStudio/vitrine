'use client'

import InfoModal from "@/components/facile/infoModal";
import TextReveal from "@/components/facile/textReveal";
import { useLocalized } from "@/lib/i18n/localize";
import authored from "../architecture.json";

type ArchitectureModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ArchitectureModal({ open, setOpen }: ArchitectureModalProps) {
    const architecture = useLocalized(authored);

    return (
        <InfoModal open={open} setOpen={setOpen} title={architecture.title}>
            {(entered) => (
                <>
                    {architecture.sections.map((section, s) => (
                        <section key={section.heading} className="flex flex-col gap-3">
                            <h2 className="text-foreground">
                                <TextReveal open={entered} delay={0.08 + s * 0.05}>{section.heading}</TextReveal>
                            </h2>

                            {section.body.map((paragraph, i) => (
                                <p key={i} className="text-justify text-[0.8rem] text-foreground/50 hyphens-auto">
                                    <TextReveal open={entered} delay={0.12 + s * 0.05 + i * 0.04}>{paragraph}</TextReveal>
                                </p>
                            ))}
                        </section>
                    ))}

                    <p className="border-t border-foreground/10 pt-6 text-justify text-[0.7rem] text-foreground/40">
                        <TextReveal open={entered} delay={0.3}>{architecture.footer}</TextReveal>
                    </p>
                </>
            )}
        </InfoModal>
    );
}
