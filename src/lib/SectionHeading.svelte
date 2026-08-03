<script lang="ts">
	let {
		eyebrow = '',
		title,
		subtitle = '',
		align = 'center',
		light = false
	}: {
		eyebrow?: string;
		title: string;
		subtitle?: string;
		align?: 'center' | 'left';
		light?: boolean;
	} = $props();
</script>

<div class={align === 'center' ? 'text-center' : 'text-left'}>
	{#if eyebrow}
		<p class="great-vibes text-2xl sm:text-3xl {light ? 'text-white/90' : 'text-primary'}">
			{eyebrow}
		</p>
	{/if}
	<h2 class="mt-1 text-3xl font-bold sm:text-4xl {light ? 'text-white' : 'text-ink-strong'}">
		{title}
	</h2>
	{#if subtitle}
		<p
			class="mt-3 max-w-2xl {align === 'center' ? 'mx-auto' : ''} {light
				? 'text-white/80'
				: 'text-ink/70'}"
		>
			{subtitle}
		</p>
	{/if}
</div>
