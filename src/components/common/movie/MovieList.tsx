import { movieAtom } from '@/atoms/movie';
import { useRecoilState } from 'recoil';

const MovieList = () => {
  const [movieState] = useRecoilState(movieAtom);
  const { movieList } = movieState;

  console.log(movieState);
  return (
    <ul>
      {movieList.map((movie) => (
        <li key={movie.imdbID}>{movie.Title}</li>
      ))}
    </ul>
  );
};

export default MovieList;
