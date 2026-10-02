<script lang="ts">
	let { busy = false, onpick }: { busy?: boolean; onpick: () => void } = $props();
</script>

<button
	type="button"
	disabled={busy}
	onclick={onpick}
	aria-label="Create a project"
	class="group w-full rounded-project border border-dashed border-ghost bg-surface p-3 pr-5 flex items-center gap-5 text-faint hover:border-ink/40 hover:text-ink hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-ink/20 disabled:opacity-50 disabled:cursor-default"
>
	<span class="w-48 aspect-[16/10] rounded-project border border-dashed border-ghost flex items-center justify-center group-hover:border-ink/40">
		<iconify-icon icon={busy ? 'lucide:loader-circle' : 'lucide:plus'} width="18" class={busy ? 'animate-spin' : ''}
		></iconify-icon>
	</span>
	<span class="lead">{busy ? 'Creating…' : 'New project'}</span>
</button>
