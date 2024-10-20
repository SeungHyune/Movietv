import { fetchMovieList } from '@/api/movie';
import { queryKey } from '@/constants/queryKey';
import { MovieResponse } from '@/types/movieTypes';
import { InfiniteData, QueryClient } from '@tanstack/react-query';
import { LoaderFunctionArgs } from 'react-router-dom';

interface MovieListQueryOptionType {
  queryKey: (string | number)[];
  queryFn: (params: { pageParam?: number }) => Promise<MovieResponse>;
}

export const movieListQueryOption = (
  title: string,
): MovieListQueryOptionType => ({
  queryKey: [queryKey.MOVIE_LIST, title],
  queryFn: ({ pageParam = 1 }) => fetchMovieList({ title, page: pageParam }),
});

export const movieListLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const { movieTitle = '' } = params;
    const { queryKey, queryFn } = movieListQueryOption(movieTitle);

    const cachedData =
      queryClient.getQueryData<InfiniteData<MovieResponse>>(queryKey);

    if (cachedData) {
      return cachedData;
    }

    return await queryClient.fetchInfiniteQuery({
      queryKey,
      queryFn,
      initialPageParam: 1,
    });
  };
