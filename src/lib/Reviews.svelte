<script lang="ts">
	import { facebook } from '$lib/site';
	import SectionHeading from './SectionHeading.svelte';

	// PLACEHOLDER entries — swap each one for a real client review (e.g. from the
	// Facebook page) before this section goes live. Do not deploy as-is.
	const reviews = [
		{
			quote: 'Placeholder review — replace with a real client quote before deploying.',
			name: 'Client Name',
			detail: 'Vacation rental owner'
		},
		{
			quote: 'Placeholder review — replace with a real client quote before deploying.',
			name: 'Client Name',
			detail: 'Residential client'
		},
		{
			quote: 'Placeholder review — replace with a real client quote before deploying.',
			name: 'Client Name',
			detail: 'Airbnb host'
		}
	];
</script>

<section id="reviews" class="bg-gradient-to-b from-white to-info/10 px-4 py-20 sm:py-24">
	<div class="mx-auto max-w-6xl">
		<SectionHeading
			eyebrow="Kind words"
			title="What our clients say"
			subtitle="Real reviews from the homes and rentals we care for."
		/>

		<div class="mt-10 grid gap-6 lg:grid-cols-3">
			{#each reviews as review}
				<figure
					class="flex flex-col rounded-card border border-gray-100 bg-white p-8 shadow-md transition-transform hover:-translate-y-1"
				>
					<div class="flex gap-1 text-primary" aria-label="5 out of 5 stars">
						{#each Array(5) as _}
							<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path
									d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z"
								/>
							</svg>
						{/each}
					</div>
					<blockquote class="mt-4 flex-1 italic text-ink/80">"{review.quote}"</blockquote>
					<figcaption class="mt-5">
						<span class="block font-semibold text-ink-strong">{review.name}</span>
						<span class="block text-sm text-ink/60">{review.detail}</span>
					</figcaption>
				</figure>
			{/each}
		</div>

		<p class="mt-8 text-center text-ink/80">
			Read more on our
			<a href={facebook} class="font-semibold text-info transition-colors hover:text-info-600">
				Facebook page
			</a>
		</p>
	</div>
</section>
