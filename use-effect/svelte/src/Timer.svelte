<script>
  import { onMount } from 'svelte'

  let count = 0

  onMount(() => {
    const interval = setInterval(() => {
      count += 1
    }, 1000)

    return () => clearInterval(interval)
  })
</script>

Timer: {count}
