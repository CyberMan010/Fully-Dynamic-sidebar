import type React from "react"
import { type FunctionComponent, useState, useEffect } from "react"
import type { SidebarItem, Permission, SubmenuItem, NavItem } from "../../types/types"
import { sidebarConfig } from "../../config/config"
import { Icon } from "../../config/icons"
import "../../styles/sidebar_style.scss"
import { Submenu } from "./submenu"

interface SidebarProps {
  userRole: Permission
}

export const Sidebar: React.FC<SidebarProps> = ({ userRole }) => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [activeItemId, setActiveItemId] = useState<string | null>(null)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<{
    id: string
    title: string
    sections: any[]
  } | null>(null)
  const [isFullyExpanded, setIsFullyExpanded] = useState(true)

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev)
    setIsAnimating(true)
    setIsFullyExpanded(false)
    setTimeout(() => {
      setIsAnimating(false)
      setIsFullyExpanded(true)
    }, 300)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 300)

    return () => {
      clearTimeout(handler)
    }
  }, [searchQuery])

  const items = sidebarConfig[userRole] || []

  const highlightText = (text: string, query: string) => {
    if (!query) return text

    const parts = text.split(new RegExp(`(${query})`, "gi"))
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      ),
    )
  }

  const toggleSubmenu = (itemId: string) => {
    if (activeSubmenu?.id === itemId) {
      setActiveSubmenu(null)
      setIsExpanded(true)
      setIsAnimating(true)
      setIsFullyExpanded(false)
      setTimeout(() => {
        setIsAnimating(false)
        setIsFullyExpanded(true)
      }, 300)
    } else {
      const item = items.find((i) => i.id === itemId && i.type === "submenu") as SubmenuItem
      if (item) {
        setActiveSubmenu({
          id: item.id,
          title: item.label,
          sections: [
            {
              title: item.label.toUpperCase(),
              items: item.items.map((subItem) => ({
                id: subItem.id,
                label: subItem.label,
                icon: subItem.icon,
              })),
            },
          ],
        })
        setIsExpanded(false)
        setIsAnimating(true)
        setIsFullyExpanded(false)
        setTimeout(() => {
          setIsAnimating(false)
          setIsFullyExpanded(true)
        }, 300)
      }
    }
  }

  const renderMenuItem = (item: SidebarItem, index: number) => {
    if (item.type === "divider") {
      return <div key={item.id} className="sidebar-divider" />
    }

    if (debouncedQuery && !item.label.toLowerCase().includes(debouncedQuery.toLowerCase())) {
      return null
    }

    const isDisabled = item.permissions && !item.permissions.includes(userRole)
    const hasSubmenu = item.type === "submenu"
    const isSubmenuOpen = openSubmenu === item.id

    return (
      <div key={item.id} className="menu-item-wrapper">
        <div
          className={`menu-item ${item.id === activeItemId ? "active" : ""} ${isDisabled ? "statusdisabled" : ""}`}
          onClick={() => {
            if (!isDisabled) {
              setActiveItemId(item.id)
              if (hasSubmenu) {
                toggleSubmenu(item.id)
              }
            }
          }}
          style={{
            transitionDelay: isFullyExpanded ? `${index * 50}ms` : "0ms",
            opacity: isFullyExpanded ? 1 : 0,
            transform: isFullyExpanded ? "translateX(0)" : "translateX(-20px)",
          }}
        >
          <Icon name={item.icon} size={24} className={`menu-icon ${item.icon.toLowerCase().replace(/-/g, "")}Icon`} />
          <span className={`menu-text ${isExpanded ? "visible" : "hidden"}`}>
            {highlightText(item.label, debouncedQuery)}
          </span>
          {hasSubmenu && <Icon name="add" size={20} className={`submenu-icon ${isSubmenuOpen ? "expanded" : ""}`} />}
        </div>
        {hasSubmenu && isSubmenuOpen && (
          <div className="submenu">
            {(item as SubmenuItem).items.map((subItem, subIndex) => (
              <div key={subItem.id} className="submenu-item">
                <Icon
                  name={subItem.icon}
                  size={20}
                  className={`submenu-icon ${subItem.icon.toLowerCase().replace(/-/g, "")}Icon`}
                />
                <span className="submenu-text">{subItem.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  const filteredItems = items.filter(
    (item): item is NavItem =>
      item.type !== "divider" && item.label.toLowerCase().includes(debouncedQuery.toLowerCase()),
  )

  return (
    <>
      <div className={`sidebar ${isExpanded ? "" : "collapsed"} ${isAnimating ? "animating" : ""}`}>
        <div className="header">
          <div className="logo-container arenaLogo">
            <Icon name="Logo Icon" size={32} className="logo logoIcon" />
            {isExpanded && <div className="app-name logoText">ARENA</div>}
          </div>
          <div className="toggle" onClick={toggleSidebar}>
            <Icon name={isExpanded ? "sidebar-left" : "sidebar-right"} size={24} className="sidebarLeftIcon" />
          </div>
        </div>

        <div className={`search ${isExpanded ? "" : "collapsed"}`}>
          <div className="search-container searchBar">
            <Icon name="search-normal" className="search-icon searchNormalIcon" />
            <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearch} />
            <div className="cmd-icons cmd">
              <Icon name="cmd-icon" className="cmdIcon" />
              <Icon name="cmd-icon2" className="cmdIcon1" />
            </div>
          </div>
        </div>

        {isExpanded && <div className="main-menu-text">Main Menu</div>}

        <div className="menu">{filteredItems.map((item, index) => renderMenuItem(item, index))}</div>
      </div>
      {activeSubmenu && (
        <Submenu
          title={activeSubmenu.title}
          sections={activeSubmenu.sections}
          onClose={() => {
            setActiveSubmenu(null)
            setIsExpanded(true)
          }}
          storageInfo={
            activeSubmenu.id === "settings"
              ? {
                  used: 18.2,
                  total: 20,
                }
              : undefined
          }
        />
      )}
    </>
  )
}
