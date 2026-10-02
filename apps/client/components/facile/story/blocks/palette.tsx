import type { BlockProps, Swatch } from "../types";
import { Block, Cell } from "../bento";

const HEX_RE = /^#?[0-9a-f]{3,8}$/i;

const channels = (hex: string) => {
    if (!HEX_RE.test(hex.trim()))
        return null;

    const raw = hex.trim().replace("#", "");
    const full = (raw.length < 6 ? raw.replace(/./g, (c) => c + c) : raw).slice(0, 6);
    const value = Number.parseInt(full, 16) || 0;

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

const readable = ([r, g, b]: readonly number[]) =>
    (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.6 ? "#0E0F10" : "#F9F1E7";

function Value({ label, value, className = "" }: { label: string; value: string; className?: string }) {
    return (
        <div className={`tagText flex gap-[0.4em] leading-tight ${className}`}>
            <span style={{ opacity: 0.45 }}>{label}:</span>
            <span style={{ opacity: 0.75 }}>{value}</span>
        </div>
    );
}

const spanOf = (i: number) => (i % 4 === 0 || i % 4 === 3 ? "col-span-3 md:col-span-2" : "col-span-2 md:col-span-1");

function Chip({ swatch, span }: { swatch: Swatch; span: string }) {
    const rgb = channels(swatch.hex);
    const tone = swatch.textColor ?? (rgb ? readable(rgb) : "#0E0F10");

    return (
        <div
            style={{ background: swatch.hex, color: tone }}
            className={`${span} flex min-h-0 min-w-0 flex-col justify-between gap-[1.5vh] rounded-fc p-[3vh] pr-2 lg:pr-[3vh]`}
        >
            <div className="flex flex-col gap-fc">
                <span className="subtitle">{swatch.label}</span>
                <div style={{ opacity: 0.6 }} className="tagText">
                    {swatch.note ?? swatch.hex}
                </div>
            </div>

            <div className="flex flex-col gap-[0.3vh]">
                <Value label="RGB" className="max-md:hidden" value={swatch.rgb ?? (rgb ? `(${rgb.join(", ")})` : "—")} />
                <Value label="HSV/HSB" value={swatch.hsv ?? (rgb ? hsvOf(rgb) : "—")} />
                <Value label="CMYK" className="max-md:hidden" value={swatch.cmyk ?? (rgb ? cmykOf(rgb) : "—")} />
            </div>
        </div>
    );
}

export default function Palette({ block }: BlockProps) {
    const swatches = block.swatches ?? [];

    return (
        <Block cols={block.cols} tall>
            <Cell col="1 / -1" row="1 / -1">
                <div className="flex h-full w-full flex-col">
                    <p className="subtext px-[1.5vh] pt-[6vh] pb-[1.5vh] text-background">Color palette</p>

                    <div className="grid min-h-0 flex-1 grid-cols-5 md:grid-cols-3 gap-[var(--gap)]">
                        {swatches.map((s, i) => (
                            <Chip key={s.label} swatch={s} span={spanOf(i)} />
                        ))}
                    </div>
                </div>
            </Cell>
        </Block>
    );
}
