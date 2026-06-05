<script lang="ts">
	import { base, assets } from '$app/paths';
	import SectionHeading from './SectionHeading.svelte';

	const julie = `${assets}/images/about-julie.jpg`;
</script>

<section id="about" class="mx-auto max-w-6xl px-4 py-20 sm:py-24">
	<div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
		<!-- Photo -->
		<div class="relative mx-auto w-full max-w-sm">
			<div class="absolute -inset-4 -z-10 rounded-[2.5rem] bg-info/20 blur-2xl"></div>
			<img
				src={julie}
				alt="Julie, owner of Dirty Beach Cleaning"
				class="w-full rounded-card shadow-2xl"
			/>
		</div>

		<!-- Story -->
		<div>
			<SectionHeading eyebrow="Meet the owner" title="The heart behind Dirty Beach" align="left" />
			<div class="mt-5 space-y-4 text-lg text-ink/80">
				<p>
					Dirty Beach Cleaning isn't a faceless service — it's <strong class="text-ink-strong"
						>Julie</strong
					>. A NeeNee to five grandsons, she pours the same care into your home that she does her
					own family.
				</p>
				<p>
					Strong and soft, faith and follow-through — she shows up, every time, and treats every
					space like it matters. Because to her, it does.
				</p>
				<p class="great-vibes text-2xl text-info">Grateful. Growing. Still me.</p>
			</div>
			<div class="mt-7">
				<a
					href={`${base}/contact`}
					class="inline-block rounded-full bg-primary px-8 py-3 text-lg font-bold text-white shadow-lg transition-colors hover:bg-primary-600"
				>
					Work with Julie
				</a>
			</div>
		</div>
	</div>
</section>
