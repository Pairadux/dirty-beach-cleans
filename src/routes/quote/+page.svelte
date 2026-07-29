<script lang="ts">
	import QuoteForm from '$lib/QuoteForm.svelte';
	import Seo from '$lib/Seo.svelte';

	const badges = [
		'Licensed & Insured',
		'Serving Wakulla & Franklin Counties',
		'Teacher & Veteran Discounts'
	];
</script>

<Seo
	title="Dirty Beach | Request a Free Quote"
	description="Request a free cleaning quote from Dirty Beach Cleaning. Tell us about your home or vacation rental and we'll respond within 24 hours."
/>

<section class="bg-info px-4 py-16 text-center text-white">
	<h1 class="great-vibes text-4xl sm:text-5xl">Request a Free Quote</h1>
	<p class="mx-auto mt-3 max-w-xl text-lg">
		Fill out the form below and we'll contact you within 24 hours with an estimate or to schedule a
		walkthrough.
	</p>
</section>

<section class="mx-auto max-w-3xl px-4 py-12">
	<QuoteForm />

	<div
		class="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-ink/70"
	>
		{#each badges as badge}
			<span class="flex items-center gap-2">
				<svg
					class="h-5 w-5 text-primary"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 10a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0z"
						clip-rule="evenodd"
					/>
				</svg>
				{badge}
			</span>
		{/each}
	</div>
</section>
