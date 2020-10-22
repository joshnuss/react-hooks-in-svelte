<script>
  import { getContext } from 'svelte'

  const theme = getContext('ThemeContext')
</script>

<button style={`background: ${theme.background}; color: ${theme.foreground}`}>
  I am styled by theme context!
</button>
