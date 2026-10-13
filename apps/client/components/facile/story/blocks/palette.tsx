import type { BlockProps, Swatch } from "../types";
import { Block, Cell } from "../bento";
import { channels, cmykOf, hsvOf, readable } from "@/lib/color";

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
