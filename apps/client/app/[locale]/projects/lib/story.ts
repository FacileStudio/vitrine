import { buildStory, type Chapter, type StoryBlock, type StorySection } from "@/components/facile/story/types";
import { member, team, type Project } from "./projects";

export type { StoryBlock, StorySection };

// the three blocks that speak for the project rather than for themselves: their
// content is the project's, so it is filled in here and the renderers stay blind
// to what a project is. Anything the json authors wins over the default
function hydrate(p: Project, b: StoryBlock): StoryBlock {
    if (b.type === "cover")
        return { ...b, media: b.media?.length ? b.media : [p.image], effect: b.effect ?? p.coverEffect };

    if (b.type === "intro")
        return {
            eyebrow: `${p.date}  —  ${p.weeks} weeks`,
            title: p.name,
            text: p.challenge ?? p.description,
            tags: p.services,
            logos: p.techStack,
            people: team(p).map((m) => ({ name: m.name, role: m.role, avatar: m.avatar, highlight: m.highlight, model: m.model, scale: m.scale, roughness: m.roughness, hair: m.hair })),
            link: p.link,
            ...b,
        };

    if (b.type === "end")
        return { eyebrow: `End of ${p.name}`, title: "Thanks for scrolling.", link: p.link, ...b };

    return b;
}

// a project's story, ready for the track: authored when there is one, laid out
// automatically when there isn't
export function projectStory(p: Project): Chapter[] {
    const story = p.story?.length ? p.story : autoStory(p);

    return buildStory(
        story.map((section) => ({ ...section, blocks: section.blocks.map((b) => hydrate(p, b)) })),
        p.gallery,
        member,
    );
}

// fallback for a project that has no story yet — one chapter per service, then a
// closing chapter with whatever media is left, laid out largest-first
function autoStory(p: Project): StorySection[] {
    const pool = [...new Set([p.video, ...p.gallery].filter(Boolean) as string[])];
    const take = (n: number) => pool.splice(0, n);

    const story: StorySection[] = [{ blocks: [{ type: "cover" }, { type: "intro" }] }];

    p.services.forEach((service, i) => {
        if (pool.length < 4)
            return;

        story.push({
            title: service,
            blocks: [
                { type: "note", title: service, text: p.notes[i] ?? p.description, media: take(1) },
                { type: "col", media: take(3) },
            ],
        });
    });

    const closing: StoryBlock[] = [];

    while (pool.length) {
        if (pool.length >= 5) closing.push({ type: "mosaic", media: take(5) });
        else if (pool.length >= 3) closing.push({ type: "col", media: take(3) });
        else closing.push({ type: "full", media: take(1) });
    }

    closing.push({ type: "end" });
    story.push({ blocks: closing });

    return story;
}
