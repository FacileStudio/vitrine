import { error } from "@sveltejs/kit";
import { CLIENT_PROJECTS } from "$lib/data";
import { PREFIXED_LOCALES } from "$lib/i18n";
import type { EntryGenerator, PageLoad } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = () =>
  [undefined, ...PREFIXED_LOCALES].flatMap((lang) => CLIENT_PROJECTS.map(({ slug }) => ({ lang, slug })));

export const load: PageLoad = ({ params }) => {
  const project = CLIENT_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    error(404, `Not found: ${params.slug}`);
  }
  return {
    project,
  };
};
