import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// import { request } from '../apiCalls';
// import { BASE_URL } from '../apiCalls';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useGetById } from "hooks/useMovie";
import LoadingEffect from "components/style/LoadingEffect";

const DetailFilm = () => {
  const filmId = useLocation().pathname.split("/")[2];

  const { data: films, isLoading, isError } = useGetById(filmId);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-2 bg-background ">
        {isLoading ? (
          <LoadingEffect />
        ) : (
          <div className="max-w-5xl mx-auto">
            {/* title */}
            <div className="flex flex-col py-10 text-center md:text-left">
              <h1 className="text-3xl font-semibold text-white capitalize md:text-3xl">
                {films.title}{" "}
              </h1>
              <p className="text-sm text-white md:text-base">{films.year}</p>
            </div>
            <div className="flex flex-col md:flex-row body">
              {/* image */}
              <div className="relative flex-shrink-0 block mx-auto mb-6 overflow-hidden bg-gray-900 md:mr-6 detail">
                <img
                  className="absolute object-cover w-full h-full "
                  src={films.image}
                  alt={films.title}
                />
              </div>
              {/* description */}
              <div className="px-4 text-sm text-justify md:px-0 text-black-400 md:text-base">
                <p
                  className="mb-6 text-white normal-case"
                  dangerouslySetInnerHTML={{ __html: films.description }}
                />
              </div>
            </div>
            {/* back button */}
            <div className="py-8 text-center">
              <Link
                to="/film"
                className="inline-block px-6 py-2 text-sm font-medium text-white transition-all duration-300 border-2 rounded-full border-primary hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/40 active:scale-95"
              >
                Kembali
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DetailFilm;
