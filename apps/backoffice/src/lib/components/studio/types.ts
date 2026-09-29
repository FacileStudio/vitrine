import type { RouterOutputs } from '@repo/trpc';

export type StudioMember = RouterOutputs['studio']['get'];
export type ProjectOption = RouterOutputs['studio']['projectOptions'][number];

export const LOCALES = ['fr', 'en', 'es', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const inputClass = 'input';
