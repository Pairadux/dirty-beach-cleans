<script lang="ts">
	import { assets } from '$app/paths';

	const checkbox = `${assets}/images/checkbox.png`;

	const items = [
		'Wipe Counters & Cabinet Doors',
		'Clean Backsplash',
		'Shine Appliances & Sink',
		'Wipe Hood-Range',
		'Clean Microwave Inside/Out',
		'Dust Light Fixtures',
		'Clean Table & Chairs',
		'Dust Furniture',
		'Dust & Spot Clean Glass',
		'Make Beds/Change Linens',
		'Clean Mirrors',
		'Dust Nightstands/Dressers',
		'Vacuum',
		'Mop',
		'Fluff Pillows',
		'Re-stage Bed',
		'Dust Ceiling Fans',
		'Dust Baseboards',
		'Empty Garbage',
		'Clean Counters, Sink, & Cabinets',
		'Polish Fixtures',
		'Clean Toilet Inside & Out',
		'Clean Shower And/Or Bathtub',
		'Straighten or Replace Towels'
	];
</script>

<div id="services" class="relative z-10 mx-auto -mt-24 max-w-6xl px-4">
	<div class="rounded-card bg-white px-6 py-10 shadow-xl sm:px-10 lg:px-16">
		<div class="text-center">
			<h2 class="text-2xl font-bold text-ink-strong sm:text-3xl lg:text-4xl">
				Maintenance Cleaning Checklist
			</h2>
			<p class="mt-2 text-sm text-ink/70">(Example: not limited to, as each home is customized)</p>
		</div>

		<ul
			class="mx-auto my-10 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-2.5 font-sans text-base font-medium sm:grid-cols-2 lg:grid-cols-3 lg:text-lg"
		>
			{#each items as item}
				<li class="flex items-center gap-3">
					<img src={checkbox} alt="" class="h-5 w-5 shrink-0" />
					<span>{item}</span>
				</li>
			{/each}
		</ul>

		<p class="text-center text-lg font-semibold italic sm:text-xl">
			Our DEEP cleans...are more thorough and customizable to each home!
		</p>
	</div>
</div>
