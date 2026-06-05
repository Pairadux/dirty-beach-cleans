<script lang="ts">
	import { assets } from '$app/paths';

	const palm = `${assets}/images/palm-tree-bullet.svg`;
</script>

<section id="about" class="flex min-h-[50vh] items-center justify-center bg-info px-4 pb-32 pt-16">
	<div class="flex items-center justify-center gap-6">
		<img src={palm} alt="" class="hidden h-28 w-28 drop-shadow-lg lg:block xl:h-32 xl:w-32" />

		<div class="max-w-3xl space-y-6 text-white">
			<h2 class="great-vibes text-center text-4xl sm:text-5xl">We Don't Just Clean, We Care!</h2>
			<p class="text-lg leading-relaxed sm:text-xl">
				"At Dirty Beach, your home isn't just another task on our list—it's a commitment!" Serving
				Franklin and Wakulla counties, we'll go beyond the surface to create spaces that you're
				proud to call home. Our passion: serving you with care one clean home at a time.
			</p>
		</div>

		<img
			src={palm}
			alt=""
			class="hidden h-28 w-28 -scale-x-100 drop-shadow-lg lg:block xl:h-32 xl:w-32"
		/>
	</div>
</section>
