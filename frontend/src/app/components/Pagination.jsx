import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-16">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-11 h-11 rounded-full text-[#5f6368] hover:bg-[#e8f0fe] hover:text-[#1a73e8] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={page === '...'}
          className={`flex items-center justify-center min-w-11 h-11 px-4 rounded-full text-sm font-semibold transition-all ${
            page === currentPage
              ? 'bg-[#1a73e8] text-white shadow-lg scale-110'
              : page === '...'
              ? 'cursor-default text-[#5f6368]'
              : 'text-[#5f6368] hover:bg-[#e8f0fe] hover:text-[#1a73e8]'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-11 h-11 rounded-full text-[#5f6368] hover:bg-[#e8f0fe] hover:text-[#1a73e8] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
