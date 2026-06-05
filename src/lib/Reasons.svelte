<script lang="ts">
	import { assets } from '$app/paths';

	const reasons = [
		{
			icon: 'decorations/starfish.svg',
			text: "your home is getting a quality clean we're proud of. WE GUARANTEE IT!"
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

<section class="mx-auto my-20 max-w-6xl px-4">
	<h2 class="great-vibes mx-auto max-w-2xl text-center text-4xl sm:text-5xl">
		With Dirty Beach you can live stress free knowing that...
	</h2>

	<div class="mt-10 flex flex-col items-center justify-center gap-6 md:flex-row md:items-stretch">
		{#each reasons as reason}
			<div
				class="flex w-72 flex-col items-center gap-4 rounded-card border border-gray-200 bg-white p-6 text-center shadow-md transition-transform hover:-translate-y-1 md:w-64 lg:w-72"
			>
				<img src={`${assets}/images/${reason.icon}`} alt="" class="h-16 drop-shadow-lg xl:h-20" />
				<p class="text-base lg:text-lg">{reason.text}</p>
			</div>
		{/each}
	</div>
</section>
