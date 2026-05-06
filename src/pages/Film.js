import Footer from "../components/Footer";
import Auth from "components/ListMovies/Auth";
import Filter from "../components/ListMovies/Filter";
import FilmCard from "../components/ListMovies/FilmCard";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
// import { request } from "../apiCalls";
// import { film } from "../data";
// import { Link } from "react-router-dom";
import UsePagination from "../components/ListMovies/UsePagination";
import { useMovies } from "hooks/useMovie";
import Pagination from "components/ListMovies/Auth";
import LoadingEffect from "components/style/LoadingEffect";
import FilterMovies from "../components/ListMovies/Filter";

const Film = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [page, setPage] = useState(1);

  const {
    data: allMovies,
    isLoading,
    isError,
  } = useMovies({
    page: currentPage,
    limit: limit,
    genre,
    country,
  });
  const meta = allMovies?.meta;
  const { hasPrev, hasNext, totalPage } = useMemo(() => {
    if (!meta) {
      return {
        hasPrev: false,
        hasNext: false,
        totalPage: 0,
      };
    }

    const totalPage = Math.ceil(meta.total / meta.limit);

    return {
      hasPrev: meta.page > 1,
      hasNext: meta.page < totalPage,
      totalPage,
    };
  }, [meta]);
  const handleNext = () => {
    if (hasNext) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (hasPrev) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-background">
      {/* filter */}
      <div className="flex items-center justify-center py-10">
        <FilterMovies
          page={page}
          setPage={setPage}
          country={country}
          setCountry={setCountry}
          setGenre={setGenre}
          genre={genre}
        />
      </div>

      {/* daftar film  */}
      <div className="min-h-screen">
        {isLoading ? (
          <LoadingEffect />
        ) : (
          <div className="flex flex-col items-center max-w-5xl min-h-screen p-2 mx-auto text-white">
            {allMovies.content.map((film) => (
              <FilmCard
                id={film._id}
                key={film.id}
                rank={film.rank}
                title={film.title}
                year={film.year}
                description={film.description}
                image={film.image}
              />
            ))}
          </div>
        )}
      </div>
      {/* pagination */}
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Film;
