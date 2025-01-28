import React from "react";
import { Sidebar } from "./components/Sidebar/left-sidebar";
import { sidebarConfig } from "./config/config";
import "./styles/main_style.scss";
import "./styles/sidebar_style.scss"; // Import the sidebar styles globally


const App: React.FC = () => {
  const userRole = "admin";
  const items = sidebarConfig[userRole];

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="app">
      <Sidebar
        items={items}
        userPermissions={[userRole]}
        defaultExpanded={true}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default App;
