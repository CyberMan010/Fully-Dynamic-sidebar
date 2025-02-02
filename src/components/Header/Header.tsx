import type React from "react"
import "../../styles/Header_style.scss"
import { Icon } from "../../config/icons"

export const Header: React.FC = () => {
    return (
      <header className="header">
      <div className="header__container">
        <h1 className="header__title">Knowledge Base</h1>
        <div className="header__actions">
          <button className="header__button">
            <Icon name="Home" size={20} />
            <span>Home</span>
          </button>
          <button className="header__button">
            <Icon name="Notification" size={20} />
            <span>Notifications</span>
          </button>
          <button className="header__button">
            <Icon name="language" size={20} />
            <span>Language</span>
          </button>
          <button className="header__button">
            <Icon name="Profile" size={20} />
            <span>Profile</span>
          </button>
        </div>
      </div>
    </header>
    )
  }
  
  