<script lang="ts">
	import { base, assets } from '$app/paths';
	import { email, facebook, phoneDisplay, phoneHref } from '$lib/site';
	import SectionHeading from '$lib/SectionHeading.svelte';

	const methods = [
		{
			icon: 'phone_icon.svg',
			label: 'Call or Text',
			value: phoneDisplay,
			href: phoneHref
		},
		{
			icon: 'envelope_email_icon.svg',
			label: 'Email',
			value: email,
			href: `mailto:${email}`
		},
		{
			icon: 'facebook_icon.svg',
			label: 'Facebook',
			value: '@dirtybeachcleaning',
			href: facebook
		}
	];

	const trust = [
		'Licensed & insured',
		'Google Verified business',
		'Best Service Provider Nominee — Wakulla Co. 2025',
		'Reliable, detailed & trusted local cleaners',
		'Teacher & Veteran discounts'
	];
</script>

<svelte:head>
	<title>Dirty Beach | Contact</title>
</svelte:head>

<section class="bg-info px-4 py-20 text-center text-white">
	<p class="great-vibes text-3xl text-white/90 sm:text-4xl">We'd love to hear from you</p>
	<h1 class="mt-1 text-4xl font-bold sm:text-5xl">Get in Touch</h1>
</section>

<section class="mx-auto max-w-6xl px-4 py-16 sm:py-20">
	<div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
		<!-- Ways to reach us -->
		<div>
			<SectionHeading eyebrow="Say hello" title="Ways to reach us" align="left" />

			<div class="mt-6 space-y-3">
				{#each methods as method}
					<a
						href={method.href}
						class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
					>
						<span
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-info/10"
						>
							<img src={`${assets}/images/${method.icon}`} alt="" class="h-6 w-6" />
						</span>
						<span>
							<span class="block text-sm font-medium text-ink/60">{method.label}</span>
							<span class="block font-semibold text-ink-strong">{method.value}</span>
						</span>
					</a>
				{/each}
			</div>

			<dl class="mt-8 space-y-2 text-ink/80">
				<div class="flex gap-2">
					<dt class="font-semibold text-ink-strong">Service area:</dt>
					<dd>Franklin &amp; Wakulla counties — Crawfordville, FL</dd>
				</div>
				<div class="flex gap-2">
					<dt class="font-semibold text-ink-strong">Response time:</dt>
					<dd>within 24 hours</dd>
				</div>
				<div class="flex gap-2">
					<dt class="font-semibold text-ink-strong">Hours:</dt>
					<dd>by appointment</dd>
				</div>
			</dl>
		</div>

		<!-- Brand + trust -->
		<div
			class="flex flex-col items-center rounded-card bg-gradient-to-br from-info/15 to-white p-8 text-center shadow-sm sm:p-10"
		>
			<img
				src={`${assets}/images/logo-circle.jpg`}
				alt="Dirty Beach Cleaning"
				class="h-32 w-32 rounded-full shadow-md"
			/>
			<p class="great-vibes mt-4 text-3xl text-info">We keep you beachy clean</p>

			<ul class="mt-6 space-y-2.5 text-left text-ink/80">
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
		</div>
	</div>
</section>

<section class="bg-info px-4 py-16 text-center text-white">
	<p class="great-vibes text-3xl sm:text-4xl">Prefer a detailed estimate?</p>
	<p class="mx-auto mt-2 max-w-xl text-lg">
		Tell us about your home and we'll send a free quote within 24 hours.
	</p>
	<a
		href={`${base}/quote`}
		data-sveltekit-reload
		class="mt-6 inline-block rounded-full bg-white px-8 py-3 font-bold text-info shadow-lg transition-colors hover:bg-white/90"
	>
		Request a Free Quote
	</a>
</section>
