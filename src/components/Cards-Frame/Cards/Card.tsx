import type React from "react"
import "../../../styles/Cards.scss"
import { Icon } from "../../../config/icons"

interface CardProps {
  title?: string
  description?: string
  sections?: number
  articles?: number
  isNew?: boolean
}

export const KnowledgeCard: React.FC<CardProps> = ({
  title = "Collection Name",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  sections = 12,
  articles = 50,
  isNew = true,
}) => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__title-group">
          <h4 className="card__subtitle">Knowledge Base</h4>
          {isNew && <span className="card__label">New Collection</span>}
        </div>
        <Icon name="logoCard" className="card__logo" />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <div className="card__meta">
        <div className="card__meta-item">
          <Icon name="folder-2" />
          <span>
            {sections} Section{sections !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="card__meta-item">
          <Icon name="note-text" />
          <span>
            {articles} Article{articles !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  )
}

