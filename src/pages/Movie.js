import useMovie from '../hooks/useMovie';
import useCredits from '../hooks/useCredits';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Spin } from 'antd';

const Movie = () => {
  const { movieId } = useParams();
  const { data: movie, isLoading, error } = useMovie(movieId);
  const { data: credits } = useCredits(movieId);

  const navigate = useNavigate();

  if (isLoading) return <Spin />;
  if (error) return <p>An error occured: {error.message}</p>;
  return (
    <div className="min-h-screen px-14 bg-background pt-9">
      <button onClick={() => navigate(-1)} className="px-2 py-1 mb-4 text-sm text-white rounded-md bg-surface">
        Back
      </button>
      <div className="flex space-x-12">
        <div className="relative flex-shrink-0 overflow-hidden rounded-lg bg-primary w-52 h-72">
          <img className="object-cover object-center w-full h-full " src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        </div>
        <div className="flex flex-col justify-center flex-shrink space-y-2 text-white">
          <h3 className="text-2xl font-bold">{movie.original_title}</h3>
          <p>
            {movie.release_date.split('-')[0]} &#9679;
            {movie.spoken_languages[0].english_name}
          </p>
          <div className="flex space-x-2">
            {movie.genres.map((genre) => (
              <span className="p-1 rounded-md bg-surface" key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="mb-3 font-semibold text-white">Full Cast</h3>
        <div className="flex space-x-4 overflow-auto no-scrollbar scroll-smooth">
          {credits.cast.map((c) => {
            return (
              <div key={c.id} className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-full bg-primary">
                <img className="object-cover object-center w-full h-full" src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${c.profile_path}`} alt={c.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Movie;
