import type React from "react";
import "../../styles/Pagination_style.scss";
import { Icon } from "../../config/icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const KnowledgeBasePagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Function to generate visible page numbers (max 5 at a time)
  const getVisiblePages = () => {
    const visiblePages = [];
    let startPage = Math.max(1, currentPage - 2); // Start 2 pages before the current page
    let endPage = Math.min(totalPages, currentPage + 2); // End 2 pages after the current page

    // Adjust start and end if we're near the edges
    if (currentPage <= 3) {
      startPage = 1;
      endPage = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(1, totalPages - 4);
      endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    return visiblePages;
  };

  return (
    <div className="pagination">
      <span className="pagination__info">
        Showing on page {currentPage} - {currentPage} of {totalPages}
      </span>
      <div className="pagination__controls">
        {/* First Page Button */}
        <button
          className="pagination__button"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          <Icon name="2 Arrow - Left" size={24} />
        </button>

        {/* Previous Page Button */}
        <button
          className="pagination__button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Icon name="Arrow - Left 2" size={24} />
        </button>

        {/* Visible Page Numbers */}
        {getVisiblePages().map((page) => (
          <button
            key={page}
            className={`pagination__page ${currentPage === page ? "active" : ""}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        {/* Next Page Button */}
        <button
          className="pagination__button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Icon name="Arrow - Right 2" size={24} />
        </button>

        {/* Last Page Button */}
        <button
          className="pagination__button"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <Icon name="2 Arrow - Right" size={24} />
        </button>
      </div>
    </div>
  );
};