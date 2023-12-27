import { MovieInfoResponse } from '../../types/movieTypes';

interface MovieItemProps {
  movie: MovieInfoResponse[];
}

const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <li>
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
