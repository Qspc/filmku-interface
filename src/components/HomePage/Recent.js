import { Link } from "react-router-dom";
import { useGetById, useMovies } from "hooks/useMovie";
import LoadingEffect from "components/style/LoadingEffect";
import { isError } from "@tanstack/react-query";
import { getMovies } from "api/apiService";
import { useState } from "react";

const Recent = () => {
  const [randomPage] = useState(() => Math.floor(Math.random() * 10) + 1);

  const {
    data: allMovies,
    isLoading,
    isError,
  } = useMovies({
    page: randomPage,
    limit: 1,
  });
  const film = allMovies?.content[0];

  // if (isError) return <>not found</>;

  return (
    <div className="flex items-center justify-center py-20 bg-background">
      {isLoading ? (
        <LoadingEffect />
      ) : (
        <>
          {/* web version */}
          <div
            id="recent"
            className="items-center w-[80%] mx-auto hidden gap-4 md:flex md:items-start md:gap-20"
          >
            {/* image */}
            <img className="object-contain w-48 md:w-80" src={film?.image} alt="gambar" />
            {/* content */}
            <div className="w-auto text-justify text-white md:flex-1 md:leading-10">
              <h1 className="text-3xl font-semibold capitalize md:text-5xl">{film.title}</h1>
              <h3 className="mb-10 text-xl font-bold">{film.year}</h3>
              <p
                className="mb-10 text-xs leading-5 text-justify normal-case md:leading-10 md:text-xl "
                dangerouslySetInnerHTML={{
                  __html: film.description ? film.description.substring(0, 200) + "..." : "",
                }}
              ></p>
              <div className="">
                <Link
                  className="px-6 py-3 text-sm font-medium text-white transition-all duration-300 rounded-full md:px-8 md:text-base bg-primary hover:bg-primary/80 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 active:scale-95"
                  to={`/film/${film._id}`}
                >
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          {/* mobile version */}
          <div
            id="recent"
            className="flex flex-col items-center gap-6 px-12 md:hidden md:items-start md:gap-20"
          >
            {/* title */}
            <div className="text-center text-white">
              <h1 className="text-5xl font-semibold capitalize">{film.title}</h1>
              <h3 className="font-bold text-md">{film.year}</h3>
            </div>
            {/* image */}
            <img className="object-contain w-48 md:w-80" src={film.image} alt="gambar" />
            {/* content */}
            <div className="flex flex-col w-auto gap-2 text-justify text-white md:flex-1 md:leading-10">
              <p
                className="text-xs leading-5 text-justify normal-case md:leading-10 md:text-xl "
                dangerouslySetInnerHTML={{
                  __html: film.description ? film.description.substring(0, 200) + "..." : "",
                }}
              ></p>
              <div>
                <Link
                  className="px-6 py-3 text-sm font-medium text-white transition-all duration-300 rounded-full md:px-8 md:text-base bg-primary hover:bg-primary/80 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 active:scale-95"
                  to={`/film/${film._id}`}
                >
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Recent;
