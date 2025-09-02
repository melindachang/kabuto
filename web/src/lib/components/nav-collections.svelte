<script lang="ts">
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
  import { useSidebar } from '$lib/components/ui/sidebar/context.svelte.js';
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import type { MenuItem } from '$lib/types/menu';
  import { Ellipsis, Folder, Settings2, Trash2 } from '@lucide/svelte';

  let {
    collections
  }: {
    collections: MenuItem[];
  } = $props();

  const sidebar = useSidebar();
</script>

<Sidebar.Group class="group-data-[collapsible=icon]:hidden">
  <Sidebar.GroupLabel>Collections</Sidebar.GroupLabel>
  <Sidebar.Menu>
    {#each collections as item (item.title)}
      <Sidebar.MenuItem>
        <Sidebar.MenuButton>
          {#snippet child({ props })}
            <a href={item.url} {...props}>
              {#if item.icon}
                <item.icon />
              {/if}
              <span>{item.title}</span>
            </a>
          {/snippet}
        </Sidebar.MenuButton>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            {#snippet child({ props })}
              <Sidebar.MenuAction showOnHover {...props}>
                <Ellipsis />
                <span class="sr-only">More</span>
              </Sidebar.MenuAction>
            {/snippet}
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            class="w-48 rounded-lg"
            side={sidebar.isMobile ? 'bottom' : 'right'}
            align={sidebar.isMobile ? 'end' : 'start'}
          >
            <DropdownMenu.Item>
              <Folder class="text-muted-foreground" />
              <span>View Collection</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Settings2 class="text-muted-foreground" />
              <span>Edit Collection</span>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <Trash2 class="text-muted-foreground" />
              <span>Delete Collection</span>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Sidebar.MenuItem>
    {/each}
    <Sidebar.MenuItem>
      <Sidebar.MenuButton class="text-sidebar-foreground/70">
        <Ellipsis class="text-sidebar-foreground/70" />
        <span>More</span>
      </Sidebar.MenuButton>
    </Sidebar.MenuItem>
  </Sidebar.Menu>
</Sidebar.Group>
