import type { RouterOutputs } from '@repo/trpc';

export type Project = RouterOutputs['projects']['get'];
export type ProjectOptions = RouterOutputs['projects']['options'];

export const LOCALES = ['fr', 'en', 'es', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const inputClass =
    'w-full rounded-md bg-stone-700/10 px-4 py-2.5 p text-white focus:outline-2 focus:outline-white/10';
