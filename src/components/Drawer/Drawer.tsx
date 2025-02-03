"use client"

import { useEffect, type ReactNode } from "react"
import "../../styles/Drawer_style.scss"
import { Icon } from "../../config/icons"

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  subtitle?: string
}

export const Drawer: React.FC<DrawerProps> = ({ 
  isOpen, 
  onClose, 
  children, 
  title = "Add New Collection",
  subtitle = "Knowledge Base / Create New Collection"
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer__header">
          <div className="drawer__header-content">
            <div className="drawer__icon">
             <Icon name="archive" size={24} />
            </div>
            <div className="drawer__titles">
              <h2 className="drawer__title">{title}</h2>
              <p className="drawer__subtitle">{subtitle}</p>
            </div>
          </div>
          <button 
            type="button" 
            onClick={onClose} 
            className="drawer__close"
            aria-label="Close drawer"
          >
            <Icon name="close-circle" size={24} />
          </button>
        </div>
        <div className="drawer__content">{children}</div>
      </div>
    </>
  )
}