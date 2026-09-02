'use client'

import InfoModal from "@/components/facile/infoModal";
import TextReveal from "@/components/facile/textReveal";
import architecture from "../architecture.json";

type ArchitectureModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// the shelf's filter slot leads here instead: one tall, narrow column of prose
// explaining what the suite actually is under the fifteen names. Narrow on
// purpose — the measure is the point, the reading is the interaction
export default function ArchitectureModal({ open, setOpen }: ArchitectureModalProps) {
    return (
        <InfoModal open={open} setOpen={setOpen} title={architecture.title}>
            {(entered) => (
                <>
                    {architecture.sections.map((section, s) => (
                        <section key={section.heading} className="flex flex-col gap-3">
                            <h3 className="font-medium text-[1.75rem] text-foreground">
                                <TextReveal open={entered} delay={0.08 + s * 0.05}>{section.heading}</TextReveal>
                            </h3>

                            {section.body.map((paragraph, i) => (
                                <p key={i} className="text-justify font-bb-mono text-[0.8rem] uppercase text-foreground/50 hyphens-auto">
                                    <TextReveal open={entered} delay={0.12 + s * 0.05 + i * 0.04}>{paragraph}</TextReveal>
                                </p>
                            ))}
                        </section>
                    ))}

                    <p className="border-t border-foreground/10 pt-6 text-justify font-bb-mono text-[0.7rem] uppercase text-foreground/40">
                        <TextReveal open={entered} delay={0.3}>{architecture.footer}</TextReveal>
                    </p>
                </>
            )}
        </InfoModal>
    );
}
