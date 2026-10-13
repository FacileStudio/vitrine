'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import PersonHead from "@/components/facile/story/head";
import { useMembers } from "@/components/facile/membersProvider";
import { findPerson } from "@/lib/content/studio";
import type { Locale } from "@/lib/i18n/locales";
import { EASE } from "@/lib/animations";

// every head stays mounted and only the step's team shows, so switching steps never rebuilds a WebGL scene
export default function ProcessTeam({ team }: { team: string[] }) {
    const members = useMembers();
    const locale = useLocale() as Locale;
    const heads = useRef(new Map<string, HTMLLIElement>());
    const shown = useRef<string[]>([]);

    useEffect(() => {
        const arriving = team.filter((slug) => !shown.current.includes(slug)).map((slug) => heads.current.get(slug));

        shown.current = team;

        // the delay lets the outgoing text clear first, like the incoming lines beside it
        gsap.fromTo(arriving.filter(Boolean), {
            opacity: 0,
            yPercent: 40,
            scale: 0.6,
        }, {
            opacity: 1,
            yPercent: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.25,
            stagger: 0.08,
            ease: EASE.glide,
            overwrite: true,
        });
    }, [team]);

    return (
        <ul className="flex shrink-0 gap-[1.5vh]">
            {members.map((m) => {
                const person = findPerson(members, m.slug, locale);
                const on = team.includes(m.slug);

                return person ? (
                    <li
                        key={m.slug}
                        ref={(el) => { if (el) heads.current.set(m.slug, el); }}
                        aria-hidden={!on}
                        className={on ? "block" : "hidden"}
                    >
                        <PersonHead person={person} active={on} gridSize={0.3} className="h-[14vh] w-[14vh]" />
                    </li>
                ) : null;
            })}
        </ul>
    );
}
