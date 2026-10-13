import type { RouterOutputs } from '@repo/trpc';

export type ProcessStep = RouterOutputs['process']['get'];
export type StudioMemberSummary = RouterOutputs['studio']['list'][number];
