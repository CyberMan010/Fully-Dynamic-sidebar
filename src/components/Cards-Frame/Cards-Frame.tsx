import { KnowledgeCard } from "./Cards/Card"
import "../../styles/Cards-frame.scss"

interface CardsFrameProps {
  collections: Array<{
    id: string
    title: string
    description: string
    sections: number
    articles: number
    isNew?: boolean
  }>
}

export function CardsFrame({ collections }: CardsFrameProps) {
  return (
    <div className="cards-frame">
      {collections.map((collection) => (
        <KnowledgeCard key={collection.id} {...collection} />
      ))}
    </div>
  )
}

