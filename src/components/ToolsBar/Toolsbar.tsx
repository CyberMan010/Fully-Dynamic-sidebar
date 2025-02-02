import type React from "react"
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
        <div className="tools-bar__view-toggle">
          <button className={view === "card" ? "active" : ""} onClick={() => onViewChange("card")}>
            <Icon name="card-view"  width={24} height={24} />
          </button>
          <button className={view === "list" ? "active" : ""} onClick={() => onViewChange("list")}>
            <Icon name="list-view" width={24} height={24} />
          </button>
        </div>
        <div className="tools-bar__search">
          <Icon name="search-normal"  width={24} height={24} />
          <input type="text" placeholder="Search..." onChange={(e) => onSearch(e.target.value)} />
        </div>
      </div>
      <div className="tools-bar__right">
        <button className="tools-bar__filter-button">
          <Icon name="filter"  width={24} height={24} />
        </button>
        <button className="tools-bar__add-button">
          <Icon name="add" width={24} height={24} />
          Add New
        </button>
      </div>
    </div>
  )
}

