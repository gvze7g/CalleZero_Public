import React from "react";

const Pagination = ({ currentPage = 1, onChangePage }) => {
  const handlePage = (page) => {
    if (onChangePage) {
      onChangePage(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < 3) {
      handlePage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      <button
        type="button"
        onClick={handlePrevious}
        className="rounded-[8px] bg-white/5 px-3 py-2 font-[Open_Sans] text-[13px] font-semibold text-white/60 sm:px-4 sm:text-[14px]"
      >
        Anterior
      </button>

      {[1, 2, 3].map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => handlePage(page)}
          className={`h-9 w-9 rounded-[8px] font-[Open_Sans] text-[13px] font-bold text-white sm:h-10 sm:w-10 sm:text-[14px] ${currentPage === page ? "bg-white/30" : "bg-black"
            }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={handleNext}
        className="rounded-[8px] bg-black px-3 py-2 font-[Open_Sans] text-[13px] font-semibold text-white sm:px-4 sm:text-[14px]"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;