import { error } from "@sveltejs/kit";
import { CLIENT_PROJECTS } from "$lib/data";
import type { EntryGenerator, PageLoad } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = () => {
  return [
    { slug: "marcel" },
    { slug: "laura-herve" },
    { slug: "projet-zero" },
    { slug: "bulle" },
    { slug: "evelyne-crea" },
    { slug: "retro-festival" },
  ];
};

export const load: PageLoad = ({ params }) => {
  const project = CLIENT_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    throw error(404, `Projet introuvable : ${params.slug}`);
  }
  return {
    project,
  };
};
