import React from "react"
import "../../styles/ToolsBar_style.scss"
import { Icon } from "../../config/icons"

interface ToolsBarProps {
  view: "card" | "list"
  onViewChange: (view: "card" | "list") => void
  onSearch: (query: string) => void
}

export const ToolsBar: React.FC<ToolsBarProps> = ({ view, onViewChange, onSearch }) => {
  return (
    <div className="tools-bar">
      <div className="tools-bar__left">
        <button 
          className={`view-button ${view === "card" ? "active" : ""}`}
          onClick={() => onViewChange("card")}
          aria-label="Card view"
        >
          <Icon name="card-view" size={24} />
          <span>Card View</span>
        </button>
        <button 
          className={`view-button ${view === "list" ? "active" : ""}`}
          onClick={() => onViewChange("list")}
          aria-label="List view"
        >
          <Icon name="list-view" size={24} />
          <span>List View</span>
        </button>
      </div>
      <div className="tools-bar__center">
        <div className="tools-bar__search">
          <Icon name="search-normal2" size={24} className="icon"/>
          <input 
            type="text" 
            placeholder="Search" 
            onChange={(e) => onSearch(e.target.value)} 
          />
        </div>
      </div>
      <div className="tools-bar__right">
  <button className="view-button" aria-label="Filter">
    <Icon name="filter" size={30} />
    <span>Filter</span>
  </button>
  <button className="tools-bar__add-button">
    <Icon name="add" size={24} />
    Add New
  </button>
</div>
    </div>
  )
}