import type { RouterOutputs } from '@repo/trpc';

export type StudioMember = RouterOutputs['studio']['get'];
export type ProjectOption = RouterOutputs['studio']['projectOptions'][number];

export const LOCALES = ['fr', 'en', 'es', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const inputClass =
	'w-full rounded-xl bg-slate-100 px-3 py-2 p text-slate-900 focus:outline-2 focus:outline-slate-900';
