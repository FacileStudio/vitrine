// core count is not a GPU: only the renderer name tells a software context apart
type GpuTier = "none" | "software" | "hardware";

const SOFTWARE = /swiftshader|llvmpipe|software|basic render|microsoft basic/i;

let cached: GpuTier | null = null;

function gpuTier(): GpuTier {
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

    gl.getExtension("WEBGL_lose_context")?.loseContext();

    return (cached = SOFTWARE.test(name) ? "software" : "hardware");
}

export const prefersNoWebGL = () => gpuTier() !== "hardware";
