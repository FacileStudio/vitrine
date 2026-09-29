<script lang="ts">
	const ROWS = [1, 2, 3];
	const COLS = [1, 2, 3, 4];

	let {
		w = $bindable(),
		h = $bindable(),
		allowed,
	}: { w: number; h: number; allowed: (w: number, h: number) => boolean } = $props();
</script>

<div class="space-y-2">
	<span class="lead text-soft">Taille</span>
	<div class="grid grid-cols-4 gap-1 w-max">
		{#each ROWS as rows (rows)}
			{#each COLS as cols (cols)}
				{@const fits = allowed(cols, rows)}
				<button
					type="button"
					disabled={!fits}
					onclick={() => {
						w = cols;
						h = rows;
					}}
					class="subtext w-14 h-11 rounded-md {w === cols && h === rows
						? 'bg-pressed text-ink'
						: fits
							? 'bg-white/[0.05] text-soft hover:bg-white/10'
							: 'bg-white/[0.02] text-white/20 cursor-not-allowed'}"
				>
					{cols}×{rows}
				</button>
			{/each}
		{/each}
	</div>
	<span class="block subtext text-faint">Grisée : la taille déborderait ou couvrirait un autre élément</span>
</div>
