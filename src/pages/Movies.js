import { useRef, useCallback } from 'react';
import { Spin, Card, Row, Col } from 'antd';
import useGetMovies from '../hooks/useGetMovies';
import { Link } from 'react-router-dom';
import { StarFilled } from '@ant-design/icons';

// Custom Components
import MovieCard from 'components/MovieCard';

function Movies() {
  // const [movies, setMovies] = useState(null);

  const { isLoading, error, data: movies, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetMovies();

  // observer
  const intObserver = useRef(null);

  // lastMovieRef ini akan mendeteksi apakah movie terakhir yang berhasil ditarik
  // dari API telah tampil sepenuhnya, jika sudah maka fetch page/halaman berikutnya
  const lastMovieRef = useCallback(
    (movie) => {
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver(
        ([movie]) => {
          if (movie.isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        },
        { threshold: 0.5 }
      );

      if (movie) intObserver.current.observe(movie);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin />
      </div>
    );
  if (error) return <p>An error occured: {error.message}</p>;

  return (
    <div className="min-h-screen p-12 bg-background">
      <Row className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {movies.pages.map((page) => {
          return page.results.map((movie, i) => {
            if (i + 1 === page.results.length) {
              return <MovieCard ref={lastMovieRef} key={movie.id} movie={movie} />;
            }
            return <MovieCard key={movie.id} movie={movie} />;
          });
        })}
      </Row>
    </div>
  );
}

export default Movies;
