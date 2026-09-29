<script lang="ts">
	const STOPS = 24;

	// smoothstep has no slope at either end, so the fade has neither a visible rim nor a hot centre
	const falloff = (t: number) => 1 - t * t * (3 - 2 * t);

	// each stop mixes the brand into transparency by the eased amount, scaled by the theme's --glow-strength
	const gradient = Array.from({ length: STOPS + 1 }, (_, i) => {
		const t = i / STOPS;

		return `color-mix(in srgb, var(--theme-brand) calc(var(--glow-strength) * ${falloff(t).toFixed(4)}), transparent) ${(t * 100).toFixed(2)}%`;
	}).join(', ');

	// grain dithers the gradient's last 8-bit steps, the eye reads noise where it would read bands
	const NOISE =
		"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

	const MASK = 'radial-gradient(circle at 0 0, black, transparent 70%)';
</script>

<div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
	<div class="absolute -left-[60vmax] -top-[60vmax] size-[140vmax]" style:background-image="radial-gradient(circle closest-side, {gradient})"></div>
	<div
		class="absolute inset-0 opacity-[0.07] mix-blend-soft-light"
		style:background-image={NOISE}
		style:mask-image={MASK}
		style:-webkit-mask-image={MASK}
	></div>
</div>
