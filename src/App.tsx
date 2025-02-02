import type React from "react"
import { useState } from "react"
import { Sidebar } from "./components/Sidebar/left-sidebar"
import { LandingPage } from "./components/main-page/Landing-Page"
import "./styles/main_style.scss"

const App: React.FC = () => {
  const [userRole] = useState<"admin" | "user">("admin")
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const handleItemSelect = (itemName: string) => {
    setSelectedItem(itemName)
  }

  return (
    <div className="app">
      <Sidebar userRole={userRole} onItemSelect={handleItemSelect} />
      <main className="main-content">
        {selectedItem === "Knowledge Base" ? <LandingPage /> : <div>Select an item from the sidebar</div>}
      </main>
    </div>
  )
}

export default App

