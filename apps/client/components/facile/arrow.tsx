// U+FE0E asks for the text glyph: without it Apple platforms draw the arrow as a colour emoji
export const ARROW = "\u2197\uFE0E";

// reads group-hover, so whatever holds it needs the group class
export default function Arrow() {
    return (
        <span className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">{ARROW}</span>
    );
}
