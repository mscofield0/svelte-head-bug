<script lang="ts">
	import generate_anim from '../core/css/generate-anim';

	const anim = generate_anim("spin", 8, [3, 1], (iter, total_iters) => {
		const rot = iter == 0 ? 0 : iter == total_iters - 1 ? 360 : Math.round(iter / 2) * 45;

		return `transform: rotate(${rot}deg);`;
	});
</script>

<svelte:head>
	{@html anim}
</svelte:head>

<style>
	h1 {
		@apply text-lg font-bold;
	}
</style>

<div class="container mx-auto h-full flex justify-center items-center">
	<div class="w-1/3">
		<div>
			<h1>🌐 Sapper with TypeScript and Tailwindcss project base</h1>
            <p>This is an example route and component to make sure everything's working.</p>
		</div>
	</div>
</div>
