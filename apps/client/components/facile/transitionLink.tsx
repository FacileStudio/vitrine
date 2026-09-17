'use client'

import type { ComponentProps, MouseEvent, Ref } from "react";
import { Link, usePathname, useRouter } from "@/lib/i18n/navigation";
import { TransitionOut } from "@/components/facile/pageTransition";

export default function TransitionLink({
    href,
    onClick,
    ref,
    ...props
}: ComponentProps<typeof Link> & { ref?: Ref<HTMLAnchorElement> }) {
    const router = useRouter();
    const pathname = usePathname();

    const go = (event: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(event);
        if (event.defaultPrevented) return;

        const target = typeof href === "string" ? href : href.pathname ?? "";
        event.preventDefault();

        if (target.split("#")[0] === pathname) {
            router.push(target);
            return;
        }

        TransitionOut({ href: target, router });
    };

    return <Link ref={ref} href={href} onClick={go} {...props} />;
}
