import { useRecoilState } from 'recoil';
import { movieAtom } from '@/atoms/movie';

const MovieInfo = () => {
  const [movieState] = useRecoilState(movieAtom);
  const { movieInfo } = movieState;

  console.log(movieInfo);
  return (
    <div>
      <div className="movie-background"></div>
      <div className="movie-info">
        <div className="movie-poster">
          <img
            src={movieInfo.Poster}
            alt={movieInfo.Title}
          />
        </div>
        <div className="movie-content">
          <h3>{movieInfo.Title}</h3>
          <mark>{movieInfo.imdbRating}</mark>
          <ul>
            <li>
              <strong>Director</strong>
              <span>{movieInfo.Director}</span>
            </li>
            <li>
              <strong>Actors</strong>
              <span>{movieInfo.Actors}</span>
            </li>
            <li>
              <strong>Released</strong>
              <span>{movieInfo.Released}</span>
            </li>
            <li>
              <strong>Plot</strong>
              <span>{movieInfo.Plot}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
