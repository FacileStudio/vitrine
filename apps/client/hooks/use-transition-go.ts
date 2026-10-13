'use client'

import { useCallback } from "react";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { TransitionOut } from "@/components/facile/pageTransition";

// a link to the page already open jumps straight to the router; anything else leaves through the curtain
export function useTransitionGo() {
    const router = useRouter();
    const pathname = usePathname();

    return useCallback((href: string, onSamePage?: () => void) => {
        if (href.split("#")[0] === pathname) {
            onSamePage?.();
            router.push(href);
            return;
        }

        TransitionOut({ href, router });
    }, [pathname, router]);
}
