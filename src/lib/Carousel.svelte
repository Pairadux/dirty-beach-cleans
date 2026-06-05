<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
	import { assets } from '$app/paths';

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

<section id="gallery" class="mx-auto my-20 max-w-5xl px-4">
	<h2 class="great-vibes text-center text-4xl sm:text-5xl">We Love What We Do...</h2>
	<p class="mx-auto mb-10 mt-6 max-w-2xl text-center text-base lg:text-lg">
		"We take pride in our work and it shows!" From Vacation Properties to Private Homes, these
		photos represent just a small illustration of our dedication and hard work provided just for
		you.
	</p>

	<div class="relative">
		<!-- Viewport -->
		<div
			class="overflow-hidden rounded-card"
			use:emblaCarouselSvelte={{ options, plugins: [] }}
			onemblaInit={onInit}
		>
			<!-- Container -->
			<div class="flex">
				{#each slides as src (src)}
					<div class="min-w-0 flex-[0_0_100%] px-1">
						<img
							{src}
							alt="A home cleaned by Dirty Beach"
							loading="lazy"
							class="h-[24rem] w-full rounded-card object-cover sm:h-[32rem] lg:h-[40rem]"
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
</section>
