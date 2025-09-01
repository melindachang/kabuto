<script lang="ts">
  import * as Collapsible from '$lib/components/ui/collapsible/index.js';
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import type { MenuGroup } from '$lib/types/menu';
  import { ChevronRight } from '@lucide/svelte';

  let { mainMenu }: { mainMenu: MenuGroup[] } = $props();
</script>

{#each mainMenu as group}
  <Sidebar.Group>
    {#if group.label}
      <Sidebar.GroupLabel>{group.label}</Sidebar.GroupLabel>
    {/if}
    <Sidebar.GroupContent>
      <Sidebar.Menu>
        {#each group.items as item}
          {#if item.children?.length}
            <Collapsible.Root open={item.isActive} class="group/collapsible">
              {#snippet child({ props })}
                <Sidebar.MenuItem {...props}>
                  <Collapsible.Trigger>
                    {#snippet child({ props })}
                      <Sidebar.MenuButton
                        {...props}
                        tooltipContent={item.title}
                      >
                        {#if item.icon}
                          <item.icon />
                        {/if}
                        <span>{item.title}</span>
                        <ChevronRight
                          class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                        />
                      </Sidebar.MenuButton>
                    {/snippet}
                  </Collapsible.Trigger>
                  <Collapsible.Content>
                    <Sidebar.MenuSub>
                      {#each item.children ?? [] as subItem (subItem.title)}
                        <Sidebar.MenuSubItem>
                          <Sidebar.MenuSubButton>
                            {#snippet child({ props })}
                              <a href={subItem.url} {...props}>
                                <span>{subItem.title}</span>
                              </a>
                            {/snippet}
                          </Sidebar.MenuSubButton>
                        </Sidebar.MenuSubItem>
                      {/each}
                    </Sidebar.MenuSub>
                  </Collapsible.Content>
                </Sidebar.MenuItem>
              {/snippet}
            </Collapsible.Root>
          {:else}
            <Sidebar.MenuItem>
              <a href={item.url}>
                <Sidebar.MenuButton tooltipContent={item.title}>
                  {#if item.icon}<item.icon />{/if}
                  <span>{item.title}</span>
                </Sidebar.MenuButton>
              </a>
            </Sidebar.MenuItem>
          {/if}
        {/each}
      </Sidebar.Menu>
    </Sidebar.GroupContent>
  </Sidebar.Group>
{/each}
