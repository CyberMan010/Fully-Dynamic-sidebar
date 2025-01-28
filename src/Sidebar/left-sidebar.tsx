import React, { useState } from 'react';
import '../styles/sidebar_style.scss'


interface SidebarProps {
  defaultExpanded?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ defaultExpanded = true }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-header">
        {isExpanded && <h2>Menu</h2>}
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isExpanded ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="#" className="nav-item">
              <Home size={24} />
              {isExpanded && <span>Home</span>}
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <Users size={24} />
              {isExpanded && <span>Users</span>}
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <Settings size={24} />
              {isExpanded && <span>Settings</span>}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;