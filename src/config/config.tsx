import { IconName } from "./icons";


export const sidebarConfig = {

    admin: [
  
      {
  
        id: '1',
  
        type: 'link',
  
        label: 'Dashboard',
  
        icon: 'home-2' as IconName, 
  
        href: '/dashboard',
  
      },
  
      {
  
        id: '2',
  
        type: 'submenu',
  
        label: 'User Management',
  
        icon: 'profile-2user' as IconName,
  
        items: [
  
          {
  
            id: '2-1',
  
            type: 'link',
  
            label: 'Profile',
  
            icon: 'profile' as IconName, // Cast to IconName
  
            href: '/profile',
  
          },
  
        ],
  
      },
  
    ],
  
  };