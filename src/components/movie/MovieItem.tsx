import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieInfoResponse } from '../../types/movieTypes';

interface MovieItemProps {
  movie: MovieInfoResponse;
}

const MovieItem = React.forwardRef<HTMLLIElement, MovieItemProps>(
  ({ movie }, ref) => {
    const navigate = useNavigate();

    const handleMovieInfo = async () => {
      navigate(`./${movie.imdbID}`);
    };

    return (
      <li
        onClick={handleMovieInfo}
        ref={ref}
      >
        <div className='movie-poster'>
          <img
            src={
              movie.Poster === 'N/A'
                ? 'https://placehold.co/250x330?text=No+Image'
                : movie.Poster
            }
          />
        </div>
        <div className='movie-info'>
          <strong>{movie.Title}</strong>
          <span>{movie.Year}</span>
        </div>
      </li>
    );
  },
);

export default MovieItem;
