// copy marks its important words with *asterisks*: those keep the full colour and the
// rest sits at 80%, through opacity so it follows whatever colour the heading already has
export default function Emphasis({ text }: { text: string }) {
    return (
        <>
            {text.split(/\*(.+?)\*/).map((part, i) =>
                i % 2 ? part : part && <span key={i} className="opacity-75">{part}</span>
            )}
        </>
    );
}
