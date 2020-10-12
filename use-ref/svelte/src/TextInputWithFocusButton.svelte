<script>
  let inputEl

  function handleClick() {
    inputEl.focus()
  }
</script>

<input bind:this={inputEl}/>
<button on:click={handleClick}>Focus the input</button>
