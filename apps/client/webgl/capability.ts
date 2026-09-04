// What the machine can actually draw, asked once and cached.
//
// Core count is not a GPU: a desktop with integrated graphics and eight cores
// reports as high-end and then renders a raymarcher at two frames a second. The
// question worth asking is which renderer the context reports — a software one
// means no GPU is involved and the answer is a still image, not a smaller canvas.
export type GpuTier = "none" | "software" | "hardware";

const SOFTWARE = /swiftshader|llvmpipe|software|basic render|microsoft basic/i;

let cached: GpuTier | null = null;

export function gpuTier(): GpuTier {
    if (cached)
        return cached;

    if (typeof window === "undefined")
        return "hardware";

    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl") ?? canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;

    if (!gl)
        return (cached = "none");

    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const name = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";

    // the context is disposable; holding it would spend one of the browser's few
    gl.getExtension("WEBGL_lose_context")?.loseContext();

    return (cached = SOFTWARE.test(name) ? "software" : "hardware");
}

/** true when running the scene would cost more than it is worth */
export const prefersNoWebGL = () => gpuTier() !== "hardware";
