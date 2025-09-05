<script lang="ts" module>
  // This is sample data.
  const data: {
    user: { name: string; email: string; avatar: string };
  } = {
    user: {
      name: 'shadcn',
      email: 'm@example.com',
      avatar: '/avatars/shadcn.jpg'
    }
  };
</script>

<script lang="ts">
  import NavUser from './nav-user.svelte';
  import TrackerSwitcher from './tracker-switcher.svelte';
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import { type ComponentProps } from 'svelte';
  import SearchForm from '$lib/components/search-form.svelte';
  import NavMain from './nav-main.svelte';
  import NavCollections from './nav-collections.svelte';
  import NavFooter from './nav-footer.svelte';

  import { root_to_tracker } from '$lib/menus';
  import { activeTracker } from '$lib/state.svelte';

  let {
    ref = $bindable(null),
    ...restProps
  }: ComponentProps<typeof Sidebar.Root> = $props();

  let menu = $derived(root_to_tracker.get(activeTracker.value));
</script>

<Sidebar.Root {...restProps}>
  <Sidebar.Header>
    <TrackerSwitcher />
    <SearchForm />
  </Sidebar.Header>
  <Sidebar.Content>
    <NavMain mainMenu={menu!.mainMenu} />
    <NavCollections collections={menu!.collections} />
  </Sidebar.Content>
  <Sidebar.Footer>
    <NavFooter />
    <NavUser user={data.user} />
  </Sidebar.Footer>
  <Sidebar.Rail />
</Sidebar.Root>
