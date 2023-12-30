import { movieAtom } from '@/atoms/movie';
import { useRecoilState } from 'recoil';
import { fetchMovieList } from '@/api/movieSearch';
import MovieItem from './MovieItem';

import './movie.css';
import MovieTotalCount from './MovieTotalCount';

const MovieList = () => {
  const [movieState, setMovieState] = useRecoilState(movieAtom);
  const { movieList } = movieState;

  const handleAddMovie = async () => {
    console.log(movieState.title);
    const res = await fetchMovieList(movieState.title, movieState.page);
    const { Search } = res;

    setMovieState({
      ...movieState,
      movieList: [...movieList, ...Search],
      page: movieState.page + 1
    });
  };

  return (
    <main>
      <div className="movielist-container">
        <MovieTotalCount />
        <ul>
          {movieList.map((movie) => (
            <MovieItem
              key={movie.imdbID}
              movie={movie}
            />
          ))}
        </ul>
        {movieList.length ? (
          <button
            type="button"
            onClick={handleAddMovie}>
            More
          </button>
        ) : null}
      </div>
    </main>
  );
};

export default MovieList;
