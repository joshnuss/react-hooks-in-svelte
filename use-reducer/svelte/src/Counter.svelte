<script>
  import { writable } from 'svelte/store'
  const initialValue = {count: 0}

  const store = writable(initialValue)

  store.increment = () => {
    store.update(state => ({count: state.count + 1}))
  }
  store.decrement = () => {
    store.update(state => ({count: state.count - 1}))
  }
</script>

Count: {$store.count}
<button on:click={() => store.decrement()}>-</button>
<button on:click={() => store.increment()}>+</button>
