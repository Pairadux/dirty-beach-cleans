<script lang="ts">
	import { assets } from '$app/paths';

	const palm = `${assets}/images/palm-tree-bullet.svg`;
</script>

<section class="relative overflow-hidden bg-info px-4 py-20 text-white sm:py-24">
	<div class="mx-auto flex max-w-4xl items-center justify-center gap-8">
		<img src={palm} alt="" class="hidden h-24 w-24 drop-shadow-lg lg:block xl:h-28 xl:w-28" />

		<div class="text-center">
			<p class="great-vibes text-3xl text-white/90 sm:text-4xl">We don't just clean, we care</p>
			<p class="mt-4 text-lg leading-relaxed sm:text-xl">
				"At Dirty Beach, your home isn't just another task on our list—it's a commitment!" Serving
				Franklin and Wakulla counties, we go beyond the surface to create spaces you're proud to
				call home — caring for you one clean home at a time.
			</p>
		</div>

		<img
			src={palm}
			alt=""
			class="hidden h-24 w-24 -scale-x-100 drop-shadow-lg lg:block xl:h-28 xl:w-28"
		/>
	</div>
</section>
