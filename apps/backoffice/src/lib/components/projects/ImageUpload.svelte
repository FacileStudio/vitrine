<script lang="ts">
	import { uploadFileSimple } from '@repo/storage-client';
	import { logger } from '@repo/logger';
	import { trpc } from '$lib/trpc';
	import { siteAsset } from '$lib/site';

	let {
		value = $bindable(''),
		label = 'Image',
		accept = 'image/*',
	}: { value?: string; label?: string; accept?: string } = $props();

	let uploading = $state(false);
	let error = $state('');
	let preview = $state<string | null>(null);

	const video = $derived(accept.startsWith('video'));
	const shown = $derived(preview ?? (value ? siteAsset(value) : ''));

	// the backend signs a one-off PUT to MinIO, the file then goes there straight from the browser
	async function upload(e: Event) {
		const file = (e.currentTarget as HTMLInputElement).files?.[0];

		if (!file)
			return;

		preview = URL.createObjectURL(file);
		uploading = true;
		error = '';

		try {
			const { uploadUrl } = await trpc.media.getUploadUrl.mutate({ fileName: file.name, fileType: file.type });
			value = await uploadFileSimple(file, uploadUrl);
		} catch (err) {
			logger.error({ err }, 'Upload failed');
			error = "Erreur lors de l'upload";
		} finally {
			uploading = false;
			preview = null;
		}
	}
</script>

<div class="flex flex-col gap-1.5 w-full">
	<span class="lead text-white/80">{label}</span>

	<div class="group relative w-full aspect-[5/4] rounded-md overflow-hidden bg-white/[0.03]">
		{#if shown}
			{#if video}
				<video src={shown} muted loop playsinline class="w-full h-full object-cover {uploading ? 'opacity-40' : ''}"></video>
			{:else}
				<img src={shown} alt="" class="w-full h-full object-cover {uploading ? 'opacity-40' : ''}" />
			{/if}
		{:else}
			<div class="flex flex-col items-center justify-center h-full gap-2 text-white/45">
				<iconify-icon icon="lucide:cloud-upload" width="36"></iconify-icon>
				<span class="subtext">Cliquez ou déposez un fichier</span>
			</div>
		{/if}

		{#if uploading}
			<div class="absolute inset-0 flex items-center justify-center">
				<span class="subtext rounded-md bg-black/70 px-3 py-1.5 text-white">Envoi…</span>
			</div>
		{/if}

		{#if value && !uploading}
			<button
				type="button"
				onclick={() => (value = '')}
				aria-label="Retirer le fichier"
				class="absolute top-2 right-2 z-10 rounded-full bg-black/70 p-2 text-white/80 opacity-0 group-hover:opacity-100 hover:text-red-400"
			>
				<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
			</button>
		{/if}

		{#if error}
			<span class="absolute bottom-2 left-2 right-2 subtext rounded-md bg-red-500/20 px-3 py-1.5 text-red-300">{error}</span>
		{/if}

		<input type="file" {accept} onchange={upload} disabled={uploading} class="absolute inset-0 opacity-0 cursor-pointer" />
	</div>
</div>
