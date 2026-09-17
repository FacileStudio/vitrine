// reads group-hover, so whatever holds it needs the group class
export default function Arrow() {
    return (
        <span className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
    );
}
