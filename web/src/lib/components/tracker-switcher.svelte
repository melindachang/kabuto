<script lang="ts">
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import { useSidebar } from '$lib/components/ui/sidebar/index.js';

  import type { Component } from 'svelte';
  import { ChevronsUpDown, Plus } from '@lucide/svelte';

  let { trackers }: { trackers: { name: string; icon: Component }[] } =
    $props();
  const sidebar = useSidebar();

  let activeTracker = $state(trackers[0]);
</script>

<Sidebar.Menu>
  <Sidebar.MenuItem>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {#snippet child({ props })}
          <Sidebar.MenuButton
            {...props}
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
            >
              <activeTracker.icon class="size-4" />
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-medium">
                <!-- {activeTracker.name} -->
                Kabuto
              </span>
              <span class="truncate text-xs">{activeTracker.name}</span>
            </div>
            <ChevronsUpDown class="ml-auto" />
          </Sidebar.MenuButton>
        {/snippet}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        class="w-(--bits-dropdown-menu-anchor-width) min-w-56 rounded-lg"
        align="start"
        side={sidebar.isMobile ? 'bottom' : 'right'}
        sideOffset={4}
      >
        <DropdownMenu.Label class="text-xs text-muted-foreground"
          >Trackers</DropdownMenu.Label
        >
        {#each trackers as tracker, index (tracker.name)}
          <DropdownMenu.Item
            onSelect={() => (activeTracker = tracker)}
            class="gap-2 p-2"
          >
            <div
              class="flex size-6 items-center justify-center rounded-md border"
            >
              <tracker.icon class="size-3.5 shrink-0" />
            </div>
            {tracker.name}
            <DropdownMenu.Shortcut>⌘{index + 1}</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        {/each}
        <DropdownMenu.Separator />
        <DropdownMenu.Item class="gap-2 p-2">
          <div
            class="flex size-6 items-center justify-center rounded-md border bg-transparent"
          >
            <Plus class="size-4" />
          </div>
          <div class="font-medium text-muted-foreground">Add tracker</div>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </Sidebar.MenuItem>
</Sidebar.Menu>
