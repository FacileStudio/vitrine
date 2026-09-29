import { fillTexts } from './gridOps';
import type { Project } from './types';

// the API leaves empty lists and locales out, the editors need something to bind to
export function prepare(project: Project) {
	project.story.forEach((s) => (s.by ??= []));
	project.challenge ??= { en: '', fr: '', es: '', de: '' };
	project.bucket = [...new Map(project.bucket.map((item) => [item.id, item])).values()];
	// done up front so merely opening an item dialog does not count as an unsaved change
	[...project.story.flatMap((s) => s.layout.items), ...project.bucket].forEach(fillTexts);

	return project;
}

// an emptied input is "" but the API expects the field left out
export function infoInput({ story, bucket, ...info }: Project) {
	const hasChallenge = Object.values(info.challenge ?? {}).some((text) => text.trim());

	return {
		...info,
		link: info.link?.trim() || undefined,
		challenge: hasChallenge ? info.challenge : undefined,
	};
}

// zod input errors arrive as a JSON list of issues, the API's own checks as a plain sentence
export function describe(err: unknown) {
	const message = (err as Error).message;

	try {
		const issues: Array<{ path: (string | number)[] }> = JSON.parse(message);
		return `Champs invalides : ${issues.map((issue) => issue.path.join('.')).join(', ')}`;
	} catch {
		return message || "Erreur lors de l'enregistrement";
	}
}
