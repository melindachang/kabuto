<script lang="ts">
  import '../app.css';
  import AppSidebar from '$lib/components/app-sidebar.svelte';
  import * as Breadcrumb from '$lib/components/ui/breadcrumb';
  import { Separator } from '$lib/components/ui/separator';
  import * as Sidebar from '$lib/components/ui/sidebar';
  import { ModeWatcher } from 'mode-watcher';
  import { activeTracker } from '$lib/state.svelte';

  let { children } = $props();
</script>

<ModeWatcher />

<Sidebar.Provider>
  <AppSidebar />
  <Sidebar.Inset>
    <header
      class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
    >
      <div class="flex items-center gap-2 px-4">
        <Sidebar.Trigger class="-ml-1" />
      </div>
    </header>
    {@render children?.()}
  </Sidebar.Inset>
</Sidebar.Provider>
