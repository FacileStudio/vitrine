<script lang="ts">
	import { inputClass } from './types';

	let { value = $bindable(), rows = 4, placeholder }: { value: string[]; rows?: number; placeholder?: string } = $props();

	// kept apart from value so blank lines survive while typing; remount to reset it
	let text = $state(value.join('\n'));

	function onInput() {
		value = text
			.split('\n')
			.map((line) => line.trim())
			.filter(Boolean);
	}
</script>

<textarea bind:value={text} oninput={onInput} {rows} {placeholder} class="{inputClass} block resize-none"></textarea>
