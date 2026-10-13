import Line from "@/components/facile/textReveal";

const ROWS = ["ABCDEFGHIJKL", "MNOPQRSTUVW", "XYZ"].map((row) => row.split(""));

export default function AlphabetRows({ className }: { className?: string }) {
    return (
        <>
            {ROWS.map((row) => (
                <Line key={row[0]} className={className}>
                    {row.map((l) => (
                        <span key={l}>{l}{l.toLowerCase()}</span>
                    ))}
                </Line>
            ))}
        </>
    );
}
