import { error } from "@sveltejs/kit";
import { CLIENT_PROJECTS } from "$lib/data";
import type { EntryGenerator, PageLoad } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = () => CLIENT_PROJECTS.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
  const project = CLIENT_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    throw error(404, `Projet introuvable : ${params.slug}`);
  }
  return {
    project,
  };
};
