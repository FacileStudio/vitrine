const port = parseInt(process.env.PORT || "3000");
const buildDir = process.env.BUILD_DIR || "./build";

Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);
    const file = Bun.file(buildDir + url.pathname);
    if (await file.exists()) return new Response(file);
    return new Response(Bun.file(buildDir + "/index.html"));
  },
});

console.log(`Static server listening on :${port}`);
