<script lang="ts" module>
  import {
    BookCheck,
    Bookmark,
    BookOpen,
    Film,
    Gamepad2,
    Heart,
    Highlighter,
    Home,
    Star,
    Tv,
    Zap
  } from '@lucide/svelte';

  // This is sample data.
  const data: {
    user: { name: string; email: string; avatar: string };
    trackers: { name: string; icon: Component }[];
    mainMenu: MenuGroup[];
    collections: MenuItem[];
  } = {
    user: {
      name: 'shadcn',
      email: 'm@example.com',
      avatar: '/avatars/shadcn.jpg'
    },
    trackers: [
      {
        name: 'Books',
        icon: BookOpen
      },
      {
        name: 'Films',
        icon: Film
      },
      {
        name: 'Shows',
        icon: Tv
      },
      {
        name: 'Games',
        icon: Gamepad2
      }
    ],
    mainMenu: [
      {
        // label: 'General',
        items: [
          { title: 'Home', url: '/books', icon: Home, isActive: true },
          {
            title: 'Activity',
            url: '/books/activity',
            isActive: true,
            icon: Zap,
            children: [
              {
                title: 'Summary',
                url: '#',
                isActive: false
              },
              {
                title: 'Diary',
                url: '#',
                isActive: false
              }
            ]
          }
        ]
      },
      {
        label: 'Library',
        items: [
          { title: 'Books', url: '#', icon: BookCheck, isActive: false },
          { title: 'To Read', url: '#', icon: Bookmark, isActive: false },
          { title: 'Reviews', url: '#', icon: Star, isActive: false },
          { title: 'Highlights', url: '#', icon: Highlighter, isActive: false }
        ]
      }
    ],
    collections: [
      { title: 'Likes', url: '#', icon: Heart, isActive: false },
      { title: 'Favorites', url: '#', isActive: false }
    ]
  };
</script>

<script lang="ts">
  import NavUser from './nav-user.svelte';
  import TrackerSwitcher from './tracker-switcher.svelte';
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import type { Component, ComponentProps } from 'svelte';
  import SearchForm from '$lib/components/search-form.svelte';
  import NavMain from './nav-main.svelte';
  import type { MenuGroup, MenuItem } from '$lib/types/menu';
  import NavCollections from './nav-collections.svelte';

  let {
    ref = $bindable(null),
    collapsible = 'icon',
    ...restProps
  }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {collapsible} {...restProps}>
  <Sidebar.Header>
    <TrackerSwitcher trackers={data.trackers} />
    <SearchForm />
  </Sidebar.Header>
  <Sidebar.Content>
    <NavMain mainMenu={data.mainMenu} />
    <NavCollections collections={data.collections} />
  </Sidebar.Content>
  <Sidebar.Footer>
    <NavUser user={data.user} />
  </Sidebar.Footer>
  <Sidebar.Rail />
</Sidebar.Root>
