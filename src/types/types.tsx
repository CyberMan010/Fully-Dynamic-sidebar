export type IconName = 'home' | 'users' | 'settings' | 'sidebar-left' | 'sidebar-right';

export type ItemType = 'link' | 'submenu' | 'divider';
export type Permission = 'admin' | 'user' | 'editor';

export interface BaseItem {
  id: string;
  type: ItemType;
  permissions?: Permission[];
}

export interface NavItem extends BaseItem {
  type: 'link' | 'submenu';
  label: string;
  icon: IconName;
}

export interface LinkItem extends NavItem {
  type: 'link';
  href: string;
}

export interface SubmenuItem extends NavItem {
  type: 'submenu';
  items: SidebarItem[];
}

export interface DividerItem extends BaseItem {
  type: 'divider';
}

export type SidebarItem = LinkItem | SubmenuItem | DividerItem;