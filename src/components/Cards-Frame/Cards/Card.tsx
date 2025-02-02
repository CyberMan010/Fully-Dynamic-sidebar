import type React from "react"
import "../../../styles/Cards.scss"


interface CardProps {
    title: string
    description: string
    sections: number
    articles: number
    isNew?: boolean
  }
  
  export const KnowledgeCard: React.FC<CardProps> = ({ title, description, sections, articles, isNew = false }) => {
    return (
      <div className="card">
        <div className="card__header">{isNew && <span className="card__new-badge">New Collection</span>}</div>
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
          <div className="card__meta">
            <div className="card__meta-item">
              <img src="/icons/section.svg" alt="Sections" width={16} height={16} />
              <span>{sections} Section</span>
            </div>
            <div className="card__meta-item">
              <img src="/icons/article.svg" alt="Articles" width={16} height={16} />
              <span>{articles} Article</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  