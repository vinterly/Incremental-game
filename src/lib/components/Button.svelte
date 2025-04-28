<script lang="ts">
	let { children } = $props();
</script>

<button class="add-gold-btn" type="button">{@render children()}</button>

<style>
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

	.add-gold-btn:active {
		transform: translateY(5px);
		box-shadow: 0 0 0 0 #a29bfe;
	}
</style>
