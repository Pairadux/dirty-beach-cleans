<script lang="ts">
	import { base, assets } from '$app/paths';

	const methods = [
		{
			icon: '352510_local_phone_icon.svg',
			label: 'Call or Text Us',
			value: '(229) 379-5911',
			href: 'tel:+12293795911'
		},
		{
			icon: '8665305_envelope_email_icon.svg',
			label: 'Email Us',
			value: 'dirtybeachllc@gmail.com',
			href: 'mailto:dirtybeachllc@gmail.com'
		},
		{
			icon: '104498_facebook_icon.svg',
			label: 'Facebook',
			value: 'Visit our page',
			href: 'https://www.facebook.com/dirtybeachcleaning'
		}
	];
</script>

<svelte:head>
	<title>Dirty Beach | Contact</title>
</svelte:head>

<div class="flex min-h-[calc(100svh-5rem)] flex-col">
	<section class="bg-info px-4 py-24 text-center text-white">
		<h1 class="great-vibes text-5xl sm:text-6xl">Contact Us</h1>
		<p class="mx-auto mt-3 max-w-xl text-lg italic">
			We're here to answer any questions — and your quote is always free.
		</p>
		<a
			href={`${base}/quote`}
			data-sveltekit-reload
			class="mt-6 inline-block rounded-full bg-white px-7 py-3 font-bold text-info shadow-lg transition-colors hover:bg-white/90"
		>
			Request a Free Quote
		</a>
	</section>

	<section class="flex flex-1 items-center px-4 py-16">
		<div class="mx-auto w-full max-w-4xl">
			<div class="grid gap-6 sm:grid-cols-3">
				{#each methods as method}
					<a
						href={method.href}
						class="flex items-center gap-4 rounded-card border border-gray-200 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
					>
						<span
							class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-info/10"
						>
							<img src={`${assets}/images/decorations/${method.icon}`} alt="" class="h-8 w-8" />
						</span>
						<span>
							<span class="block font-semibold text-ink-strong">{method.label}</span>
							<span class="block text-ink/80">{method.value}</span>
						</span>
					</a>
				{/each}
			</div>
		</div>
	</section>
</div>
