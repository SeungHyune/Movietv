import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '@/components/common/Button';
import { useMovieInfo, useImageLoadStatus } from '@/hooks';
import { imageResize } from '@/utils/imageResize';
import Spinner from '../common/Spinner';
import { useRef } from 'react';

const MovieInfo = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const imgRef = useRef<HTMLImageElement | null>(null);

  const { data: movieInfo, isLoading } = useMovieInfo({ id });

  const isImageLoad = useImageLoadStatus({
    ref: imgRef,
    src: movieInfo?.Poster,
  });

  if (isLoading || !movieInfo) {
    return <Spinner />;
  }

  const resizePosterImage = imageResize(movieInfo.Poster, 300, 1000);

  return (
    <MovieInfoWrapper>
      {!isImageLoad && <Spinner />}
      {resizePosterImage === 'N/A' ? null : (
        <MovieInfoCoverImage resizePosterImage={resizePosterImage} />
      )}
      <MovieInfoContainer>
        <div className='movie-poster'>
          <img
            ref={imgRef}
            src={
              resizePosterImage === 'N/A'
                ? 'https://placehold.co/350x520?text=No+Image'
                : resizePosterImage
            }
            alt={movieInfo.Title}
          />
        </div>
        {isImageLoad && (
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
        )}
      </MovieInfoContainer>
      {isImageLoad && (
        <Button
          radius='50px'
          backgroundColor='#e13232'
          color='#ffffff'
          fontWeight='bold'
          onClick={() => navigate(-1)}
        >
          Prev Page
        </Button>
      )}
    </MovieInfoWrapper>
  );
};

const MovieInfoWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  padding-bottom: 50px;
`;

interface MovieWrapperProps {
  resizePosterImage: string;
}

const MovieInfoCoverImage = styled.div<MovieWrapperProps>`
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.resizePosterImage});
  height: 200px;

  @media (max-width: 680px) {
    height: 100px;
  }
`;

const MovieInfoContainer = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 50px auto;
  text-align: left;

  .movie-poster {
    width: 350px;
    margin: 0 auto;
  }

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

    @media (max-width: 380px) {
      font-size: 22px;
    }
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

      @media (max-width: 380px) {
        strong {
          font-size: 16px;
        }
        span {
          font-size: 14px;
        }
      }
    }
  }
`;

export default MovieInfo;
