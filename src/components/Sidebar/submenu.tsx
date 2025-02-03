import type React from "react"
import { Icon } from "../../config/icons"
import "../../styles/submenu_style.scss"
import { useState, useEffect } from "react"


interface SubmenuSection {
  title: string
  items: {
    id: string
    label: string
    icon: string
    count?: number
  }[]
}

interface SubmenuProps {
  title: string
  sections: SubmenuSection[]
  onClose: () => void
  storageInfo?: {
    used: number
    total: number
  }
}

export const Submenu: React.FC<SubmenuProps> = ({ title, sections, onClose, storageInfo }) => {
  const [isVisible, setIsVisible] = useState(false)


  useEffect(() => {
    requestAnimationFrame(() => {
      setIsVisible(true)
      // Update parent component state
      document.querySelector('.main-content')?.classList.add('shifted')
    })
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    // Remove shifted class before closing
    document.querySelector('.main-content')?.classList.remove('shifted')
    setTimeout(() => {
      onClose()
    }, 300)
  }


  return (
    <div className={`submenu-panel ${isVisible ? 'visible' : ''}`}>
      <div className="submenu-header">
        <div className="header-content">
          <button onClick={handleClose} className="back-button">
            <Icon name="2 Arrow - Right" size={20} />
          </button>
          <h2>{title}</h2>
        </div>
       
      </div>

      <div className="submenu-content">
        {sections.map((section, index) => (
          <div key={index} className="submenu-section">
            <div className="section-header">{section.title}</div>
            <div className="section-items">
              {section.items.map((item) => (
                <button key={item.id} className="section-item">
                  <Icon name={item.icon} size={20} />
                  <span>{item.label}</span>
                  {item.count !== undefined && <span className="item-count">{item.count}</span>}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {storageInfo && (
        <div className="storage-info">
          <div className="storage-header">
            <Icon name="database" size={20} />
            <span>Storage</span>
            <button className="upgrade-button">Upgrade</button>
          </div>
          <div className="storage-bar">
            <div className="storage-progress" style={{ width: `${(storageInfo.used / storageInfo.total) * 100}%` }} />
          </div>
          <div className="storage-text">
            {storageInfo.used.toFixed(1)} GB of {storageInfo.total} GB used
          </div>
        </div>
      )}
    </div>
  )
}

