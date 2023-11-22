import Footer from '../components/Footer';
import Auth from 'components/ListMovies/Auth';
import Filter from '../components/ListMovies/Filter';
import FilmCard from '../components/ListMovies/FilmCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import { request } from "../apiCalls";
// import { film } from "../data";
// import { Link } from "react-router-dom";
import UsePagination from '../components/ListMovies/UsePagination';

const Film = () => {
  const [films, setFilms] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, isOpen] = useState(false);
  const [openCountry, isOpenCountry] = useState(false);
  const [openYear, isOpenYear] = useState(false);

  useEffect(() => {
    const getFilms = async () => {
      axios.get(`https://filmku-api.vercel.app/api/v1/movies`).then((res) => {
        // console.log(res.data);
        const persons = res.data.content;
        setFilms(persons);
        setFilteredResult(persons);
        setLoading(false);
      });
    };
    // console.log(filteredResult);
    getFilms();
  }, []);

  const handleClose = () => {
    isOpen(false);
    isOpenCountry(false);
    isOpenYear(false);
  };

  const PER_PAGE = 5;
  const _DATA = UsePagination(filteredResult, PER_PAGE, currentPage, setCurrentPage);
  const handleNext = () => {
    _DATA.next();
  };
  const handlePrev = () => {
    _DATA.prev();
  };
  // const handleChangePage = (e: any, p: any) => {
  //   setPage(p);
  //   _DATA.jump(p);
  // };

  return (
    <div className="bg-background">
      {/* filter */}
      <Filter
        filteredResult={filteredResult}
        setFilteredResult={setFilteredResult}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        open={open}
        isOpen={isOpen}
        openCountry={openCountry}
        openYear={openYear}
        isOpenCountry={isOpenCountry}
        isOpenYear={isOpenYear}
      />

      {/* daftar film  */}
      <div>
        {loading ? (
          <h1 className="text-5xl text-white">Loading...</h1>
        ) : (
          <div className="flex flex-col items-center max-w-5xl min-h-screen p-2 mx-auto text-white">
            {_DATA.currentData().map((film) => (
              <FilmCard id={film._id} key={film.id} rank={film.rank} title={film.title} year={film.year} description={film.description} image={film.image} />
            ))}
          </div>
        )}
      </div>
      {/* pagination */}
      <Auth handleNext={handleNext} handlePrev={handlePrev} />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Film;
