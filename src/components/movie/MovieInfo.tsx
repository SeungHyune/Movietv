import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '@/components/common/Button';
import { ResponseValue } from '@/types/movieTypes';
import { useMovieInfo } from '@/hooks/useMovieInfo';

const MovieInfo = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();

  const { data: movieInfo } = useMovieInfo({ id });

  if (!movieInfo) return;

  return (
    <MovieInfoWrapper>
      <MovieInfoCoverImage movieInfo={movieInfo} />
      <MovieInfoContainer>
        <div className='movie-poster'>
          <img
            src={movieInfo.Poster}
            alt={movieInfo.Title}
          />
        </div>
        <MovieInfoContent>
          <h3>{movieInfo.Title}</h3>
          <mark>{movieInfo.imdbRating}</mark>
          <ul className='movie-info-list'>
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
        </MovieInfoContent>
      </MovieInfoContainer>
      <Button
        text='Prev Page'
        radius='50px'
        backgroundColor='#e13232'
        color='#ffffff'
        fontWeight='bold'
        onClick={() => navigate(-1)}
      />
    </MovieInfoWrapper>
  );
};

const MovieInfoWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  padding-bottom: 50px;
`;

interface MovieWrapperProps {
  movieInfo: ResponseValue;
}

const MovieInfoCoverImage = styled.div<MovieWrapperProps>`
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.movieInfo?.Poster});
  height: 200px;
`;

const MovieInfoContainer = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 50px auto;
  text-align: left;

  @media (max-width: 1400px) {
    padding: 0 20px;
  }

  @media (max-width: 680px) {
    display: block;

    .movie-poster {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const MovieInfoContent = styled.div`
  width: calc(100% - 320px);
  margin-left: 20px;

  @media (max-width: 680px) {
    width: 100%;
    margin-left: 0;
  }

  & h3 {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  & mark {
    margin-bottom: 30px;
    border-radius: 50px;
    background-color: #e13232;
    color: #fff;
    display: inline-block;
    padding: 5px 10px;
  }

  & .movie-info-list {
    list-style: none;

    li {
      margin-bottom: 20px;
      strong {
        display: block;
        font-weight: 600;
        margin-bottom: 10px;
        font-size: 18px;
      }
      span {
        display: -webkit-box;
        white-space: normal;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
`;

export default MovieInfo;
