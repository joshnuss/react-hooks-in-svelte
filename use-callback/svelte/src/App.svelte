<script>
  import ExpensiveToRenderButton from './ExpensiveToRenderButton.svelte'

  let name = "world", age = 4534000000

  function handleClick() {
    alert(`Hello ${name}`)
  }
</script>

<input bind:value={name}/>
<input bind:value={age}/>
<ExpensiveToRenderButton on:click={handleClick}/>
