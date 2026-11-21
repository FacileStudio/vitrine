const KEY = "facile-visitor";
const SINCE_KEY = "facile-visitor-since";
const OPT_OUT_KEY = "facile-visitor-optout";
const OPT_OUT_EVENT = "facile-visitor-optout";

// 13 months, the CNIL cap on an audience-measurement identifier
const ID_LIFETIME_MS = 395 * 24 * 60 * 60 * 1000;

// private windows and blocked site data make storage throw, and counting a visit is never worth an error
const read = (key: string) => {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
};

const write = (key: string, value: string | null) => {
    try {
        if (value === null)
            localStorage.removeItem(key);
        else
            localStorage.setItem(key, value);
    } catch {}
};

export const isOptedOut = () => read(OPT_OUT_KEY) === "1";

export function setOptedOut(optedOut: boolean) {
    write(OPT_OUT_KEY, optedOut ? "1" : null);

    if (optedOut) {
        write(KEY, null);
        write(SINCE_KEY, null);
    }

    window.dispatchEvent(new Event(OPT_OUT_EVENT));
}

export function subscribeOptOut(onChange: () => void) {
    window.addEventListener("storage", onChange);
    window.addEventListener(OPT_OUT_EVENT, onChange);

    return () => {
        window.removeEventListener("storage", onChange);
        window.removeEventListener(OPT_OUT_EVENT, onChange);
    };
}

export function visitorKey() {
    const key = read(KEY);
    const since = Number(read(SINCE_KEY));

    if (key && since && Date.now() - since < ID_LIFETIME_MS)
        return key;

    const fresh = `visitor_${crypto.randomUUID().replace(/-/g, "")}`;

    write(KEY, fresh);
    write(SINCE_KEY, String(Date.now()));
    return fresh;
}
