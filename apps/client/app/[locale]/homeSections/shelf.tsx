'use client'

import { useTranslations } from "next-intl";
import ProjectShelf from "../projects/components/shelf";

export default function Shelf() {
    const t = useTranslations("home.shelf");

    return (
        <ProjectShelf
            lines={t.raw("lines") as string[]}
            limit={4}
            filterable={false}
            stickyBackdrop
            endTone="light"
        />
    );
}
