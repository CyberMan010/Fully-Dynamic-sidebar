import React, { useState } from 'react';
import { Icon } from '../../config/icons';
import { SidebarItem, Permission } from '../../types/types';
import { LinkItem } from '../../types/types';
import '../../styles/sidebar_style.scss';

interface SidebarProps {
  items: SidebarItem[];
  defaultExpanded?: boolean;
  userPermissions?: Permission[];
  onSearch?: (query: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  defaultExpanded = true,
  userPermissions = [],
  onSearch,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const hasPermission = (permissions?: Permission[]) =>
    !permissions || permissions.some((p) => userPermissions.includes(p));

  const renderItem = (item: SidebarItem): React.ReactNode => {
    if (!hasPermission(item.permissions)) return null;

    if (item.type === 'divider') return <hr key={item.id} className="divider" />;

    const isSubmenu = item.type === 'submenu';
    const isOpen = openSubmenus.includes(item.id);

    return (
      <li key={item.id}>
        {isSubmenu ? (
          <>
            <button
              className={`nav-item ${isOpen ? 'active' : ''}`}
              onClick={() =>
                setOpenSubmenus((prev) =>
                  prev.includes(item.id)
                    ? prev.filter((id) => id !== item.id)
                    : [...prev, item.id]
                )
              }
            >
              <Icon name={item.icon} />
              {isExpanded && <span>{item.label}</span>}
            </button>
            {isOpen && isExpanded && (
              <ul className="submenu">{item.items.map(renderItem)}</ul>
            )}
          </>
        ) : (
          <a href={(item as LinkItem).href} className="nav-item">
            <Icon name={item.icon} />
            {isExpanded && <span>{item.label}</span>}
          </a>
        )}
      </li>
    );
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      {isExpanded && (
        <div className="search-container">
          <div className="search-wrapper">
            <Icon name="search-normal" className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                onSearch?.(e.target.value);
              }}
            />
            <div className="keybinds">
              <Icon name="cmd-icon" size={16} />
              <span>+</span>
              <Icon name="cmd-icon2" size={16} />
            </div>
          </div>
        </div>
      )}

      <div className="header">
        {isExpanded && <h2>Menu</h2>}
        <button onClick={() => setIsExpanded(!isExpanded)}>
          <Icon name={isExpanded ? 'sidebar-left' : 'sidebar-right'} />
        </button>
      </div>

      <nav>
        <ul>{items.map(renderItem)}</ul>
      </nav>
    </div>
  );
};
