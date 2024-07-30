import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import MovieItem from './MovieItem';
import MovieTotalResult from './MovieTotalResult';
import { useEffect } from 'react';
import { useInfinityScroll } from '@/hooks';
import { useInView } from 'react-intersection-observer';
import { Suspense } from 'react';
import Button from '../common/Button';
import { MovieListSkeleton, MovieTitleSkeleton } from '../common/Skeleton';
import Spinner from '../common/Spinner';

const MovieList = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    rootMargin: '40px',
  });

  const { movieTitle = '' } = useParams();

  const {
    data,
    status,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfinityScroll({
    title: movieTitle,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  if (status === 'error') {
    return <p>Error: {error.message}</p>;
  }

  if (data?.pages[0].Response === 'False') {
    return (
      <MovieListContainer>
        <MovieTotalResult totalResults={0} />
      </MovieListContainer>
    );
  }

  const movieList = data?.pages.flatMap((moviePage) => moviePage.Search);

  return (
    <Suspense fallback={<Spinner />}>
      <MovieListContainer>
        {isLoading ? (
          <MovieTitleSkeleton />
        ) : (
          <MovieTotalResult
            totalResults={
              data?.pages[0].totalResults
                ? Number(data?.pages[0].totalResults)
                : 0
            }
          />
        )}
        <ul>
          {movieList?.map((movie) => (
            <MovieItem
              key={movie.imdbID}
              movie={movie}
            />
          ))}
          {(isFetchingNextPage || isLoading) && <MovieListSkeleton />}
        </ul>
        {isFetchingNextPage && <h3>Loading...</h3>}
        <div
          style={{
            height: '200px',
          }}
          ref={ref}
        ></div>
        <Button
          width={50}
          radius='50%'
          backgroundColor='red'
          color='white'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          TOP
        </Button>
      </MovieListContainer>
    </Suspense>
  );
};

const MovieListContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1400px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }

  button {
    position: fixed;
    right: 15px;
    bottom: 15px;
    font-size: 12px;
    padding-top: 15px;
    transform: translateY(0);
    transition: transform 0.2s;
    z-index: 100;

    &:hover {
      transform: translateY(-5px);
    }

    &:after {
      position: absolute;
      left: 50%;
      top: 40%;
      content: '';
      width: 17px;
      height: 17px;
      border-top: 3px solid #fff;
      border-right: 3px solid #fff;
      transform: translate(-50%, -50%) rotate(312deg);
    }
  }

  ul {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 20px;
    column-gap: 20px;

    @media (max-width: 992px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
    }
    li {
      position: relative;
      list-style: none;
      cursor: pointer;
      max-height: 400px;

      &:hover {
        &::before {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 5px;
          content: '';
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 10;
        }

        img {
          transform: scale(1.03);
        }

        .movie-info {
          opacity: 1;
        }
      }

      .movie-poster {
        height: 100%;
        overflow: hidden;
        border-radius: 5px;

        img {
          max-width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.2s;
          border-radius: 5px;
        }
      }

      .movie-info {
        opacity: 0;
        position: absolute;
        width: calc(100% - 20px);
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: opacity 0.2s;
        color: #fff;
        z-index: 20;
        text-align: center;

        strong {
          display: -webkit-box;
          font-weight: 600;
          margin-bottom: 10px;
          white-space: normal;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          padding: 2px 0;
          line-height: 1.2;
          font-size: 20px;
        }
      }
    }
  }
`;

export default MovieList;
