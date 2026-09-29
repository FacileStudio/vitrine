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

<Section title="Projets" icon="lucide:folder-kanban" description="Les projets affichés sur la page du membre">
	<div class="flex flex-wrap gap-2">
		{#each options as project (project.slug)}
			<button
				type="button"
				onclick={() => toggle(project.slug)}
				aria-pressed={member.projects.includes(project.slug)}
				class="btn aria-pressed:bg-white aria-pressed:text-black"
			>
				{project.name}
			</button>
		{/each}
	</div>
</Section>
