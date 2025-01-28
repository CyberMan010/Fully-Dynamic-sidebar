export type IconName = 'home' | 'users' | 'settings' | 'chevron-left' | 'chevron-right';

type ItemType = 'link' | 'submenu' | 'divider';
export type Permission = 'admin' | 'user' | 'editor';

interface BaseItem {
  id: string;
  type: ItemType;
  permissions?: Permission[];
}

interface NavItem extends BaseItem {
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