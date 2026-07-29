<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';

	// Inline stroke icons (24x24, lucide-style) keyed by service.
	const icons: Record<string, string> = {
		refresh: `<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/>`,
		sparkles: `<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>`,
		home: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>`,
		paw: `<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>`,
		key: `<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>`,
		wrench: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>`,
		shirt: `<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>`
	};

	type Service = { icon: string; title: string; desc: string };

	const core: Service[] = [
		{
			icon: 'refresh',
			title: 'Maintenance Clean',
			desc: 'We come and maintain the cleanliness of your home on a weekly, bi-weekly, or monthly basis.'
		},
		{
			icon: 'sparkles',
			title: 'Deep Clean',
			desc: 'We go a bit further than the maintenance clean and go literally above and beyond. (Ex: wash baseboards, windows, ceiling fans, internal fridge, ovens etc.)'
		},
		{
			icon: 'home',
			title: 'Property Maintenance',
			desc: "We take care of your home while you're away. Trash need to go out? Lawn needs picked up? Faucet leaking? We maintain your home."
		},
		{
			icon: 'shirt',
			title: 'Laundry Service',
			desc: "Wash, dry, and fold — as part of your clean or as its own service. After all, it's in our name: Dirty Beach Laundry and Cleaning!"
		}
	];

	const perks: Service[] = [
		{
			icon: 'paw',
			title: 'Pet Sitting',
			desc: 'We can take care of your pet while you are away — in-home or drop-in care. (We also take client referrals for pet sitting.)'
		},
		{
			icon: 'key',
			title: 'House Sitting',
			desc: 'We watch over your home while you are away — checking in and keeping things cared for until you return. (We also take client referrals for house sitting.)'
		},
		{
			icon: 'wrench',
			title: 'Small Repairs',
			desc: 'Small repair jobs, specializing in small plumbing work — leaky faucets, running toilets, and other minor fixes around the home.'
		}
	];
</script>

{#snippet icon(name: string, cls: string)}
	<svg
		class={cls}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- static icon markup defined above -->
		{@html icons[name]}
	</svg>
{/snippet}

<section id="services" class="mx-auto max-w-6xl px-4 py-20 sm:py-24">
	<SectionHeading eyebrow="What we offer" title="Our Services" />

	<div class="mt-10 grid gap-6 sm:grid-cols-2">
		{#each core as service}
			<div class="flex gap-5 rounded-card border border-gray-100 bg-white p-7 shadow-md">
				<span
					class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-info/10 text-info"
				>
					{@render icon(service.icon, 'h-7 w-7')}
				</span>
				<div>
					<h3 class="text-lg font-bold text-ink-strong">{service.title}</h3>
					<p class="mt-1 text-ink/80">{service.desc}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-8 rounded-card border border-info/20 bg-info/5 p-8">
		<div class="text-center">
			<p class="great-vibes text-2xl text-info sm:text-3xl">Already a client?</p>
			<h3 class="mt-1 text-xl font-bold text-ink-strong">Extra services just for you</h3>
		</div>
		<div class="mt-8 grid gap-8 sm:grid-cols-3">
			{#each perks as service}
				<div class="flex flex-col items-center gap-2 text-center">
					<span
						class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-info shadow-sm"
					>
						{@render icon(service.icon, 'h-6 w-6')}
					</span>
					<h4 class="font-bold text-ink-strong">{service.title}</h4>
					<p class="text-sm text-ink/80">{service.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
