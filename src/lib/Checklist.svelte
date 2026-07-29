<script lang="ts">
	import { assets } from '$app/paths';
	import SectionHeading from './SectionHeading.svelte';

	const checkbox = `${assets}/images/checkbox.png`;

	const items = [
		'Clean Backsplash',
		'Shine Appliances & Sink',
		'Wipe Hood-Range',
		'Dust Light Fixtures',
		'Clean Table & Chairs',
		'Dust Furniture',
		'Dust & Spot Clean Glass',
		'Make & Change Beds',
		'Clean Mirrors',
		'Wipe Counters',
		'Dust Bedroom Furniture',
		'Vacuum Floors & Rugs',
		'Mop Hard Floors',
		'Fluff Pillows',
		'Re-stage Bed',
		'Dust Ceiling Fans',
		'Dust Baseboards',
		'Clean Microwave',
		'Empty Garbage',
		'Clean Vanity & Sink',
		'Polish Fixtures',
		'Clean Toilet',
		'Clean Shower & Tub',
		'Refresh Towels'
	];
</script>

<section id="checklist" class="mx-auto max-w-6xl px-4 py-20 sm:py-24">
	<SectionHeading
		eyebrow="What we do"
		title="Maintenance Cleaning Checklist"
		subtitle="(Example: not limited to, as each home is customized)"
	/>

	<div class="mt-10 rounded-card border border-gray-100 bg-white p-6 shadow-md sm:p-10">
		<ul
			class="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-2.5 text-base sm:grid-cols-2 lg:grid-cols-3 lg:text-lg"
		>
			{#each items as item}
				<li class="flex items-center gap-3">
					<img src={checkbox} alt="" class="h-5 w-5 shrink-0" />
					<span>{item}</span>
				</li>
			{/each}
		</ul>
	</div>

	<p class="mt-8 text-center text-lg font-semibold italic text-ink/80">
		Our DEEP cleans...are more thorough and customizable to each home!
	</p>
</section>
