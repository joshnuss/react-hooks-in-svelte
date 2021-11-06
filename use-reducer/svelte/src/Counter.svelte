<script>
  import { writable } from 'svelte/store'

  const initialValue = 0
  const count = writable(initialValue)

  count.increment = () => {
    count.update(state => state + 1)
  }
  count.decrement = () => {
    count.update(state => state - 1)
  }
</script>

Count: {$count}
<button on:click={count.decrement}>-</button>
<button on:click={count.increment}>+</button>
