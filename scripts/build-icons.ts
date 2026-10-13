import { Glob } from "bun";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dir, "..");
// Iconoir ships at 1.5, the same rewrite muse applies to its own bundle
const STROKE = "2";

const APPS = [
    { scan: "apps/backoffice/src", out: "apps/backoffice/src/lib/iconoir.json" },
    { scan: "apps/client", out: "apps/client/lib/iconoir.json" },
];

function namesIn(dir: string) {
    const names = new Set<string>();

    for (const file of new Glob("**/*.{ts,tsx,svelte}").scanSync({ cwd: join(ROOT, dir) })) {
        if (file.includes("node_modules") || file.includes("muse/"))
            continue;

        for (const match of readFileSync(join(ROOT, dir, file), "utf8").matchAll(/iconoir:([a-z0-9-]+)/g))
            names.add(match[1]);
    }

    return [...names].sort();
}

for (const app of APPS) {
    const names = namesIn(app.scan);
    const data = await fetch(`https://api.iconify.design/iconoir.json?icons=${names.join(",")}`).then((r) => r.json());
    const missing = names.filter((name) => !data.icons?.[name]);

    if (missing.length)
        throw new Error(`not in iconoir: ${missing.join(", ")}`);

    for (const icon of Object.values<{ body: string }>(data.icons))
        icon.body = icon.body.replace(/stroke-width="[\d.]+"/g, `stroke-width="${STROKE}"`);

    writeFileSync(join(ROOT, app.out), JSON.stringify({ prefix: "iconoir", width: 24, height: 24, icons: data.icons }) + "\n");
    console.log(`${app.out}: ${names.length} icons`);
}
