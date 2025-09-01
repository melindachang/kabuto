import type { Component } from 'svelte';

export type MenuGroup = {
  label?: string;
  items: MenuItem[];
};

export type MenuItem = {
  title: string;
  url: string;
  isActive: boolean;
  icon?: Component;
  children?: ChildMenuItem[];
};

export type ChildMenuItem = Omit<MenuItem, 'icon' | 'children'>;
