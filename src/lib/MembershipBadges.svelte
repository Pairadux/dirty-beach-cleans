<script lang="ts">
	import { assets } from '$app/paths';

	// `light` styles the caption for dark backgrounds (e.g. the footer).
	let { light = false }: { light?: boolean } = $props();

	const memberships = [
		{ file: 'wakulla-chamber-logo.png', name: 'Wakulla County Chamber of Commerce' },
		{ file: 'ahca-logo.png', name: 'American House Cleaners Association' }
	];
</script>

<div>
	<p class="text-sm {light ? 'text-gray-400' : 'text-ink/60'}">Proud member of</p>
	<div class="mt-2 flex items-center gap-3">
		{#each memberships as membership}
			<img
				src={`${assets}/images/${membership.file}`}
				alt={membership.name}
				class="h-16 w-auto rounded-xl border border-gray-100 bg-white p-1.5 shadow-sm"
			/>
		{/each}
	</div>
</div>
