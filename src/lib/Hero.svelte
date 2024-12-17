<script lang="ts">
	import { assets } from '$app/paths';

	const bgImageUrl = `url('${assets}/images/beach_image.jpg')`;
</script>

<section class="hero is-fullheight-with-navbar has-bg-img" style="--bg-image: {bgImageUrl};">
	<div class="container hero-body is-flex is-flex-direction-column is-justify-content-center">
		<div class="has-text-centered is-flex is-flex-direction-column is-align-content-center is-justify-content-center" >
			<p class="is-size-1 is-great-vibes has-text-white">Welcome to<br />Dirty Beach Cleaning</p>
			<figure class="image is-square mx-auto my-6">
				<img src="{assets}/images/logo-with-sub.png" alt="" class="is-rounded" />
			</figure>
			<p class="subtitle is-4 is-size-5-touch has-text-weight-semibold has-text-white">
				Providing professional Residential and Vacation Rental cleaning services in Franklin and
				Wakulla counties.
			</p>
			<hr />
			<p class="subtitle is-4 is-size-5-touch has-text-weight-semibold has-text-white">
				Weekly &#x2022; Bi-Weekly &#x2022; Monthly
			</p>
		</div>
	</div>
</section>

<style>
	.hero-body {
		z-index: 100;
	}

	.has-bg-img {
		position: relative;
		overflow: hidden;
	}

	.has-bg-img::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: var(--bg-image);
		background-size: cover;
		background-position: center;
		filter: brightness(50%);
	}

	.image {
		height: 20rem;
		width: 20rem;
	}

	.subtitle {
		width: 32rem;
	}
</style>
