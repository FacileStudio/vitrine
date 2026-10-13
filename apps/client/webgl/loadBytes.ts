type Loader = {
    load: (url: string, onLoad: (data: unknown) => void, onProgress?: (event: ProgressEvent) => void, onError?: (error: unknown) => void) => unknown;
};

type File = { loaded: number; total: number; done: boolean };

const files = new Map<string, File>();
const wrapped = new WeakSet<Loader>();
let lastByteAt = typeof performance === "undefined" ? 0 : performance.now();

function register(key: string) {
    const file = { loaded: 0, total: 0, done: false };

    files.set(key, file);

    return file;
}

function received(file: File, loaded: number) {
    file.loaded = loaded;
    lastByteAt = performance.now();
}

export function trackBytes(loader: Loader) {
    if (wrapped.has(loader))
        return;

    const load = loader.load.bind(loader);

    wrapped.add(loader);
    loader.load = (url, onLoad, onProgress, onError) => {
        const file = register(url);

        return load(
            url,
            (data) => {
                file.total = file.loaded;
                file.done = true;
                onLoad(data);
            },
            (event) => {
                received(file, event.loaded);
                file.total = event.total;
                onProgress?.(event);
            },
            (error) => {
                file.done = true;
                onError?.(error);
            },
        );
    };
}

// a model registers only once its canvas mounts, so without a sized placeholder the bar would fill on the images alone
export async function expectFile(url: string) {
    if (files.has(url))
        return;

    const file = register(url);
    const res = await fetch(url, { method: "HEAD" }).catch(() => null);

    if (!file.loaded)
        file.total = Number(res?.headers.get("content-length")) || 0;
}

const viaImage = (url: string) => new Promise<void>((resolve) => {
    const img = new Image();

    img.onload = img.onerror = () => resolve();
    img.src = url;
});

// the body lands in the http cache, so the element that asks for it later gets it without a request
export async function trackFetch(url: string) {
    if (files.has(url))
        return;

    const file = register(url);

    try {
        const res = await fetch(url);
        const reader = res.body?.getReader();

        file.total = Number(res.headers.get("content-length")) || 0;

        while (reader) {
            const { done, value } = await reader.read();

            if (done)
                break;

            received(file, file.loaded + value.byteLength);
        }
    } catch {
        // a cross-origin file without cors headers still loads as an image, only without byte counts
        await viaImage(url);
    }

    file.total = file.loaded;
    file.done = true;
}

export function trackPromise(key: string, promise: Promise<unknown>) {
    const file = register(key);
    const settle = () => {
        file.done = true;
    };

    promise.then(settle, settle);
}

// the loader calls onLoad after parsing and textures, so this is later than the last byte
export function bytesDone() {
    return files.size > 0 && [...files.values()].every((file) => file.done);
}

export const fileKeys = () => [...files.keys()];

// bytes received as a share of the file's announced size, in percent; an unsized file reads 0 until it is done
export function filePercent(key: string) {
    const file = files.get(key);

    if (!file)
        return 0;

    return file.done ? 100 : file.total ? Math.round((file.loaded / file.total) * 100) : 0;
}

export const idleFor = () => performance.now() - lastByteAt;

export function bytesProgress() {
    let loaded = 0;
    let total = 0;

    for (const file of files.values()) {
        loaded += file.loaded;
        total += Math.max(file.total, file.loaded);
    }

    // bytes received as a share of the bytes announced so far, in percent
    return total ? (loaded / total) * 100 : 0;
}
