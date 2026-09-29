<script lang="ts">
	type Member = { slug: string; name: string; highlight: string };

	let { team, members }: { team: string[]; members: Map<string, Member> } = $props();
</script>

<span class="flex items-center gap-1">
	{#each team as slug (slug)}
		{@const member = members.get(slug)}
		<span
			title={member?.name ?? slug}
			class="size-6 rounded-sm flex items-center justify-center subtext"
			style:background-color="{member?.highlight ?? '#777777'}20"
			style:color="color-mix(in srgb, {member?.highlight ?? '#777777'}, #fff 20%)"
		>
			{(member?.name ?? slug).charAt(0).toUpperCase()}
		</span>
	{/each}
</span>
