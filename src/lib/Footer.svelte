<script lang="ts">
	import { base, assets } from '$app/paths';

	const facebook = 'https://www.facebook.com/dirtybeachcleaning';
	const year = new Date().getFullYear();
</script>

<footer class="bg-ink-strong text-gray-300">
	<div class="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
		<!-- Brand -->
		<div class="flex flex-col items-start gap-4">
			<img src={`${assets}/images/logo-dark.png`} alt="Dirty Beach Cleaning" class="h-20 w-auto" />
			<p class="text-sm text-gray-400">
				Professional residential &amp; vacation rental cleaning in Franklin and Wakulla counties.
			</p>
		</div>

		<!-- Explore -->
		<div>
			<h3 class="mb-3 font-semibold text-white">Explore</h3>
			<ul class="space-y-2 text-sm">
				<li><a href={`${base}/`} class="transition-colors hover:text-white">Home</a></li>
				<li><a href={`${base}/#about`} class="transition-colors hover:text-white">About</a></li>
				<li>
					<a href={`${base}/#services`} class="transition-colors hover:text-white">Services</a>
				</li>
				<li><a href={`${base}/#gallery`} class="transition-colors hover:text-white">Gallery</a></li>
				<li><a href={`${base}/contact`} class="transition-colors hover:text-white">Contact</a></li>
			</ul>
		</div>

		<!-- Get in touch -->
		<div>
			<h3 class="mb-3 font-semibold text-white">Get in touch</h3>
			<ul class="space-y-2 text-sm">
				<li>
					<a href="tel:+12293795911" class="transition-colors hover:text-white"
						>Call or Text: (229) 379-5911</a
					>
				</li>
				<li>
					<a href="mailto:dirtybeachllc@gmail.com" class="transition-colors hover:text-white">
						dirtybeachllc@gmail.com
					</a>
				</li>
				<li><a href={facebook} class="transition-colors hover:text-white">Facebook</a></li>
			</ul>
		</div>
	</div>

	<div class="border-t border-white/10 px-6 py-4 text-center text-xs text-gray-400">
		© {year} DBA Dirty Beach Laundry and Cleaning Service LLC. All Rights Reserved.
	</div>
</footer>
