<script lang="ts">
	import { base, assets } from '$app/paths';
	import { facebook } from '$lib/site';

	let navActive = $state(false);
	let navEl = $state<HTMLElement>();

	const links = [
		{ href: `${base}/`, label: 'Home' },
		{ href: `${base}/#about`, label: 'About' },
		{ href: `${base}/#services`, label: 'Services' },
		{ href: `${base}/#gallery`, label: 'Gallery' },
		{ href: `${base}/contact`, label: 'Contact' }
	];

	function close() {
		navActive = false;
	}

	// Close the mobile menu when tapping anywhere outside the nav.
	function onWindowClick(event: MouseEvent) {
		if (navActive && navEl && !navEl.contains(event.target as Node)) {
			close();
		}
	}
</script>

<svelte:window onclick={onWindowClick} />

<nav bind:this={navEl} class="sticky top-0 z-50 bg-white shadow-sm" aria-label="main navigation">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
		<!-- Brand -->
		<a href={`${base}/`} class="flex items-center" onclick={close}>
			<img src={`${assets}/images/logo-dark.png`} alt="Dirty Beach Cleaning" class="h-14 w-auto" />
		</a>

		<!-- Burger (mobile) -->
		<button
			class="flex flex-col gap-1.5 p-2 lg:hidden"
			aria-label="menu"
			aria-expanded={navActive}
			onclick={() => (navActive = !navActive)}
		>
			<span
				class="block h-0.5 w-6 origin-center bg-ink transition-transform duration-300"
				class:translate-y-2={navActive}
				class:rotate-45={navActive}
			></span>
			<span
				class="block h-0.5 w-6 bg-ink transition-opacity duration-300"
				class:opacity-0={navActive}
			></span>
			<span
				class="block h-0.5 w-6 origin-center bg-ink transition-transform duration-300"
				class:-translate-y-2={navActive}
				class:-rotate-45={navActive}
			></span>
		</button>

		<!-- Desktop menu -->
		<div class="hidden items-center gap-6 lg:flex">
			{#each links as link}
				<a href={link.href} class="text-ink transition-colors hover:text-primary">{link.label}</a>
			{/each}
			<a
				href={`${base}/quote`}
				data-sveltekit-reload
				class="rounded-full bg-primary px-5 py-2 font-bold text-white transition-colors hover:bg-primary-600"
			>
				Get a Quote
			</a>
			<a
				href={facebook}
				class="rounded-md bg-gray-100 px-4 py-2 text-ink transition-colors hover:bg-gray-200"
			>
				Facebook
			</a>
		</div>
	</div>

	<!-- Mobile dropdown -->
	{#if navActive}
		<div
			class="absolute right-4 top-full z-50 mt-1 flex w-52 flex-col gap-1 rounded-xl bg-white p-4 shadow-lg lg:hidden"
		>
			{#each links as link}
				<a
					href={link.href}
					class="rounded-md px-3 py-2 text-ink transition-colors hover:bg-gray-100"
					onclick={close}
				>
					{link.label}
				</a>
			{/each}
			<a
				href={`${base}/quote`}
				data-sveltekit-reload
				class="mt-2 rounded-full bg-primary px-4 py-2 text-center font-bold text-white"
				onclick={close}
			>
				Get a Quote
			</a>
			<a
				href={facebook}
				class="rounded-md bg-gray-100 px-4 py-2 text-center text-ink"
				onclick={close}
			>
				Facebook
			</a>
		</div>
	{/if}
</nav>
