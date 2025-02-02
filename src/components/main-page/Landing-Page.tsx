import type React from "react"
import { useState } from "react"
import { Header } from "../Header/Header"
import { ToolsBar } from "../ToolsBar/Toolsbar"
import { CardsFrame } from "../Cards-Frame/Cards-Frame"
import { KnowledgeBasePagination } from "../Pagination/Pagination"
import "../../styles/main_style.scss"
import { UpperFrame } from "../Up-Frame/UpperFrame"

const MOCK_DATA = Array.from({ length: 8 }, (_, i) => ({
  id: `${i}`,
  title: "Collection Name",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  sections: 12,
  articles: 50,
  isNew: i < 2,
}))

export const LandingPage: React.FC = () => {
  const [view, setView] = useState<"card" | "list">("card")
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="landing-page">
      <Header />
      <div className="landing-page__container">
        <UpperFrame />
        <div className="landing-page__content">
          <ToolsBar view={view} onViewChange={setView} onSearch={setSearchQuery} />
          <CardsFrame collections={MOCK_DATA} />
          <KnowledgeBasePagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
        </div>
      </div>
    </div>
  )
}

