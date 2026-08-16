import type { CSSProperties, ReactNode } from "react";
import TextReveal from "@/components/facile/textReveal";

export default function Line({
    className = "",
    style,
    children,
    show = true,
    leaving = false,
}: {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
    show?: boolean;
    leaving?: boolean;
}) {
    return (
        <TextReveal show={show} leaving={leaving} blockColor="dark" duration={0.6}>
            <div style={style} className={className}>{children}</div>
        </TextReveal>
    );
}
