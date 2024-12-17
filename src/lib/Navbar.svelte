<script lang="ts">
	import { assets } from '$app/paths';

	let navActive = false;

	function toggleNav() {
		navActive = !navActive;
	}
</script>

<div class="container">
	<nav class="navbar" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="https://bulma.io">
				<figure class="image">
					<img src="{assets}/images/CLEANING SERVICES (Logo).png" alt="" />
				</figure>
			</a>

			<!-- svelte-ignore a11y_missing_attribute -->
			<button
				role="button"
				class="navbar-burger {navActive ? 'is-active' : ''}"
				aria-label="menu"
				aria-expanded={navActive ? 'true' : 'false'}
				data-target="navMenu"
				on:click={toggleNav}
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</button>
		</div>

		<div id="navMenu" class="navbar-menu {navActive ? 'is-active' : ''}">
			<div class="navbar-start">
				<a href="/" class="navbar-item"> Home </a>
				<a href="/" class="navbar-item"> About </a>
				<a href="/" class="navbar-item"> Services </a>
				<a href="/" class="navbar-item"> Gallery </a>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<a href="contact" class="button is-primary">
							<strong>Contact</strong>
						</a>
						<a href="facebook.com" class="button is-light"> Facebook </a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</div>

<style>
	img {
		max-height: 3rem;
		height: 3rem;
	}

	@media screen and (max-width: 1023px) {
        .navbar {
            position: relative;
            z-index: 200;
        }

		.navbar-menu {
            z-index: 300;
			position: absolute;
			top: 110%;
			right: 5%;
			background-color: #fff;
			border-radius: 8px;
			padding: 1rem;
			box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
			display: none;
		}

		.navbar-menu.is-active {
			display: block;
		}

		.navbar-menu a.navbar-item {
            width: auto;
		}

		.navbar-menu a.navbar-item:hover {
			background-color: rgba(255, 255, 255, 0.1);
		}

        .buttons {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

		.navbar-menu .button.is-primary {
            width: 7.5rem;
			margin-top: 1rem;
		}

		.navbar-menu .button.is-light {
            width: 7.5rem;
		}
	}
</style>
