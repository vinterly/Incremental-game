<script lang="ts">
	import HousePlus from "@lucide/svelte/icons/house-plus";
	import Button from "$lib/components/Button.svelte";
	import "../app.css";

	let gold = $state(0);

	function addGold() {
		gold++;
	}
</script>

<main>
	<h1>A single house stands in the clearing</h1>
	<p class="gold-counter">{gold}</p>
	<div class="buttons-row">
		<Button onclick={addGold}>+1</Button>
		<Button><HousePlus /></Button>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	h1 {
		margin-bottom: 2rem;
		text-align: center;
	}

	.gold-counter {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.buttons-row {
		display: flex;
		gap: 1rem;
	}
</style>
