<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar';
  import { Send, Settings } from '@lucide/svelte';
  import type { Component } from 'svelte';

  const items: { title: string; url: string; icon: Component }[] = [
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Send
    }
  ];
</script>

<Sidebar.Group>
  <Sidebar.GroupContent>
    <Sidebar.Menu>
      {#each items as item (item.title)}
        <Sidebar.MenuItem>
          <a href={item.url}
            ><Sidebar.MenuButton>
              <item.icon />
              <span>{item.title}</span></Sidebar.MenuButton
            ></a
          >
        </Sidebar.MenuItem>
      {/each}
    </Sidebar.Menu>
  </Sidebar.GroupContent>
</Sidebar.Group>
