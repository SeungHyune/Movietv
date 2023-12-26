import { movieAtom } from '@/atoms/movie';
import { useRecoilState } from 'recoil';
import { fetchMovieList } from '@/api/movieSearch';

const MovieList = () => {
  const [movieState, setMovieState] = useRecoilState(movieAtom);
  const { movieList } = movieState;

  const handleAddMovie = async () => {
    console.log(movieState.title);
    const res = await fetchMovieList(movieState.title, movieState.page);
    const { Search } = res;
    console.log(res);
    setMovieState({
      ...movieState,
      movieList: [...movieList, ...Search],
      page: movieState.page + 1
    });
  };

  return (
    <div>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
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
