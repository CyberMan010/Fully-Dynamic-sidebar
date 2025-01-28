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
  
            icon: 'profile-2user' as IconName, // Cast to IconName
  
            href: '/profile',
  
          },
  
        ],
  
      },
      {
  
        id: '3',
  
        type: 'link',
  
        label: 'Workflow Management',
  
        icon: 'hierarchy-square-3' as IconName, 
  
        href: '/dashboard',
  
      },
      {
  
        id: '4',
  
        type: 'link',
  
        label: 'Audit Trail',
  
        icon: 'receipt-search' as IconName, 
  
        href: '/dashboard',
  
      },
      {
  
        id: '5',
  
        type: 'link',
  
        label: 'Customer Transactions',
  
        icon: 'arrange-square' as IconName, 
  
        href: '/dashboard',
  
      },
      {
  
        id: '6',
  
        type: 'link',
  
        label: 'Customer 360',
  
        icon: 'briefcase' as IconName, 
  
        href: '/dashboard',
  
      },
      {
  
        id: '7',
  
        type: 'link',
  
        label: 'Customer Onboarding',
  
        icon: 'user-octagon' as IconName, 
  
        href: '/dashboard',
  
      },
      {
  
        id: '8',
  
        type: 'link',
  
        label: 'Complaints Management',
  
        icon: 'message-question' as IconName, 
  
        href: '/dashboard',
  
      },
      {
  
        id: '9',
  
        type: 'link',
  
        label: 'Trande Finance',
  
        icon: 'trade' as IconName, 
  
        href: '/dashboard',
  
      },
      {
  
        id: '10',
  
        type: 'link',
  
        label: 'Lead Management',
  
        icon: 'personalcard' as IconName, 
  
        href: '/dashboard',
  
      },
      {
  
        id: '11',
  
        type: 'link',
  
        label: 'Loan Management',
  
        icon: 'money-send' as IconName, 
  
        href: '/dashboard',
  
      },
      {
  
        id: '12',
  
        type: 'link',
  
        label: 'Knowledge Base',
  
        icon: 'book' as IconName, 
  
        href: '/dashboard',
  
      },
      {
  
        id: '13',
  
        type: 'link',
  
        label: 'License Management',
  
        icon: 'key-square' as IconName, 
  
        href: '/dashboard',
  
      },
      {
  
        id: '14',
  
        type: 'link',
  
        label: 'Admin Settings',
  
        icon: 'setting-3' as IconName, 
  
        href: '/dashboard',
  
      },
  
    ],
  
  };