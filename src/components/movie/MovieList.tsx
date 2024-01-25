import { movieAtom } from '@/atoms/movie';
import { useRecoilState } from 'recoil';
import { fetchMovieList } from '@/api/movie';
import MovieItem from './MovieItem';
import MovieTotalResult from './MovieTotalResult';

import './movie.css';

const MovieList = () => {
  const [movieState, setMovieState] = useRecoilState(movieAtom);
  const { movieList } = movieState;

  const handleAddMovie = async () => {
    console.log(movieState.title);
    const res = await fetchMovieList({ title: movieState.title, page: movieState.page });
    const { Search } = res;

    setMovieState({
      ...movieState,
      movieList: [...movieList, ...Search],
      page: movieState.page + 1
    });
  };

  return (
    <div className="movielist-container">
      {movieState.totalResults ? <MovieTotalResult /> : null}
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
  );
};

export default MovieList;
