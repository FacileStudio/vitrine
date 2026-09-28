<script lang="ts">
	import { ELEMENTS } from './elements';
	import { endDrag, startDrag } from './drag.svelte';

	let { onadd }: { onadd?: (kind: string, w: number, h: number) => void } = $props();

	// these can be sized before they exist, the others keep their fixed default and are only dragged
	const SIZED = ['image', 'video', 'note', 'text'];
	const SIZES = [1, 2, 3];

	let open = $state<string | null>(null);

	function pick(kind: string, w: number, h: number) {
		onadd?.(kind, w, h);
		open = null;
	}
</script>

<svelte:window
	onclick={(e) => {
		if (!(e.target as HTMLElement).closest('[data-library-chip]'))
			open = null;
	}}
	onkeydown={(e) => {
		if (e.key === 'Escape')
			open = null;
	}}
/>

<div class="flex justify-between w-full space-y-4">
	<div class="flex items-baseline gap-3">
		<span class="subtitle text-white">Éléments</span>
	</div>

	<div class="flex flex-wrap gap-1">
		{#each ELEMENTS as element (element.kind)}
			{@const sized = SIZED.includes(element.kind)}
			<div class="relative" data-library-chip>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex: the role is a button exactly when the chip is focusable, the check cannot read a conditional role -->
				<div
					role={sized ? 'button' : 'listitem'}
					tabindex={sized ? 0 : -1}
					aria-expanded={sized ? open === element.kind : undefined}
					draggable="true"
					ondragstart={(e) => {
						open = null;
						startDrag(e, { from: 'library', kind: element.kind, w: element.w, h: element.h });
					}}
					ondragend={endDrag}
					onclick={() => {
						if (sized)
							open = open === element.kind ? null : element.kind;
					}}
					onkeydown={(e) => {
						if (sized && e.key === 'Enter')
							open = open === element.kind ? null : element.kind;
					}}
					class="p flex items-center gap-2 px-4 py-2.5 rounded-md bg-stone-700/10 text-white/80 cursor-grab"
				>
					<iconify-icon icon={element.icon} width="18" class="text-white/58"></iconify-icon>
					{element.label}
					{#if sized}
						<iconify-icon icon="lucide:chevron-down" width="12" class="text-white/45 {open === element.kind ? 'rotate-180' : ''}"></iconify-icon>
					{/if}
				</div>

				{#if open === element.kind}
					<div class="absolute right-0 w-full z-30 mt-1 rounded-xl p-2 shadow-lg space-y-2">
						<div class="flex flex-col gap-1">
							{#each SIZES as rows (rows)}
								{#each SIZES as cols (cols)}
									<button
										type="button"
										onclick={() => pick(element.kind, cols, rows)}
										class="subtext w-full h-10 rounded-md bg-[#050505] border border-stone-700/30 text-white/80 hover:bg-white hover:text-black"
									>
										{cols}×{rows}
									</button>
								{/each}
							{/each}
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
