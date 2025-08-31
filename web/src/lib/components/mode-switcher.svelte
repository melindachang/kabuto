<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar';
  import { Sun, Moon } from '@lucide/svelte';

  import { toggleMode } from 'mode-watcher';
  import { Button } from '$lib/components/ui/button';
</script>

<Sidebar.MenuButton
  onclick={toggleMode}
  variant="outline"
  class="px-2.5 md:px-2"
>
  <Sun
    class="scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90"
  />
  <Moon
    class="absolute scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
  />
  <span class="sr-only">Toggle theme</span>
</Sidebar.MenuButton>
