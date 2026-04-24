const Pagination = ({ handleNext, handlePrev, hasNext, hasPrev }) => {
  return (
    <div className="py-16 text-white">
      <div className="flex justify-center gap-6">
        {/* PREV */}
        <button
          onClick={handlePrev}
          disabled={!hasPrev}
          className={`
            px-6 py-2 rounded-full border-2 border-primary text-sm md:text-base
            transition-all duration-300
            ${
              hasPrev
                ? "hover:bg-primary hover:text-white hover:scale-105 cursor-pointer"
                : "opacity-40 cursor-not-allowed"
            }
          `}
        >
          Sebelumnya
        </button>

        {/* NEXT */}
        <button
          onClick={handleNext}
          disabled={!hasNext}
          className={`
            px-6 py-2 rounded-full border-2 border-primary text-sm md:text-base
            transition-all duration-300
            ${
              hasNext
                ? "hover:bg-primary hover:text-white hover:scale-105 cursor-pointer"
                : "opacity-40 cursor-not-allowed"
            }
          `}
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Pagination;
