import type { Resolved } from "@/lib/i18n/localize";
import authored from "@/app/[locale]/expertise/expertise.json";

export const authoredExpertise = authored;

export type Expertise = Resolved<(typeof authored)[number]>;
