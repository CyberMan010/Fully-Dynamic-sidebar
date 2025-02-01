import "../../styles/Header.scss"

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Knowledge Base</h1>
        <div className="header__actions">
          <button className="header__button">
            <img src="/icons/home.svg" alt="Home" width={20} height={20} />
          </button>
          <button className="header__button">
            <img src="/icons/notification.svg" alt="Notifications" width={20} height={20} />
          </button>
          <button className="header__button">
            <img src="/icons/language.svg" alt="Language" width={20} height={20} />
          </button>
          <button className="header__button">
            <img src="/icons/user.svg" alt="User" width={20} height={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

