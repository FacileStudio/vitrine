type Loader = {
    load: (url: string, onLoad: (data: unknown) => void, onProgress?: (event: ProgressEvent) => void, onError?: (error: unknown) => void) => unknown;
};

const files = new Map<string, { loaded: number; total: number; done: boolean }>();
const wrapped = new WeakSet<Loader>();

export function trackBytes(loader: Loader) {
    if (wrapped.has(loader))
        return;

    const load = loader.load.bind(loader);

    wrapped.add(loader);
    loader.load = (url, onLoad, onProgress, onError) => {
        const file = { loaded: 0, total: 0, done: false };

        files.set(url, file);

        return load(
            url,
            (data) => {
                file.total = file.loaded;
                file.done = true;
                onLoad(data);
            },
            (event) => {
                file.loaded = event.loaded;
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

// the loader calls onLoad after parsing and textures, so this is later than the last byte
export function bytesDone() {
    return files.size > 0 && [...files.values()].every((file) => file.done);
}

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
