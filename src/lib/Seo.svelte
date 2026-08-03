<script lang="ts">
	import { page } from '$app/state';
	import { siteUrl } from '$lib/site';

	// Renders the page title, meta description, and Open Graph/Twitter tags so
	// shared links (especially on Facebook) get a proper preview card.
	let {
		title,
		description
	}: {
		title: string;
		description: string;
	} = $props();

	const url = `${siteUrl}${page.url.pathname}`;
	const image = `${siteUrl}/images/og-image.jpg`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<!-- Collapses ?fbclid=… and www/non-www variants onto one indexable URL. -->
	<link rel="canonical" href={url} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Dirty Beach Cleaning" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
