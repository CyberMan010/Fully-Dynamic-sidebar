// config.tsx

import { IconName } from "./icons";


export const sidebarConfig = {
  admin: [
    {
      id: '1',
      type: 'submenu',
      label: 'Dashboard',
      icon: 'home-2' as IconName,
      items: [
        {
          id: '1-1',
          type: 'link',
          label: 'Overview',
          icon: 'home-2' as IconName,
          href: '/dashboard',
        },
      ],
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
          icon: 'profile-2user' as IconName,
          href: '/profile',
        },
      ],
    },
    {
      id: '3',
      type: 'link',
      label: 'Workflow Management',
      icon: 'hierarchy-square-3' as IconName,
      href: '/workflow',
      permissions: ['admin'],
    },
    {
      id: '4',
      type: 'submenu',
      label: 'Audit Trail',
      icon: 'receipt-search' as IconName,
      permissions: ['admin'],
      items: [
        {
          id: '4-1',
          type: 'link',
          label: 'Audit Logs',
          icon: 'receipt-search' as IconName,
          href: '/audit',
        },
      ],
    },
    {
      id: '5',
      type: 'submenu',
      label: 'Customer Transactions',
      icon: 'arrange-square' as IconName,
      items: [
        {
          id: '5-1',
          type: 'link',
          label: 'Transactions',
          icon: 'arrange-square' as IconName,
          href: '/transactions',
        },
      ],
    },
    {
      id: '6',
      type: 'submenu',
      label: 'Customer 360',
      icon: 'briefcase' as IconName,
      items: [
        {
          id: '6-1',
          type: 'link',
          label: 'Overview',
          icon: 'briefcase' as IconName,
          href: '/customer360',
        },
      ],
    },
    {
      id: '7',
      type: 'submenu',
      label: 'Customer Onboarding',
      icon: 'user-octagon' as IconName,
      items: [
        {
          id: '7-1',
          type: 'link',
          label: 'New Customers',
          icon: 'user-octagon' as IconName,
          href: '/onboarding',
        },
      ],
    },
    {
      id: '8',
      type: 'submenu',
      label: 'Complaints Management',
      icon: 'message-question' as IconName,
      items: [
        {
          id: '8-1',
          type: 'link',
          label: 'Complaints',
          icon: 'message-question' as IconName,
          href: '/complaints',
        },
      ],
    },
    {
      id: '9',
      type: 'submenu',
      label: 'Trade Finance',
      icon: 'trade' as IconName,
      items: [
        {
          id: '9-1',
          type: 'link',
          label: 'Trade',
          icon: 'trade' as IconName,
          href: '/trade',
        },
      ],
    },
    {
      id: '10',
      type: 'submenu',
      label: 'Lead Management',
      icon: 'personalcard' as IconName,
      permissions: ['admin'],
      items: [
        {
          id: '10-1',
          type: 'link',
          label: 'Leads',
          icon: 'personalcard' as IconName,
          href: '/leads',
        },
      ],
    },
    {
      id: '11',
      type: 'submenu',
      label: 'Loan Management',
      icon: 'money-send' as IconName,
      items: [
        {
          id: '11-1',
          type: 'link',
          label: 'Loans',
          icon: 'money-send' as IconName,
          href: '/loans',
        },
      ],
    },
    {
      id: '12',
      type: 'link',
      label: 'Knowledge Base',
      icon: 'book' as IconName,
      href: '/knowledge',
    },
    {
      id: '13',
      type: 'submenu',
      label: 'License Management',
      icon: 'key-square' as IconName,
      permissions: ['admin'],
      items: [
        {
          id: '13-1',
          type: 'link',
          label: 'Licenses',
          icon: 'key-square' as IconName,
          href: '/licenses',
        },
      ],
    },
    {
      id: '14',
      type: 'submenu',
      label: 'Admin Settings',
      icon: 'setting-3' as IconName,
      permissions: ['admin'],
      items: [
        {
          id: '14-1',
          type: 'link',
          label: 'Settings',
          icon: 'setting-3' as IconName,
          href: '/settings',
        },
      ],
    },
  ],
  user: [
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
          icon: 'profile-2user' as IconName,
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
      permissions: ['admin'],
    },
    {
      id: '4',
      type: 'link',
      label: 'Audit Trail',
      icon: 'receipt-search' as IconName,
      href: '/dashboard',
      permissions: ['admin'],
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
      label: 'Trade Finance',
      icon: 'trade' as IconName,
      href: '/dashboard',
    },
    {
      id: '10',
      type: 'link',
      label: 'Lead Management',
      icon: 'personalcard' as IconName,
      href: '/dashboard',
      permissions: ['admin'],
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
      permissions: ['admin'],
    },
    {
      id: '14',
      type: 'link',
      label: 'Admin Settings',
      icon: 'setting-3' as IconName,
      href: '/dashboard',
      permissions: ['admin'],
    },
  ],
};
  
