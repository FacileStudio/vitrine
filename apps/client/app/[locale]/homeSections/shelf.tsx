'use client'

import { useTranslations } from "next-intl";
import ProjectShelf from "../projects/components/shelf";

// the home page's projects section is the /projects shelf with the dial turned
// down: the four newest projects, no category filter, no count, its own copy.
// A card still opens the project's story at /projects/<slug>
export default function Shelf() {
    const t = useTranslations("home.shelf");

    return (
        <ProjectShelf
            lines={t.raw("lines") as string[]}
            limit={4}
            filterable={false}
            stickyBackdrop
        />
    );
}
