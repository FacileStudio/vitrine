export default function LegalFacts({ facts }: { facts: [label: string, value: string][] }) {
    return (
        <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2">
            {facts.map(([label, value]) => (
                <div key={label} className="contents">
                    <dt><p className="text-background/50">{label}</p></dt>
                    <dd className="lead">{value}</dd>
                </div>
            ))}
        </dl>
    );
}
