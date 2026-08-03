<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<section class="bg-brand-deep px-4 py-16 text-center text-white">
	{@render children()}
</section>
