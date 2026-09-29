import type { RouterOutputs } from '@repo/trpc';

export type Project = RouterOutputs['projects']['get'];
export type ProjectOptions = RouterOutputs['projects']['options'];

export const LOCALES = ['fr', 'en', 'es', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const inputClass = 'input';

export type ProjectSummary = RouterOutputs['projects']['list'][number];
export type StudioMemberSummary = RouterOutputs['studio']['list'][number];
