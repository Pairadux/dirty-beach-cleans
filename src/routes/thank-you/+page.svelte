<script lang="ts">
	import { base, assets } from '$app/paths';
	import { facebook, phoneDisplay, phoneHref } from '$lib/site';
</script>

<svelte:head>
	<title>Dirty Beach | Thank You</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section
	class="flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center bg-gradient-to-b from-brand/10 to-white px-4 py-20 text-center"
>
	<img
		src={`${assets}/images/logo-circle.jpg`}
		alt="Dirty Beach Cleaning"
		class="h-28 w-28 rounded-full shadow-md"
	/>
	<p class="great-vibes mt-6 text-5xl text-primary sm:text-6xl">Thank you!</p>
	<h1 class="mt-1 text-3xl font-bold text-ink-strong sm:text-4xl">Your request is on its way.</h1>
	<p class="mx-auto mt-4 max-w-md text-lg text-ink/80">
		We'll be in touch within 24 hours with an estimate or to schedule a walkthrough. Prefer to talk
		now? Call or text
		<a class="font-semibold text-primary" href={phoneHref}>{phoneDisplay}</a>.
	</p>
	<div class="mt-8 flex flex-col gap-3 sm:flex-row">
		<a
			href={`${base}/`}
			class="rounded-full bg-primary px-8 py-3 font-bold text-white shadow-lg transition-colors hover:bg-primary-600"
		>
			Back to Home
		</a>
		<a
			href={facebook}
			class="rounded-full border-2 border-primary px-8 py-3 font-bold text-primary transition-colors hover:bg-primary hover:text-white"
		>
			Follow on Facebook
		</a>
	</div>
</section>
