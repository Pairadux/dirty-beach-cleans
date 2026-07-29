<script lang="ts">
	import { base, assets } from '$app/paths';
	import { facebook, phoneDisplay, phoneHref } from '$lib/site';
	import MembershipBadges from './MembershipBadges.svelte';

	const logoCircle = `${assets}/images/logo-circle.jpg`;
	const heroPhoto = `${assets}/images/hero-room.jpeg`;

	// Trust factors echoed from her Facebook profile.
	const trust = [
		'Licensed & insured',
		'Locally owned — serving since 2021',
		'Google Verified business',
		'Best Service Provider Nominee — Wakulla Co. 2025',
		'Reliable, detailed & trusted local cleaners',
		'Teacher & Veteran discounts'
	];
</script>

<section id="hero" class="relative overflow-hidden bg-gradient-to-b from-info/10 to-white">
	<div
		class="mx-auto grid min-h-[calc(100svh-5rem)] max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:gap-12 lg:py-16"
	>
		<!-- Left: message + CTAs + trust -->
		<div class="flex flex-col items-center text-center lg:items-start lg:text-left">
			<img
				src={logoCircle}
				alt="Dirty Beach Cleaning"
				class="mb-6 h-32 w-32 rounded-full shadow-md sm:h-40 sm:w-40"
			/>

			<p class="great-vibes text-3xl text-info sm:text-4xl">Beachy clean, every time</p>
			<h1 class="mt-1 text-4xl font-bold leading-tight text-ink-strong sm:text-5xl">
				Spotless homes,<br />stress-free living.
			</h1>

			<p class="mt-4 max-w-md text-lg text-ink/80">
				Professional residential, vacation rental &amp; small business cleaning across Franklin and
				Wakulla counties — weekly, bi-weekly, monthly, or a one-time deep clean.
			</p>

			<div class="mt-7 flex flex-col gap-3 sm:flex-row">
				<a
					href={`${base}/quote`}
					data-sveltekit-reload
					class="rounded-full bg-primary px-8 py-3 text-lg font-bold text-white shadow-lg transition-colors hover:bg-primary-600"
				>
					Get a Free Quote
				</a>
				<a
					href={phoneHref}
					class="rounded-full border-2 border-info px-8 py-3 text-lg font-bold text-info transition-colors hover:bg-info hover:text-white"
				>
					Call/Text {phoneDisplay}
				</a>
			</div>

			<ul
				class="mt-8 grid grid-cols-1 gap-x-6 gap-y-2.5 text-left text-sm text-ink/80 sm:grid-cols-2"
			>
				{#each trust as item}
					<li class="flex items-center gap-2">
						<svg
							class="h-5 w-5 shrink-0 text-primary"
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
						<span>{item}</span>
					</li>
				{/each}
			</ul>

			<div class="mt-7">
				<MembershipBadges />
			</div>

			<a
				href={facebook}
				class="mt-6 inline-flex items-center gap-2 font-semibold text-info transition-colors hover:text-info-600"
			>
				<svg class="h-5 w-5" viewBox="0 0 56.693 56.693" fill="currentColor" aria-hidden="true">
					<path
						d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029 c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77 L40.43,21.739z"
					/>
				</svg>
				Follow us on Facebook
			</a>
		</div>

		<!-- Right: featured branded photo -->
		<div class="relative mx-auto w-full max-w-xl">
			<div class="absolute -inset-4 -z-10 rounded-[2.5rem] bg-info/20 blur-2xl"></div>
			<img
				src={heroPhoto}
				alt="A clean, staged living room by Dirty Beach Cleaning"
				class="aspect-[4/3] w-full rounded-card object-cover shadow-2xl"
			/>
		</div>
	</div>
</section>
