<script lang="ts">
	import { base } from '$app/paths';
	import { phoneDisplay, phoneHref } from '$lib/site';
</script>

<section class="bg-brand px-4 py-20 text-center text-white sm:py-24">
	<div class="mx-auto max-w-3xl">
		<p class="great-vibes text-5xl sm:text-6xl">Ready for a Beachy Clean home?</p>
		<p class="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
			Free, no-obligation quotes for Homes &amp; Vacation Rentals across <br /> Franklin
			and Wakulla counties.
		</p>
		<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href={`${base}/quote`}
				data-sveltekit-reload
				class="rounded-full bg-white px-8 py-3 text-lg font-bold text-brand-600 shadow-lg transition-colors hover:bg-white/90"
			>
				Get a Free Quote
			</a>
			<a
				href={phoneHref}
				class="rounded-full border-2 border-white/70 px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-white/10"
			>
				Call or Text: {phoneDisplay}
			</a>
		</div>
	</div>
</section>
