import React, { useState } from "react";
import "../../styles/Header_style.scss";
import { Icon } from "../../config/icons";

export const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleOptionClick = (value: string) => {
    console.log(`Selected: ${value}`);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Knowledge Base</h1>
        <div className="header__actions">
          <button className="header__button">
            <Icon name="Home" size={24} />
            <span>Home</span>
          </button>
          <button className="header__button">
            <Icon name="Notification" size={24} />
            <span>Notifications</span>
          </button>
          <button className="header__button">
            <Icon name="language" size={24} />
            <span>Language</span>
          </button>
          <div className="header__button profile-dropdown">
            <div className="profile-dropdown__icon">
              <Icon name="Profile" size={20} />
            </div>
            <span className="profile-dropdown__name">User Names</span>
            <div
              className="toggle-icon"
              onClick={toggleDropdown}
            >
              <Icon name="Chart graph 5" size={24} />
            </div>
            {isDropdownOpen && (
              <div className="profile-dropdown__menu">
                <div
                  className="profile-dropdown__option"
                  onClick={() => handleOptionClick("user1")}
                >
                  User 1
                </div>
                <div
                  className="profile-dropdown__option"
                  onClick={() => handleOptionClick("user2")}
                >
                  User 2
                </div>
                <div
                  className="profile-dropdown__option"
                  onClick={() => handleOptionClick("user3")}
                >
                  User 3
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};