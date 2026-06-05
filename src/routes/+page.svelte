<script lang="ts">
	import { base } from '$app/paths';
	import Hero from '$lib/Hero.svelte';
	import Bio from '$lib/Bio.svelte';
	import Checklist from '$lib/Checklist.svelte';
	import Reasons from '$lib/Reasons.svelte';
	import Banner from '$lib/Banner.svelte';
	import Carousel from '$lib/Carousel.svelte';
	import Services from '$lib/Services.svelte';
</script>

<svelte:head>
	<title>Dirty Beach Cleaning | Home</title>
	<meta
		name="description"
		content="Professional residential and vacation rental cleaning in Franklin and Wakulla counties. Weekly, bi-weekly, and monthly service."
	/>
</svelte:head>

<Hero />
<Bio />
<Checklist />
<Reasons />

<Banner>
	<p class="great-vibes text-4xl sm:text-5xl">We keep you<br class="sm:hidden" /> Beachy Clean!</p>
</Banner>

<Carousel />

<Banner>
	<p class="great-vibes text-4xl sm:text-5xl">
		Free Quotes!<br />Head to our
		<a
			href={`${base}/contact`}
			class="italic underline decoration-2 underline-offset-4 transition-colors hover:text-white/80"
		>
			contact page
		</a>
		to get started!
	</p>
</Banner>

<Services />
