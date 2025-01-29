import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar/left-sidebar";
import { sidebarConfig } from "./config/config";
import "./styles/main_style.scss";

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<"admin" | "user">("admin");
  const items = sidebarConfig[userRole];

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  // const toggleUserRole = () => {
  //   setUserRole((prevRole) => (prevRole === "admin" ? "user" : "admin"));
  // };

  return (
    <div className="app">
      {/* <button onClick={toggleUserRole}>
        {userRole === "admin" ? "User" : "Admin"}
      </button> */}
      <Sidebar
        items={items}
        userRole={userRole}
        defaultExpanded={true}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default App;