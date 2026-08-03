<script lang="ts">
	import { email, facebook, phoneHref, siteUrl } from '$lib/site';

	/*
	  LocalBusiness structured data, rendered once site-wide from the root layout.
	  This is what lets Google tie the domain to the Google Business Profile and
	  surface the phone number / service area in local results.

	  Deliberately omitted because they are not confirmed anywhere on the site,
	  and wrong structured data is worse than none:
	    - streetAddress / geo — she works out of a service area, not a storefront
	    - priceRange — no published pricing
	    - openingHours — the contact page says "by appointment"
	    - aggregateRating — Google does not allow self-serving review markup
	      (reviews collected on your own site about yourself), so marking up the
	      testimonials would risk a manual action rather than win a rich result.
	*/
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': `${siteUrl}/#business`,
		name: 'Dirty Beach Laundry and Cleaning Service LLC',
		alternateName: 'Dirty Beach Cleaning',
		description:
			'Residential and vacation rental cleaning, laundry, and property maintenance across Franklin and Wakulla counties, Florida.',
		url: siteUrl,
		telephone: phoneHref.replace('tel:', ''),
		email,
		image: `${siteUrl}/images/og-image.jpg`,
		logo: `${siteUrl}/images/logo-circle.jpg`,
		foundingDate: '2021',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Crawfordville',
			addressRegion: 'FL',
			addressCountry: 'US'
		},
		areaServed: [
			{ '@type': 'AdministrativeArea', name: 'Franklin County, Florida' },
			{ '@type': 'AdministrativeArea', name: 'Wakulla County, Florida' }
		],
		knowsAbout: [
			'House cleaning',
			'Deep cleaning',
			'Vacation rental turnover cleaning',
			'Move-out cleaning',
			'Laundry service',
			'Property maintenance'
		],
		sameAs: [facebook]
	};

	// Escape `<` to its \u escape (still valid JSON) so no value can close the tag early.
	const json = JSON.stringify(schema).replace(/</g, '\\u003c');

	// The closing tag is concatenated, not written literally, so Svelte's parser
	// does not mistake it for the end of this component's own script block.
	const ldJson = `<script type="application/ld+json">${json}</` + `script>`;
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- serialized from the static object above; a ld+json tag cannot be emitted any other way -->
	{@html ldJson}
</svelte:head>
