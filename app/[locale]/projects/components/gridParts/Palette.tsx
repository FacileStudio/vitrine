import type { PartProps, Swatch } from "../../lib/story";
import { Block, Cell } from "./bento";

const channels = (hex: string) => {
    const raw = hex.replace("#", "").trim();
    const full = raw.length === 3 ? raw.split("").map((c) => c + c).join("") : raw;
    const value = parseInt(full, 16);

    return [(value >> 16) & 255, (value >> 8) & 255, value & 255] as const;
};

const round = (n: number, digits = 0) => Number(n.toFixed(digits));

const hsvOf = ([r, g, b]: readonly number[]) => {
    const [R, G, B] = [r / 255, g / 255, b / 255];
    const max = Math.max(R, G, B);
    const min = Math.min(R, G, B);
    const delta = max - min;

    let hue = 0;

    if (delta) {
        if (max === R)
            hue = ((G - B) / delta) % 6;
        else if (max === G)
            hue = (B - R) / delta + 2;
        else
            hue = (R - G) / delta + 4;

        hue = (hue * 60 + 360) % 360;
    }

    return `(${round(hue, 1)}°, ${round(max ? (delta / max) * 100 : 0, 1)}%, ${round(max * 100, 1)}%)`;
};

const cmykOf = ([r, g, b]: readonly number[]) => {
    const [R, G, B] = [r / 255, g / 255, b / 255];
    const k = 1 - Math.max(R, G, B);
    const ink = (c: number) => (k === 1 ? 0 : round(((1 - c - k) / (1 - k)) * 100));

    return `(${ink(R)}%, ${ink(G)}%, ${ink(B)}%, ${round(k * 100)}%)`;
};

// dark text on a light chip and the reverse, so a swatch stays readable whatever
// the brand throws at it
const readable = ([r, g, b]: readonly number[]) =>
    (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.6 ? "#0E0F10" : "#F9F1E7";

function Value({ label, value, tone }: { label: string; value: string; tone: string }) {
    return (
        <span className="flex gap-[0.4em]">
            <span style={{ color: tone, opacity: 0.45 }}>{label}:</span>
            <span style={{ color: tone, opacity: 0.75 }}>{value}</span>
        </span>
    );
}

const spanOf = (i: number) => (i % 4 === 0 || i % 4 === 3 ? 2 : 1);

function Chip({ swatch, span }: { swatch: Swatch; span: number }) {
    const rgb = channels(swatch.hex);
    const tone = readable(rgb);

    return (
        <div
            style={{ background: swatch.hex, color: tone, gridColumn: `span ${span}` }}
            className="flex min-h-0 min-w-0 flex-col justify-between gap-4 rounded-md p-8"
        >
            <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">{swatch.label}</span>
                <span style={{ opacity: 0.6 }} className="text-lg font-medium">
                    {swatch.note ?? swatch.hex}
                </span>
            </div>

            <div className="flex flex-col gap-1 text-sm font-medium leading-tight">
                <Value label="RGB" value={swatch.rgb ?? `(${rgb.join(", ")})`} tone={tone} />
                <Value label="HSV / HSB" value={swatch.hsv ?? hsvOf(rgb)} tone={tone} />
                <Value label="CMYK" value={swatch.cmyk ?? cmykOf(rgb)} tone={tone} />
            </div>
        </div>
    );
}

export default function Palette({ block, ref }: PartProps) {
    const swatches = block.swatches ?? [];

    return (
        <Block ref={ref} cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1">
                <div className="flex h-full w-full flex-col">
                    <span className="px-4 pt-20 pb-4 text-md text-white/50">Color palette</span>

                    <div className="grid min-h-0 flex-1 grid-cols-3 gap-[var(--gap)]">
                        {swatches.map((s, i) => (
                            <Chip key={s.label} swatch={s} span={spanOf(i)} />
                        ))}
                    </div>
                </div>
            </Cell>
        </Block>
    );
}
