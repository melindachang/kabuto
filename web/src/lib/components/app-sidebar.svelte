<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar';

  import { House, BookOpen, Film, Gamepad2, Command, Tv } from '@lucide/svelte';
  import type { ComponentProps } from 'svelte';
  import ModeSwitcher from '$lib/components/mode-switcher.svelte';
  const data = {
    nav_main: [
      {
        title: 'Home',
        url: '/',
        icon: House,
        isActive: true
      },
      {
        title: 'Books',
        url: '/books',
        icon: BookOpen,
        isActive: false
      },
      {
        title: 'Films',
        url: '/films',
        icon: Film,
        isActive: false
      },
      {
        title: 'Shows',
        url: '/shows',
        icon: Tv,
        isActive: false
      },
      {
        title: 'Games',
        url: '/games',
        icon: Gamepad2,
        isActive: false
      }
    ]
  };

  let {
    ref = $bindable(null),
    ...restProps
  }: ComponentProps<typeof Sidebar.Root> = $props();

  let activeItem = $state(data.nav_main[0]);
  const sidebar = Sidebar.useSidebar();
</script>

<Sidebar.Root
  bind:ref
  collapsible="icon"
  class="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
  {...restProps}
>
  <Sidebar.Root
    collapsible="none"
    class="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
  >
    <Sidebar.Header>
      <Sidebar.Menu
        ><Sidebar.MenuItem>
          <Sidebar.MenuButton size="lg" class="md:h-8 md:p-0">
            {#snippet child({ props })}
              <a href="##" {...props}>
                <div
                  class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
                >
                  <Command class="size-4" />
                </div>
              </a>
            {/snippet}
          </Sidebar.MenuButton>
        </Sidebar.MenuItem></Sidebar.Menu
      >
    </Sidebar.Header>
    <Sidebar.Content>
      <Sidebar.Group>
        <Sidebar.GroupContent class="px-15 md:px-0">
          <Sidebar.Menu>
            {#each data.nav_main as item (item.title)}
              <Sidebar.MenuItem>
                <Sidebar.MenuButton
                  tooltipContentProps={{
                    hidden: false
                  }}
                  onclick={() => {
                    activeItem = item;
                    sidebar.setOpen(true);
                  }}
                  isActive={activeItem.title === item.title}
                  class="px-2.5 md:px-2"
                >
                  {#snippet tooltipContent()}
                    {item.title}
                  {/snippet}
                  <item.icon />
                  <span>{item.title}</span>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            {/each}
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
    </Sidebar.Content>
    <Sidebar.Footer>
      <Sidebar.Menu>
        <Sidebar.MenuItem>
          <ModeSwitcher />
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Footer>
  </Sidebar.Root>
  <Sidebar.Root collapsible="none" class="hidden flex-1 md:flex">
    <Sidebar.Header></Sidebar.Header>
  </Sidebar.Root>
</Sidebar.Root>
