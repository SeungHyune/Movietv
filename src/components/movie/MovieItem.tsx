import { useNavigate } from 'react-router-dom';
import { MovieInfoResponse } from '../../types/movieTypes';

interface MovieItemProps {
  movie: MovieInfoResponse;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  const navigate = useNavigate();

  const handleMovieInfo = async () => {
    navigate(`./${movie.imdbID}`);
  };

  return (
    <li onClick={handleMovieInfo}>
      <div className='movie-poster'>
        <img src={movie.Poster} />
      </div>
      <div className='movie-info'>
        <strong>{movie.Title}</strong>
        <span>{movie.Year}</span>
      </div>
    </li>
  );
};

export default MovieItem;
