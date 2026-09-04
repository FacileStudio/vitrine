// the outbound arrow, which lifts away from the cursor when its link is hovered.
// It reads `group-hover`, so whatever holds it needs `group` on it
export default function Arrow() {
    return (
        <span className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
    );
}
