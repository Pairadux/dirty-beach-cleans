<script lang="ts">
	import { assets } from '$app/paths';
	import SectionHeading from './SectionHeading.svelte';

	const homes = Array.from({ length: 5 }, (_, i) => `${assets}/images/showcase-homes/home-1/image-${i + 1}.jpg`);
</script>

<section class="mx-auto max-w-6xl px-4 py-20 sm:py-24">
	<SectionHeading
		eyebrow="Step inside"
		title="A home we recently loved"
		subtitle="A peek at one of the homes we transformed — every room, the Dirty Beach way."
	/>

	<div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
		{#each homes as home, i}
			<img
				src={home}
				alt={`Room ${i + 1} cleaned by Dirty Beach Cleaning`}
				loading="lazy"
				class="aspect-[2/3] w-full rounded-2xl object-cover shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
			/>
		{/each}
	</div>
</section>
