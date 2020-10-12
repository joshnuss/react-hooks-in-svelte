<script>
	export let count = 0
</script>

Count: {count}
<button on:click={() => count = 0}>Reset</button>
<button on:click={() => count -= 1}>-</button>
<button on:click={() => count += 1}>+</button>
