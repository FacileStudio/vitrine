'use client'

import type { ComponentProps, MouseEvent, Ref } from "react";
import { Link } from "@/lib/i18n/navigation";
import { useTransitionGo } from "@/hooks/use-transition-go";

export default function TransitionLink({
    href,
    onClick,
    ref,
    ...props
}: ComponentProps<typeof Link> & { ref?: Ref<HTMLAnchorElement> }) {
    const go = useTransitionGo();

    const handle = (event: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(event);
        if (event.defaultPrevented) return;

        const target = typeof href === "string" ? href : href.pathname ?? "";
        event.preventDefault();
        go(target);
    };

    return <Link ref={ref} href={href} onClick={handle} {...props} />;
}
