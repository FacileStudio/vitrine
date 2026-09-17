export default function Emphasis({ text }: { text: string }) {
    return (
        <>
            {text.split(/\*(.+?)\*/).map((part, i) =>
                i % 2 ? part : part && <span key={i} className="opacity-75">{part}</span>
            )}
        </>
    );
}
