import { movieAtom } from '@/atoms/movie';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import MovieItem from './MovieItem';
import MovieTotalResult from './MovieTotalResult';
import { useEffect } from 'react';
import { useInfinityScroll } from '@/hooks/useInfinityScroll';

const MovieList = () => {
  const { movieTitle = '' } = useParams();
  const [movieState, setMovieState] = useRecoilState(movieAtom);
  const { movieList, page } = movieState;

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfinityScroll({
    title: movieTitle,
  });

  useEffect(() => {
    if (!data) return;
    const { pages } = data;
    const { Search, totalResults } = pages[pages.length - 1];

    if (page > pages.length) return;

    setMovieState({
      ...movieState,
      movieList: [...movieList, ...Search],
      totalResults: Number(totalResults),
      page: page + 1,
    });
  }, [data]);

  if (status === 'error') {
    return <p>Error: {error.message}</p>;
  }

  return (
    <MovieListContainer>
      <MovieTotalResult />
      <ul>
        {movieList.map((movie) => (
          <MovieItem
            key={movie.imdbID}
            movie={movie}
          />
        ))}
      </ul>
      <button
        disabled={!hasNextPage || isFetchingNextPage}
        type='button'
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage
          ? 'Loading More...'
          : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
      </button>
    </MovieListContainer>
  );
};

const MovieListContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  ul {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 20px;
    column-gap: 20px;
    li {
      position: relative;
      list-style: none;
      cursor: pointer;
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
