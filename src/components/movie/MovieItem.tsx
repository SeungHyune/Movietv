import { useNavigate } from 'react-router-dom';
import { MovieInfoResponse } from '../../types/movieTypes';
import { fetchMovieInfo } from '@/api/movie';
import { useRecoilState } from 'recoil';
import { movieAtom } from '@/atoms/movie';

interface MovieItemProps {
  movie: MovieInfoResponse;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  const [movieState, setMovieState] = useRecoilState(movieAtom);
  const navigate = useNavigate();

  const handleMovieInfo = async () => {
    const movieInfo = await fetchMovieInfo({ id: movie.imdbID });

    setMovieState({
      ...movieState,
      movieInfo: { ...movieInfo }
    });
    navigate(`./${movie.imdbID}`);
  };

  return (
    <li onClick={handleMovieInfo}>
      <div className="movie-poster">
        <img src={movie.Poster} />
      </div>
      <div className="movie-info">
        <strong>{movie.Title}</strong>
        <span>{movie.Year}</span>
      </div>
    </li>
  );
};

export default MovieItem;
