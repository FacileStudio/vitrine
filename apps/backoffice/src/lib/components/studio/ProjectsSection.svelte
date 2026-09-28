<script lang="ts">
	import Section from './Section.svelte';
	import type { ProjectOption, StudioMember } from './types';

	let { member = $bindable(), options }: { member: StudioMember; options: ProjectOption[] } =
		$props();

	function toggle(slug: string) {
		member.projects = member.projects.includes(slug)
			? member.projects.filter((p) => p !== slug)
			: [...member.projects, slug];
	}
</script>

<Section title="Projets" description="Les projets affichés sur la page du membre">
	<div class="flex flex-wrap gap-2">
		{#each options as project (project.slug)}
			<button
				type="button"
				onclick={() => toggle(project.slug)}
				class="p px-3 py-1.5 rounded-xl {member.projects.includes(project.slug)
					? 'bg-white text-black'
					: 'bg-white/[0.05] text-white/58 hover:text-white'}"
			>
				{project.name}
			</button>
		{/each}
	</div>
</Section>
