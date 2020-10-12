<script>
  import fibonacci from './fib' 

  let value = 0

  $: result = fibonacci(value)
</script>

<input type="range" min=0 max=10 bind:value/>
<p>fib({value}) = {result}</p>
