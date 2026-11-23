import { ImageBitmapLoader } from "three";
import type { useGLTF } from "@react-three/drei";

type Loader = Parameters<NonNullable<Parameters<typeof useGLTF>[3]>>[0];
type Plugin = Parameters<Loader["register"]>[0];
type Parser = Parameters<Plugin>[0];

// three-stdlib hands every Safari-like UA (all iOS browsers) the <img> texture loader, which has no document in a worker, so every texture fails and the heads render white
const workerTextures: Plugin = (parser: Parser) => {
    if (typeof document === "undefined" && typeof createImageBitmap !== "undefined") {
        parser.textureLoader = new ImageBitmapLoader(parser.options.manager);
        parser.textureLoader.setCrossOrigin(parser.options.crossOrigin);
        parser.textureLoader.setRequestHeader(parser.options.requestHeader);
    }

    return { name: "workerTextures" } as ReturnType<Plugin>;
};

export function bitmapTextures(loader: Loader) {
    loader.unregister(workerTextures).register(workerTextures);
}
