<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import BusinessSchema from '$lib/BusinessSchema.svelte';
</script>

<BusinessSchema />

<Navbar />
<slot />
<Footer />
