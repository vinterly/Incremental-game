<script lang="ts">
	import "../app.css";

	let gold = $state(0);

	function addGold() {
		gold++;
	}
</script>

<main>
	<h1>A single house stands in the clearing</h1>
	<p class="gold-counter">{gold}</p>
	<button class="add-gold-btn" type="button" onclick={addGold}>+1</button>
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

	.add-gold-btn {
		border: none;
		outline: none;
		cursor: pointer;
		background-color: #6c5ce7;
		padding: 0.6rem 1.3rem;
		font-size: 0.8rem;
		font-weight: 700;
		color: #fff;
		border-radius: 0.3rem;
		transition: all ease 0.1s;
		box-shadow: 0 5px 0 #a29bfe;
	}

	button:active {
		transform: translateY(5px);
		box-shadow: 0 0 0 0 #a29bfe;
	}
</style>
