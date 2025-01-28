import React from "react";
import { Sidebar } from "./components/Sidebar/left-sidebar";
import { sidebarConfig } from "./config/config";
import "./styles/main_style.scss";



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
        userRole={[userRole]}
        defaultExpanded={true}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default App;
