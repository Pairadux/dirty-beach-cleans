<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
	import { assets } from '$app/paths';
	import { facebook } from '$lib/site';
	import SectionHeading from './SectionHeading.svelte';

	const slides = Array.from(
		{ length: 11 },
		(_, i) => `${assets}/images/real-homes/home${i + 1}.jpeg`
	);

	const options: EmblaOptionsType = { loop: true, align: 'center' };

	let emblaApi = $state<EmblaCarouselType>();
	let selectedIndex = $state(0);
	let scrollSnaps = $state<number[]>([]);

	function onInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
		scrollSnaps = emblaApi.scrollSnapList();
		const update = () => (selectedIndex = emblaApi!.selectedScrollSnap());
		emblaApi.on('select', update);
		emblaApi.on('reInit', () => {
			scrollSnaps = emblaApi!.scrollSnapList();
			update();
		});
	}
</script>

<section id="gallery" class="mx-auto max-w-6xl px-4 py-20 sm:py-24">
	<SectionHeading
		eyebrow="Our work"
		title="We love what we do"
		subtitle="From vacation properties to private homes — a small look at the care we bring to every job."
	/>

	<div class="relative mt-10">
		<!-- Viewport -->
		<div
			class="overflow-hidden"
			use:emblaCarouselSvelte={{ options, plugins: [] }}
			onemblaInit={onInit}
		>
			<!-- Container: auto-width slides so every photo shows uncropped at its natural aspect -->
			<div class="flex gap-4">
				{#each slides as src (src)}
					<div class="flex-[0_0_auto]">
						<img
							{src}
							alt="A home cleaned by Dirty Beach"
							loading="lazy"
							class="h-[22rem] w-auto rounded-card object-cover sm:h-[30rem]"
						/>
					</div>
				{/each}
			</div>
		</div>

		<!-- Arrows -->
		<button
			class="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-ink shadow-lg transition-colors hover:bg-white hover:text-primary sm:-left-5"
			aria-label="Previous photo"
			onclick={() => emblaApi?.scrollPrev()}
		>
			&#8592;
		</button>
		<button
			class="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-ink shadow-lg transition-colors hover:bg-white hover:text-primary sm:-right-5"
			aria-label="Next photo"
			onclick={() => emblaApi?.scrollNext()}
		>
			&#8594;
		</button>
	</div>

	<!-- Dots -->
	<div class="mt-6 flex flex-wrap items-center justify-center gap-2">
		{#each scrollSnaps as _, i (i)}
			<button
				class="h-2.5 rounded-full transition-all duration-200 {selectedIndex === i
					? 'w-6 bg-primary'
					: 'w-2.5 bg-gray-300 hover:bg-gray-400'}"
				aria-label={`Go to photo ${i + 1}`}
				onclick={() => emblaApi?.scrollTo(i)}
			></button>
		{/each}
	</div>

	<p class="mt-8 text-center text-lg text-ink/80">
		Want to see more?
		<a href={facebook} class="font-semibold text-primary transition-colors hover:text-primary-600">
			Follow us on Facebook
		</a>
		for our latest cleans.
	</p>
</section>
