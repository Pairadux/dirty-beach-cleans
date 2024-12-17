<script lang="ts">
	import { assets } from '$app/paths';
	const listImgUrl = `url('${assets}/images/checkbox.png')`;
</script>

<div class="container is-fluid -overlay -mt-large">
	<div class="box is-rounded is-flex is-flex-direction-column py-6">
		<div class="">
			<p class="title is-size-2 is-size-4-mobile has-text-centered">
				Maintenance Cleaning Checklist
			</p>
			<p class="subtitle is-6 has-text-centered mt-1">
				(Example: not limited to, as each home is customized)
			</p>
		</div>

		<div class="fixed-grid has-3-cols-desktop has-1-cols-mobile has-1-cols-tablet my-6">
			<div
				class="grid is-family-sans-serif has-text-weight-medium is-size-5 is-size-6-touch"
				style="--list-img: {listImgUrl}"
			>
				<div class="cell">Wipe Counters & Cabinet Doors</div>
				<div class="cell">Clean Backsplash</div>
				<div class="cell">Shine Appliances & Sink</div>
				<div class="cell">Wipe Hood-Range</div>
				<div class="cell">Clean Microwave Inside/Out</div>
				<div class="cell">Dust Light Fixtures</div>
				<div class="cell">Clean Table & Chairs</div>
				<div class="cell">Dust Furniture</div>
				<div class="cell">Dust & Spot Clean Glass</div>
				<div class="cell">Make Beds/Change Linens</div>
				<div class="cell">Clean Mirrors</div>
				<div class="cell">Dust Nightstands/Dressers</div>
				<div class="cell">Vacuum</div>
				<div class="cell">Mop</div>
				<div class="cell">Fluff Pillows</div>
				<div class="cell">Re-stage Bed</div>
				<div class="cell">Dust Ceiling Fans</div>
				<div class="cell">Dust Baseboards</div>
				<div class="cell">Empty Garbage</div>
				<div class="cell">Clean Counters, Sink, & Cabinets</div>
				<div class="cell">Polish Fixtures</div>
				<div class="cell">Clean Toilet Inside & Out</div>
				<div class="cell">Clean Shower And/Or Bathtub</div>
				<div class="cell">Straighten or Replace Towels</div>
			</div>
		</div>

		<p class="subtitle is-4 has-text-centered is-italic has-text-weight-semibold">
			Our DEEP cleans...are more thorough and customizable to each home!
		</p>
	</div>
</div>

<style>
	.grid {
		place-items: center;
		margin-left: 32px;
		margin-right: 32px;
	}

	.cell {
		position: relative;
		width: 20rem;
		padding: 0.5rem 0rem 0.5rem 2.5rem;
		transition:
			background-color 0.3s,
			box-shadow 0.3s;
	}

	.cell::before {
		content: '';
		position: absolute;
		left: 0.75rem;
		top: 50%;
		transform: translateY(-50%);
		height: 20px;
		width: 20px;
		border-radius: 4px;
		background-image: var(--list-img);
		background-repeat: no-repeat;
		background-position: center;
		background-size: 16px 16px;
	}

	@media screen and (max-width: 1023px) {
		.grid {
			place-items: unset;
			margin-left: 0px;
			margin-right: 0px;
		}

		.cell {
			position: relative;
			width: 20rem;
			padding: 0.25rem 0rem 0.25rem 2.5rem;
			transition:
				background-color 0.3s,
				box-shadow 0.3s;
		}
	}
</style>
