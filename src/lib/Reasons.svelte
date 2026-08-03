<script lang="ts">
	import { assets } from '$app/paths';
	import SectionHeading from './SectionHeading.svelte';

	const reasons = [
		{
			icon: 'starfish.svg',
			text: "your home is getting a quality clean we're proud of. We guarantee it!"
		},
		{
			icon: 'palm-tree-bullet.svg',
			text: 'all of our products are eco-friendly and sustainably sourced.'
		},
		{
			icon: 'seashell.svg',
			text: 'our dependable team cares for you and your property, because we care!'
		}
	];
</script>

<section class="mx-auto max-w-6xl px-4 py-20 sm:py-24">
	<SectionHeading eyebrow="Peace of mind" title="Live stress-free knowing that..." />

	<div class="mt-10 grid gap-6 sm:grid-cols-3">
		{#each reasons as reason}
			<div
				class="flex flex-col items-center gap-4 rounded-card border border-gray-100 bg-white p-8 text-center shadow-md transition-transform hover:-translate-y-1"
			>
				<span class="flex h-20 w-20 items-center justify-center rounded-full bg-brand/10">
					<img src={`${assets}/images/${reason.icon}`} alt="" class="h-12 drop-shadow" />
				</span>
				<p class="text-base lg:text-lg italic">{reason.text}</p>
			</div>
		{/each}
	</div>
</section>
