import { FunctionComponent, useState, useEffect } from 'react';
import { SidebarItem } from '../../types/types';
import { sidebarConfig } from '../../config/config';
import { Icon } from '../../config/icons';
import '../../styles/sidebar_style.scss';

interface SidebarProps {
  userRole: 'admin' | 'user';
}

export const Sidebar: FunctionComponent<SidebarProps> = ({ userRole }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);




  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev); // Instantly update the state
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 250); // Animation duration in CSS
  };
  


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300); // 300ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const items = sidebarConfig[userRole] || [];

  const highlightText = (text: string, query: string) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="highlight">{part}</span>
      ) : (
        part
      )
    );
  };

  const renderMenuItem = (item: SidebarItem) => {
    if (debouncedQuery && !item.label.toLowerCase().includes(debouncedQuery.toLowerCase())) {
      return null;
    }
  
    const isDisabled = item.permissions && !item.permissions.includes(userRole);
  
    return (
      <div
        key={item.id}
        className={`menu-item ${item.id === activeItemId ? 'active' : ''} ${isDisabled ? 'statusdisabled' : ''}`}
        onClick={() => !isDisabled && setActiveItemId(item.id)}
      >
        <Icon 
          name={item.icon} 
          size={24} 
          className={`menu-icon ${item.icon.toLowerCase().replace(/-/g, '')}Icon`} 
        />
       {isExpanded && !isAnimating && (
  <span className="menu-text">
    {highlightText(item.label, debouncedQuery)}
  </span>
)}

        {item.type === 'submenu' && (
          <Icon name="add" size={20} className="add-sign-icon" />
        )}
      </div>
    );
  };
  
  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div className={`sidebar ${isExpanded ? '' : 'collapsed'}`}>
      <div className="header">
        <div className="logo-container arenaLogo"> 
          <Icon name="Logo Icon" size={32} className="logo logoIcon" /> 
          {isExpanded && <div className="app-name logoText">ARENA</div>} 
        </div>
        <div className="toggle" onClick={toggleSidebar}>
          <Icon 
            name={isExpanded ? 'sidebar-left' : 'sidebar-right'} 
            size={24} 
            className="sidebarLeftIcon" 
          />
        </div>
      </div>
      
      <div className={`search ${isExpanded ? '' : 'collapsed'}`}>
        <div className="search-container searchBar"> 
          <Icon name="search-normal" className="search-icon searchNormalIcon" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
          <div className="cmd-icons cmd"> {/* Added cmd class */}
            <Icon name="cmd-icon" className="cmdIcon" />
            <Icon name="cmd-icon2" className="cmdIcon1" />
          </div>
        </div>
      </div>
  
      {isExpanded && <div className="main-menu-text">Main Menu</div>}
  
      <div className="menu">
  {filteredItems.map(renderMenuItem)}
</div>

    </div>
  );
  
};