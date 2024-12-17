<script lang="ts">
	import { assets } from '$app/paths';
</script>

<section class="hero is-info is-halfheight">
	<div
		class="hero-body is-flex is-flex-direction-column is-align-content-center is-justify-content-center"
	>
		<div class="-mt-large is-flex is-justify-content-center is-align-content-center mt-6 mb-responsive">
			<img
				class="image is-128x128 is-hidden-mobile has-drop-shadow"
				src="{assets}/images/palm-tree-bullet.svg"
				alt=""
			/>
			<div>
				<p class="title is-size-1 is-size-2-mobile is-great-vibes has-text-centered is-spaced has-text-white">
					We Dont Just Clean, We Care!
				</p>
				<p class="subtitle has-text-white has-text-left is-size-5-touch">
					"At Dirty Beach, your home isn't just another task on our list—it's a commitment!" Serving
					Franklin and Wakulla counties, we'll go beyond the surface to create spaces that you're
					proud to call home. Our passion: serving you with care one clean home at a time.
				</p>
			</div>
			<img
				class="image is-128x128 is-hidden-mobile has-drop-shadow"
				src="{assets}/images/palm-tree-bullet.svg"
				alt=""
			/>
		</div>
	</div>
</section>

<style>

	.has-drop-shadow {
		filter: drop-shadow(1px 1px 0.25rem rgba(0,0,0,0.5));
	}

	.mb-responsive {
		margin-bottom: 6rem;
	}

    @media screen and (max-width: 1023px) {
        .mb-responsive {
            margin-bottom: 3rem;
        }
    }
</style>
