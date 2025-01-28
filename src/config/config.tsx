export const sidebarConfig = {
    admin: [
      {
        id: 'dashboard',
        type: 'link' as const,
        label: 'Dashboard',
        icon: 'home',
        href: '/dashboard'
      },
      {
        id: 'users',
        type: 'submenu' as const,
        label: 'Users',
        icon: 'users',
        items: [
          {
            id: 'users-list',
            type: 'link' as const,
            label: 'All Users',
            icon: 'users',
            href: '/users'
          },
          {
            id: 'users-settings',
            type: 'link' as const,
            label: 'Settings',
            icon: 'settings',
            href: '/users/settings'
          }
        ]
      }
    ],
    user: [
      {
        id: 'profile',
        type: 'link' as const,
        label: 'Profile',
        icon: 'user',
        href: '/profile'
      }
    ]
  };