"use client"

import { useEffect, type ReactNode } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import "../../styles/Drawer_style.scss"

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
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
          <h2 className="drawer__title">Add New Collection</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="drawer__close">
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="drawer__content">{children}</div>
      </div>
    </>
  )
}

