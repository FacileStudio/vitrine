const HEX_RE = /^#?[0-9a-f]{3,8}$/i;

const round = (n: number, digits = 0) => Number(n.toFixed(digits));

export const channels = (hex: string) => {
    if (!HEX_RE.test(hex.trim()))
        return null;

    const raw = hex.trim().replace("#", "");
    const full = (raw.length < 6 ? raw.replace(/./g, (c) => c + c) : raw).slice(0, 6);
    const value = Number.parseInt(full, 16) || 0;

    return [(value >> 16) & 255, (value >> 8) & 255, value & 255] as const;
};

export const hsvOf = ([r, g, b]: readonly number[]) => {
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

export const cmykOf = ([r, g, b]: readonly number[]) => {
    const [R, G, B] = [r / 255, g / 255, b / 255];
    const k = 1 - Math.max(R, G, B);
    const ink = (c: number) => (k === 1 ? 0 : round(((1 - c - k) / (1 - k)) * 100));

    return `(${ink(R)}%, ${ink(G)}%, ${ink(B)}%, ${round(k * 100)}%)`;
};

// relative luminance decides whether the swatch label reads better dark or light
export const readable = ([r, g, b]: readonly number[]) =>
    (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.6 ? "#0E0F10" : "#F9F1E7";
