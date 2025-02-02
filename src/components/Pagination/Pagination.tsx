import type React from "react"
import "../../styles/Pagination_style.scss"

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
  }
  
  export const KnowledgeBasePagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="pagination">
        <span className="pagination__info">
          Showing page {currentPage} of {totalPages}
        </span>
        <div className="pagination__controls">
          <button
            className="pagination__button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src="/icons/chevron-left.svg" alt="Previous" width={16} height={16} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination__page ${currentPage === page ? "active" : ""}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="pagination__button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <img src="/icons/chevron-right.svg" alt="Next" width={16} height={16} />
          </button>
        </div>
      </div>
    )
  }
  