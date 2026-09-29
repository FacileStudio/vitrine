import { siteAsset } from '$lib/site';
import type { Project } from '../../types';

type Block = Project['story'][number]['blocks'][number];

// a block's media holds gallery positions or direct paths, the same resolution the site does in buildStory
export const blockMedia = (project: Project, block: Block) =>
	(block.media ?? [])
		.map((ref) => (typeof ref === 'number' ? project.gallery[ref] : ref))
		.filter((src): src is string => Boolean(src))
		.map(siteAsset);

export const isVideo = (src: string) => /\.(mp4|webm|mov)(\?|$)/i.test(src);
