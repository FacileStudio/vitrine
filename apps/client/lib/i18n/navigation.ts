import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// locale-aware stand-ins for next/link and next/navigation. Hrefs are written without
// the locale ("/projects") and these add the current one, so no component builds it
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
