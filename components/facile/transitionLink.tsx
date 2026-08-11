'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent, Ref } from "react";
import { TransitionOut } from "@/components/facile/pageTransition";

// a next/link that drops the curtain first and pushes the route underneath it,
// so no navigation ever swaps the page in the open. Same-page hrefs fall through
// to the plain anchor behaviour, since there is nothing to cover
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
