import type React from "react"
import "../../styles/ToolsBar_style.scss"

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
            <img src="/icons/grid-view.svg" alt="Grid View" width={16} height={16} />
          </button>
          <button className={view === "list" ? "active" : ""} onClick={() => onViewChange("list")}>
            <img src="/icons/list-view.svg" alt="List View" width={16} height={16} />
          </button>
        </div>
        <div className="tools-bar__search">
          <img src="/icons/search.svg" alt="Search" width={16} height={16} />
          <input type="text" placeholder="Search..." onChange={(e) => onSearch(e.target.value)} />
        </div>
      </div>
      <div className="tools-bar__right">
        <button className="tools-bar__filter-button">
          <img src="/icons/filter.svg" alt="Filter" width={16} height={16} />
        </button>
        <button className="tools-bar__add-button">
          <img src="/icons/plus.svg" alt="Add" width={16} height={16} />
          Add New
        </button>
      </div>
    </div>
  )
}

