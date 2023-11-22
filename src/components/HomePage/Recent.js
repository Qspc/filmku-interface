import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Recent = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    const getFilms = () => {
      axios.get(`https://filmku-api.vercel.app/api/v1/movies/646f042b61998f671f24add9`).then((res) => {
        setFilm(res.data.content);
        console.log(res.data.content.image);
      });
    };
    getFilms();
  }, []);
  const deskrip = film.description ? film.description.substring(0, 200) + '...' : '';

  return (
    <div className="flex items-center h-screen bg-background">
      {/* web version */}
      <div id="recent" className="items-center hidden gap-4 px-12 md:flex md:items-start md:gap-20">
        {/* image */}
        <img className="object-contain w-48 md:w-80" src={film.image} alt="gambar" />
        {/* content */}
        <div className="w-auto text-justify text-white md:flex-1 md:leading-10">
          <h1 className="text-3xl font-semibold capitalize md:text-5xl">{film.title}</h1>
          <h3 className="mb-10 text-xl font-bold">{film.year}</h3>
          <p className="mb-10 text-xs leading-5 text-justify normal-case md:leading-10 md:text-xl " dangerouslySetInnerHTML={{ __html: film.description ? film.description.substring(0, 200) + '...' : '' }}></p>
          <div className="">
            <Link className="px-3 py-1 text-lg rounded-full bg-primary md:px-9 md:py-3" to={`/film/${film._id}`}>
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
      {/* mobile version */}
      <div id="recent" className="flex flex-col items-center gap-6 px-12 md:hidden md:items-start md:gap-20">
        {/* title */}
        <div className="text-center text-white">
          <h1 className="text-5xl font-semibold capitalize">{film.title}</h1>
          <h3 className="font-bold text-md">{film.year}</h3>
        </div>
        {/* image */}
        <img className="object-contain w-48 md:w-80" src={film.image} alt="gambar" />
        {/* content */}
        <div className="flex flex-col w-auto gap-2 text-justify text-white md:flex-1 md:leading-10">
          <p className="text-xs leading-5 text-justify normal-case md:leading-10 md:text-xl " dangerouslySetInnerHTML={{ __html: film.description ? film.description.substring(0, 200) + '...' : '' }}></p>
          <div>
            <Link className="px-3 py-1 text-xs rounded-full bg-primary md:font-semibold md:px-9 md:py-3 md:text-2xl" to={`/film/${film._id}`}>
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
