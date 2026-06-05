<script lang="ts">
	import { base, assets } from '$app/paths';

	const bgImage = `url('${assets}/images/beach_image.jpg')`;
</script>

<section
	id="hero"
	class="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden px-4 py-16"
>
	<!-- Darkened beach background -->
	<div class="absolute inset-0 -z-10 bg-cover bg-center" style="background-image: {bgImage};"></div>
	<div class="absolute inset-0 -z-10 bg-black/50"></div>

	<div class="flex max-w-2xl flex-col items-center gap-6 text-center text-white">
		<p class="great-vibes text-5xl sm:text-6xl">Welcome to<br />Dirty Beach Cleaning</p>

		<img
			src={`${assets}/images/logo-with-sub.png`}
			alt="Dirty Beach Cleaning logo"
			class="h-64 w-64 rounded-full sm:h-72 sm:w-72 xl:h-80 xl:w-80"
		/>

		<p class="max-w-[32rem] text-lg font-semibold sm:text-xl">
			Providing professional Residential and Vacation Rental cleaning services in Franklin and
			Wakulla counties.
		</p>

		<hr class="w-1/2 border-t border-white/30" />

		<p class="text-lg font-semibold tracking-wide sm:text-xl">
			Weekly &bull; Bi-Weekly &bull; Monthly
		</p>

		<a
			href={`${base}/contact`}
			class="mt-2 rounded-full bg-primary px-8 py-3 text-lg font-bold text-white shadow-lg transition-colors hover:bg-primary-600"
		>
			Get a Free Quote
		</a>
	</div>
</section>
