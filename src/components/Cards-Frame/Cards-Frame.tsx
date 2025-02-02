import { KnowledgeCard } from "./Cards/Card"
import "../../styles/Cards-frame_style.scss"
import type React from "react"

interface Collection {
    id: string
    title: string
    description: string
    sections: number
    articles: number
    isNew?: boolean
  }
  
  interface CardsFrameProps {
    collections: Collection[]
  }
  
  export const CardsFrame: React.FC<CardsFrameProps> = ({ collections }) => {
    return (
      <div className="cards-frame">
        {collections.map((collection) => (
          <KnowledgeCard key={collection.id} {...collection} />
        ))}
      </div>
    )
  }
  
  