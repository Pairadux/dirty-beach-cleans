<script lang="ts">
	import { base } from '$app/paths';
	import Hero from '$lib/Hero.svelte';
	import Bio from '$lib/Bio.svelte';
	import About from '$lib/About.svelte';
	import Checklist from '$lib/Checklist.svelte';
	import Reasons from '$lib/Reasons.svelte';
	import Banner from '$lib/Banner.svelte';
	import HomeShowcase from '$lib/HomeShowcase.svelte';
	import Carousel from '$lib/Carousel.svelte';
	import Reviews from '$lib/Reviews.svelte';
	import Services from '$lib/Services.svelte';
	import Seo from '$lib/Seo.svelte';
</script>

<Seo
	title="Dirty Beach Cleaning | Home"
	description="Professional residential, vacation rental, and small business cleaning in Franklin and Wakulla counties. Licensed, insured, and locally trusted."
/>

<Hero />
<Bio />
<About />
<Checklist />
<Reasons />

<Banner>
	<p class="great-vibes text-4xl sm:text-5xl">We keep you<br class="sm:hidden" /> Beachy Clean!</p>
</Banner>

<HomeShowcase />
<Carousel />
<Reviews />

<Banner>
	<p class="great-vibes text-4xl sm:text-5xl">
		Free Quotes!<br />Head to our
		<a
			href={`${base}/quote`}
			data-sveltekit-reload
			class="italic underline decoration-2 underline-offset-4 transition-colors hover:text-white/80"
		>
			quote form
		</a>
		to get started!
	</p>
</Banner>

<Services />
