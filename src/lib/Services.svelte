<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';

	const services = [
		{
			q: 'What is a Maintenance Clean?',
			a: 'We come and maintain the cleanliness of your home on a weekly, bi-weekly, or monthly basis.'
		},
		{
			q: 'What is a Deep Clean?',
			a: 'We go a bit further than the maintenance clean and go literally above and beyond. (Ex: wash baseboards, windows, ceiling fans, internal fridge, ovens etc.)'
		},
		{
			q: 'What is Property Maintenance?',
			a: "We take care of your home while you're away. Trash need to go out? Lawn needs picked up? Faucet leaking? We maintain your home."
		},
		{
			q: 'What is Client Pet Sitting?',
			a: 'If you are already a client we can take care of your pet while away. We can do in-home or drop-in care. (We also take client referrals for pet sitting as well.)'
		}
	];
</script>

<section class="mx-auto max-w-3xl px-4 py-20 sm:py-24">
	<SectionHeading eyebrow="Good to know" title="Explanation of our services" />

	<div
		class="mt-10 w-full divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200"
	>
		{#each services as service}
			<details class="group">
				<summary
					class="flex cursor-pointer list-none items-center justify-between gap-3 p-5 font-semibold text-ink-strong transition-colors hover:bg-gray-50"
				>
					<span>{service.q}</span>
					<svg
						class="h-3 w-3 shrink-0 transition-transform duration-300 group-open:rotate-180"
						viewBox="0 0 10 6"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="M1 1 5 5 9 1"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</summary>
				<div class="px-5 pb-5 text-ink/90">{service.a}</div>
			</details>
		{/each}
	</div>
</section>
