<script lang="ts">
	let { busy = false, onpick }: { busy?: boolean; onpick: () => void } = $props();
</script>

<button
	type="button"
	disabled={busy}
	onclick={onpick}
	aria-label="Create a project"
	class="group w-full h-full min-h-56 rounded-project bg-surface border border-white/10 flex flex-col items-center justify-start p-32 gap-3 text-faint hover:border-white/20 hover:text-ink hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-ink/20 disabled:opacity-50 disabled:cursor-default"
>
	<span class="flex items-center justify-center size-12 rounded-project border border-white/10 group-hover:border-white/20">
		<iconify-icon icon={busy ? 'lucide:loader-circle' : 'lucide:plus'} width="20" class={busy ? 'animate-spin' : ''}
		></iconify-icon>
	</span>
	<span class="p">{busy ? 'Creating…' : 'New project'}</span>
</button>
