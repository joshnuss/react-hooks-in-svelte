<script>
  import { setContext } from 'svelte'
  import Toolbar from './Toolbar.svelte'

  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  }

  setContext('ThemeContext', themes.dark)
</script>

<Toolbar/>
