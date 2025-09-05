import type { Menu } from '$lib/types/menu';
import {
  BookCheck,
  Bookmark,
  Disc3,
  Film,
  Gamepad2,
  Heart,
  Highlighter,
  Home,
  Star,
  Ticket,
  Tv,
  Zap
} from '@lucide/svelte';

const books_menu: Menu = {
  mainMenu: [
    {
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
        {
          title: 'Highlights',
          url: '#',
          icon: Highlighter,
          isActive: false
        }
      ]
    }
  ],
  collections: [
    { title: 'Likes', url: '#', icon: Heart, isActive: false },
    { title: 'Favorites', url: '#', isActive: false }
  ]
};

const films_menu: Menu = {
  mainMenu: [
    {
      // label: 'General',
      items: [
        { title: 'Home', url: '/films', icon: Home, isActive: true },
        {
          title: 'Activity',
          url: '/films/activity',
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
        { title: 'Films', url: '#', icon: Film, isActive: false },
        { title: 'Watchlist', url: '#', icon: Bookmark, isActive: false },
        { title: 'Reviews', url: '#', icon: Star, isActive: false }
      ]
    }
  ],
  collections: [
    { title: 'Likes', url: '#', icon: Heart, isActive: false },
    { title: 'In Theaters', url: '#', icon: Ticket, isActive: false },
    { title: 'Favorites', url: '#', isActive: false }
  ]
};

const shows_menu: Menu = {
  mainMenu: [
    {
      // label: 'General',
      items: [
        { title: 'Home', url: '/shows', icon: Home, isActive: true },
        {
          title: 'Activity',
          url: '/shows/activity',
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
        { title: 'Shows', url: '#', icon: Tv, isActive: false },
        { title: 'Watchlist', url: '#', icon: Bookmark, isActive: false },
        { title: 'Reviews', url: '#', icon: Star, isActive: false }
      ]
    }
  ],
  collections: [
    { title: 'Likes', url: '#', icon: Heart, isActive: false },
    { title: 'Favorites', url: '#', isActive: false }
  ]
};

const games_menu: Menu = {
  mainMenu: [
    {
      // label: 'General',
      items: [
        { title: 'Home', url: '/games', icon: Home, isActive: true },
        {
          title: 'Activity',
          url: '/games/activity',
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
        { title: 'Games', url: '#', icon: Gamepad2, isActive: false },
        { title: 'Backlog', url: '#', icon: Bookmark, isActive: false },
        { title: 'Reviews', url: '#', icon: Star, isActive: false }
      ]
    }
  ],
  collections: [
    { title: 'Likes', url: '#', icon: Heart, isActive: false },
    { title: 'Favorites', url: '#', isActive: false }
  ]
};

const music_menu: Menu = {
  mainMenu: [
    {
      // label: 'General',
      items: [
        { title: 'Home', url: '/music', icon: Home, isActive: true },
        {
          title: 'Activity',
          url: '/music/activity',
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
        { title: 'Albums', url: '#', icon: Disc3, isActive: false },
        { title: 'Backlog', url: '#', icon: Bookmark, isActive: false },
        { title: 'Reviews', url: '#', icon: Star, isActive: false }
      ]
    }
  ],
  collections: [
    { title: 'Likes', url: '#', icon: Heart, isActive: false },
    { title: 'Favorites', url: '#', isActive: false }
  ]
};

export const root_to_tracker = new Map<string, Menu>([
  ['books', books_menu],
  ['films', films_menu],
  ['shows', shows_menu],
  ['games', games_menu],
  ['music', music_menu]
]);
