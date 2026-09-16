// Fails when the locales disagree, so a missing translation is caught before a visitor
// finds it. Run from apps/client: bun scripts/check-i18n.ts
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { defaultLocale, locales } from "../lib/i18n/locales";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const MESSAGES = join(ROOT, "locales");

// authored content that carries copy; structure in them (slugs, media, colours) stays plain
const DATA_FILES = [
    "app/[locale]/projects/projects.json",
    "app/[locale]/studio/studio.json",
    "app/[locale]/suite/suite.json",
    "app/[locale]/suite/architecture.json",
    "app/[locale]/process/process.json",
];

// keys whose string values are always visitor-facing copy, wherever they sit in a data file
const COPY_FIELDS = new Set([
    "bio", "challenge", "description", "eyebrow", "facts", "footer", "kicker",
    "labels", "linkLabel", "notes", "role", "tagline", "text", "title",
]);

const problems: string[] = [];

type Json = null | boolean | number | string | Json[] | { [key: string]: Json };

const readJson = (path: string): Json => JSON.parse(readFileSync(path, "utf8"));

// every leaf as "a.b.0.c" -> value, so two locales compare key by key
const flatten = (value: Json, prefix = "", out = new Map<string, Json>()) => {
    if (Array.isArray(value))
        value.forEach((v, i) => flatten(v, `${prefix}${i}.`, out));
    else if (value && typeof value === "object")
        Object.entries(value).forEach(([k, v]) => flatten(v, `${prefix}${k}.`, out));
    else
        out.set(prefix.slice(0, -1), value);
    return out;
};

// ICU argument names ("{count, plural, ...}" -> "count"); a translation must use the same ones.
// Uses brace-depth tracking so inner values inside plural/select forms ("one {project}")
// are not mistaken for placeholders.
const placeholders = (text: string) => {
    const args = new Set<string>();
    let i = 0;
    while (i < text.length) {
        if (text[i] === "{") {
            let depth = 1;
            let j = i + 1;
            while (j < text.length && depth > 0) {
                if (text[j] === "{") depth++;
                else if (text[j] === "}") depth--;
                if (depth > 0) j++;
            }
            const inner = text.slice(i + 1, j);
            const word = inner.match(/^\s*([A-Za-z0-9_]+)/);
            if (word) args.add(word[1]);
            i = j + 1;
        } else {
            i++;
        }
    }
    return [...args].sort().join(",");
};

function checkMessages() {
    const namespaces = readdirSync(join(MESSAGES, defaultLocale)).filter((f) => f.endsWith(".json"));

    for (const file of namespaces) {
        const reference = flatten(readJson(join(MESSAGES, defaultLocale, file)));

        for (const locale of locales) {
            let messages: Map<string, Json>;
            try {
                messages = flatten(readJson(join(MESSAGES, locale, file)));
            } catch {
                problems.push(`locales/${locale}/${file}: missing or not valid JSON`);
                continue;
            }

            for (const [key, value] of reference) {
                if (!messages.has(key)) {
                    problems.push(`locales/${locale}/${file}: missing "${key}"`);
                    continue;
                }

                const translated = messages.get(key);
                if (typeof translated === "string" && translated.trim() === "")
                    problems.push(`locales/${locale}/${file}: empty "${key}"`);

                if (typeof value === "string" && typeof translated === "string" && placeholders(value) !== placeholders(translated))
                    problems.push(`locales/${locale}/${file}: "${key}" uses {${placeholders(translated)}}, ${defaultLocale} uses {${placeholders(value)}}`);
            }

            for (const key of messages.keys())
                if (!reference.has(key))
                    problems.push(`locales/${locale}/${file}: "${key}" is not in ${defaultLocale}`);
        }
    }

    for (const locale of locales)
        for (const file of readdirSync(join(MESSAGES, locale)).filter((f) => f.endsWith(".json")))
            if (!namespaces.includes(file))
                problems.push(`locales/${locale}/${file}: namespace does not exist in ${defaultLocale}`);
}

function checkData(file: string, value: Json, path: string, field?: string) {
    if (Array.isArray(value)) {
        value.forEach((v, i) => checkData(file, v, `${path}[${i}]`, field));
        return;
    }

    if (typeof value === "string") {
        if (field && COPY_FIELDS.has(field) && value.trim() !== "")
            problems.push(`${file}: ${path} is plain copy, author it as { ${locales.join(", ")} }`);
        return;
    }

    if (!value || typeof value !== "object")
        return;

    const keys = Object.keys(value);
    const localeKeys = keys.filter((k) => (locales as readonly string[]).includes(k));

    if (localeKeys.length === 0) {
        for (const [k, v] of Object.entries(value))
            checkData(file, v, `${path}.${k}`, k);
        return;
    }

    if (localeKeys.length !== locales.length || keys.length !== locales.length) {
        problems.push(`${file}: ${path} is translated for [${localeKeys.join(", ")}] only, or mixes locales with other keys`);
        return;
    }

    for (const locale of locales) {
        const translated = value[locale];
        if (typeof translated === "string" && translated.trim() === "")
            problems.push(`${file}: ${path}.${locale} is empty`);
    }
}

checkMessages();
for (const file of DATA_FILES)
    checkData(file, readJson(join(ROOT, file)), "$");

if (problems.length) {
    console.error(problems.join("\n"));
    console.error(`\n${problems.length} i18n problem(s)`);
    process.exit(1);
}

console.log(`i18n ok: ${locales.length} locales, messages and ${DATA_FILES.length} data files agree`);
