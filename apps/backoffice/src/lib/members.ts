import { trpc } from '$lib/trpc';
import type { StudioMemberSummary } from './components/projects/types';

let cache: Promise<Map<string, StudioMemberSummary>> | null = null;

// every page shows the same few members, one request serves them all and a failure is retried next time
export const loadMembers = () =>
	(cache ??= trpc.studio.list
		.query()
		.then((list) => new Map(list.map((member) => [member.slug, member])))
		.catch((err) => {
			cache = null;
			throw err;
		}));
