<script lang="ts">
	const SIZES = [1, 2, 3];

	let {
		w = $bindable(),
		h = $bindable(),
		allowed,
	}: { w: number; h: number; allowed: (w: number, h: number) => boolean } = $props();
</script>

<div class="space-y-2">
	<span class="lead text-white/80">Taille</span>
	<div class="grid grid-cols-3 gap-1 w-max">
		{#each SIZES as rows (rows)}
			{#each SIZES as cols (cols)}
				{@const fits = allowed(cols, rows)}
				<button
					type="button"
					disabled={!fits}
					onclick={() => {
						w = cols;
						h = rows;
					}}
					class="subtext w-14 h-11 rounded-md {w === cols && h === rows
						? 'bg-white text-black'
						: fits
							? 'bg-white/[0.05] text-white/80 hover:bg-white/10'
							: 'bg-white/[0.02] text-white/20 cursor-not-allowed'}"
				>
					{cols}×{rows}
				</button>
			{/each}
		{/each}
	</div>
	<span class="block subtext text-white/45">Grisée : la taille déborderait ou couvrirait un autre élément</span>
</div>
