type Loader = {
    load: (url: string, onLoad: (data: unknown) => void, onProgress?: (event: ProgressEvent) => void, onError?: (error: unknown) => void) => unknown;
};

const files = new Map<string, { loaded: number; total: number }>();
const wrapped = new WeakSet<Loader>();

export function trackBytes(loader: Loader) {
    if (wrapped.has(loader))
        return;

    const load = loader.load.bind(loader);

    wrapped.add(loader);
    loader.load = (url, onLoad, onProgress, onError) => load(
        url,
        (data) => {
            const file = files.get(url);

            if (file)
                file.total = file.loaded;
            onLoad(data);
        },
        (event) => {
            files.set(url, { loaded: event.loaded, total: event.total });
            onProgress?.(event);
        },
        onError,
    );
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
