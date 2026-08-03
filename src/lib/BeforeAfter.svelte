<script lang="ts">
	import { assets } from '$app/paths';
	import SectionHeading from './SectionHeading.svelte';

	/*
	  Each entry is one real job, shot before and after. Deliberately side-by-side
	  rather than a drag-to-compare slider: the frames are handheld, so they are
	  close but not pixel-aligned, and a slider makes that mismatch read as broken.
	  Tiles are square via object-cover so the mixed portrait/landscape sources
	  still form an even grid.
	*/
	const pairs = [
		{
			slug: 'tub-construction',
			title: 'Post-construction tub',
			note: 'Builder debris and grout sludge, taken back to bare white.'
		},
		{
			slug: 'shower-pan',
			title: 'Shower pan',
			note: 'Plaster and caulk residue cleared out after a remodel.'
		},
		{
			slug: 'jacuzzi',
			title: 'Jetted tub',
			note: 'Built-up grime around the jets and basin, scrubbed back.'
		},
		{
			slug: 'shower-scum',
			title: 'Shower surround',
			note: 'Hard-water film and soap scum off the fiberglass.'
		},
		{
			slug: 'bedroom',
			title: 'Bedroom reset',
			note: 'Cluttered and mid-move, put back in order.'
		},
		{
			slug: 'kids-room',
			title: "Kids' room",
			note: 'Beds made, floor cleared, toys back where they belong.'
		}
	];
</script>

<section id="before-after" class="mx-auto max-w-6xl px-4 py-20 sm:py-24">
	<SectionHeading
		eyebrow="See the difference"
		title="Before &amp; After"
		subtitle="Real homes and rentals we've cleaned across Franklin and Wakulla counties."
	/>

	<div class="mt-10 grid gap-8 lg:grid-cols-2">
		{#each pairs as pair}
			<figure class="rounded-card border border-gray-100 bg-white p-4 shadow-md">
				<div class="grid grid-cols-2 gap-3">
					{#each [{ state: 'before', label: 'Before' }, { state: 'after', label: 'After' }] as shot}
						<div class="relative overflow-hidden rounded-xl">
							<img
								src={`${assets}/images/before-after/${pair.slug}-${shot.state}.jpeg`}
								alt={`${pair.title} — ${shot.label.toLowerCase()} cleaning by Dirty Beach`}
								loading="lazy"
								class="aspect-square w-full object-cover"
							/>
							<span
								class="absolute left-2 top-2 rounded-full px-2.5 py-1 text-xs font-bold text-white {shot.state ===
								'after'
									? 'bg-primary'
									: 'bg-ink/75'}"
							>
								{shot.label}
							</span>
						</div>
					{/each}
				</div>
				<figcaption class="mt-4 px-1">
					<h3 class="font-bold text-ink-strong">{pair.title}</h3>
					<p class="mt-0.5 text-sm text-ink/80">{pair.note}</p>
				</figcaption>
			</figure>
		{/each}
	</div>
</section>
