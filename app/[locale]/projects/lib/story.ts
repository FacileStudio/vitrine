import projects from "../projects.json";
import studio from "../../studio/studio.json";

export interface Project {
    slug: string;
    name: string;
    tier: number;
    weeks: number;
    link?: string;
    image: string;
    video?: string;
    gallery: string[];
    description: string;
    techStack?: string[];
    date: string;
    challenge?: string;
    services: string[];
    team: string[];
    notes: string[];
}

export type Member = (typeof studio)[number];

export const allProjects = projects as Project[];

export type Block =
    | { kind: "cover"; src: string; cols: number }
    | { kind: "intro" }
    | { kind: "label"; text: string; index: number }
    | { kind: "note"; title: string; text: string; media: string[] }
    | { kind: "col"; media: string[] }
    | { kind: "big"; src: string; media: string[]; smalls: "top" | "bottom" }
    | { kind: "full"; src: string }
    | { kind: "end" };

export const isVideoFile = (src: string) => /\.(mp4|webm|ogg|mov)$/i.test(src);

export const team = (p: Project): Member[] =>
    p.team
        .map((slug) => studio.find((m) => m.slug === slug))
        .filter((m): m is Member => m != null);

export function buildStory(p: Project): Block[] {
    const pool = [...(p.video ? [p.video] : []), ...p.gallery].filter(Boolean);
    const media = pool.length ? pool : [p.image];

    let cursor = 0;
    const take = (n: number) =>
        Array.from({ length: n }, () => media[cursor++ % media.length]);

    const chapters = p.services.length ? p.services : ["Selected work"];
    const note = (i: number) => p.notes[i % p.notes.length] ?? p.description;

    const blocks: Block[] = [
        { kind: "cover", src: p.image, cols: 3 },
        { kind: "intro" },
    ];

    chapters.forEach((chapter, i) => {
        blocks.push({ kind: "label", text: chapter, index: i + 1 });
        blocks.push({ kind: "note", title: chapter, text: note(i), media: take(2) });

        if (i % 2 === 0) {
            blocks.push({ kind: "col", media: take(3) });
            blocks.push({ kind: "big", src: take(1)[0], media: take(2), smalls: "bottom" });
        } else {
            blocks.push({ kind: "full", src: take(1)[0] });
            blocks.push({ kind: "big", src: take(1)[0], media: take(2), smalls: "top" });
        }

        blocks.push({ kind: "col", media: take(3) });
    });

    blocks.push({ kind: "end" });

    return blocks;
}
