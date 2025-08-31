<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';

  import * as Sidebar from '$lib/components/ui/sidebar';
  import * as Breadcrumb from '$lib/components/ui/breadcrumb';
  import Separator from '$lib/components/ui/separator/separator.svelte';
  import AppSidebar from '$lib/components/app-sidebar.svelte';

  import { ModeWatcher } from 'mode-watcher';

  let { children } = $props();
</script>

<ModeWatcher />

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Sidebar.Provider>
  <AppSidebar />
  <Sidebar.Inset>
    <header
      class="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4"
    >
      <Sidebar.Trigger class="-ml-1" />
      <Separator
        orientation="vertical"
        class="mr-2 data-[orientation=vertical]:h-4"
      />
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item class="hidden md:block">
            <Breadcrumb.Link href="#">Root</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator class="hidden md:block" />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Second</Breadcrumb.Link>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </header>
  </Sidebar.Inset>
</Sidebar.Provider>

{@render children?.()}
